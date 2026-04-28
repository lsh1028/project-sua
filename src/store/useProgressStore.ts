/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Firebase Auth 기반 계정 상태 관리, 연속 출석(Streak) 자동 계산 및 학습 진행도 통합 스토어
 * 업데이트 내용: 계정 전환 시 로컬 데이터 교차 오염을 방지하기 위한 resetAllData 강제 파기 로직 추가
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

  progress: Record<string, number>;
  wrongAnswers: Record<string, string[]>;
  userSelections: Record<string, Record<number, any>>;
  similarProblemRequests: Record<string, string[]>;

  setUser: (user: UserProfile | null) => void;
  syncFromFirebase: (uid: string) => Promise<void>;
  checkAndCalculateStreak: (uid: string) => Promise<void>;

  updateProgress: (unitId: string, currentSolvedIndex: number) => Promise<void>;
  saveUserSelection: (unitId: string, questionIdx: number, selection: any) => void;
  recordWrongAnswers: (unitId: string, wrongIds: string[]) => Promise<void>;
  resolveWrongAnswer: (unitId: string, problemId: string) => Promise<void>;
  requestSimilarProblem: (unitId: string, problemId: string) => void;
  removeSimilarProblemRequest: (unitId: string, problemId: string) => void;
  clearUnitData: (unitId: string) => void;
  
  // ✅ 신규: 모든 로컬 데이터 강제 초기화 (로그아웃 및 신규 계정용)
  resetAllData: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      user: null,
      streak: 0,
      lastLoginDate: null,
      progress: {},
      wrongAnswers: {},
      userSelections: {},
      similarProblemRequests: {},

      setUser: (user) => set({ user }),

      syncFromFirebase: async (uid) => {
        try {
          const remoteData = await getUserStats(uid);
          if (remoteData) {
            set({ 
              progress: remoteData.unitProgress || {},
              wrongAnswers: remoteData.wrongAnswers || {},
              streak: remoteData.streak || 0,
              lastLoginDate: remoteData.lastLoginDate || null
            });
          } else {
            // ✅ 서버에 데이터가 없는 신규 계정 접속 시, 기기에 남은 타인의 로컬 데이터를 파기
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

      resolveWrongAnswer: async (unitId, problemId) => {
        const updatedWrongs = (get().wrongAnswers[unitId] || []).filter(id => id !== problemId);
        set((state) => ({ wrongAnswers: { ...state.wrongAnswers, [unitId]: updatedWrongs } }));
        const { user, progress, wrongAnswers } = get();
        if (user) await saveUserData(user.uid, { unitProgress: progress, wrongAnswers });
      },

      requestSimilarProblem: (unitId, problemId) => {
        set((state) => ({
          similarProblemRequests: {
            ...state.similarProblemRequests,
            [unitId]: Array.from(new Set([...(state.similarProblemRequests[unitId] || []), problemId]))
          }
        }));
      },

      removeSimilarProblemRequest: (unitId, problemId) => {
        set((state) => {
          const currentRequests = state.similarProblemRequests[unitId] || [];
          return {
            similarProblemRequests: {
              ...state.similarProblemRequests,
              [unitId]: currentRequests.filter(id => id !== problemId)
            }
          };
        });
      },

      clearUnitData: (unitId) => {
        set((state) => {
          const newProgress = { ...state.progress };
          const newWrongs = { ...state.wrongAnswers };
          const newSelections = { ...state.userSelections };
          const newRequests = { ...state.similarProblemRequests };
          
          delete newProgress[unitId];
          delete newWrongs[unitId];
          delete newSelections[unitId];
          delete newRequests[unitId];

          return { progress: newProgress, wrongAnswers: newWrongs, userSelections: newSelections, similarProblemRequests: newRequests };
        });
      },

      // ✅ 신규: 로그아웃 및 계정 전환 시 호출될 전체 데이터 파기 함수
      resetAllData: () => {
        set({
          progress: {},
          wrongAnswers: {},
          userSelections: {},
          similarProblemRequests: {},
          streak: 0,
          lastLoginDate: null
        });
      }
    }),
    { 
      name: 'sua-study-progress',
    }
  )
);