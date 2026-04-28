/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 리뷰 모드 시 오답/정답 동시 노출 UI 및 주관식 읽기 전용 복구 로직이 적용된 최종 엔진
 */

'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { math_m1_1_problems } from '@/data/problems/math/m1-1';
import { Problem } from '@/types/problem';
import { useProgressStore } from '@/store/useProgressStore';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

type MissionPhase = 'TEST' | 'RESULT' | 'REVIEW';

function MissionContent() {
  const searchParams = useSearchParams();
  const unitId = searchParams.get('id');
  const router = useRouter();

  const { 
    progress, updateProgress, recordWrongAnswers, resolveWrongAnswer, 
    wrongAnswers, saveUserSelection, userSelections: storeUserSelections,
    requestSimilarProblem 
  } = useProgressStore();

  const [isInit, setIsInit] = useState(false); 
  const [phase, setPhase] = useState<MissionPhase>('TEST');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userSelections, setUserSelections] = useState<Record<number, any>>({}); 
  const [shortAnswerInput, setShortAnswerInput] = useState(''); 
  const [activeRationaleIdx, setActiveRationaleIdx] = useState<number | null>(null);
  const [elapsedSec, setElapsedSec] = useState(0);

  const problems = unitId === 'm1-1' ? math_m1_1_problems : [];
  const totalQuestions = problems.length;
  const currentQ: Problem = problems[currentIdx];

  // 1. 세션 복원 및 스마트 재진입
  useEffect(() => {
    if (!unitId || totalQuestions === 0 || isInit) return;

    if (progress[unitId] === totalQuestions && (wrongAnswers[unitId] || storeUserSelections[unitId])) {
      setPhase('REVIEW');
      setUserSelections(storeUserSelections[unitId] || {});
      setCurrentIdx(0);
    } else {
      const savedSelections = storeUserSelections[unitId] || {};
      setUserSelections(savedSelections);
      
      let firstUnsolved = 0;
      for (let i = 0; i < totalQuestions; i++) {
        const ans = savedSelections[i];
        if (ans === undefined || String(ans).trim() === '') {
          firstUnsolved = i;
          break;
        }
      }
      setCurrentIdx(firstUnsolved);
    }
    setIsInit(true);
  }, [unitId, totalQuestions, progress, wrongAnswers, storeUserSelections, isInit]);

  // 타이머
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === 'TEST') {
      timer = setInterval(() => setElapsedSec(prev => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [phase]);

  // TEST 모드일 때만 주관식 입력창 값을 기존 답안으로 세팅
  useEffect(() => {
    if (phase === 'TEST') {
      setShortAnswerInput(userSelections[currentIdx] || '');
    }
  }, [currentIdx, phase, userSelections]);

  // 리뷰 모드 해설 자동 개방
  useEffect(() => {
    if (phase === 'REVIEW' && currentQ?.type === 'choice') {
      setActiveRationaleIdx(Number(currentQ.answer) - 1);
    }
  }, [currentIdx, phase, currentQ]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (!unitId || problems.length === 0) {
    return (
      <div className="p-5 h-screen flex flex-col items-center justify-center text-center space-y-4">
        <div className="text-5xl">🚧</div>
        <h2 className="text-xl font-black text-gray-900">문제를 준비 중이에요!</h2>
        <Link href="/library" className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm">서재로 돌아가기</Link>
      </div>
    );
  }

  const answeredCount = Object.values(userSelections).filter(v => v !== undefined && String(v).trim() !== '').length;
  const isAllAnswered = answeredCount === totalQuestions;

  const handleSelectInTest = (selection: any) => {
    setUserSelections(prev => ({ ...prev, [currentIdx]: selection }));
  };

  const handleShortAnswerChange = (val: string) => {
    setShortAnswerInput(val);
    setUserSelections(prev => ({ ...prev, [currentIdx]: val }));
  };

  const commitCurrentSelection = () => {
    const currentAns = userSelections[currentIdx];
    if (unitId && currentAns !== undefined) {
      saveUserSelection(unitId, currentIdx, currentAns);
      const currentAnsweredCount = Object.values({ ...userSelections, [currentIdx]: currentAns }).filter(v => v !== undefined && String(v).trim() !== '').length;
      updateProgress(unitId, currentAnsweredCount);
    }
  };

  const handlePrev = () => {
    if (phase === 'TEST') commitCurrentSelection();
    setCurrentIdx(prev => prev - 1);
  };

  const handleNext = () => {
    if (phase === 'TEST') commitCurrentSelection();
    setCurrentIdx(prev => prev + 1);
  };

  const finishTest = () => {
    if (!confirm("모든 답안을 제출하고 채점하시겠습니까?")) return;

    commitCurrentSelection();

    const wrongIds: string[] = [];
    problems.forEach((p, idx) => {
      const userVal = String(userSelections[idx] || '').trim();
      const answerVal = String(p.answer).trim();
      if (userVal !== answerVal) {
        wrongIds.push(p.id);
      }
    });

    updateProgress(unitId, totalQuestions);
    recordWrongAnswers(unitId, wrongIds);
    setPhase('RESULT');
  };

  // ✅ 변경점: 주관식은 클릭 확인 절차 없이 바로 복구되도록 분기 처리
  const handleResolve = () => {
    if (!unitId) return;

    if (currentQ.type === 'short') {
      resolveWrongAnswer(unitId, currentQ.id);
      alert("오답이 해결되었습니다! 실력이 한 뼘 더 자랐어요.");
      return;
    }

    const isChoiceCorrect = currentQ.type === 'choice' && String(activeRationaleIdx! + 1) === String(currentQ.answer);
    if (isChoiceCorrect) {
      resolveWrongAnswer(unitId, currentQ.id);
      alert("오답이 해결되었습니다! 실력이 한 뼘 더 자랐어요.");
    } else {
      alert("다시 한번 생각해보세요!");
    }
  };

  if (phase === 'RESULT') {
    const score = totalQuestions - (wrongAnswers[unitId]?.length || 0);
    return (
      <div className="p-5 min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm text-center">
          <h2 className="text-3xl font-black mb-2 italic">SCORE</h2>
          <div className="text-6xl font-black text-blue-600 mb-2">{score} <span className="text-2xl text-gray-300">/ {totalQuestions}</span></div>
          <p className="text-xs text-gray-400 font-bold mb-6">소요 시간: {formatTime(elapsedSec)}</p>
          
          <div className="space-y-3 mb-8">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">분석 결과</p>
            <div className="flex flex-wrap justify-center gap-2">
              {problems.map((p, idx) => {
                const isCorrect = String(userSelections[idx] || '').trim() === String(p.answer).trim();
                return (
                  <button 
                    key={p.id}
                    onClick={() => { setPhase('REVIEW'); setCurrentIdx(idx); }} 
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 ${isCorrect ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <button onClick={() => { setPhase('REVIEW'); setCurrentIdx(0); }} className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl mb-3 shadow-lg">해설 읽고 오답 복구하기</button>
          <Link href="/library" className="block w-full text-gray-400 font-bold py-2 text-sm">서재로 돌아가기</Link>
        </div>
      </div>
    );
  }

  const isReview = phase === 'REVIEW';
  const isCorrectInReview = isReview && !wrongAnswers[unitId]?.includes(currentQ.id);

  // 주관식 정답 여부 체크 변수
  const originalUserAnswer = String(userSelections[currentIdx] || '').trim();
  const actualCorrectAnswer = String(currentQ.answer).trim();
  const originallyCorrect = originalUserAnswer === actualCorrectAnswer;

  return (
    <div className="p-5 pb-32 space-y-6">
      <div className="flex justify-between items-center pb-2">
        <button onClick={() => router.push('/library')} className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors">
          ✕ 나가기
        </button>
        {isReview ? (
          <button 
            onClick={() => { requestSimilarProblem(unitId, currentQ.id); alert("상담소에 유사 문제 풀이를 요청했습니다."); }}
            className="flex items-center space-x-1 text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full hover:bg-orange-100"
          >
            <span>🙋‍♂️ 유사 문제 요청</span>
          </button>
        ) : (
          <div className="text-xs font-black text-gray-400 bg-gray-100 px-3 py-1 rounded-full">⏱ {formatTime(elapsedSec)}</div>
        )}
      </div>

      <div className="flex items-start justify-between border-b border-gray-200 pb-4">
        <div className="flex-1 pr-4">
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full mb-2 inline-block ${isReview ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
            {isReview ? 'REVIEW MODE' : `REAL TEST (${answeredCount}/${totalQuestions} 풀이 완료)`}
          </span>
          <h1 className="text-[17px] font-black text-gray-900 leading-relaxed break-keep">
            {currentIdx + 1}. <Latex>{currentQ.question}</Latex>
          </h1>
        </div>
        <div className="text-xs font-black text-gray-400 shrink-0 pt-1 whitespace-nowrap">
          {currentIdx + 1} / {totalQuestions}
        </div>
      </div>

      {(currentQ.passage || currentQ.imageUrl) && (
        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-4 shadow-inner">
          {currentQ.passage && (
            <div className="text-sm text-gray-700 leading-loose break-keep font-medium">
              <Latex>{currentQ.passage}</Latex>
            </div>
          )}
          {currentQ.imageUrl && (
            <img src={currentQ.imageUrl} alt="문제 참조 이미지" className="w-full rounded-xl object-contain border border-gray-100 bg-white" />
          )}
        </div>
      )}

      <div className="space-y-4">
        {currentQ.type === 'choice' ? (
          currentQ.options?.map((opt, idx) => {
            const optionNum = idx + 1;
            const isSelected = String(userSelections[currentIdx]) === String(optionNum);
            const isCorrectAnswer = String(currentQ.answer) === String(optionNum);
            
            // ✅ 객관식 리뷰 모드 색상 처리: 정답은 초록, 오답 선택지는 빨강
            let borderColor = 'border-gray-200';
            let bgColor = 'bg-white';

            if (isReview) {
              if (isCorrectAnswer) {
                borderColor = 'border-green-500';
                bgColor = 'bg-green-50';
              } else if (isSelected) {
                borderColor = 'border-red-500';
                bgColor = 'bg-red-50';
              }
            } else {
              if (isSelected) {
                borderColor = 'border-blue-600';
                bgColor = 'bg-blue-50';
              }
            }

            return (
              <div key={idx} className="space-y-2">
                <button 
                  onClick={() => isReview ? setActiveRationaleIdx(idx) : handleSelectInTest(optionNum)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start space-x-3 ${borderColor} ${bgColor}`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${isSelected || (isReview && isCorrectAnswer) ? 'bg-current text-white' : 'bg-gray-100 text-gray-400'}`}
                    style={(isSelected || (isReview && isCorrectAnswer)) ? { backgroundColor: isReview ? (isCorrectAnswer ? '#10b981' : (isSelected ? '#ef4444' : '')) : '#2563eb' } : {}}>
                    {optionNum}
                  </span>
                  <div className="flex-1 text-sm font-medium"><Latex>{opt.text}</Latex></div>
                </button>
                {/* 선택한 보기에 대한 해설 노출 (복구 버튼 포함) */}
                {isReview && activeRationaleIdx === idx && (
                  <div className="mx-2 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-xs text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    <span className="font-bold text-gray-900 mr-1">해설:</span> <Latex>{opt.rationale}</Latex>
                    {isCorrectAnswer && !isCorrectInReview && (
                      <button onClick={handleResolve} className="mt-3 w-full bg-green-600 text-white font-black py-2 rounded-lg transition-transform active:scale-[0.98]">이 정답으로 오답 복구하기</button>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="space-y-4">
            {isReview ? (
              // ✅ 주관식 리뷰 모드 (읽기 전용 전시)
              <div className="space-y-3">
                {/* 틀렸을 경우 빨간색 오답 박스 노출 */}
                {!originallyCorrect && (
                  <div className="p-4 bg-red-50 rounded-2xl border-2 border-red-200 flex items-center justify-between opacity-80">
                    <span className="text-xs font-bold text-red-400">나의 오답</span>
                    <span className="text-lg font-bold text-red-600 line-through">{originalUserAnswer || '(빈칸)'}</span>
                  </div>
                )}
                
                {/* 초록색 정답 박스는 항상 노출 */}
                <div className="p-4 bg-green-50 rounded-2xl border-2 border-green-500 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-green-600">{originallyCorrect ? '나의 정답' : '실제 정답'}</span>
                  <span className="text-xl font-black text-green-700">{actualCorrectAnswer}</span>
                </div>

                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 mt-2 animate-in fade-in">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold text-gray-900 mr-2">해설:</span> <Latex>{currentQ.explanation}</Latex>
                  </p>
                  {!isCorrectInReview && (
                    <button onClick={handleResolve} className="mt-4 w-full bg-green-600 text-white font-black py-3 rounded-xl shadow-md transition-transform active:scale-[0.98]">
                      이해했습니다 (오답 복구하기)
                    </button>
                  )}
                </div>
              </div>
            ) : (
              // ✅ 주관식 TEST 모드 (입력창)
              <div className="p-4 bg-white rounded-2xl border-2 border-blue-100 shadow-sm">
                <input 
                  type="text"
                  value={shortAnswerInput}
                  onChange={(e) => handleShortAnswerChange(e.target.value)}
                  placeholder="답을 입력하세요"
                  className="w-full p-3 text-center text-lg font-bold border-b-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/90 backdrop-blur-md border-t border-gray-100 flex space-x-3 z-40 max-w-md mx-auto">
        <button 
          onClick={handlePrev} 
          disabled={currentIdx === 0} 
          className="flex-1 bg-gray-100 text-gray-500 font-bold py-4 rounded-2xl disabled:opacity-30 transition-all hover:bg-gray-200"
        >
          이전
        </button>

        {currentIdx < totalQuestions - 1 ? (
          <button 
            onClick={handleNext} 
            className="flex-[2] bg-gray-900 text-white font-bold py-4 rounded-2xl transition-all hover:bg-black"
          >
            다음
          </button>
        ) : isReview ? (
          <button 
            onClick={() => router.push('/library')} 
            className="flex-[2] bg-gray-900 text-white font-bold py-4 rounded-2xl"
          >
            서재로 복귀
          </button>
        ) : (
          <button 
            onClick={finishTest} 
            disabled={!isAllAnswered} 
            className={`flex-[2] font-bold py-4 rounded-2xl shadow-lg transition-all ${isAllAnswered ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
          >
            {isAllAnswered ? '채점하기' : '모든 답을 체크해주세요'}
          </button>
        )}
      </div>
    </div>
  );
}

export default function MissionPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center font-black text-gray-300">SYSTEM LOADING...</div>}>
      <MissionContent />
    </Suspense>
  );
}