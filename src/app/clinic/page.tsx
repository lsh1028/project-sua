/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 유사 문제 요청 리스트 관리 (삭제 기능 연동) 및 시스템 가이드
 */

'use client';

import React from 'react';
import { useProgressStore } from '@/store/useProgressStore';
import { math_m1_1_questions } from '@/data/questions/math/m1-1';
import { Question } from '@/types/question';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function ClinicPage() {
  // ✅ removeSimilarQuestionRequest 가져오기
  const { similarQuestionRequests, removeSimilarQuestionRequest } = useProgressStore();

  const allRequestedIds = Object.values(similarQuestionRequests).flat();
  const allQuestions: Question[] = [...math_m1_1_questions]; 
  const requestedQuestions = allQuestions.filter(p => allRequestedIds.includes(p.id));

  return (
    <div className="p-5 pb-24 space-y-6 text-gray-900">
      <header className="space-y-1">
        <h1 className="text-2xl font-black italic tracking-tighter">학습 상담소</h1>
        <p className="text-sm text-gray-500 font-medium leading-relaxed">
          추가 훈련이 필요한 <span className="text-orange-600 font-bold">핵심 유형</span> 데이터베이스.
        </p>
      </header>

      {requestedQuestions.length === 0 ? (
        <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
          <div className="text-5xl opacity-20">💬</div>
          <p className="text-gray-400 text-sm font-bold">현재 등록된 유사 문제 요청이 없다.<br/>리뷰 모드에서 취약 유형을 분석하고 요청을 등록해라.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">요청 리스트 ({requestedQuestions.length})</span>
          </div>

          {requestedQuestions.map((question) => (
            <div key={question.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full">
                      유사 문제 요청됨
                    </span>
                    <p className="text-[10px] text-gray-400 font-bold">{question.unitId} | ID: {question.id}</p>
                  </div>
                  {/* ✅ 클릭 시 삭제 이벤트 연결 */}
                  <button 
                    onClick={() => removeSimilarQuestionRequest(question.unitId, question.id)}
                    className="text-[10px] font-black text-gray-300 hover:text-red-500 transition-colors"
                  >
                    삭제
                  </button>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-sm font-bold text-gray-800 leading-relaxed break-keep">
                    <Latex>{question.question}</Latex>
                  </p>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <div className="flex-1 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <span className="text-[11px] font-black text-blue-600">작은아빠 데이터 분석 및 추가 문제 준비 중...</span>
                  </div>
                </div>
              </div>
              
              <div className="h-1 bg-orange-400 w-full opacity-30"></div>
            </div>
          ))}
        </div>
      )}

      {/* 시스템 가이드 (수아 대상) */}
      <div className="p-6 bg-gray-900 rounded-3xl text-white space-y-2">
        <h3 className="text-sm font-black">💡 시스템 가이드</h3>
        <ul className="text-[11px] text-gray-400 leading-relaxed list-disc list-inside mt-1">
          <li>리뷰 모드에서 요청한 취약 문항들이 이곳에 누적된다.</li>
          <li>해당 데이터를 바탕으로 추가 훈련 셋을 배포한다.</li>
          <li>필요한건 시간 낭비하지 말고 즉시 요청해라.</li>
        </ul>
      </div>
    </div>
  );
}