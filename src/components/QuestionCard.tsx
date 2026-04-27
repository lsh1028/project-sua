/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: KaTeX 지원 및 반응형 UI가 적용된 강화된 퀴즈 카드
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Question } from '@/types/mission';
import 'katex/dist/katex.min.css';
import renderMathInElement from 'katex/dist/contrib/auto-render';

interface Props {
  data: Question;
  onSolve: () => void;
}

const QuestionCard: React.FC<Props> = ({ data, onSolve }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  // 수식 렌더링 엔진 가동
  useEffect(() => {
    if (cardRef.current) {
      renderMathInElement(cardRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
      });
    }
  }, [data]);

  const handleCheck = (idx: number) => {
    if (selectedIdx === null) onSolve();
    setSelectedIdx(idx);
    setShowFeedback(true);
  };

  return (
    <div ref={cardRef} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="flex items-start mb-6">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-black mr-3 mt-1">
          Q{data.questionNumber}
        </span>
        <div className="text-lg font-bold text-gray-800 leading-relaxed">
          {data.question}
        </div>
      </div>
      
      <div className="space-y-3">
        {data.answerOptions.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleCheck(idx)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              selectedIdx === idx 
                ? (opt.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
                : 'border-gray-50 bg-gray-50 hover:border-blue-200'
            }`}
          >
            <span className="text-sm font-semibold text-gray-700">{idx + 1}. {opt.text}</span>
          </button>
        ))}
      </div>

      {showFeedback && selectedIdx !== null && (
        <div className={`mt-6 p-5 rounded-xl border ${data.answerOptions[selectedIdx].isCorrect ? 'bg-green-100 border-green-200 text-green-800' : 'bg-red-100 border-red-200 text-red-800'}`}>
          <div className="font-black mb-1">{data.answerOptions[selectedIdx].isCorrect ? 'GREAT WORK!' : 'CHECK AGAIN'}</div>
          <div className="text-sm opacity-90">{data.answerOptions[selectedIdx].rationale}</div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;