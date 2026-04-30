/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Firebase Auth 기반 계정 상태 관리, 연속 출석(Streak) 자동 계산 및 꿈(Career) 데이터가 통합된 전역 스토어
 * 업데이트 내용: 
 * 1. careerPath 상태 필드 추가 및 setCareerPath 액션 구현
 * 2. syncFromFirebase 내 Firestore 데이터(careerPath) 동기화 로직 추가
 * 3. resetAllData 호출 시 꿈 데이터도 함께 파기되도록 수정
 * 4. 입장 암호(isPasswordEnabled) 상태 및 토글 액션 추가
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
  
  // ✅ 신규: 수아의 꿈(목표) 데이터 상태
  careerPath: string | null;

  // ✅ 신규: 입장 암호(0804) 활성화 여부
  isPasswordEnabled: boolean;

  progress: Record<string, number>;
  wrongAnswers: Record<string, string[]>;
  userSelections: Record<string, Record<number, any>>;
  similarQuestionRequests: Record<string, string[]>;

  setUser: (user: UserProfile | null) => void;
  syncFromFirebase: (uid: string) => Promise<void>;
  checkAndCalculateStreak: (uid: string) => Promise<void>;
  
  // ✅ 신규: 꿈 설정 액션 (UI 실시간 업데이트용)
  setCareerPath: (path: string) => void;

  // ✅ 신규: 입장 암호 설정 액션
  setPasswordEnabled: (enabled: boolean) => void;

  updateProgress: (unitId: string, currentSolvedIndex: number) => Promise<void>;
  saveUserSelection: (unitId: string, questionIdx: number, selection: any) => void;
  recordWrongAnswers: (unitId: string, wrongIds: string[]) => Promise<void>;
  resolveWrongAnswer: (unitId: string, questionId: string) => Promise<void>;
  requestSimilarQuestion: (unitId: string, questionId: string) => void;
  removeSimilarQuestionRequest: (unitId: string, questionId: string) => void;
  clearUnitData: (unitId: string) => void;
  
  resetAllData: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      user: null,
      streak: 0,
      lastLoginDate: null,
      careerPath: null, // 초기값 설정
      isPasswordEnabled: true, // ✅ 신규: 초기 상태는 암호 사용으로 설정
      progress: {},
      wrongAnswers: {},
      userSelections: {},
      similarQuestionRequests: {},

      setUser: (user) => set({ user }),

      // ✅ 신규: 로컬 상태의 꿈 데이터를 즉시 변경
      setCareerPath: (path) => set({ careerPath: path }),

      // ✅ 신규: 입장 암호 사용 여부 변경 액션
      setPasswordEnabled: (enabled) => set({ isPasswordEnabled: enabled }),

      syncFromFirebase: async (uid) => {
        try {
          const remoteData = await getUserStats(uid);
          if (remoteData) {
            set({ 
              progress: remoteData.unitProgress || {},
              wrongAnswers: remoteData.wrongAnswers || {},
              streak: remoteData.streak || 0,
              lastLoginDate: remoteData.lastLoginDate || null,
              // ✅ 서버 Firestore에 저장된 꿈 데이터 동기화
              careerPath: remoteData.careerPath || null
            });
          } else {
            // 서버에 데이터가 없는 신규 계정 접속 시, 기기에 남은 타인의 로컬 데이터를 파기
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

      requestSimilarQuestion: (unitId, questionId) => {
        set((state) => ({
          similarQuestionRequests: {
            ...state.similarQuestionRequests,
            [unitId]: Array.from(new Set([...(state.similarQuestionRequests[unitId] || []), questionId]))
          }
        }));
      },

      removeSimilarQuestionRequest: (unitId, questionId) => {
        set((state) => {
          const currentRequests = state.similarQuestionRequests[unitId] || [];
          return {
            similarQuestionRequests: {
              ...state.similarQuestionRequests,
              [unitId]: currentRequests.filter(id => id !== questionId)
            }
          };
        });
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

      // 모든 로컬 데이터 강제 초기화 (로그아웃 및 신규 계정용)
      resetAllData: () => {
        set({
          progress: {},
          wrongAnswers: {},
          userSelections: {},
          similarQuestionRequests: {},
          streak: 0,
          lastLoginDate: null,
          careerPath: null, // ✅ 꿈 데이터도 함께 초기화
          isPasswordEnabled: true // ✅ 계정 리셋 시 암호 상태도 기본값으로 복구
        });
      }
    }),
    { 
      name: 'sua-study-progress',
    }
  )
);