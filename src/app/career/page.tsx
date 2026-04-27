/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 수아의 미래 꿈 설정 (미정/직접 입력 기능 추가)
 */

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateCareerPath } from '@/lib/firebase/service';

const PRESET_DREAMS = [
  { id: '1', job: '아티스트/디자이너', univ: '홍익대학교', icon: '🎨', color: 'bg-pink-50' },
  { id: '2', job: '의사/생명과학자', univ: '연세대학교', icon: '경🩺', color: 'bg-blue-50' },
  { id: '3', job: '통역사/외교관', univ: '한국외국어대학교', icon: '🌐', color: 'bg-green-50' },
  { id: '4', job: 'IT 개발자/CEO', univ: '카이스트/서울대', icon: '💻', color: 'bg-indigo-50' },
];

export default function CareerPage() {
  const [loading, setLoading] = useState(false);
  const [customGoal, setCustomGoal] = useState('');
  const [showInput, setShowInput] = useState(false);
  const router = useRouter();

  const handleSelect = async (goal: string) => {
    if (!goal) return;
    setLoading(true);
    try {
      await updateCareerPath(goal);
      router.push('/');
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 pb-24 space-y-6">
      <header className="py-4 text-center">
        <h1 className="text-2xl font-black text-gray-900">어떤 미래를 꿈꾸고 있니?</h1>
        <p className="text-sm text-gray-500 mt-2">지금의 노력이 너의 멋진 꿈이 될 거야!</p>
      </header>

      <div className="grid gap-3">
        {/* 1. 아직 정하지 않음 */}
        <button
          onClick={() => handleSelect('미정 (탐색 중)')}
          disabled={loading}
          className="w-full text-left p-5 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 hover:border-blue-300 transition-all active:scale-[0.98]"
        >
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🤔</span>
            <div>
              <h2 className="font-bold text-gray-600 text-lg">아직 잘 모르겠어</h2>
              <p className="text-xs text-gray-400 font-medium">공부하면서 천천히 찾아보자!</p>
            </div>
          </div>
        </button>

        {/* 2. 프리셋 목록 */}
        {PRESET_DREAMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(`${item.job} (${item.univ})`)}
            disabled={loading}
            className={`w-full text-left p-5 rounded-2xl border-2 border-transparent hover:border-blue-500 transition-all active:scale-[0.98] ${item.color}`}
          >
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{item.icon}</span>
              <div>
                <h2 className="font-bold text-gray-800 text-lg">{item.job}</h2>
                <p className="text-sm text-blue-600 font-semibold italic">{item.univ} 지망</p>
              </div>
            </div>
          </button>
        ))}

        {/* 3. 직접 입력하기 */}
        <div className={`p-5 rounded-2xl border-2 transition-all ${showInput ? 'border-blue-500 bg-white' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`}>
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
                  placeholder="예: 요리사, 운동선수, 회계사..."
                  className="w-full bg-transparent border-b-2 border-blue-200 focus:border-blue-500 outline-none font-bold text-lg p-1"
                  autoFocus
                />
              </div>
              <p className="text-[10px] text-gray-400 leading-tight">
                추천: 회계사, 회사원, 관광 가이드, 수의사, 요리사, 운동선수, 웹툰 작가 등
              </p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setShowInput(false)}
                  className="flex-1 py-2 bg-gray-100 text-gray-500 rounded-lg font-bold text-sm"
                >
                  취소
                </button>
                <button 
                  onClick={() => handleSelect(customGoal)}
                  disabled={!customGoal || loading}
                  className="flex-[2] py-2 bg-blue-600 text-white rounded-lg font-bold text-sm disabled:bg-blue-300"
                >
                  목표로 설정하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}