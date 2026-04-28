/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 미해결 오답 문항을 학습 묶음(Bundle) 순서로 그룹화하여 제공하는 취약점 노트
 */

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/store/useProgressStore';

type StudyPeriod = '1학기 기말 선행' | '1학기 기말 대비' | '2학기 중간 대비' | '2학기 기말 대비' | '상시 (고입 준비)' | '제외';

interface Unit {
  id: string;
  title: string;
  status: 'active' | 'locked' | 'skipped';
  grade: string;
  total: number;
  note: string;
  period: StudyPeriod;
  bundle: string; 
}

export default function ReviewPage() {
  const [activeTab, setActiveTab] = useState<'MATH' | 'ENG' | 'KOR'>('MATH');
  const router = useRouter();
  
  // 전역 스토어에서 오답 리스트만 구독
  const wrongAnswers = useProgressStore((state) => state.wrongAnswers);

  // 전체 단원 데이터베이스 (추후 별도 파일로 분리하여 공용 사용 권장)
  const units: Record<'MATH' | 'ENG' | 'KOR', Unit[]> = {
    MATH: [
      { id: 'm1-1', title: '소인수분해', status: 'active', grade: '중1', total: 15, note: '제곱근 계산의 필수 재료', period: '1학기 기말 선행', bundle: 'A. 연산의 계보' },
      { id: 'm1-2', title: '정수와 유리수', status: 'active', grade: '중1', total: 25, note: '음수 부호 실수 방지', period: '1학기 기말 선행', bundle: 'A. 연산의 계보' },
      { id: 'm1-3', title: '문자와 식', status: 'active', grade: '중1', total: 30, note: '방정식 세우기의 기초', period: '1학기 기말 선행', bundle: 'B. 방정식의 흐름' },
      { id: 'm1-4', title: '좌표평면과 그래프', status: 'active', grade: '중1', total: 15, note: '함수 그래프 그리기의 시작', period: '상시 (고입 준비)', bundle: 'C. 함수의 완성' },
      { id: 'm2-1', title: '유리수와 순환소수', status: 'active', grade: '중2', total: 15, note: '실수 체계 이해용', period: '1학기 기말 선행', bundle: 'A. 연산의 계보' },
      { id: 'm2-2', title: '식의 계산 (다항식)', status: 'active', grade: '중2', total: 40, note: '인수분해를 위한 필수 무기', period: '1학기 기말 선행', bundle: 'A. 연산의 계보' },
      { id: 'm2-3', title: '일차부등식', status: 'active', grade: '중2', total: 20, note: '부호 변환 연습', period: '상시 (고입 준비)', bundle: 'B. 방정식의 흐름' },
      { id: 'm2-4', title: '연립일차방정식', status: 'active', grade: '중2', total: 30, note: '고난도 문장제 해결 도구', period: '1학기 기말 선행', bundle: 'B. 방정식의 흐름' },
      { id: 'm2-5', title: '일차함수와 그래프', status: 'active', grade: '중2', total: 60, note: '★이차함수 점수를 결정짓는 핵심', period: '1학기 기말 선행', bundle: 'C. 함수의 완성' },
      { id: 'm3-1', title: '제곱근과 실수', status: 'active', grade: '중3', total: 40, note: '이차방정식의 기본 연산', period: '1학기 기말 대비', bundle: 'A. 연산의 계보' },
      { id: 'm3-2', title: '다항식의 곱셈과 인수분해', status: 'active', grade: '중3', total: 60, note: '기말고사 점수 밭!', period: '1학기 기말 대비', bundle: 'A. 연산의 계보' },
      { id: 'm3-3', title: '이차방정식', status: 'active', grade: '중3', total: 60, note: '고등 수학의 입구', period: '1학기 기말 대비', bundle: 'B. 방정식의 흐름' },
      { id: 'm3-4', title: '이차함수와 그래프', status: 'active', grade: '중3', total: 80, note: '기말고사 최종 보스', period: '1학기 기말 대비', bundle: 'C. 함수의 완성' },
    ],
    ENG: [
      { id: 'e-1', title: '문장의 성분과 5형식', status: 'active', grade: '중1', total: 35, note: '독해의 뼈대 잡기', period: '1학기 기말 선행', bundle: 'A. 문장 구조' },
      { id: 'e-2', title: '시제 (현재/과거/진행)', status: 'active', grade: '중1', total: 25, note: '동사 변화의 기초', period: '1학기 기말 선행', bundle: 'B. 시제와 조동사' },
      { id: 'e-3', title: '조동사', status: 'active', grade: '중1', total: 20, note: '의미를 풍부하게', period: '상시 (고입 준비)', bundle: 'B. 시제와 조동사' },
      { id: 'e-4', title: 'to부정사', status: 'active', grade: '중2', total: 35, note: '가장 빈출되는 문법', period: '1학기 기말 선행', bundle: 'C. 준동사 핵심' },
      { id: 'e-5', title: '동명사', status: 'active', grade: '중2', total: 25, note: '서술형 필수 체크', period: '상시 (고입 준비)', bundle: 'C. 준동사 핵심' },
      { id: 'e-6', title: '현재완료 시제', status: 'active', grade: '중2', total: 30, note: '고등 내신 시제 완성', period: '상시 (고입 준비)', bundle: 'B. 시제와 조동사' },
      { id: 'e-7', title: '수동태', status: 'active', grade: '중2', total: 25, note: '정확한 주어/목적어 파악', period: '상시 (고입 준비)', bundle: 'D. 구문 확장' },
      { id: 'e-9', title: '관계대명사 기초', status: 'active', grade: '중2', total: 40, note: '문장이 길어지는 원리', period: '1학기 기말 선행', bundle: 'E. 관계사 완성' },
      { id: 'e-10', title: '분사 (현재/과거분사)', status: 'active', grade: '중3', total: 35, note: '1학기 서술형 킬러', period: '1학기 기말 대비', bundle: 'C. 준동사 핵심' },
      { id: 'e-11', title: '관계사 심화 (What/부사)', status: 'active', grade: '중3', total: 45, note: '수능 독해의 마스터 키', period: '1학기 기말 대비', bundle: 'E. 관계사 완성' },
      { id: 'e-12', title: '접속사와 일치', status: 'active', grade: '중3', total: 25, note: '2학기 주요 문법', period: '2학기 중간 대비', bundle: 'D. 구문 확장' },
    ],
    KOR: [
      { id: 'k-1', title: '단어의 갈래 (품사)', status: 'active', grade: '중1', total: 20, note: '문법 기초 다지기', period: '1학기 기말 선행', bundle: 'A. 기초 문법' },
      { id: 'k-2', title: '언어의 본질과 어휘', status: 'active', grade: '중1', total: 30, note: '문해력 기본기', period: '1학기 기말 선행', bundle: 'B. 문해력과 독해' },
      { id: 'k-4', title: '문장의 짜임과 성분', status: 'active', grade: '중2', total: 30, note: '고1 국어 내신 직결', period: '1학기 기말 선행', bundle: 'A. 기초 문법' },
      { id: 'k-5', title: '설명문과 논설문 읽기', status: 'active', grade: '중2', total: 45, note: '모든 공부의 기초 독해력', period: '상시 (고입 준비)', bundle: 'B. 문해력과 독해' },
      { id: 'k-6', title: '한글 창제 원리와 가치', status: 'locked', grade: '중2', total: 15, note: '고등 중세문법 대비', period: '상시 (고입 준비)', bundle: 'A. 기초 문법' },
      { id: 'k-7', title: '음운의 체계와 변동', status: 'active', grade: '중3', total: 30, note: '1학기 필수 문법!', period: '1학기 기말 대비', bundle: 'A. 기초 문법' },
      { id: 'k-8', title: '비문학 구조 독해 심화', status: 'active', grade: '중3', total: 50, note: '수능 공통 영역 선점', period: '2학기 중간 대비', bundle: 'B. 문해력과 독해' },
    ],
  };

  // ✅ 핵심 로직: 현재 선택된 탭(과목)에서 '오답이 1개 이상 남아있는 단원'만 필터링 후 묶음(Bundle)별로 그룹화
  const getVulnerableGroups = () => {
    const currentUnits = units[activeTab].map(unit => ({
      ...unit,
      wrongCount: wrongAnswers[unit.id]?.length || 0
    })).filter(unit => unit.wrongCount > 0); // 오답이 있는 것만 생존

    const bundles = Array.from(new Set(currentUnits.map(u => u.bundle))).sort();
    return bundles.map(b => ({
      title: b,
      list: currentUnits.filter(u => u.bundle === b)
    }));
  };

  const vulnerableGroups = getVulnerableGroups();
  const totalWrongCount = vulnerableGroups.reduce((acc, group) => acc + group.list.reduce((sum, unit) => sum + unit.wrongCount, 0), 0);

  return (
    <div className="p-5 pb-24 space-y-6 text-gray-900">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-black italic tracking-tighter text-red-600">🚨 취약점 노트</h1>
          <p className="text-sm text-gray-500 mt-1 font-medium">학습 묶음(Bundle) 단위 오답 정밀 타격</p>
        </div>
      </header>

      {/* 시스템 가이드 */}
      <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-800">
        <p className="text-[11px] leading-relaxed font-bold">
          ※ 오답 복구가 완료되지 않은 단원만 학습 묶음(Bundle) 순서대로 제공한다.<br/>
          단원을 클릭하여 즉시 리뷰 모드에 진입하고, 약점을 완전히 지워라.
        </p>
      </div>

      <div className="flex bg-gray-100 p-1 rounded-xl shadow-inner mt-4">
        {(['MATH', 'ENG', 'KOR'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all 
              ${activeTab === tab ? 'bg-white text-red-600 shadow-sm' : 'text-gray-400'}`}
          >
            {tab === 'MATH' ? '수학' : tab === 'ENG' ? '영어' : '국어'}
          </button>
        ))}
      </div>

      {vulnerableGroups.length === 0 ? (
        <div className="py-24 flex flex-col items-center justify-center text-center space-y-3">
          <div className="text-5xl opacity-30">🛡️</div>
          <p className="text-gray-500 font-bold text-sm">
            현재 과목에 복구해야 할 오답이 없다.<br/>완벽하게 방어 중이다.
          </p>
        </div>
      ) : (
        <div className="space-y-8 mt-6">
          <div className="flex justify-between items-center px-1">
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">잔여 오답 현황</span>
            <span className="text-xs font-black text-red-500 bg-red-100 px-2 py-1 rounded-full">총 {totalWrongCount}문항 대기 중</span>
          </div>

          {vulnerableGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <div className="flex items-center space-x-2 border-l-4 border-red-500 pl-3">
                <h2 className="text-sm font-black text-gray-800 tracking-tight">
                  {group.title}
                </h2>
              </div>
              
              <div className="grid gap-3">
                {group.list.map((unit) => (
                  <button 
                    key={unit.id}
                    onClick={() => router.push(`/mission?id=${unit.id}`)}
                    className="w-full text-left p-4 rounded-2xl bg-white border border-red-100 shadow-sm active:scale-[0.98] transition-transform hover:border-red-300 flex justify-between items-center"
                  >
                    <div>
                      <span className="text-[9px] font-black text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded uppercase">
                        {unit.grade}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900 mt-1">
                        {unit.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black text-red-500 bg-red-50 px-2 py-1 rounded-lg">
                        미해결 오답 {unit.wrongCount}개
                      </span>
                      <span className="text-gray-300 font-black">→</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}