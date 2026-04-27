/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Firestore 데이터 읽기/쓰기 서비스 로직 (Stats & Logs)
 */

import { db } from './config';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { UserStats, StudyLog } from '@/types/schema';

const USER_ID = "sua_user"; // 1인 플랫폼이므로 고정 ID 사용

// 1. 수아의 현재 스탯 가져오기
export const getUserStats = async (): Promise<UserStats | null> => {
  const docRef = doc(db, "users", USER_ID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data() as UserStats;
  return null;
};

// 2. 학습 결과 저장 및 스탯 업데이트
export const saveMissionResult = async (log: StudyLog) => {
  const userRef = doc(db, "users", USER_ID);
  const logRef = doc(db, "study_logs", `${USER_ID}_${Date.now()}`);

  // 학습 로그 저장
  await setDoc(logRef, {
    ...log,
    userId: USER_ID,
    solvedAt: serverTimestamp()
  });

  // 유저 스탯 업데이트 (경험치 및 누적 시간)
  // 실제 로직에서는 과목별 점수를 계산하여 업데이트합니다.
  await updateDoc(userRef, {
    totalStudyTimeMs: arrayUnion(log.timeSpentMs), // 단순 예시, 실제론 합산 로직 필요
    "stats.math": arrayUnion(5), // 성공 시 스탯 상승 로직 등 추가 예정
  });
};