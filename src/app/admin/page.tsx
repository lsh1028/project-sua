/**
 * 작성일: 2026-05-03
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 관리자 전용 오답 상담 모니터링 대시보드 (보안, 일괄 프롬프트 추출, 간소화 UI 적용 및 모바일 반응형 가로스크롤 최적화)
 */

'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { getAllUsersStats } from '@/lib/firebase/service';
import { Question } from '@/types/question';

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

// ✅ 관리자 진입용 암호 (필요시 변경 가능)
const ADMIN_PASSWORD = '1028';

interface RequestItem {
  uid: string;
  email: string;
  unitId: string;
  questionId: string;
  questionData?: Question;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
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
    // 인증되지 않았다면 데이터를 불러오지 않음
    if (!isAuthenticated) return;

    const fetchRequests = async () => {
      try {
        const users = await getAllUsersStats();
        const extractedRequests: RequestItem[] = [];

        users.forEach((user) => {
          const simReqs = user.data.similarQuestionRequests || {};
          // ✅ 이메일 정보가 있으면 최우선으로 사용, 없으면 UID 표기
          const userIdentifier = user.data.email || user.uid; 
          
          Object.keys(simReqs).forEach((unitId) => {
            const questionIds: string[] = simReqs[unitId];
            questionIds.forEach((qId) => {
              // 원본 문제 데이터 매칭
              const qData = allQuestions.find((q) => q.id === qId);
              extractedRequests.push({
                uid: user.uid,
                email: userIdentifier,
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
  }, [isAuthenticated, allQuestions]);

  // ✅ 암호 확인 처리
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
      setPasswordInput('');
    }
  };

  // ✅ 모든 문제 일괄 AI 프롬프트 생성 및 복사 기능
  const handleBulkCopyPrompt = () => {
    if (requests.length === 0) {
      alert("요청된 문제가 없습니다.");
      return;
    }

    let promptText = `다음 ${requests.length}개의 문제들에 대해 각각 완전히 동일한 논리 구조와 난이도를 가진 '유사 문제'를 1개씩 만들어줘.\n데이터 포맷은 기존 문제 파일 규격(JSON/Object)에 맞춰 배열 형태로 작성해줘.\n\n`;

    requests.forEach((req, idx) => {
      promptText += `[요청 ${idx + 1}]\n`;
      promptText += `- 단원 ID: ${req.unitId}\n`;
      promptText += `- 문제 ID: ${req.questionId}\n`;
      if (req.questionData) {
        promptText += `- 발문: ${req.questionData.question}\n`;
        if (req.questionData.passage) promptText += `- 지문: ${req.questionData.passage}\n`;
      } else {
        promptText += `- 경고: 로컬 데이터에서 문제 내용을 찾을 수 없음.\n`;
      }
      promptText += `\n`;
    });

    navigator.clipboard.writeText(promptText)
      .then(() => alert(`${requests.length}개 문제의 AI 프롬프트가 클립보드에 일괄 복사되었습니다. 대화창에 붙여넣기 하세요.`))
      .catch(() => alert("복사 실패. 브라우저 권한을 확인하세요."));
  };

  // 보안(로그인) 화면
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-center space-y-5 w-full max-w-sm">
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">ADMIN ACCESS</h1>
            <p className="text-xs text-gray-400 font-bold">관리자 전용 페이지입니다.</p>
          </div>
          <input 
            type="password" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="비밀번호 입력"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-center text-lg font-bold tracking-widest focus:outline-none focus:border-blue-500 transition-colors"
            autoFocus
          />
          <button type="submit" className="w-full py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
            접속하기
          </button>
        </form>
      </div>
    );
  }

  // 대시보드 화면
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen text-gray-900">
      <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {/* ✅ break-keep 추가: 글자 "드"가 밀려 내려가는 현상 방지 */}
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter break-keep">관리자 대시보드</h1>
          <p className="text-xs md:text-sm text-gray-500 font-bold mt-1">실시간 인입된 유사 문제 일괄 처리 시스템</p>
        </div>
        <button 
          onClick={handleBulkCopyPrompt}
          className="px-6 py-3 bg-blue-600 text-white text-sm font-black rounded-xl hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap"
        >
          {requests.length}개 문제 일괄 프롬프트 복사
        </button>
      </header>

      {/* ✅ overflow-x-auto 추가: 표가 화면 밖으로 넘치면 가로 스크롤 생성 */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">
        {/* ✅ min-w-[600px] 추가: 표 너비가 모바일 화면폭에 억지로 구겨지지 않도록 최소 폭 지정 */}
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-gray-900 text-white text-xs uppercase tracking-widest">
              {/* ✅ whitespace-nowrap 추가: 제목 줄바꿈 방지 */}
              <th className="p-4 w-16 text-center whitespace-nowrap">No</th>
              <th className="p-4 whitespace-nowrap">요청자 식별</th>
              <th className="p-4 whitespace-nowrap">단원 정보</th>
              <th className="p-4 whitespace-nowrap">문제 ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan={4} className="p-10 text-center text-gray-400 font-bold">데이터 로딩 중...</td>
              </tr>
            ) : requests.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-10 text-center text-gray-400 font-bold">
                  현재 인입된 요청이 없습니다.
                </td>
              </tr>
            ) : (
              requests.map((req, idx) => (
                <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                  <td className="p-4 text-center text-xs font-bold text-gray-400">{idx + 1}</td>
                  {/* ✅ max-w-[200px] truncate 추가: 이메일이 너무 길면 줄임표(...) 처리 및 title로 전체 보기 지원 */}
                  <td className="p-4 font-bold text-sm text-gray-700 max-w-[200px] truncate" title={req.email}>
                    {req.email}
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-black whitespace-nowrap">
                      {req.unitId}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-sm text-gray-500 font-bold whitespace-nowrap">
                    {req.questionId}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}