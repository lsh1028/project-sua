/**
 * 작성일: 2026-05-03
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 관리자 전용 오답 상담 모니터링 대시보드 및 AI 프롬프트 생성기
 */

'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { getAllUsersStats } from '@/lib/firebase/service';
import { Question } from '@/types/question';
import { renderFormattedText } from '@/utils/textFormatter';

// [데이터 임포트] - ClinicPage와 동일하게 모든 문항 데이터를 가져온다.
import { math_m1_1_questions } from '@/data/questions/math/m1-1';
import { math_m1_2_questions } from '@/data/questions/math/m1-2';
import { math_m2_1_questions } from '@/data/questions/math/m2-1';
import { math_m2_2_questions } from '@/data/questions/math/m2-2';
import { math_m3_1_questions } from '@/data/questions/math/m3-1'; 
import { math_m3_2_questions } from '@/data/questions/math/m3-2'; 
import { eng_e1_1_questions } from '@/data/questions/eng/e1-1';
import { eng_e1_2_questions } from '@/data/questions/eng/e1-2';
import { eng_e1_3_questions } from '@/data/questions/eng/e1-3';
import { eng_e2_1_questions } from '@/data/questions/eng/e2-1';
import { eng_e2_2_questions } from '@/data/questions/eng/e2-2';
import { eng_e2_3_questions } from '@/data/questions/eng/e2-3';
import { eng_e3_1_questions } from '@/data/questions/eng/e3-1';
import { kor_k1_1_questions } from '@/data/questions/kor/k1-1';
import { kor_k2_1_questions } from '@/data/questions/kor/k2-1';
import { kor_k3_1_questions } from '@/data/questions/kor/k3-1';

interface RequestItem {
  uid: string;
  unitId: string;
  questionId: string;
  questionData?: Question;
}

export default function AdminDashboard() {
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 모든 문항 데이터 메모이제이션 (검색용)
  const allQuestions: Question[] = useMemo(() => [
    ...math_m1_1_questions, ...math_m1_2_questions, ...math_m2_1_questions,
    ...math_m2_2_questions, ...math_m3_1_questions, ...math_m3_2_questions,
    ...eng_e1_1_questions, ...eng_e1_2_questions, ...eng_e1_3_questions,
    ...eng_e2_1_questions, ...eng_e2_2_questions, ...eng_e2_3_questions, ...eng_e3_1_questions,
    ...kor_k1_1_questions, ...kor_k2_1_questions, ...kor_k3_1_questions
  ], []);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const users = await getAllUsersStats();
        const extractedRequests: RequestItem[] = [];

        users.forEach((user) => {
          const simReqs = user.data.similarQuestionRequests || {};
          
          Object.keys(simReqs).forEach((unitId) => {
            const questionIds: string[] = simReqs[unitId];
            questionIds.forEach((qId) => {
              // 원본 문제 데이터 매칭
              const qData = allQuestions.find((q) => q.id === qId);
              extractedRequests.push({
                uid: user.uid,
                unitId,
                questionId: qId,
                questionData: qData,
              });
            });
          });
        });

        setRequests(extractedRequests);
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, [allQuestions]);

  // ✅ AI(코딩 파트너)에게 전달할 프롬프트 복사 기능
  const handleCopyPrompt = (item: RequestItem) => {
    if (!item.questionData) {
      alert("원본 문제 데이터를 찾을 수 없습니다.");
      return;
    }

    const promptText = `다음 문제와 완전히 동일한 논리 구조와 난이도를 가진 '유사 문제'를 1개 만들어줘.
데이터 포맷은 기존 문제 파일 규격(JSON/Object)에 맞춰서 작성해줘.

[원본 문제 정보]
- 단원 ID: ${item.unitId}
- 문제 ID: ${item.questionId}
- 발문: ${item.questionData.question}
${item.questionData.passage ? `- 지문: ${item.questionData.passage}` : ''}
`;

    navigator.clipboard.writeText(promptText)
      .then(() => alert("AI 프롬프트가 클립보드에 복사되었습니다. 대화창에 붙여넣기 하세요."))
      .catch(() => alert("복사 실패. 브라우저 권한을 확인하세요."));
  };

  if (isLoading) return <div className="p-10 font-bold">데이터 로딩 중...</div>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-black tracking-tighter">관리자 대시보드</h1>
        <p className="text-sm text-gray-500 font-bold mt-1">실시간 인입된 유사 문제 요청 현황 및 프롬프트 제네레이터</p>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white text-xs uppercase tracking-widest">
              <th className="p-4">유저 UID</th>
              <th className="p-4">단원 / 문제 ID</th>
              <th className="p-4">원본 문제 미리보기</th>
              <th className="p-4 text-center">액션</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {requests.map((req, idx) => (
              <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                <td className="p-4 text-xs font-mono text-gray-400">{req.uid.substring(0, 8)}...</td>
                <td className="p-4">
                  <span className="block text-xs font-black text-blue-600">{req.unitId}</span>
                  <span className="block text-xs text-gray-500">{req.questionId}</span>
                </td>
                <td className="p-4 text-sm font-medium text-gray-700 max-w-md truncate">
                  {req.questionData ? renderFormattedText(req.questionData.question) : "데이터 없음"}
                </td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => handleCopyPrompt(req)}
                    className="px-4 py-2 bg-black text-white text-xs font-bold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    AI 프롬프트 복사
                  </button>
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan={4} className="p-10 text-center text-gray-400 font-bold">
                  현재 인입된 요청이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}