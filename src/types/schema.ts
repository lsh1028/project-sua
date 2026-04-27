/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: DB 확장 스키마 및 데이터 전송 객체(DTO) 인터페이스 정의
 */

export interface UserStats {
  level: number;
  careerPath: string; // 예: '경영계열'
  stats: {
    math: number;
    language: number;
    english: number;
  };
  totalStudyTimeMs: number; // 누적 학습 시간(밀리초)
}

export interface StudyLog {
  missionId: string;
  solvedAt: Date;
  timeSpentMs: number;
  isPerfect: boolean;
  wrongQuestionNumbers: number[]; // 오답 문항 번호 배열
}