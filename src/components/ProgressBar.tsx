// src/components/ProgressBar.tsx 내용 재확인
import React from 'react';

interface Props {
  current: number;
  total: number;
}

const ProgressBar: React.FC<Props> = ({ current, total }) => {
  // total이 0일 경우를 대비한 방어 로직
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
      <div 
        className="bg-blue-600 h-full transition-all duration-700 ease-out flex items-center justify-end pr-2 text-[10px] text-white font-bold"
        style={{ width: `${percentage}%` }}
      >
        {percentage > 0 && `${percentage}%`}
      </div>
    </div>
  );
};

export default ProgressBar;