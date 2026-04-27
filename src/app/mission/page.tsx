/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 1일차 데일리 미션 (15분 혼합형) 수행 및 DB 자동 저장 연동
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import QuestionCard from '@/components/QuestionCard';
import { Question } from '@/types/mission';
import { saveMissionResult } from '@/lib/firebase/service';

// 더미 데이터: 기초 복구 데일리 팩 (hint 속성 추가 완료)
const MISSION_01: Question[] = [
  {
    questionNumber: 1,
    question: "다음 방정식의 해를 구하시오. $$2x + 5 = 13$$",
    hint: "양변에서 먼저 5를 빼서 2x만 남겨보세요.",
    answerOptions: [
      { text: "x = 3", isCorrect: false, rationale: "2(3) + 5 = 11 입니다." },
      { text: "x = 4", isCorrect: true, rationale: "2(4) + 5 = 13 정답입니다." }
    ]
  },
  {
    questionNumber: 2,
    question: "다항식 $$(x+2)(x-3)$$ 을 전개한 결과는?",
    hint: "분배법칙을 사용하여 네 개의 항을 각각 곱한 후, 동류항끼리 묶어보세요.",
    answerOptions: [
      { text: "x^2 - x - 6", isCorrect: true, rationale: "x^2 -3x + 2x - 6 = x^2 - x - 6 정답입니다." },
      { text: "x^2 + x - 6", isCorrect: false, rationale: "가운데 항의 부호 계산이 틀렸습니다." }
    ]
  },
  {
    questionNumber: 3,
    question: "다음 중 '집중하다'라는 뜻을 가진 구동사는?",
    hint: "카메라의 초점을 맞출 때 사용하는 단어를 떠올려보세요.",
    answerOptions: [
      { text: "Focus on", isCorrect: true, rationale: "정확합니다. Look for는 '찾다'라는 뜻입니다." },
      { text: "Look for", isCorrect: false, rationale: "Look for는 무언가를 '찾다'라는 뜻입니다." }
    ]
  },
  {
    questionNumber: 4,
    question: "어떤 일이 처음부터 끝까지 변함없음을 뜻하는 사자성어는?",
    hint: "처음(초) 품은 뜻(지)을 하나의(일) 끈으로 꿴다(관)는 의미의 한자어입니다.",
    answerOptions: [
      { text: "일취월장", isCorrect: false, rationale: "나날이 발전한다는 뜻입니다." },
      { text: "초지일관", isCorrect: true, rationale: "처음 세운 뜻을 끝까지 밀고 나간다는 의미로 정답입니다." }
    ]
  },
  {
    questionNumber: 5,
    question: "밑줄 친 부분의 쓰임이 어색한 문장은?\nI 'went' to the park yesterday.",
    hint: "문장 맨 끝에 있는 시간 부사(yesterday)의 시제를 확인하세요.",
    answerOptions: [
      { text: "어색함", isCorrect: false, rationale: "yesterday(과거)와 went(과거 동사)가 올바르게 쓰였습니다." },
      { text: "올바름", isCorrect: true, rationale: "과거 시제가 정확히 일치합니다." }
    ]
  }
];

export default function MissionPage() {
  const [solvedCount, setSolvedCount] = useState(0);
  const [startTime] = useState(Date.now()); // 미션 진입 시간 기록

  const handleSolve = () => {
    setSolvedCount(prev => prev + 1);
  };

  // 모든 문제를 풀었을 때 백그라운드에서 Firebase DB로 결과 전송
  useEffect(() => {
    if (solvedCount === MISSION_01.length && solvedCount > 0) {
      const timeSpentMs = Date.now() - startTime;
      
      saveMissionResult({
        missionId: "mission_01",
        solvedAt: new Date(),
        timeSpentMs: timeSpentMs,
        isPerfect: true, // TODO: 실제 오답 판별 로직 연결 예정
        wrongQuestionNumbers: [] // TODO: 실제 오답 번호 배열 연결 예정
      }).then(() => {
        console.log("학습 결과가 DB에 안전하게 기록되었습니다.");
      }).catch((error) => {
        console.error("DB 기록 중 에러 발생:", error);
      });
    }
  }, [solvedCount, startTime]);

  return (
    <div className="p-5 pb-20 space-y-6">
      <div className="flex justify-between items-end border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">오늘의 미션</h1>
          <p className="text-sm text-gray-500 mt-1">기초 복구 데일리 팩</p>
        </div>
        <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          진행률: {solvedCount} / {MISSION_01.length}
        </div>
      </div>

      <div className="space-y-6">
        {MISSION_01.map((q) => (
          <QuestionCard key={q.questionNumber} data={q} onSolve={handleSolve} />
        ))}
      </div>

      {/* 미션 완료 시 노출되는 성공 컴포넌트 */}
      {solvedCount === MISSION_01.length && (
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg animate-fade-in">
          <div className="text-4xl mb-3">🎉</div>
          <h2 className="text-2xl font-black mb-2">ALL CLEAR!</h2>
          <p className="text-blue-100 text-sm mb-5">오늘의 퀘스트를 완벽하게 수행했습니다.</p>
          <Link href="/" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            베이스캠프로 복귀
          </Link>
        </div>
      )}
    </div>
  );
}