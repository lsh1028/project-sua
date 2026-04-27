/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: 퀴즈 데이터 및 미션 객체 구조 정의
 */

export interface AnswerOption {
  text: string;
  rationale: string;
  isCorrect: boolean;
}

export interface Question {
  questionNumber: number;
  question: string;
  answerOptions: AnswerOption[];
  hint: string;
  imageUrl?: string; 
  svgCode?: string;  
}

export interface Mission {
  missionId: string;
  title: string;
  category: 'MATH' | 'ENGLISH' | 'KOREAN';
  questions: Question[];
}