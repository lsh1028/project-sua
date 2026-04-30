/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 꿈 설정 및 입장 암호 토글 기능이 포함된 통합 대시보드
 * 업데이트 내용: 
 * 1. 로그아웃 옆 '입장 암호(0804) 사용' 토글 UI 추가
 * 2. useProgressStore의 isPasswordEnabled 상태 연동
 * 3. [수정] 상단 프로필 영역 겹침 현상 해결을 위해 스위치 그룹을 독립된 열로 분리
 * 4. [수정] 영어 과목(ENG)의 QUEST_SEQUENCE를 논리적 학습 흐름에 맞게 재배열 (관계사 -> 분사 -> 구문 확장)
 */

'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useProgressStore } from '@/store/useProgressStore';
import { logoutUser } from '@/lib/firebase/service';

const QUEST_SEQUENCE = {
  MATH: [
    { id: 'm1-1', title: '소인수분해', bundle: 'A. 연산의 계보', total: 15 },
    { id: 'm1-2', title: '정수와 유리수', bundle: 'A. 연산의 계보', total: 25 },
    { id: 'm2-1', title: '유리수와 순환소수', bundle: 'A. 연산의 계보', total: 15 },
    { id: 'm2-2', title: '식의 계산 (다항식)', bundle: 'A. 연산의 계보', total: 40 },
    { id: 'm3-1', title: '제곱근과 실수', bundle: 'A. 연산의 계보', total: 40 },
    { id: 'm3-2', title: '다항식의 곱셈과 인수분해', bundle: 'A. 연산의 계보', total: 60 },
    { id: 'm1-3', title: '문자와 식', bundle: 'B. 방정식의 흐름', total: 30 },
  ],
  ENG: [
    { id: 'e1-1', title: '문장의 성분과 5형식', bundle: 'A. 문장 구조', total: 35 },
    { id: 'e1-2', title: '시제 (현재/과거/진행)', bundle: 'B. 시제와 조동사', total: 25 },
    { id: 'e1-3', title: '조동사', bundle: 'B. 시제와 조동사', total: 20 },
    { id: 'e2-3', title: '현재완료 시제', bundle: 'B. 시제와 조동사', total: 30 },
    { id: 'e2-1', title: 'to부정사', bundle: 'C. 준동사 핵심', total: 35 },
    { id: 'e2-2', title: '동명사', bundle: 'C. 준동사 핵심', total: 25 }, // 준동사 흐름 보강
    { id: 'e3-1', title: '분사 (현재/과거분사)', bundle: 'C. 준동사 핵심', total: 35 }, // 1학기 기말 대비
    { id: 'e2-6', title: '관계대명사 기초', bundle: 'D. 관계사 완성', total: 40 }, // 1학기 기말 선행
    { id: 'e3-2', title: '관계사 심화 (What/부사)', bundle: 'D. 관계사 완성', total: 45 }, // 1학기 기말 대비
    { id: 'e2-4', title: '수동태', bundle: 'E. 구문 확장', total: 25 }, // 2학기 진도 대비
    { id: 'e3-3', title: '접속사와 일치', bundle: 'E. 구문 확장', total: 25 }, // 2학기 진도 대비
  ],
  KOR: [
    { id: 'k1-1', title: '단어의 갈래 (품사)', bundle: 'A. 기초 문법', total: 20 },
    { id: 'k2-1', title: '문장의 짜임과 성분', bundle: 'A. 기초 문법', total: 30 },
    { id: 'k3-1', title: '한글 창제 원리와 가치', bundle: 'A. 기초 문법', total: 15 },
    { id: 'k3-2', title: '음운의 체계와 변동', bundle: 'A. 기초 문법', total: 30 },
    { id: 'k1-2', title: '언어의 본질과 어휘', bundle: 'B. 문해력과 독해', total: 30 },
  ]
};

