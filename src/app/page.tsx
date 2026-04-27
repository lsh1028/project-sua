/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Firestore DB와 연동되어 실시간 미션을 렌더링하는 최종 메인 페이지
 */

'use client';

import { useEffect, useState } from 'react';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { Question } from '@/types/mission';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // firebase 설정 파일 경로 확인 필요

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [solvedCount, setSolvedCount] = useState(0);

  // 1. DB에서 데이터 불러오기
  useEffect(() => {
    async function fetchMission() {
      try {
        const q = query(collection(db, 'missions', 'mission_01', 'questions'), orderBy('questionNumber', 'asc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => doc.data() as Question);
        setQuestions(data);
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMission();
  }, []);

  const incrementProgress = () => {
    setSolvedCount((prev) => prev + 1);
  };

  // 2. 로딩 중 화면
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // 3. 실제 화면 렌더링
  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-gray-50">
      <div className="max-w-xl w-full pt-10">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-black text-gray-900">PROJECT SUA</h1>
          <div className="mt-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
            MISSION COMPLETE: {solvedCount} / {questions.length}
          </div>
        </header>

        <ProgressBar current={solvedCount} total={questions.length} />

        <div className="mt-8 space-y-4">
          {questions.map((q) => (
            <QuestionCard 
              key={q.questionNumber} 
              data={q} 
              onSolve={incrementProgress}
            />
          ))}
        </div>

        {questions.length > 0 && solvedCount === questions.length && (
          <div className="mt-10 p-6 bg-blue-600 rounded-2xl text-center shadow-lg animate-pulse">
            <h2 className="text-xl font-black text-white">ALL CLEAR! 🏆</h2>
            <p className="text-blue-100 text-sm mt-2">오늘의 학업 복구 패치가 완료되었습니다.</p>
          </div>
        )}
      </div>
    </main>
  );
}