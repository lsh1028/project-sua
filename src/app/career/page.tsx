/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 수아의 진로(전직) 선택 및 스탯 가이드 뷰어
 */

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateCareerPath } from '@/lib/firebase/service';

const CAREER_LIST = [
  { id: 'management', name: '경영/경제 계열', icon: '💼', desc: '수리적 사고와 데이터 분석이 핵심인 클래스', mainStat: '수학' },
  { id: 'humanities', name: '인문/어문 계열', icon: '📜', desc: '언어적 감수성과 비판적 사고가 핵심인 클래스', mainStat: '언어' },
  { id: 'engineering', name: '이공/공학 계열', icon: '🧪', desc: '논리적 문제 해결과 탐구력이 핵심인 클래스', mainStat: '수학/과학' },
  { id: 'art', name: '예술/체육 계열', icon: '🎨', desc: '창의성과 표현력이 핵심인 클래스', mainStat: '실기/기능' },
];

export default function CareerPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSelect = async (path: string) => {
    setLoading(true);
    try {
      await updateCareerPath(path);
      alert(`${path} 계열로 전직이 완료되었습니다!`);
      router.push('/'); // 대시보드로 복귀
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 space-y-6">
      <header className="py-4">
        <h1 className="text-2xl font-black text-gray-900">전직 클래스 선택</h1>
        <p className="text-sm text-gray-500 mt-1">지망하는 계열에 따라 집중 학습 퀘스트가 변경됩니다.</p>
      </header>

      <div className="grid gap-4">
        {CAREER_LIST.map((career) => (
          <button
            key={career.id}
            onClick={() => handleSelect(career.name)}
            disabled={loading}
            className="w-full text-left bg-white p-5 rounded-2xl border-2 border-gray-100 hover:border-blue-500 transition-all active:scale-[0.98] group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{career.icon}</span>
                <div>
                  <h2 className="font-bold text-gray-800 group-hover:text-blue-600">{career.name}</h2>
                  <p className="text-xs text-gray-400 mt-1">{career.desc}</p>
                </div>
              </div>
              <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2 py-1 rounded">
                주요스탯: {career.mainStat}
              </span>
            </div>
          </button>
        ))}
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl text-xs text-gray-500 leading-relaxed">
        <strong>💡 작은아빠의 조언:</strong> 전직은 언제든 바꿀 수 있지만, 한 분야를 꾸준히 파고드는 것이 스탯 관리에 유리해!
      </div>
    </div>
  );
}