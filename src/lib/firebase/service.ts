/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Firestore 데이터 안정화 및 목표 설정 로직 (Set/Merge 도입)
 */

import { db } from './config';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { UserStats, StudyLog } from '@/types/schema';

const USER_ID = "sua_user";

export const getUserStats = async (): Promise<UserStats | null> => {
  const docRef = doc(db, "users", USER_ID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data() as UserStats;
  return null;
};

export const saveMissionResult = async (log: StudyLog) => {
  const logRef = doc(db, "study_logs", `${USER_ID}_${Date.now()}`);
  await setDoc(logRef, {
    ...log,
    userId: USER_ID,
    solvedAt: serverTimestamp()
  });
};

/**
 * 수아의 미래 꿈(목표) 업데이트
 * 문서가 없으면 생성하고, 있으면 기존 데이터와 병합(Merge)합니다.
 */
export const updateCareerPath = async (path: string) => {
  const userRef = doc(db, "users", USER_ID);
  await setDoc(userRef, {
    careerPath: path,
    level: 15,
    stats: { math: 10, language: 10, english: 10 } // 초기 기본값
  }, { merge: true });
};