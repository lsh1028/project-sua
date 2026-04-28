/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 수아의 미래 꿈 설정 (미정/직접 입력 기능 포함)
 * 업데이트 내용: 
 * 1. Firebase Auth uid 연동을 통한 데이터 저장 오류(Expected 2 arguments) 수정
 * 2. 전역 스토어(setCareerPath) 연동을 통해 홈 화면 UI 즉시 동기화 로직 추가
 */

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateCareerPath } from '@/lib/firebase/service';
import { useProgressStore } from '@/store/useProgressStore';

const PRESET_DREAMS = [
  { id: '1', job: '아티스트/디자이너', univ: '홍익대학교', icon: '🎨', color: 'bg-pink-50' },
  { id: '2', job: '의사/생명과학자', univ: '연세대학교', icon: '🩺', color: 'bg-blue-50' },
  { id: '3', job: '통역사/외교관', univ: '한국외국어대학교', icon: '🌐', color: 'bg-green-50' },
  { id: '4', job: 'IT 개발자/CEO', univ: '카이스트/서울대', icon: '💻', color: 'bg-indigo-50' },
];

export default function CareerPage() {
  const [loading, setLoading] = useState(false);
  const [customGoal, setCustomGoal] = useState('');
  const [showInput, setShowInput] = useState(false);
  const router = useRouter();

  // 스토어에서 현재 유저 정보 및 UI 동기화용 액션 추출
  const { user, setCareerPath } = useProgressStore();

  /**
   * 선택하거나 입력한 목표를 Firebase와 전역 스토어에 저장
   * @param goal 저장할 꿈/목표 문자열
   */
  const handleSelect = async (goal: string) => {
    if (!goal || !goal.trim()) return;
    
    // 유저 정보 미존재 시 차단 (AuthGuard에 의해 이론적으로 발생 불가하나 방어 코드 추가)
    if (!user) {
      alert('인증 정보가 만료되었습니다. 다시 로그인해 주세요.');
      return;
    }

    setLoading(true);
    try {
      // 1단계: Firebase Firestore에 uid 기반으로 목표 저장 (기존 1인자 에러 해결)
      await updateCareerPath(user.uid, goal);
      
      // 2단계: 홈 화면 대시보드에 즉시 반영되도록 전역 스토어 상태 업데이트
      setCareerPath(goal);
      
      // 3단계: 홈 화면으로 이동
      router.push('/');
    } catch (e) {
      console.error("[Career] 데이터 저장 실패:", e);
      alert('목표 저장 중 오류가 발생했습니다. 네트워크 상태를 확인하세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 pb-24 space-y-6">
      <header className="py-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">어떤 미래를 꿈꾸고 있니?</h1>
        <p className="text-sm text-gray-500 mt-2 font-medium">지금의 노력이 너의 멋진 꿈이 될 거야!</p>
      </header>

      <div className="grid gap-3">
        {/* 유형 1: 탐색 모드 (미정) */}
        <button
          onClick={() => handleSelect('미정 (탐색 중)')}
          disabled={loading}
          className="w-full text-left p-5 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 hover:border-blue-300 transition-all active:scale-[0.98] disabled:opacity-50"
        >
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🤔</span>
            <div>
              <h2 className="font-bold text-gray-600 text-lg">아직 잘 모르겠어</h2>
              <p className="text-xs text-gray-400 font-black tracking-widest uppercase">Explore Future</p>
            </div>
          </div>
        </button>

        {/* 유형 2: 프리셋 목록 (주요 지망 직업군) */}
        {PRESET_DREAMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(`${item.job} (${item.univ})`)}
            disabled={loading}
            className={`w-full text-left p-5 rounded-2xl border-2 border-transparent hover:border-blue-500 transition-all active:scale-[0.98] disabled:opacity-50 ${item.color}`}
          >
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h2 className="font-bold text-gray-800 text-lg">{item.job}</h2>
                <p className="text-sm text-blue-600 font-black italic">{item.univ} 지망</p>
              </div>
            </div>
          </button>
        ))}

        {/* 유형 3: 직접 입력 (커스텀 목표) */}
        <div className={`p-5 rounded-2xl border-2 transition-all ${showInput ? 'border-blue-500 bg-white shadow-md' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`}>
          {!showInput ? (
            <button 
              onClick={() => setShowInput(true)}
              className="w-full text-left flex items-center space-x-4"
            >
              <span className="text-4xl">✍️</span>
              <span className="font-bold text-gray-700 text-lg">나만의 꿈 적기</span>
            </button>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✍️</span>
                <input 
                  type="text" 
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  placeholder="예: 요리사, 수의사, 웹툰 작가 등"
                  className="w-full bg-transparent border-b-2 border-blue-200 focus:border-blue-500 outline-none font-bold text-lg p-1 text-gray-800"
                  autoFocus
                />
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setShowInput(false)}
                  className="flex-1 py-3 bg-gray-200 text-gray-500 rounded-xl font-black text-xs"
                >
                  취소
                </button>
                <button 
                  onClick={() => handleSelect(customGoal)}
                  disabled={!customGoal.trim() || loading}
                  className="flex-[2] py-3 bg-blue-600 text-white rounded-xl font-black text-xs disabled:bg-blue-300"
                >
                  {loading ? '기록 중...' : '목표로 설정하기'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* 가이드 문구 섹션 */}
      <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
        <p className="text-[11px] text-blue-700 leading-relaxed font-bold">
          ※ 수아야, 네가 설정한 이 꿈은 단순한 글자가 아니야. <br/>
          작은아빠가 이 목표에 도달하기 위해 필요한 전용 퀘스트를 설계할 때 가장 중요한 지표로 쓰일 거야.
        </p>
      </div>
    </div>
  );
}