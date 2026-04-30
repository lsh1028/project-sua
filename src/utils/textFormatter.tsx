import React from 'react';
import Latex from 'react-latex-next';

// 텍스트 내의 **단어** 패턴(밑줄)과 \n(줄바꿈)을 완벽하게 화면에 그려주는 헬퍼 함수
export const renderFormattedText = (text: string | undefined) => {
  if (!text) return null;

  // 1. 먼저 \n을 기준으로 줄을 나눔
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, lineIndex) => (
        <React.Fragment key={`line-${lineIndex}`}>
          {/* 2. 각 줄 내부에서 ** 강조 패턴 처리 */}
          {line.split(/\*\*(.*?)\*\*/g).map((part, partIndex) => {
            if (partIndex % 2 === 1) {
              return (
                <span 
                  key={`part-${lineIndex}-${partIndex}`} 
                  className="font-black text-gray-900"
                  style={{ 
                    textDecoration: 'underline', 
                    textUnderlineOffset: '4px', 
                    textDecorationThickness: '2px' 
                  }}
                >
                  {part}
                </span>
              );
            }
            return <Latex key={`part-${lineIndex}-${partIndex}`}>{part}</Latex>;
          })}
          {/* 3. 마지막 줄이 아니면 HTML 줄바꿈 태그(<br />) 추가 */}
          {lineIndex !== lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};