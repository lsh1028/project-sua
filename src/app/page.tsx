/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Firebase 실시간 데이터 바인딩 및 전직 시스템 연결이 적용된 대시보드
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getUserStats } from '@/lib/firebase/service';
import { UserStats } from '@/types/schema';

export default function Dashboard() {
  // 수아의 학습 데이터를 관리하는 상태
  const [userData, setUserData] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 DB에서 수아의 최신 스탯을 가져옴
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getUserStats();
        if (data) {
          setUserData(data);
        }
      } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // 데이터가 로드되기 전이나 실패했을 때 사용할 기본값 정의
  const stats = userData?.stats || { math: 0, language: 0, english: 0 };
  const currentLevel = userData?.level || 15;
  const career = userData?.careerPath || '경영/경제 계열 진학';

  return (
    <div className="p-5 space-y-6">
      {/* 1. 상단 프로필 및 스탯 영역 */}
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-black text-gray-900">
              Lv. {loading ? '--' : currentLevel} 수아
            </h1>
            
            {/* [Step 11 반영] 목표 클릭 시 전직 선택 페이지(/career)로 이동 */}
            <Link href="/career" className="inline-block group">
              <p className="text-sm text-blue-600 font-bold mt-1 group-hover:underline flex items-center">
                목표: {career} <span className="ml-1 text-xs text-blue-400 group-hover:rotate-90 transition-transform">⚙️</span>
              </p>
            </Link>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
            🎓
          </div>
        </div>
        
        {/* 실시간 DB 연동 스탯바 */}
        <div className="space-y-3 mt-4">
          <div>
            <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
              <span>수리 (Math)</span>
              <span>{stats.math}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${stats.math}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
              <span>언어 (Korean)</span>
              <span>{stats.language}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${stats.language}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bento Grid 메뉴 영역 */}
      <section className="grid grid-cols-2 gap-4">
        {/* 오늘의 미션 */}
        <Link href="/mission" className="col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-md active:scale-[0.98] transition-transform">
          <div className="text-3xl mb-2">🔥</div>
          <h2 className="text-xl font-bold mb-1">오늘의 미션</h2>
          <p className="text-blue-100 text-sm">기초 복구 데일리 팩 (15분)</p>
        </Link>

        {/* 오답 노트 */}
        <Link href="#" className="bg-red-50 rounded-2xl p-5 border border-red-100 active:scale-[0.98] transition-transform">
          <div className="text-2xl mb-2">🚨</div>
          <h2 className="font-bold text-gray-800">취약점 노트</h2>
          <p className="text-xs text-gray-500 mt-1">다시 풀어야 할 문항</p>
        </Link>

        {/* 학습 기록 */}
        <Link href="#" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 active:scale-[0.98] transition-transform">
          <div className="text-2xl mb-2">📈</div>
          <h2 className="font-bold text-gray-800">학습 로그</h2>
          <p className="text-xs text-gray-500 mt-1">누적 학습 데이터 확인</p>
        </Link>

        {/* 진학 전략 (전략 탭으로 이동) */}
        <Link href="/strategy" className="col-span-2 bg-white rounded-2xl p-5 border border-gray-200 flex justify-between items-center active:scale-[0.98] transition-transform shadow-sm">
          <div>
            <h2 className="font-bold text-gray-800">고입/대입 진학 전략 가이드</h2>
            <p className="text-xs text-gray-500 mt-1">작은아빠의 3등급 입시 분석 자료</p>
          </div>
          <div className="text-2xl">🗺️</div>
        </Link>
      </section>
    </div>
  );
}