export default function Dashboard() {
  const { progress, user, streak, careerPath, isPasswordEnabled, setPasswordEnabled } = useProgressStore();

  const { mathPct, engPct, korPct } = useMemo(() => {
    let m = 0, e = 0, k = 0;
    Object.entries(progress).forEach(([key, val]) => {
      if (key.startsWith('m')) m += val;
      else if (key.startsWith('e')) e += val;
      else if (key.startsWith('k')) k += val;
    });

    return {
      mathPct: Math.min(Math.round((m / 600) * 100), 100),
      engPct: Math.min(Math.round((e / 360) * 100), 100),
      korPct: Math.min(Math.round((k / 240) * 100), 100)
    };
  }, [progress]);

  const minPct = Math.min(mathPct, engPct, korPct);
  const prioritySubject = mathPct === minPct ? 'MATH' : engPct === minPct ? 'ENG' : 'KOR';

  const getNextQuest = (subject: 'MATH' | 'ENG' | 'KOR') => {
    const sequence = QUEST_SEQUENCE[subject];
    for (const unit of sequence) {
      const solvedCount = progress[unit.id] || 0;
      if (solvedCount < unit.total) {
        return { ...unit, solved: solvedCount };
      }
    }
    return { ...sequence[sequence.length - 1], solved: sequence[sequence.length - 1].total, isMastered: true };
  };

  const nextMath = getNextQuest('MATH');
  const nextEng = getNextQuest('ENG');
  const nextKor = getNextQuest('KOR');

  const handleLogout = async () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      await logoutUser();
    }
  };

  const displayName = user?.displayName || '수아';
  const displayGoal = careerPath || "인서울 상위 15% 진입";

  return (
    <div className="p-5 pb-24 space-y-6 text-gray-900">
      {/* 프로필 및 전체 진행도 */}
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 min-w-0 pr-3">
            <h1 className="text-xl font-black text-gray-900 truncate mb-1">
              {displayName}
            </h1>
            <Link href="/career" className="inline-block group mt-1 max-w-full">
              <p className="text-sm text-blue-600 font-bold group-hover:underline flex items-center truncate">
                목표: {displayGoal}
                <span className="ml-1 text-[10px] text-blue-300 group-hover:rotate-90 transition-transform">⚙️</span>
              </p>
            </Link>
          </div>
          <div className="shrink-0 flex flex-col items-center bg-orange-50 px-3 py-2 rounded-xl border border-orange-100">
            <span className="text-xl">🔥</span>
            <span className="text-[10px] font-black text-orange-600 mt-1">{streak}일 연속!</span>
          </div>
        </div>

        {/* ✅ 깨짐 방지: 좁은 영역에 있던 스위치 그룹을 독립된 영역으로 분리 */}
        <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-xl border border-gray-100 mb-5">
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={isPasswordEnabled}
              onChange={(e) => setPasswordEnabled(e.target.checked)}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[1.1rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
            <span className="ml-2 text-[11px] font-bold text-gray-500 whitespace-nowrap">입장 암호 사용</span>
          </label>
          <div className="flex items-center">
            <div className="w-[1px] h-3 bg-gray-200 mr-3"></div>
            <button 
              onClick={handleLogout} 
              className="text-[11px] font-bold text-gray-400 hover:text-red-500 transition-colors whitespace-nowrap"
            >
              로그아웃
            </button>
          </div>
        </div>
        
        <div className="space-y-3 mt-5 border-t border-gray-50 pt-4">
          <div>
            <div className="flex justify-between text-[10px] font-black text-gray-500 mb-1.5 uppercase tracking-wider">
              <span>수학 (Math) 600제</span>
              <span className="text-blue-600">{mathPct}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: `${mathPct}%` }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-black text-gray-500 mb-1.5 uppercase tracking-wider">
              <span>영어 (English) 360제</span>
              <span className="text-green-600">{engPct}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-green-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: `${engPct}%` }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-black text-gray-500 mb-1.5 uppercase tracking-wider">
              <span>국어 (Korean) 240제</span>
              <span className="text-purple-600">{korPct}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-purple-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: `${korPct}%` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Quest (과목별 자율 큐) */}
      <section className="space-y-3">
        <div>
          <h2 className="text-sm font-black text-gray-800 flex items-center">
            ⚔️ Today's Quest
          </h2>
          <p className="text-[10px] text-gray-500 font-medium mt-1 leading-relaxed">
            ※ 작은아빠가 설계한 <strong>학습 묶음(Bundle)의 논리적 순서</strong>에 따라 다음 진도가 자동 배정된다. 편식하지 말고 균형 있게 돌파해라.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {/* 1. 수학 퀘스트 카드 */}
          <Link href={`/mission?id=${nextMath.id}`} className="block bg-blue-50 border border-blue-200 rounded-2xl p-4 shadow-sm active:scale-[0.98] transition-transform relative overflow-hidden">
            {prioritySubject === 'MATH' && <div className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded-bl-lg animate-pulse">🚨 오늘의 최우선 추천</div>}
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[9px] font-black text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded uppercase">{nextMath.bundle}</span>
                <h3 className="text-base font-black text-blue-900 mt-1">{nextMath.title}</h3>
              </div>
              <div className="text-right">
                <span className={`shrink-0 text-[10px] font-bold px-2 py-1 rounded-lg ${nextMath.solved > 0 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-200'}`}>
                  {nextMath.solved > 0 ? `${nextMath.solved} / ${nextMath.total} 진행 중` : '미션 시작'}
                </span>
              </div>
            </div>
          </Link>

          {/* 2. 영어 퀘스트 카드 */}
          <Link href={`/mission?id=${nextEng.id}`} className="block bg-green-50 border border-green-200 rounded-2xl p-4 shadow-sm active:scale-[0.98] transition-transform relative overflow-hidden">
            {prioritySubject === 'ENG' && <div className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded-bl-lg animate-pulse">🚨 오늘의 최우선 추천</div>}
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[9px] font-black text-green-700 bg-green-100 px-1.5 py-0.5 rounded uppercase">{nextEng.bundle}</span>
                <h3 className="text-base font-black text-green-900 mt-1">{nextEng.title}</h3>
              </div>
              <div className="text-right">
                <span className={`shrink-0 text-[10px] font-bold px-2 py-1 rounded-lg ${nextEng.solved > 0 ? 'bg-green-600 text-white' : 'bg-white text-green-700 border border-green-200'}`}>
                  {nextEng.solved > 0 ? `${nextEng.solved} / ${nextEng.total} 진행 중` : '미션 시작'}
                </span>
              </div>
            </div>
          </Link>

          {/* 3. 국어 퀘스트 카드 */}
          <Link href={`/mission?id=${nextKor.id}`} className="block bg-purple-50 border border-purple-200 rounded-2xl p-4 shadow-sm active:scale-[0.98] transition-transform relative overflow-hidden">
            {prioritySubject === 'KOR' && <div className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded-bl-lg animate-pulse">🚨 오늘의 최우선 추천</div>}
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[9px] font-black text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded uppercase">{nextKor.bundle}</span>
                <h3 className="text-base font-black text-purple-900 mt-1">{nextKor.title}</h3>
              </div>
              <div className="text-right">
                <span className={`shrink-0 text-[10px] font-bold px-2 py-1 rounded-lg ${nextKor.solved > 0 ? 'bg-purple-600 text-white' : 'bg-white text-purple-700 border border-purple-200'}`}>
                  {nextKor.solved > 0 ? `${nextKor.solved} / ${nextKor.total} 진행 중` : '미션 시작'}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 하단 숏컷 섹션 */}
      <section className="grid grid-cols-2 gap-3 mt-4">
        <Link href="/review" className="bg-red-50 rounded-2xl p-5 border border-red-100 active:scale-[0.98] transition-transform flex flex-col justify-between h-28 shadow-sm">
          <div className="text-2xl">🚨</div>
          <div>
            <h2 className="font-black text-red-900 text-sm">취약점 노트</h2>
            <p className="text-[9px] text-red-600 font-bold mt-0.5">틀린 문제 복구하기</p>
          </div>
        </Link>

        <Link href="/library" className="bg-gray-50 rounded-2xl p-5 border border-gray-200 active:scale-[0.98] transition-transform flex flex-col justify-between h-28 shadow-sm">
          <div className="text-2xl">📚</div>
          <div>
            <h2 className="font-black text-gray-800 text-sm">나의 서재</h2>
            <p className="text-[9px] text-gray-500 font-bold mt-0.5">1,200제 전체 진행도</p>
          </div>
        </Link>
      </section>
    </div>
  );
}