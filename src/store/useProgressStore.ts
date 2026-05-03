/**
 * 작성일: 2026-05-03
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Firebase Auth 기반 계정 상태 관리, 연속 출석(Streak) 자동 계산 및 꿈(Career) 데이터가 통합된 전역 스토어
 * 업데이트 내용: 
 * 1. similarQuestionRequests 데이터의 Firestore 서버 동기화 로직(saveUserData) 추가
 * 2. syncFromFirebase 실행 시 서버의 유사 문제 요청 내역을 로컬로 불러오도록 수정
 * 3. [신규] setUser 실행 시 로그인된 사용자의 이메일과 닉네임을 Firestore에 병합 저장
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { saveUserData, getUserStats, saveMissionResult } from '@/lib/firebase/service';

interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
}

interface ProgressState {
  user: UserProfile | null;
  streak: number;
  lastLoginDate: string | null;
  
  careerPath: string | null;
  isPasswordEnabled: boolean;

  progress: Record<string, number>;
  wrongAnswers: Record<string, string[]>;
  userSelections: Record<string, Record<number, any>>;
  similarQuestionRequests: Record<string, string[]>;

  setUser: (user: UserProfile | null) => void;
  syncFromFirebase: (uid: string) => Promise<void>;
  checkAndCalculateStreak: (uid: string) => Promise<void>;
  
  setCareerPath: (path: string) => void;
  setPasswordEnabled: (enabled: boolean) => void;

  updateProgress: (unitId: string, currentSolvedIndex: number) => Promise<void>;
  saveUserSelection: (unitId: string, questionIdx: number, selection: any) => void;
  recordWrongAnswers: (unitId: string, wrongIds: string[]) => Promise<void>;
  resolveWrongAnswer: (unitId: string, questionId: string) => Promise<void>;
  
  // ✅ 서버 비동기 통신을 위해 Promise 반환 타입으로 변경
  requestSimilarQuestion: (unitId: string, questionId: string) => Promise<void>;
  removeSimilarQuestionRequest: (unitId: string, questionId: string) => Promise<void>;
  
  clearUnitData: (unitId: string) => void;
  resetAllData: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      user: null,
      streak: 0,
      lastLoginDate: null,
      careerPath: null, 
      isPasswordEnabled: true, 
      progress: {},
      wrongAnswers: {},
      userSelections: {},
      similarQuestionRequests: {},

      // ✅ [업데이트됨] 유저 정보가 세팅될 때 Firestore에 이메일 정보 병합 저장
      setUser: (user) => {
        set({ user });
        if (user && user.uid) {
          saveUserData(user.uid, {
            email: user.email,
            displayName: user.displayName
          }).catch(err => console.error("[Store] 유저 정보 저장 실패:", err));
        }
      },

      setCareerPath: (path) => set({ careerPath: path }),

      setPasswordEnabled: (enabled) => set({ isPasswordEnabled: enabled }),

      syncFromFirebase: async (uid) => {
        try {
          const remoteData = await getUserStats(uid);
          if (remoteData) {
            set({ 
              progress: remoteData.unitProgress || {},
              wrongAnswers: remoteData.wrongAnswers || {},
              // ✅ 서버 Firestore에 저장된 유사 문제 요청 내역 동기화
              similarQuestionRequests: remoteData.similarQuestionRequests || {},
              streak: remoteData.streak || 0,
              lastLoginDate: remoteData.lastLoginDate || null,
              careerPath: remoteData.careerPath || null
            });
          } else {
            get().resetAllData();
          }
          await get().checkAndCalculateStreak(uid);
        } catch (error) {
          console.error("[Store] 데이터 동기화 실패:", error);
        }
      },

      checkAndCalculateStreak: async (uid) => {
        const todayStr = new Date().toISOString().split('T')[0];
        const lastLogin = get().lastLoginDate;
        let currentStreak = get().streak;

        if (lastLogin !== todayStr) {
          if (lastLogin) {
            const lastDate = new Date(lastLogin);
            const todayDate = new Date(todayStr);
            const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) currentStreak += 1;
            else if (diffDays > 1) currentStreak = 1;
          } else {
            currentStreak = 1;
          }

          set({ streak: currentStreak, lastLoginDate: todayStr });
          await saveUserData(uid, { streak: currentStreak, lastLoginDate: todayStr });
        }
      },

      updateProgress: async (unitId, currentSolvedIndex) => {
        const currentSaved = get().progress[unitId] || 0;
        
        if (currentSolvedIndex > currentSaved) {
          set((state) => ({ progress: { ...state.progress, [unitId]: currentSolvedIndex } }));
          const { user, progress, wrongAnswers } = get();
          if (user) {
            await saveUserData(user.uid, { unitProgress: progress, wrongAnswers });
            await saveMissionResult(user.uid, {
              unitId,
              solvedCount: currentSolvedIndex,
              solvedAt: new Date(),
              wrongQuestionIds: get().wrongAnswers[unitId] || [] 
            });
          }
        }
      },

      saveUserSelection: (unitId, questionIdx, selection) => {
        set((state) => ({
          userSelections: {
            ...state.userSelections,
            [unitId]: { ...(state.userSelections[unitId] || {}), [questionIdx]: selection }
          }
        }));
      },

      recordWrongAnswers: async (unitId, wrongIds) => {
        const updatedWrongs = Array.from(new Set([...(get().wrongAnswers[unitId] || []), ...wrongIds]));
        set((state) => ({ wrongAnswers: { ...state.wrongAnswers, [unitId]: updatedWrongs } }));
        const { user, progress, wrongAnswers } = get();
        if (user) await saveUserData(user.uid, { unitProgress: progress, wrongAnswers });
      },

      resolveWrongAnswer: async (unitId, questionId) => {
        const updatedWrongs = (get().wrongAnswers[unitId] || []).filter(id => id !== questionId);
        set((state) => ({ wrongAnswers: { ...state.wrongAnswers, [unitId]: updatedWrongs } }));
        const { user, progress, wrongAnswers } = get();
        if (user) await saveUserData(user.uid, { unitProgress: progress, wrongAnswers });
      },

      // ✅ 로컬 상태 업데이트 후 Firebase DB와 동기화 수행
      requestSimilarQuestion: async (unitId, questionId) => {
        set((state) => ({
          similarQuestionRequests: {
            ...state.similarQuestionRequests,
            [unitId]: Array.from(new Set([...(state.similarQuestionRequests[unitId] || []), questionId]))
          }
        }));

        const { user, progress, wrongAnswers, similarQuestionRequests } = get();
        if (user) {
          await saveUserData(user.uid, { 
            unitProgress: progress, 
            wrongAnswers, 
            similarQuestionRequests 
          });
        }
      },

      // ✅ 로컬 상태 삭제 후 Firebase DB와 동기화 수행
      removeSimilarQuestionRequest: async (unitId, questionId) => {
        set((state) => {
          const currentRequests = state.similarQuestionRequests[unitId] || [];
          return {
            similarQuestionRequests: {
              ...state.similarQuestionRequests,
              [unitId]: currentRequests.filter(id => id !== questionId)
            }
          };
        });

        const { user, progress, wrongAnswers, similarQuestionRequests } = get();
        if (user) {
          await saveUserData(user.uid, { 
            unitProgress: progress, 
            wrongAnswers, 
            similarQuestionRequests 
          });
        }
      },

      clearUnitData: (unitId) => {
        set((state) => {
          const newProgress = { ...state.progress };
          const newWrongs = { ...state.wrongAnswers };
          const newSelections = { ...state.userSelections };
          const newRequests = { ...state.similarQuestionRequests };
          
          delete newProgress[unitId];
          delete newWrongs[unitId];
          delete newSelections[unitId];
          delete newRequests[unitId];

          return { progress: newProgress, wrongAnswers: newWrongs, userSelections: newSelections, similarQuestionRequests: newRequests };
        });
      },

      resetAllData: () => {
        set({
          progress: {},
          wrongAnswers: {},
          userSelections: {},
          similarQuestionRequests: {},
          streak: 0,
          lastLoginDate: null,
          careerPath: null, 
          isPasswordEnabled: true 
        });
      }
    }),
    { 
      name: 'sua-study-progress',
    }
  )
);