/**
 * 작성일: 2026-04-28
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: [수학] 중1-1 소인수분해 15문항 (묶음 A. 연산의 계보)
 * 변경 내역: 오답 복구 모드(Review)를 위한 보기별 개별 해설(rationale) 구조 적용 및 주관식 단위 입력 조건 명시
 */

import { Question } from '@/types/question';

export const math_m1_1_questions: Question[] = [
  {
    id: "m1-1-001", 
    unitId: "m1-1", 
    type: "choice",
    question: "다음 중 소수인 것은?",
    options: [
      { text: "1", rationale: "1은 소수도 아니고 합성수도 아니야." },
      { text: "9", rationale: "9는 약수가 1, 3, 9로 세 개라서 합성수야." },
      { text: "15", rationale: "15는 약수가 1, 3, 5, 15로 합성수야." },
      { text: "17", rationale: "정답! 17은 1과 자기 자신(17)만을 약수로 가지는 소수야." },
      { text: "21", rationale: "21은 약수가 1, 3, 7, 21로 합성수야." }
    ],
    answer: 4, 
    explanation: "소수는 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수야."
  },
  {
    id: "m1-1-002", 
    unitId: "m1-1", 
    type: "choice",
    question: "60을 소인수분해했을 때, 소인수를 모두 고른 것은?",
    options: [
      { text: "2, 3", rationale: "5도 60의 소인수야. 60은 0으로 끝나니 당연히 5의 배수지." },
      { text: "2, 5", rationale: "3도 60의 소인수야. 60은 3의 배수이기도 해." },
      { text: "2, 3, 5", rationale: "정답! $60 = 2^2 \\times 3 \\times 5$ 이므로 소인수는 2, 3, 5야." },
      { text: "3, 5", rationale: "2도 60의 소인수야. 짝수니까 2가 반드시 포함돼." },
      { text: "2, 3, 5, 10", rationale: "10은 합성수라서 소인수(소수인 인수)가 될 수 없어." }
    ],
    answer: 3,
    explanation: "$60 = 2^2 \\times 3 \\times 5$ 이므로, 밑에 해당하는 2, 3, 5가 소인수야."
  },
  {
    id: "m1-1-003", 
    unitId: "m1-1", 
    type: "short",
    question: "126에 자연수 $a$를 곱하여 어떤 자연수의 제곱이 되게 하려고 한다. 곱할 수 있는 가장 작은 자연수 $a$의 값은?",
    answer: "14",
    explanation: "제곱수가 되려면 소인수분해했을 때 지수가 모두 짝수여야 해. $126 = 2 \\times 3^2 \\times 7$ 이니까, 지수가 홀수인 2와 7을 하나씩 더 곱해줘야 해. $2 \\times 7 = 14$."
  },
  {
    id: "m1-1-004", 
    unitId: "m1-1", 
    type: "choice",
    question: "두 수 $2^2 \\times 3^2 \\times 5$ 와 $2 \\times 3^3 \\times 7$ 의 최대공약수는?",
    options: [
      { text: "$2 \\times 3$", rationale: "공통된 3의 지수 중 작은 것은 $3^1$이 아니라 $3^2$야." },
      { text: "$2 \\times 3^2$", rationale: "정답! 최대공약수는 공통된 소인수 중 지수가 같거나 작은 것을 선택해." },
      { text: "$2^2 \\times 3^2$", rationale: "$2^2$은 두 번째 수에 없어서 공통된 약수가 아니야." },
      { text: "$2 \\times 3^3$", rationale: "$3^3$은 첫 번째 수에 없어서 공통된 약수가 아니야." },
      { text: "$2^2 \\times 3^3$", rationale: "이건 두 수의 최소공배수를 구할 때의 방식이야." }
    ],
    answer: 2,
    explanation: "최대공약수는 공통된 소인수(2와 3) 중에서 지수가 작거나 같은 것을 선택하므로 $2 \\times 3^2$ 이 정답이야."
  },
  {
    id: "m1-1-005", 
    unitId: "m1-1", 
    type: "short",
    question: "세 수 12, 18, 30의 최소공배수를 구하시오.",
    answer: "180",
    explanation: "$12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$, $30 = 2 \\times 3 \\times 5$. 최소공배수는 모든 소인수를 쓰고 지수는 같거나 큰 것을 택해. $2^2 \\times 3^2 \\times 5 = 180$."
  },
  {
    id: "m1-1-006", 
    unitId: "m1-1", 
    type: "short",
    question: "1부터 20까지의 자연수 중 소수의 개수를 구하시오.",
    answer: "8",
    explanation: "2, 3, 5, 7, 11, 13, 17, 19로 총 8개야."
  },
  {
    id: "m1-1-007", 
    unitId: "m1-1", 
    type: "choice",
    question: "합성수에 대한 설명으로 옳은 것은?",
    options: [
      { text: "약수가 1개뿐인 수", rationale: "약수가 1개뿐인 수는 '1' 하나밖에 없어." },
      { text: "약수가 2개인 수", rationale: "약수가 1과 자기 자신뿐인 수는 '소수'라고 해." },
      { text: "약수가 3개 이상인 수", rationale: "정답! 1과 자기 자신 외에도 약수가 존재하는 수가 합성수야." },
      { text: "모든 짝수", rationale: "2는 짝수지만 약수가 1과 2뿐인 소수야." },
      { text: "1과 소수", rationale: "합성수는 1도 아니고 소수도 아닌 수야." }
    ],
    answer: 3,
    explanation: "합성수는 1보다 큰 자연수 중 소수가 아닌 수로, 약수가 3개 이상인 수야."
  },
  {
    id: "m1-1-008", 
    unitId: "m1-1", 
    type: "choice",
    question: "다음 중 소인수분해가 바르게 된 것은?",
    options: [
      { text: "$20 = 2 \\times 10$", rationale: "10은 소수가 아니야. $20 = 2^2 \\times 5$ 로 고쳐야 해." },
      { text: "$36 = 2^2 \\times 3^2$", rationale: "정답! 36은 4 곱하기 9이므로 바르게 소수들만의 곱으로 분해됐어." },
      { text: "$45 = 5 \\times 9$", rationale: "9는 소수가 아니야. $45 = 3^2 \\times 5$ 로 고쳐야 해." },
      { text: "$54 = 2 \\times 3^2$", rationale: "$2 \\times 3^2 = 18$이야. 54는 $2 \\times 3^3$이야." },
      { text: "$75 = 3 \\times 5$", rationale: "$3 \\times 5 = 15$야. 75는 $3 \\times 5^2$이야." }
    ],
    answer: 2,
    explanation: "소인수분해는 오직 소수들의 곱으로만 나타내야 해. 10이나 9 같은 합성수가 섞여 있으면 틀린 표기야."
  },
  {
    id: "m1-1-009", 
    unitId: "m1-1", 
    type: "short",
    question: "$2^2 \\times 3^3$ 의 약수의 개수를 구하시오.",
    answer: "12",
    explanation: "소인수분해 된 상태에서 각 소인수의 지수에 1을 더한 후 서로 곱해. $(2+1) \\times (3+1) = 3 \\times 4 = 12$개야."
  },
  {
    id: "m1-1-010", 
    unitId: "m1-1", 
    type: "choice",
    question: "다음 두 수가 서로소인 것은?",
    options: [
      { text: "3과 9", rationale: "공약수로 3이 있어서 서로소가 아니야." },
      { text: "4와 6", rationale: "둘 다 짝수라서 공약수 2를 가져." },
      { text: "7과 14", rationale: "공약수로 7이 있어서 서로소가 아니야." },
      { text: "8과 15", rationale: "정답! 8($2^3$)과 15($3 \\times 5$)는 1 외에 공통된 약수가 없어." },
      { text: "12와 18", rationale: "공약수 2, 3, 6 등을 가지므로 서로소가 아니야." }
    ],
    answer: 4,
    explanation: "서로소는 최대공약수가 1뿐인 두 수의 관계를 말해."
  },
  {
    id: "m1-1-011", 
    unitId: "m1-1", 
    type: "short",
    question: "$72 = 2^a \\times 3^b$ 일 때, $a + b$ 의 값은?",
    answer: "5",
    explanation: "$72 = 8 \\times 9 = 2^3 \\times 3^2$. 따라서 $a=3, b=2$ 이므로 합은 5야."
  },
  {
    id: "m1-1-012", 
    unitId: "m1-1", 
    type: "short",
    question: "사과 24개와 귤 36개를 가능한 한 많은 학생에게 남김없이 똑같이 나누어 주려고 한다. 몇 명에게 나누어 줄 수 있는가? (단, 단위 없이 숫자만 입력하시오.)",
    answer: "12",
    explanation: "24와 36의 최대공약수를 구하는 문제야. $24=2^3 \\times 3, 36=2^2 \\times 3^2$ 이므로 최대공약수는 $2^2 \\times 3 = 12$명이야."
  },
  {
    id: "m1-1-013", 
    unitId: "m1-1", 
    type: "short",
    question: "A버스는 10분 간격, B버스는 15분 간격으로 출발한다. 두 버스가 오전 8시에 동시에 출발했을 때, 처음으로 다시 동시에 출발하는 시각은 오전 8시 몇 분인가? (단, 단위 없이 숫자만 입력하시오.)",
    answer: "30",
    explanation: "10과 15의 최소공배수를 구해야 해. 30분이므로 정답은 30이야."
  },
  {
    id: "m1-1-014", 
    unitId: "m1-1", 
    type: "short",
    question: "어떤 수로 25를 나누면 1이 남고, 38을 나누면 2가 남는다. 이러한 수 중 가장 큰 수는?",
    answer: "12",
    explanation: "$25-1=24, 38-2=36$ 을 나누어떨어지게 하는 가장 큰 수, 즉 24와 36의 최대공약수인 12야."
  },
  {
    id: "m1-1-015", 
    unitId: "m1-1", 
    type: "short",
    question: "두 수 $A, B$의 최대공약수가 6, 최소공배수가 36이다. $A=12$ 일 때, $B$의 값은?",
    answer: "18",
    explanation: "두 수의 곱은 최대공약수와 최소공배수의 곱과 같아. $A \\times B = G \\times L$. $12 \\times B = 6 \\times 36 = 216$. 따라서 $B = 18$이야."
  }
];