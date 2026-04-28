/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 앱 전체 접근 권한(Passcode + Firebase Auth)을 제어하는 보안 래퍼 컴포넌트
 * 업데이트 내용: 로그아웃 상태 감지 시 로컬 스토리지 데이터(resetAllData) 즉시 파기 로직 추가
 */

'use client';

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, loginWithGoogle } from '@/lib/firebase/service';
import { useProgressStore } from '@/store/useProgressStore';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  
  const { user, setUser, syncFromFirebase, resetAllData } = useProgressStore();

  useEffect(() => {
    const unlocked = localStorage.getItem('sua_unlocked') === 'true';
    setIsUnlocked(unlocked);

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser({ 
          uid: currentUser.uid, 
          displayName: currentUser.displayName, 
          email: currentUser.email 
        });
        await syncFromFirebase(currentUser.uid);
      } else {
        setUser(null);
        // ✅ 로그아웃 시점에 기기에 저장된 이전 사용자의 모든 로컬 데이터 파기
        resetAllData();
      }
      setIsAuthLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, syncFromFirebase, resetAllData]);

  const handlePasscode = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '0804') {
      localStorage.setItem('sua_unlocked', 'true');
      setIsUnlocked(true);
    } else {
      alert('접근 권한이 없습니다. (비밀번호 오류)');
      setPasscode('');
    }
  };

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error: any) {
      console.error("[Auth Error]", error);
      alert(`구글 로그인 실패:\n${error.code}\n${error.message}`);
    }
  };

  if (isAuthLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center space-y-4 bg-gray-900">
        <div className="text-white font-black text-xl animate-pulse">SYSTEM LOADING...</div>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900 px-5 text-center">
        <div className="text-6xl mb-6">🔒</div>
        <h1 className="text-2xl font-black text-white mb-2">Project Sua</h1>
        <p className="text-gray-400 text-xs mb-8">수아 전용 학습 플랫폼입니다.<br/>접근 암호를 입력하세요.</p>
        <form onSubmit={handlePasscode} className="w-full max-w-xs space-y-4">
          <input 
            type="password" 
            value={passcode} 
            onChange={e => setPasscode(e.target.value)} 
            placeholder="비밀번호 4자리" 
            className="w-full bg-gray-800 text-white border border-gray-700 p-4 rounded-xl text-center text-xl font-bold tracking-widest focus:outline-none focus:border-blue-500 transition-colors" 
            maxLength={4} 
            required
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-colors">
            잠금 해제
          </button>
        </form>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-5 text-center">
        <div className="text-6xl mb-6">🚀</div>
        <h1 className="text-2xl font-black text-gray-900 mb-2">인증이 필요합니다</h1>
        <p className="text-gray-500 text-xs mb-8 font-medium">데이터 동기화 및 백업을 위해<br/>구글 계정으로 로그인해 주세요.</p>
        <button 
          onClick={handleLogin} 
          className="w-full max-w-xs bg-white border border-gray-200 text-gray-900 font-black py-4 rounded-xl shadow-sm flex items-center justify-center space-x-3 active:scale-[0.98] transition-all hover:bg-gray-50"
        >
          <span className="text-xl">G</span>
          <span>구글 계정으로 시작하기</span>
        </button>
      </div>
    );
  }

  return <>{children}</>;
}