/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Firebase Authentication(구글 로그인) 및 uid 기반 Firestore 데이터 통신 서비스
 * 업데이트 내용: 
 * 1. 구글 로그인 및 로그아웃 기능 추가
 * 2. 하드코딩된 USER_ID 제거 및 uid 기반 데이터 입출력으로 개편
 * 3. 통합 상태 저장을 위한 saveUserData 추가 및 불필요한 레벨(level) 로직 제거
 */

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { UserStats, StudyLog } from '@/types/question'; // 기존 타입 임포트 유지

// Firebase 설정 (환경변수 권장, 여기서는 하드코딩 유지)
const firebaseConfig = {
  apiKey: "AIzaSyAyP-HqeJ6JHLbf33mO4tVOKxXyYnuXTFY",
  authDomain: "project-sua.firebaseapp.com",
  projectId: "project-sua",
  storageBucket: "project-sua.firebasestorage.app",
  messagingSenderId: "61150429920",
  appId: "1:61150429920:web:aa51ecba389a9d93f44685"
};

// 앱 중복 초기화 방지 및 객체 엑스포트
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// --- [인증(Auth) 관련 로직] ---

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("[Firebase] 로그인 실패:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  await signOut(auth);
};

// --- [데이터베이스(Firestore) 관련 로직] ---

// 1. 유저 통계 가져오기 (uid 기반)
export const getUserStats = async (uid: string): Promise<UserStats | null> => {
  if (!uid) return null;
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data() as UserStats;
  return null;
};

// 2. 유저의 학습 진행도, 오답, 출석 기록 등을 병합 저장
export const saveUserData = async (uid: string, data: any) => {
  if (!uid) return;
  const docRef = doc(db, "users", uid);
  await setDoc(docRef, data, { merge: true });
};

// 3. 미션 결과 로그 기록 (uid 기반)
export const saveMissionResult = async (uid: string, log: StudyLog) => {
  if (!uid) return;
  const logRef = doc(db, "study_logs", `${uid}_${Date.now()}`);
  await setDoc(logRef, {
    ...log,
    userId: uid,
    solvedAt: serverTimestamp()
  });
};

// 4. 수아의 미래 꿈(목표) 업데이트 (uid 기반, 레벨 배제)
export const updateCareerPath = async (uid: string, path: string) => {
  if (!uid) return;
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, {
    careerPath: path,
    // level: 15 <- 의미 없는 레벨 하드코딩 제거됨
  }, { merge: true });
};