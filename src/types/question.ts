/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 1,200제 문제 데이터베이스 표준 규격 및 학습 로그 스키마
 * 업데이트: 국어/영어 지문(passage), 수학 도형/그래프(imageUrl) 지원 추가
 */

export type QuestionType = 'choice' | 'short';

/** * 객관식 보기 구조체 
 */
export interface AnswerOption {
  text: string;         // 보기 텍스트 (Latex 지원)
  rationale: string;    // 해당 보기가 오답이거나 정답인 구체적 이유
}

export interface Question {
  id: string;             // 문제 고유 번호 (예: m1-1-001)
  unitId: string;         // 소속 단원 ID (예: m1-1)
  type: QuestionType;     // 문제 유형
  
  // [추가됨] 국어/영어의 긴 지문이나 수학의 조건 박스
  passage?: string;       
  
  // [추가됨] 수학 도형, 그래프 등 첨부 이미지 URL
  imageUrl?: string;      

  question: string;       // 발문 (문제 내용)
  options?: AnswerOption[]; // 객관식 보기
  answer: number | string;// 정답 (객관식: 1~5 인덱스, 주관식: 텍스트)
  explanation: string;    // 전체 총평 해설
}

/** * ✅ 학습 결과 로그 데이터 구조 (Store의 호출 규격에 맞게 수정)
 */
export interface StudyLog {
  unitId: string;           // 진행 중인 단원 ID
  solvedCount: number;      // 푼 문제 수
  solvedAt: any;            // 학습 일시
  wrongQuestionIds: string[]; // 틀린 문제 ID 리스트
  userId?: string;          // 유저 ID (Service에서 병합됨)
}

export interface UserStats {
  unitProgress: Record<string, number>; // 각 단원별 진행도 (문제 번호)
  wrongAnswers: Record<string, string[]>; // 단원별 오답 ID 리스트
  streak: number;                       // 연속 학습 일수
  lastLoginDate: string | null;         // 마지막 로그인 날짜
  careerPath: string | null;            // 설정된 꿈/목표
}