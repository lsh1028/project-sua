/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 인서울 대학 정원 통계 및 실시간 학습 데이터 시각화(Recharts), 고입 분석 자료 다운로드 기능이 반영된 전략 관제탑
 */

'use client';

import React, { useMemo } from 'react';
import { useProgressStore } from '@/store/useProgressStore';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// 구글 드라이브에 업로드된 학교별 비교 분석 자료 6개 리스트 연동
const ANALYSIS_FILES = [
  { id: 1, title: '2025 비교 분석 - 청량고.pdf', url: 'https://drive.google.com/file/d/17AE2iDi0x8Z_ahWPQSLw0opOx7sZ2U3z/view?usp=sharing' },
  { id: 2, title: '2025 비교 분석 - 휘경여고.pdf', url: 'https://drive.google.com/file/d/1sajLeuDYPc-urtkg-oGpkVsvM5Ddzn71/view?usp=sharing' },
  { id: 3, title: '2025 비교 분석 - 해성여고.pdf', url: 'https://drive.google.com/file/d/1whpj4HABqWs50d8-GRCfJl3v25GC3imU/view?usp=sharing' },
  { id: 4, title: '2025 비교 분석 - 경희여고.pdf', url: 'https://drive.google.com/file/d/1B2s3BdLW6Uw0r9_1K4UoDmuy0MrLU1_V/view?usp=sharing' },
  { id: 5, title: '2025 비교 분석 - 신현고.pdf', url: 'https://drive.google.com/file/d/1HIMZBbOOKP6KE71BjkjLt_pwe6BfrCPF/view?usp=sharing' },
  { id: 6, title: '2025 비교 분석 - 원묵고.pdf', url: 'https://drive.google.com/file/d/1yM_slsin2YhoEedOkMPBaxYjPL38g_Dh/view?usp=sharing' },
];

