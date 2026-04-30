/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 3개 정렬 모드 통합 및 실시간 진행도(오답 수 포함)가 반영된 마스터 라이브러리
 * 업데이트 내용: 정렬 탭 순서 변경 및 영어 과목 학습 묶음(Bundle) 정렬 순서 논리적 오류 수정 (관계사 D -> 구문 확장 E)
 */

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/store/useProgressStore';

// 시퀀스 및 묶음 타입 정의
type StudyPeriod = '1학기 기말 선행' | '1학기 기말 대비' | '2학기 중간 대비' | '2학기 기말 대비' | '상시 (고입 준비)' | '제외';
type ViewMode = 'GRADE' | 'EXAM' | 'BUNDLE';

interface Unit {
  id: string;
  title: string;
  status: 'active' | 'locked' | 'skipped';
  grade: string;
  solved: number;
  total: number;
  note: string;
  period: StudyPeriod;
  bundle: string; 
  isCurrentScope?: boolean;
}

export default function LibraryPage() {
  const [activeTab, setActiveTab] = React.useState<'MATH' | 'ENG' | 'KOR'>('MATH');
  // ✅ 기본 정렬 모드를 '학습 묶음(BUNDLE)'으로 변경
  const [viewMode, setViewMode] = React.useState<ViewMode>('BUNDLE'); 
  const router = useRouter();

  // Zustand 스토어에서 진행도와 오답 리스트 실시간 구독
  const progress = useProgressStore((state) => state.progress);
  const wrongAnswers = useProgressStore((state) => state.wrongAnswers);

  const units: Record<'MATH' | 'ENG' | 'KOR', Unit[]> = {
    MATH: [
      /* 중1 */
      { id: 'm1-1', title: '소인수분해', status: 'active', grade: '중1', solved: 0, total: 15, note: '제곱근 계산의 필수 재료', period: '1학기 기말 선행', bundle: 'A. 연산의 계보' },
      { id: 'm1-2', title: '정수와 유리수', status: 'active', grade: '중1', solved: 0, total: 25, note: '음수 부호 실수 방지', period: '1학기 기말 선행', bundle: 'A. 연산의 계보' },
      { id: 'm1-3', title: '문자와 식', status: 'active', grade: '중1', solved: 0, total: 30, note: '방정식 세우기의 기초', period: '1학기 기말 선행', bundle: 'B. 방정식의 흐름' },
      { id: 'm1-4', title: '좌표평면과 그래프', status: 'active', grade: '중1', solved: 0, total: 15, note: '함수 그래프 그리기의 시작', period: '상시 (고입 준비)', bundle: 'C. 함수의 완성' },
      { id: 'm1-5', title: '기본 도형과 작도', status: 'skipped', grade: '중1', solved: 0, total: 0, note: '고등 내신 직접 출제 비중 낮음', period: '제외', bundle: 'Z. 제외 항목' },
      { id: 'm1-6', title: '평면/입체도형의 성질', status: 'skipped', grade: '중1', solved: 0, total: 0, note: '필요 시 공식만 확인', period: '제외', bundle: 'Z. 제외 항목' },
      { id: 'm1-7', title: '통계 (자료의 정리)', status: 'skipped', grade: '중1', solved: 0, total: 0, note: '전략적 배제', period: '제외', bundle: 'Z. 제외 항목' },

      /* 중2 */
      { id: 'm2-1', title: '유리수와 순환소수', status: 'active', grade: '중2', solved: 0, total: 15, note: '실수 체계 이해용', period: '1학기 기말 선행', bundle: 'A. 연산의 계보' },
      { id: 'm2-2', title: '식의 계산 (다항식)', status: 'active', grade: '중2', solved: 0, total: 40, note: '인수분해를 위한 필수 무기', period: '1학기 기말 선행', bundle: 'A. 연산의 계보' },
      { id: 'm2-3', title: '일차부등식', status: 'active', grade: '중2', solved: 0, total: 20, note: '부호 변환 연습', period: '상시 (고입 준비)', bundle: 'B. 방정식의 흐름' },
      { id: 'm2-4', title: '연립일차방정식', status: 'active', grade: '중2', solved: 0, total: 30, note: '고난도 문장제 해결 도구', period: '1학기 기말 선행', bundle: 'B. 방정식의 흐름' },
      { id: 'm2-5', title: '일차함수와 그래프', status: 'active', grade: '중2', solved: 0, total: 60, note: '★이차함수 점수를 결정짓는 핵심', period: '1학기 기말 선행', bundle: 'C. 함수의 완성' },
      { id: 'm2-6', title: '도형의 성질 (삼각형/사각형)', status: 'skipped', grade: '중2', solved: 0, total: 0, note: '배제 단원', period: '제외', bundle: 'Z. 제외 항목' },
      { id: 'm2-7', title: '도형의 닮음과 피타고라스', status: 'locked', grade: '중2', solved: 0, total: 30, note: '2학기 삼각비 대비용', period: '2학기 중간 대비', bundle: 'D. 기하와 통계' },
      { id: 'm2-8', title: '확률 기초', status: 'skipped', grade: '중2', solved: 0, total: 0, note: '배제 단원', period: '제외', bundle: 'Z. 제외 항목' },

      /* 중3 */
      { id: 'm3-1', title: '제곱근과 실수', status: 'active', grade: '중3', solved: 0, total: 40, note: '이차방정식의 기본 연산', isCurrentScope: true, period: '1학기 기말 대비', bundle: 'A. 연산의 계보' },
      { id: 'm3-2', title: '다항식의 곱셈과 인수분해', status: 'active', grade: '중3', solved: 0, total: 60, note: '기말고사 점수 밭!', isCurrentScope: true, period: '1학기 기말 대비', bundle: 'A. 연산의 계보' },
      { id: 'm3-3', title: '이차방정식', status: 'active', grade: '중3', solved: 0, total: 60, note: '고등 수학의 입구', isCurrentScope: true, period: '1학기 기말 대비', bundle: 'B. 방정식의 흐름' },
      { id: 'm3-4', title: '이차함수와 그래프', status: 'active', grade: '중3', solved: 0, total: 80, note: '기말고사 최종 보스', isCurrentScope: true, period: '1학기 기말 대비', bundle: 'C. 함수의 완성' },
      { id: 'm3-5', title: '삼각비', status: 'locked', grade: '중3', solved: 0, total: 40, note: '2학기 중간고사 진도', period: '2학기 중간 대비', bundle: 'D. 기하와 통계' },
      { id: 'm3-6', title: '원의 성질', status: 'locked', grade: '중3', solved: 0, total: 25, note: '2학기 기말 대비', period: '2학기 기말 대비', bundle: 'D. 기하와 통계' },
      { id: 'm3-7', title: '통계 (산포도)', status: 'locked', grade: '중3', solved: 0, total: 15, note: '중학 마지막 단원', period: '2학기 기말 대비', bundle: 'D. 기하와 통계' },
    ],
    ENG: [
      // ✅ 실제 데이터베이스 매핑에 맞춰 영어 단원 ID 교체 완료
      { id: 'e1-1', title: '문장의 성분과 5형식', status: 'active', grade: '중1', solved: 0, total: 35, note: '독해의 뼈대 잡기', period: '1학기 기말 선행', bundle: 'A. 문장 구조' },
      { id: 'e1-2', title: '시제 (현재/과거/진행)', status: 'active', grade: '중1', solved: 0, total: 25, note: '동사 변화의 기초', period: '1학기 기말 선행', bundle: 'B. 시제와 조동사' },
      { id: 'e1-3', title: '조동사', status: 'active', grade: '중1', solved: 0, total: 20, note: '의미를 풍부하게', period: '상시 (고입 준비)', bundle: 'B. 시제와 조동사' },
      { id: 'e2-1', title: 'to부정사', status: 'active', grade: '중2', solved: 0, total: 35, note: '가장 빈출되는 문법', period: '1학기 기말 선행', bundle: 'C. 준동사 핵심' },
      { id: 'e2-2', title: '동명사', status: 'active', grade: '중2', solved: 0, total: 25, note: '서술형 필수 체크', period: '상시 (고입 준비)', bundle: 'C. 준동사 핵심' },
      { id: 'e2-3', title: '현재완료 시제', status: 'active', grade: '중2', solved: 0, total: 30, note: '고등 내신 시제 완성', period: '상시 (고입 준비)', bundle: 'B. 시제와 조동사' },
      // ✅ 구문 확장(D -> E) / 관계사 완성(E -> D) 논리적 순서로 스왑
      { id: 'e2-4', title: '수동태', status: 'active', grade: '중2', solved: 0, total: 25, note: '정확한 주어/목적어 파악', period: '상시 (고입 준비)', bundle: 'E. 구문 확장' },
      { id: 'e2-5', title: '형용사/부사/비교', status: 'skipped', grade: '중2', solved: 0, total: 0, note: '우선순위 낮음', period: '제외', bundle: 'Z. 제외 항목' },
      { id: 'e2-6', title: '관계대명사 기초', status: 'active', grade: '중2', solved: 0, total: 40, note: '문장이 길어지는 원리', period: '1학기 기말 선행', bundle: 'D. 관계사 완성' },
      { id: 'e3-1', title: '분사 (현재/과거분사)', status: 'active', grade: '중3', solved: 0, total: 35, note: '1학기 서술형 킬러', isCurrentScope: true, period: '1학기 기말 대비', bundle: 'C. 준동사 핵심' },
      { id: 'e3-2', title: '관계사 심화 (What/부사)', status: 'active', grade: '중3', solved: 0, total: 45, note: '수능 독해의 마스터 키', isCurrentScope: true, period: '1학기 기말 대비', bundle: 'D. 관계사 완성' },
      { id: 'e3-3', title: '접속사와 일치', status: 'active', grade: '중3', solved: 0, total: 25, note: '2학기 주요 문법', isCurrentScope: true, period: '2학기 중간 대비', bundle: 'E. 구문 확장' },
      { id: 'e3-4', title: '가정법/특수구문', status: 'locked', grade: '중3', solved: 0, total: 20, note: '선행 목표', period: '2학기 기말 대비', bundle: 'E. 구문 확장' },
    ],
    KOR: [
      // ✅ 실제 데이터베이스 매핑에 맞춰 국어 단원 ID 교체 완료
      { id: 'k1-1', title: '단어의 갈래 (품사)', status: 'active', grade: '중1', solved: 0, total: 20, note: '문법 기초 다지기', period: '1학기 기말 선행', bundle: 'A. 기초 문법' },
      { id: 'k1-2', title: '언어의 본질과 어휘', status: 'active', grade: '중1', solved: 0, total: 30, note: '문해력 기본기', period: '1학기 기말 선행', bundle: 'B. 문해력과 독해' },
      { id: 'k1-3', title: '문학 (시/소설) 감상 기초', status: 'skipped', grade: '중1', solved: 0, total: 0, note: '상시 학습 가능 영역', period: '제외', bundle: 'Z. 제외 항목' },
      { id: 'k2-1', title: '문장의 짜임과 성분', status: 'active', grade: '중2', solved: 0, total: 30, note: '고1 국어 내신 직결', period: '1학기 기말 선행', bundle: 'A. 기초 문법' },
      { id: 'k2-2', title: '설명문과 논설문 읽기', status: 'active', grade: '중2', solved: 0, total: 45, note: '모든 공부의 기초 독해력', period: '상시 (고입 준비)', bundle: 'B. 문해력과 독해' },
      { id: 'k2-3', title: '한글 창제 원리와 가치', status: 'locked', grade: '중2', solved: 0, total: 15, note: '고등 중세문법 대비', period: '상시 (고입 준비)', bundle: 'A. 기초 문법' },
      { id: 'k3-1', title: '음운의 체계와 변동', status: 'active', grade: '중3', solved: 0, total: 30, note: '1학기 필수 문법!', isCurrentScope: true, period: '1학기 기말 대비', bundle: 'A. 기초 문법' },
      { id: 'k3-2', title: '비문학 구조 독해 심화', status: 'active', grade: '중3', solved: 0, total: 50, note: '수능 공통 영역 선점', isCurrentScope: true, period: '2학기 중간 대비', bundle: 'B. 문해력과 독해' },
      { id: 'k3-3', title: '고전 시가/수필 맛보기', status: 'locked', grade: '중3', solved: 0, total: 20, note: '예비 과정', period: '상시 (고입 준비)', bundle: 'B. 문해력과 독해' },
      { id: 'k3-4', title: '매체와 언어 예절', status: 'skipped', grade: '중3', solved: 0, total: 0, note: '변별력 낮음', period: '제외', bundle: 'Z. 제외 항목' },
    ],
  };

  const getGroupedUnits = () => {
    const currentUnits = units[activeTab].map(unit => ({
      ...unit,
      solved: progress[unit.id] || 0,
      wrongCount: wrongAnswers[unit.id]?.length || 0
    }));
    
    if (viewMode === 'GRADE') {
      const grades = ['중1', '중2', '중3'];
      return grades.map(g => ({
        title: `${g} 과정`,
        list: currentUnits.filter(u => u.grade === g)
      }));
    }
    
    if (viewMode === 'EXAM') {
      const periods: StudyPeriod[] = ['1학기 기말 선행', '1학기 기말 대비', '2학기 중간 대비', '2학기 기말 대비', '상시 (고입 준비)', '제외'];
      return periods.map(p => ({
        title: p,
        list: currentUnits.filter(u => u.period === p)
      }));
    }
    
    if (viewMode === 'BUNDLE') {
      const bundles = Array.from(new Set(currentUnits.map(u => u.bundle))).sort();
      return bundles.map(b => ({
        title: b,
        list: currentUnits.filter(u => u.bundle === b)
      }));
    }
    
    return [];
  };

  return (
    <div className="p-5 pb-24 space-y-6 text-gray-900">
      <header>
        <h1 className="text-2xl font-black italic tracking-tighter">나의 서재</h1>
        <p className="text-sm text-gray-500 mt-1">고입 전 10개월, 상위 15% 진입을 위한 마스터 플랜</p>
      </header>

      <div className="flex bg-gray-100 p-1 rounded-xl shadow-inner">
        {(['MATH', 'ENG', 'KOR'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all 
              ${activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}
          >
            {tab === 'MATH' ? '수학' : tab === 'ENG' ? '영어' : '국어'}
          </button>
        ))}
      </div>

      <div className="flex space-x-2">
        {([
          { mode: 'BUNDLE', label: '학습 묶음' },
          { mode: 'GRADE', label: '학년별' },
          { mode: 'EXAM', label: '시험 기준' }
        ] as const).map((item) => (
          <button
            key={item.mode}
            onClick={() => setViewMode(item.mode)}
            className={`px-3 py-1.5 text-[10px] font-black rounded-full border transition-all
              ${viewMode === item.mode 
                ? 'bg-gray-900 text-white border-gray-900' 
                : 'bg-white text-gray-400 border-gray-200'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="space-y-10 mt-6">
        {getGroupedUnits().map((group) => (
          <div key={group.title} className="space-y-4">
            <div className={`flex items-center space-x-2 border-l-4 pl-3 
              ${group.title.includes('대비') || group.title.includes('코어') ? 'border-red-600' : 
                group.title === 'Z. 제외 항목' || group.title === '제외' ? 'border-gray-300' : 'border-blue-600'}`}>
              <h2 className={`text-sm font-black uppercase tracking-tight 
                ${group.title.includes('대비') ? 'text-red-600' : 
                  group.title === 'Z. 제외 항목' || group.title === '제외' ? 'text-gray-400' : 'text-gray-800'}`}>
                {group.title}
              </h2>
              <span className="text-[10px] font-bold text-gray-300">
                {group.list.length} Units
              </span>
            </div>
            <div className="grid gap-3">
              {group.list.map((unit) => (
                <UnitItem 
                  key={unit.id} 
                  unit={unit as any} 
                  isSkippedMode={group.title.includes('제외')} 
                  onClick={() => router.push(`/mission?id=${unit.id}`)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UnitItem({ unit, isSkippedMode, onClick }: { unit: Unit & { wrongCount: number }; isSkippedMode: boolean; onClick: () => void }) {
  const isFocus = unit.isCurrentScope || unit.period.includes('대비');

  const handleClick = () => {
    if (isSkippedMode || unit.status === 'skipped') return;
    if (unit.status === 'locked') {
      alert(`[잠금 단원]\n이 단원은 현재 학습 범위가 아닙니다.\n${unit.note}`);
      return;
    }
    onClick();
  };

  const renderProgressText = () => {
    if (unit.solved === 0) {
      return <span className="text-gray-400 font-bold">시작하기 (총 {unit.total}문항)</span>;
    }
    
    if (unit.solved === unit.total) {
      if (unit.wrongCount > 0) {
        return (
          <span className="text-red-600 font-black flex items-center">
            🚨 오답 복구 필요 ({unit.wrongCount})
          </span>
        );
      }
      return <span className="text-blue-600 font-black">🏆 마스터 (완료)</span>;
    }

    return (
      <span className="text-blue-500 font-black flex items-center">
        ⚡️ {unit.solved} / {unit.total} 풀이 중
      </span>
    );
  };

  return (
    <div 
      onClick={handleClick}
      className={`p-4 rounded-2xl border transition-all cursor-pointer
        ${isSkippedMode || unit.status === 'skipped'
          ? 'bg-gray-50 border-gray-100 opacity-50' 
          : unit.status === 'active' 
            ? isFocus 
              ? 'bg-blue-50 border-blue-200 shadow-sm active:scale-[0.98]' 
              : 'bg-white border-gray-100 shadow-sm active:scale-[0.98]' 
            : 'bg-gray-100 border-gray-200 opacity-60'}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex-1 pr-4">
          <div className="flex items-center space-x-2">
            <span className="text-[9px] font-black text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded uppercase">
              {unit.grade}
            </span>
            <h3 className="text-sm font-bold text-gray-900 leading-none">
              {unit.title}
            </h3>
            {unit.isCurrentScope && (
              <span className="animate-pulse bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-black">
                FOCUS
              </span>
            )}
          </div>
          <p className="text-[10px] mt-2 leading-relaxed text-gray-500 font-medium">
            {unit.note}
          </p>
        </div>
        
        <div className="text-right whitespace-nowrap">
          {!isSkippedMode && unit.status !== 'skipped' ? (
            <div className="text-[11px]">
              {renderProgressText()}
            </div>
          ) : (
            <span className="text-[10px] font-black text-gray-400 bg-gray-200 px-2 py-1 rounded-lg">
              제외됨
            </span>
          )}
        </div>
      </div>
    </div>
  );
}