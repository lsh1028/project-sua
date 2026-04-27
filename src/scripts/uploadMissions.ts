/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: JSON 데이터를 Firestore에 일괄 주입하는 자동화 스크립트
 */

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

// 기존 .env.local 설정을 수동으로 입력하거나 환경 변수를 불러와야 합니다.
const firebaseConfig = {
  apiKey: "AIzaSyAyP-HqeJ6JHLbf33mO4tVOKxXyYnuXTFY",
  authDomain: "project-sua.firebaseapp.com",
  projectId: "project-sua",
  storageBucket: "project-sua.firebasestorage.app",
  messagingSenderId: "61150429920",
  appId: "1:61150429920:web:aa51ecba389a9d93f44685"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const MISSION_ID = "mission_01";

// 수아를 위한 맞춤형 첫 미션 데이터 (중학 결손 보강 중심)
const missionData = {
  title: "기초 연산 및 문법 복구 패치",
  questions: [
    {
      questionNumber: 1, // 수학 (중1 유리수)
      question: "다음 수식의 결과는? $(-2)^2 + (-3) \\times 4$",
      hint: "거듭제곱을 먼저 계산하고 곱셈을 처리하세요.",
      answerOptions: [
        { text: "-8", isCorrect: true, rationale: "$4 + (-12) = -8$ 입니다." },
        { text: "4", isCorrect: false, rationale: "부호 계산을 다시 확인해 보세요." }
      ]
    },
    {
      questionNumber: 2, // 수학 (중2 일차방정식)
      question: "방정식 $2x - 4 = 10$ 에서 $x$의 값은?",
      hint: "$-4$를 우변으로 이항하면 $+4$가 됩니다.",
      answerOptions: [
        { text: "7", isCorrect: true, rationale: "$2x = 14$ 이므로 $x = 7$ 입니다." },
        { text: "3", isCorrect: false, rationale: "이항 시 부호 변경에 주의하세요." }
      ]
    },
    {
      questionNumber: 3, // 영어 (동사 시제)
      question: "Next month, my family _______ to Jeju Island.",
      hint: "미래를 나타내는 표현 'Next month'에 주목하세요.",
      answerOptions: [
        { text: "will go", isCorrect: true, rationale: "미래의 계획이나 예정은 will 또는 be going to를 사용합니다." },
        { text: "went", isCorrect: false, rationale: "went는 과거형입니다." }
      ]
    },
    {
      questionNumber: 4, // 영어 (어휘)
      question: "'집중하다'라는 뜻을 가진 구동사는?",
      hint: "f로 시작하는 단어와 on이 만납니다.",
      answerOptions: [
        { text: "Focus on", isCorrect: true, rationale: "Focus on은 ~에 집중하다라는 뜻입니다." },
        { text: "Look for", isCorrect: false, rationale: "~를 찾다라는 뜻입니다." }
      ]
    },
    {
      questionNumber: 5, // 언어 (어휘/성어)
      question: "어떤 일이 처음부터 끝까지 변함없음을 뜻하는 사자성어는?",
      hint: "한 일(一), 꿸 관(貫) 자가 들어갑니다.",
      answerOptions: [
        { text: "일취월장", isCorrect: false, rationale: "날마다 달마다 발전한다는 뜻입니다." },
        { text: "초지일관", isCorrect: true, rationale: "처음 세운 뜻을 끝까지 밀고 나감을 의미합니다." }
      ]
    }
  ]
};

async function upload() {
  console.log("데이터 주입 시작...");
  
  // 1. 미션 문서 생성
  await setDoc(doc(db, "missions", MISSION_ID), { title: missionData.title });
  
  // 2. 하위 질문 컬렉션 주입
  const questionsCol = collection(db, "missions", MISSION_ID, "questions");
  for (const q of missionData.questions) {
    await setDoc(doc(questionsCol), q);
  }
  
  console.log("데이터 주입 완료! 이제 브라우저를 확인하세요.");
}

upload();