export default function StrategyPage() {
  const { progress, wrongAnswers } = useProgressStore();

  const stats = useMemo(() => {
    let math = 0, eng = 0, kor = 0;
    Object.entries(progress).forEach(([key, val]) => {
      if (key.startsWith('m')) math += val;
      else if (key.startsWith('e')) eng += val;
      else if (key.startsWith('k')) kor += val;
    });

    const totalWrong = Object.values(wrongAnswers).reduce((acc, curr) => acc + curr.length, 0);
    const totalSolved = math + eng + kor;

    return { math, eng, kor, totalWrong, totalSolved };
  }, [progress, wrongAnswers]);

  const chartData = [
    { subject: '수학', current: stats.math, target: 600, color: '#3b82f6' },
    { subject: '영어', current: stats.eng, target: 360, color: '#22c55e' },
    { subject: '국어', current: stats.kor, target: 240, color: '#a855f7' },
  ];

  return (
    <div className="p-5 pb-24 space-y-6">
      <header className="py-4">
        <h1 className="text-2xl font-black text-gray-900">작은아빠의 시크릿 플랜</h1>
        <p className="text-sm text-gray-500 mt-1">인서울 상위 15% 진입을 위한 정밀 타격 전략</p>
      </header>

      {/* 실시간 학습 데이터 관제탑 (Recharts 적용) */}
      <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-5">
        <div className="flex justify-between items-end border-b border-gray-100 pb-3">
          <h2 className="text-base font-black text-gray-900 flex items-center gap-2">
            📈 실시간 밸런스 점검
          </h2>
          <span className="text-[10px] font-bold text-gray-400">목표 1,200제 대비</span>
        </div>

        <div className="flex space-x-3">
          <div className="flex-1 bg-blue-50 rounded-xl p-3 text-center">
            <span className="block text-[10px] font-bold text-blue-500 mb-1">총 누적 풀이</span>
            <span className="text-xl font-black text-blue-700">{stats.totalSolved}</span>
            <span className="text-[10px] text-blue-400"> / 1200</span>
          </div>
          <div className="flex-1 bg-red-50 rounded-xl p-3 text-center">
            <span className="block text-[10px] font-bold text-red-500 mb-1">복구 필요 오답</span>
            <span className="text-xl font-black text-red-700">{stats.totalWrong}</span>
            <span className="text-[10px] text-red-400"> 개</span>
          </div>
        </div>

        <div className="h-48 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }} barSize={30}>
              <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
              <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Bar dataKey="current" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* 1. 인서울 생존 통계 섹션 */}
      <section className="bg-red-50 rounded-2xl p-6 border-2 border-red-200 shadow-sm">
        <h2 className="text-base font-black text-red-600 flex items-center gap-2 mb-4">
          🚨 냉정한 현실: 왜 15%인가?
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-end border-b border-red-100 pb-3">
            <div className="text-[11px] text-gray-600">전국 수험생 대비 인서울 정원</div>
            <div className="text-right">
              <span className="text-xl font-black text-red-600">상위 18.7%</span>
            </div>
          </div>
          <p className="text-[10px] text-red-700 leading-relaxed font-medium">
            전국 40만 명 중 서울 소재 대학 정원은 약 7.5만 명뿐이야. <br />
            특목고/자사고 점유율을 제외하면, 일반고인 청량고에서 인서울에 안착하려면 **상위 15%** 성적표가 반드시 필요해. 2등급 후반(34%)은 인서울이 불가능한 숫자라는 걸 명심해야 해.
          </p>
        </div>
      </section>

      {/* 2. 효율 역전법 3원칙 카드 */}
      <section className="bg-white rounded-2xl p-6 border-2 border-blue-500 shadow-sm space-y-6">
        <h2 className="text-lg font-black text-blue-600 flex items-center">
          💡 수아를 위한 효율 역전법
        </h2>
        
        <div className="space-y-5">
          <div className="flex items-start space-x-3">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-[10px] font-bold">01</span>
            <div>
              <p className="font-bold text-gray-800 text-sm">국·영·수 기초 복구 (현재 성적 향상)</p>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                중1~2 과정을 모르면 지금 학교 수업은 외계어처럼 들릴 수밖에 없어. 
                과거의 구멍을 메우는 게 당장 다가올 기말고사 점수를 수직 상승시키는 가장 빠른 길이야.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-[10px] font-bold">02</span>
            <div>
              <p className="font-bold text-gray-800 text-sm">기타 과목 암기 전략</p>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                사회, 과학은 시험 2~3주 전 집중 암기로 충분해! 
                지금은 뇌의 근육이자 입시의 본체인 국·영·수 기초 체력을 기르는 데 에너지를 90% 투자하자.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-[10px] font-bold">03</span>
            <div>
              <p className="font-bold text-gray-800 text-sm">고1 대비 선행 방어</p>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                지금 풀고 있는 중3 심화 문제는 고등학교 과정과 80%가 겹쳐. 
                오늘 문제를 완벽히 이해하는 게 최고의 고교 선행이자 완벽한 고입 대비의 끝이야!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 1,200제 황금 비율 설계 논리 섹션 */}
      <section className="bg-gray-900 rounded-2xl p-6 shadow-md text-white">
        <h2 className="text-base font-black text-blue-400 mb-4 flex items-center gap-2">
          📊 1,200제 황금 비율 (5:3:2)
        </h2>
        <p className="text-[11px] text-gray-400 mb-6 leading-relaxed">
          수아야, 서재의 문제 수는 작은아빠가 너를 상위 15%로 밀어 넣기 위해 설계한 최적의 훈련량이야.
        </p>
        
        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-xs font-bold mb-1.5">
              <span className="text-blue-300 font-black">수학 (50% / 600제)</span>
              <span className="text-blue-300">상위 15%의 결정타</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-blue-500 h-2 rounded-full w-[50%] shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            </div>
            <p className="text-[10px] text-gray-500 leading-normal">
              수학은 1점에 대학이 바뀌어. 압도적인 계산 근육으로 기말고사 100점을 쟁취한다.
            </p>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold mb-1.5">
              <span className="text-green-300 font-black">영어 (30% / 360제)</span>
              <span className="text-green-300">구문 패턴 각인</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full w-[30%] shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            </div>
            <p className="text-[10px] text-gray-500 leading-normal">
              문장의 뼈대를 발라내는 360번의 연습이면 고등학교 독해 지문도 두렵지 않아.
            </p>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold mb-1.5">
              <span className="text-purple-300 font-black">국어 (20% / 240제)</span>
              <span className="text-purple-300">질적 독해 훈련</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-purple-500 h-2 rounded-full w-[20%] shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
            </div>
            <p className="text-[10px] text-gray-500 leading-normal">
              양보다 질이야. 정답의 근거를 완벽히 찾아내는 독한 분석 훈련만 집중해.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 청량고 정보 카드 */}
      <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
        <h3 className="text-sm font-black text-blue-900">📌 2027 청량고 입시 팩트체크</h3>
        <ul className="mt-3 space-y-2.5">
          <li className="text-[11px] text-blue-700 leading-relaxed font-medium">
            • <strong className="text-blue-900">성적표의 함정:</strong> 2등급(상위 34%)이라고 다 인서울 못 해. 진짜는 <strong className="text-red-600">상위 15% 이내</strong>라는 걸 잊지 마!
          </li>
          <li className="text-[11px] text-blue-700 leading-relaxed font-medium">
            • <strong className="text-blue-900">독한 습관:</strong> 고등학교 성적은 등급 숫자보다 <strong className="text-blue-900">원점수 1점</strong> 싸움이야. 지금 기말고사부터 실수 없이 100점에 집착해봐. 그 습관이 고교 상위권 경쟁에서 너를 살려줄 거야.
          </li>
          <li className="text-[11px] text-blue-700 leading-relaxed font-medium">
            • <strong className="text-blue-900">수학 전략:</strong> 청량고는 고교 진학 후 부교재 변형 위주로 출제돼. 지금 중학교 기본 연산에서 실수 안 하는 사람이 결국 끝까지 이긴다.
          </li>
        </ul>
      </div>

      {/* 5. 고입/대입 분석 자료 다운로드 센터 */}
      <section className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm space-y-4">
        <h2 className="text-base font-black text-gray-900 flex items-center gap-2 mb-2">
          📁 학교별 비교 분석 자료실
        </h2>
        <p className="text-[11px] text-gray-500 leading-relaxed">
          입시 결과 및 학교별 비교 자료 데이터다. 목표 설정 및 전략 수립에 다운로드하여 참고해라.
        </p>
        
        <div className="grid grid-cols-1 gap-2.5 mt-2">
          {ANALYSIS_FILES.map((file) => (
            <a 
              key={file.id} 
              href={file.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors group"
            >
              <div className="flex items-center space-x-3 overflow-hidden">
                <span className="text-xl">📄</span>
                <span className="text-xs font-bold text-gray-700 group-hover:text-blue-700 truncate">
                  {file.title}
                </span>
              </div>
              <span className="text-[10px] font-black text-gray-400 bg-white px-2 py-1 rounded-lg border border-gray-200 group-hover:text-blue-600 group-hover:border-blue-200 shrink-0">
                다운로드 ↓
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}