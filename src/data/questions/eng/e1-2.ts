/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: [영어] 중1 시제 (현재/과거/진행) Part 1 (1~8문항) / Part 2 (9~17문항) / Part 3 (18~25문항)
 * 변경 내역: 현재 시제의 3인칭 단수 주어 판별, 동사 -(e)s 변화 규칙, 부정문/의문문 및 불변의 진리 집중 훈련
 * 과거 시제 규칙/불규칙 변화 암기 점검, 과거 시간 부사 매칭, 과거형 부정문/의문문(did) 집중 훈련
 * 현재/과거 진행형(be + -ing) 구조 파악 및 상태/소유/감정을 나타내는 진행형 불가 동사 판별 훈련
 */

import { Question } from '@/types/question';

export const eng_e1_2_questions: Question[] = [
  {
    id: "e1-2-001",
    unitId: "e1-2",
    type: "choice",
    question: "다음 빈칸에 들어갈 동사의 형태로 가장 알맞은 것은?\nMy little sister always __________ her hands before meals.",
    options: [
      { text: "wash", rationale: "주어(My little sister)가 3인칭 단수이므로 동사원형을 쓸 수 없다." },
      { text: "washs", rationale: "sh, ch, s, x, o로 끝나는 동사는 -s가 아니라 -es를 붙여야 한다." },
      { text: "washes", rationale: "정답! 주어가 3인칭 단수(she)이고, always(항상)라는 빈도 부사가 있으므로 현재 시제를 쓴다. wash는 -es를 붙인다." },
      { text: "washing", rationale: "be동사 없이 -ing 형태만으로 동사 역할을 할 수 없다." },
      { text: "washed", rationale: "항상 반복되는 습관(always)을 나타내므로 과거형은 어색하다." }
    ],
    answer: 3,
    explanation: "주어가 '나(I)'와 '너(you)'를 제외한 제3자이면서 한 명/한 개(3인칭 단수)일 때, 현재 시제 동사에는 반드시 -(e)s를 붙여야 한다."
  },
  {
    id: "e1-2-002",
    unitId: "e1-2",
    type: "short",
    question: "다음 괄호 안의 동사를 주어에 알맞은 현재 시제 형태로 고쳐 쓰시오.\nThe baby usually ( cry ) a lot at night.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "cries",
    explanation: "주어 The baby가 3인칭 단수이다. 동사 cry처럼 '자음+y'로 끝나는 단어는 y를 i로 고치고 -es를 붙인다."
  },
  {
    id: "e1-2-003",
    unitId: "e1-2",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "I don't like spicy food.", rationale: "주어가 I이므로 don't가 맞다." },
      { text: "He doesn't plays soccer.", rationale: "정답! doesn't라는 조동사가 이미 3인칭 단수 표시를 했으므로, 뒤에는 반드시 꼬리가 없는 '동사원형(play)'이 와야 한다." },
      { text: "They don't know the answer.", rationale: "주어가 They(복수)이므로 don't가 맞다." },
      { text: "She doesn't have a brother.", rationale: "주어가 She이므로 doesn't가 오고 뒤에 원형(have)이 잘 왔다." },
      { text: "We don't watch TV often.", rationale: "주어가 We이므로 don't가 맞다." }
    ],
    answer: 2,
    explanation: "일반동사의 부정문과 의문문을 만들 때 쓰는 do/does/did는 조동사이다. 조동사 뒤에는 무조건 원래 모습 그대로인 '동사원형'을 써야 한다."
  },
  {
    id: "e1-2-004",
    unitId: "e1-2",
    type: "short",
    passage: "수아는 친구 Tom의 일과를 묻고 싶다.\n(너의 형은 매일 아침 일찍 일어나니?)",
    question: "다음 빈칸에 들어갈 알맞은 단어를 쓰시오.\n(      ) your brother get up early every morning?\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "does",
    explanation: "주어인 'your brother'는 너(you)가 아니라 너의 형(he)이므로 3인칭 단수이다. 따라서 의문문을 만들 때 Do가 아니라 Does를 써야 한다."
  },
  {
    id: "e1-2-005",
    unitId: "e1-2",
    type: "choice",
    question: "다음 문장에서 밑줄 친 부분의 쓰임이 올바른 것은?",
    options: [
      { text: "The sun **rise** in the east.", rationale: "태양은 3인칭 단수이므로 rises가 되어야 한다." },
      { text: "Water **boils** at 100 degrees Celsius.", rationale: "정답! 물이 100도에서 끓는 것은 '불변의 과학적 진리'이다. 과학적 진리나 일반적인 사실은 무조건 항상 현재 시제를 쓴다." },
      { text: "My father **go** to work by bus.", rationale: "아버지(He)는 3인칭 단수이므로 goes가 되어야 한다." },
      { text: "She **haves** a beautiful voice.", rationale: "have의 3인칭 단수형은 haves가 아니라 has이다. (불규칙)" },
      { text: "They **doesn't** study hard.", rationale: "주어가 복수(They)이므로 don't를 써야 한다." }
    ],
    answer: 2,
    explanation: "과학적 사실, 속담, 불변의 진리는 어제도 그랬고 오늘도 그러하며 내일도 그럴 것이기 때문에 항상 '현재 시제'로 고정해서 표현한다."
  },
  {
    id: "e1-2-006",
    unitId: "e1-2",
    type: "short",
    question: "다음 문장에서 어법상 틀린 단어를 찾아 알맞은 형태로 고쳐 쓰시오.\nMy friend and I studies English together.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "study",
    explanation: "가장 많이 낚이는 함정! 주어는 My friend 한 명이 아니라 'My friend and I' 즉, '우리(We)'이다. 복수 주어이므로 동사에 -s를 붙이지 않고 동사원형 study를 써야 한다."
  },
  {
    id: "e1-2-007",
    unitId: "e1-2",
    type: "choice",
    passage: "A: Does Mina enjoy reading books?\nB: _______________________",
    question: "위 대화의 빈칸에 들어갈 대답으로 가장 알맞은 것은?",
    options: [
      { text: "Yes, she do.", rationale: "Mina(she)에 대한 대답이므로 do가 아니라 does를 써야 한다." },
      { text: "Yes, she is.", rationale: "Does로 물었으므로 is로 대답할 수 없다." },
      { text: "No, she don't.", rationale: "she 뒤에는 don't가 올 수 없다." },
      { text: "No, she doesn't.", rationale: "정답! Does로 물어보는 의문문에는 주어 대명사 + does/doesn't로 대답한다." },
      { text: "No, she isn't.", rationale: "일반동사 의문문이므로 be동사로 대답할 수 없다." }
    ],
    answer: 4,
    explanation: "영어 대답의 기본 원칙은 '물어본 놈으로 대답한다'이다. Do로 물으면 do로, Does로 물으면 does로, Be동사로 물으면 be동사로 대답해야 한다."
  },
  {
    id: "e1-2-008",
    unitId: "e1-2",
    type: "short",
    question: "다음 괄호 안의 단어들을 바르게 배열하여 문장을 완성할 때, 세 번째에 오는 단어를 쓰시오.\n( play / the piano / not / does / he ) well.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "play",
    explanation: "일반동사 부정문의 어순은 '주어 + do/does/did + not + 동사원형'이다. 배열하면 He does not play the piano well. 이 되므로 세 번째 단어는 play이다."
  },
  {
    id: "e1-2-009",
    unitId: "e1-2",
    type: "choice",
    question: "다음 동사의 과거형이 바르게 짝지어지지 **않은** 것은?",
    options: [
      { text: "want - wanted", rationale: "규칙 변화. 바르다." },
      { text: "stop - stopped", rationale: "단모음+단자음으로 끝나면 자음을 하나 더 쓰고 -ed를 붙인다. 바르다." },
      { text: "study - studyed", rationale: "정답! '자음+y'로 끝나는 동사는 y를 i로 고치고 -ed를 붙여야 한다. (studied)" },
      { text: "live - lived", rationale: "-e로 끝나는 동사는 -d만 붙인다. 바르다." },
      { text: "play - played", rationale: "'모음+y'로 끝나는 동사는 그냥 -ed를 붙인다. 바르다." }
    ],
    answer: 3,
    explanation: "과거형 규칙 변화에서 가장 많이 틀리는 철자법이야. study -> studied, cry -> cried 처럼 '자음+y'는 반드시 'ied'로 변신한다는 걸 꼭 기억해."
  },
  {
    id: "e1-2-010",
    unitId: "e1-2",
    type: "choice",
    question: "다음 불규칙 동사의 현재-과거형 짝이 올바른 것은?",
    options: [
      { text: "buy - buyed", rationale: "buy의 과거형은 bought이다." },
      { text: "catch - catched", rationale: "catch의 과거형은 caught이다." },
      { text: "teach - taught", rationale: "정답! teach(가르치다)의 과거형은 taught이다." },
      { text: "find - feeled", rationale: "find의 과거형은 found이다. (feel의 과거형이 felt이다.)" },
      { text: "go - goed", rationale: "go의 과거형은 완전히 모양이 바뀌는 went이다." }
    ],
    answer: 3,
    explanation: "불규칙 동사는 이해하는 게 아니라 구구단처럼 기계적으로 튀어나오도록 암기해야 해. buy-bought, catch-caught, teach-taught 3가지는 묶어서 외워두면 편해."
  },
  {
    id: "e1-2-011",
    unitId: "e1-2",
    type: "choice",
    question: "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\nShe __________ to the library yesterday.",
    options: [
      { text: "go", rationale: "yesterday(어제)가 있으므로 과거 시제를 써야 한다." },
      { text: "goes", rationale: "현재 시제 3인칭 단수 형태이다." },
      { text: "went", rationale: "정답! yesterday라는 명백한 과거 표시어가 있으므로 go의 과거형인 went를 써야 한다." },
      { text: "going", rationale: "be동사 없이 동사 자리에 올 수 없다." },
      { text: "is go", rationale: "be동사와 일반동사 원형을 함께 쓸 수 없다." }
    ],
    answer: 3,
    explanation: "문장 맨 끝에 있는 시간 부사(yesterday, last night, ~ ago, in 과거연도)는 시제를 결정하는 가장 강력한 힌트야. 이게 보이면 무조건 동사를 과거형으로 바꿔야 해."
  },
  {
    id: "e1-2-012",
    unitId: "e1-2",
    type: "short",
    question: "다음 문장을 부정문으로 바꿀 때 빈칸에 알맞은 단어를 쓰시오.\nHe broke the window.\n-> He (      ) break the window.\n(단, 알파벳 소문자 1단어 축약형으로 입력하시오.)",
    answer: "didn't",
    explanation: "일반동사의 과거형(broke)을 부정문으로 만들 때는 주어의 인칭이나 수에 상관없이 항상 didn't (또는 did not)를 쓰고, 그 뒤에는 반드시 '동사원형(break)'을 쓴다."
  },
  {
    id: "e1-2-013",
    unitId: "e1-2",
    type: "short",
    passage: "수아는 엄마에게 어젯밤 내 방을 청소했다고 영어로 말하려고 한다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n나는 어젯밤에 내 방을 청소했다.\n-> I (      ) my room last night.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "cleaned",
    explanation: "last night(어젯밤)이라는 과거 시점이 있으므로 동사 clean에 -ed를 붙여 과거형인 cleaned로 써야 한다."
  },
  {
    id: "e1-2-014",
    unitId: "e1-2",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "I didn't watch TV yesterday.", rationale: "didn't + 동사원형. 올바르다." },
      { text: "Did she met him last weekend?", rationale: "정답! 의문문을 만들 때 조동사 Did가 과거를 이미 표시했으므로, 뒤에는 과거형 met이 아니라 동사원형 'meet'이 와야 한다." },
      { text: "They played soccer two days ago.", rationale: "과거형 규칙 변화. 올바르다." },
      { text: "We left for Seoul this morning.", rationale: "leave의 과거형 left가 바르게 쓰였다. this morning(오늘 아침)은 과거 시제와 어울린다." },
      { text: "Did you finish your homework?", rationale: "Did + 주어 + 동사원형. 올바르다." }
    ],
    answer: 2,
    explanation: "부정문이나 의문문에서 Did / didn't 가 등장하면, 그 문장의 진짜 동사는 모든 과거의 짐을 내려놓고 무조건 꼬리 없는 '동사원형'으로 돌아가야 해!"
  },
  {
    id: "e1-2-015",
    unitId: "e1-2",
    type: "choice",
    passage: "Yesterday, my family (A) go to the zoo. We (B) saw many animals there. I (C) ate ice cream, and my brother (D) took many pictures. We (E) came back home late.",
    question: "위 지문의 (A)~(E) 중 어법상 **틀린** 것은?",
    options: [
      { text: "(A)", rationale: "정답! 문장 맨 앞에 Yesterday가 있으므로 전체 시제가 과거여야 한다. go를 went로 고쳐야 한다." },
      { text: "(B)", rationale: "see의 과거형 saw. 올바르다." },
      { text: "(C)", rationale: "eat의 과거형 ate. 올바르다." },
      { text: "(D)", rationale: "take의 과거형 took. 올바르다." },
      { text: "(E)", rationale: "come의 과거형 came. 올바르다." }
    ],
    answer: 1,
    explanation: "글의 시제는 특별한 이유가 없는 한 일치해야 해. 첫 문장에 'Yesterday'가 등장했다면 그날 있었던 일련의 사건들은 모두 과거형으로 써야 자연스럽지."
  },
  {
    id: "e1-2-016",
    unitId: "e1-2",
    type: "short",
    question: "다음 괄호 안의 동사를 알맞은 형태로 고쳐 쓰시오.\nShe ( bring ) her umbrella yesterday.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "brought",
    explanation: "yesterday가 있으므로 bring의 과거형을 써야 한다. bring의 과거형은 불규칙 변화로 brought이다."
  },
  {
    id: "e1-2-017",
    unitId: "e1-2",
    type: "choice",
    question: "다음 두 문장을 하나로 연결할 때 빈칸에 들어갈 알맞은 말은?\nHe doesn't have a car now. + He didn't have a car last year.\n= He __________ a car last year, and he doesn't have one now.",
    options: [
      { text: "hasn't", rationale: "일반동사 have의 부정은 hasn't가 아니다." },
      { text: "doesn't have", rationale: "last year(작년)라는 과거 시점이므로 현재형 부정을 쓸 수 없다." },
      { text: "didn't have", rationale: "정답! last year에 맞추어 과거 부정형인 didn't + 동사원형을 써야 한다." },
      { text: "don't have", rationale: "과거 시점이 아닐뿐더러 He와도 어울리지 않는다." },
      { text: "didn't had", rationale: "didn't 뒤에는 반드시 동사원형(have)이 와야 한다." }
    ],
    answer: 3,
    explanation: "now(지금)가 있는 문장은 현재 시제로, last year(작년)가 있는 문장은 과거 시제로 명확하게 구분해서 써주는 것이 시제 파트의 핵심 목표야."
  },
  {
    id: "e1-2-018",
    unitId: "e1-2",
    type: "choice",
    question: "다음 중 현재 진행형 문장으로 바르게 구성된 것은?",
    options: [
      { text: "I am study English now.", rationale: "진행형은 'be동사 + 동사원형-ing' 형태여야 한다. (am studying)" },
      { text: "She is making a cake right now.", rationale: "정답! 주어(She)에 맞는 be동사(is)와 동사-ing(making)가 올바르게 결합된 현재 진행형 문장이다." },
      { text: "They are play soccer in the park.", rationale: "동사원형(play)이 아니라 playing이 되어야 한다." },
      { text: "He swimming in the pool.", rationale: "be동사(is)가 누락되었다." },
      { text: "We is watching TV.", rationale: "주어 We에 맞는 be동사는 are이다." }
    ],
    answer: 2,
    explanation: "진행형 시제의 가장 핵심 공식은 'be동사 + -ing'이다. 둘 중 하나라도 빠지거나 형태가 틀리면 진행형 문장이 성립하지 않는다."
  },
  {
    id: "e1-2-019",
    unitId: "e1-2",
    type: "short",
    question: "다음 빈칸에 알맞은 단어를 쓰시오.\nThey (      ) playing basketball at 3 p.m. yesterday.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "were",
    explanation: "과거의 특정 시점(at 3 p.m. yesterday)에 진행 중이던 동작을 나타내므로 '과거 진행형'을 써야 한다. 주어가 They이므로 과거형 be동사 were가 정답이다."
  },
  {
    id: "e1-2-020",
    unitId: "e1-2",
    type: "choice",
    question: "다음 문장 중 어법상 **틀린** 것은?",
    options: [
      { text: "I am listening to music now.", rationale: "listen은 동작 동사이므로 진행형이 가능하다." },
      { text: "She is wearing a blue shirt.", rationale: "wear(입고 있는 상태/동작)는 진행형으로 쓰여 '입고 있다'는 뜻을 나타낼 수 있다." },
      { text: "He is knowing the answer.", rationale: "정답! know(알다)는 머릿속의 '상태'를 나타내는 동사이므로 진행형(-ing)으로 쓸 수 없다. He knows the answer. 가 맞다." },
      { text: "They are running fast.", rationale: "run은 동작 동사이므로 진행형이 가능하다." },
      { text: "We are studying math.", rationale: "study는 동작 동사이므로 진행형이 가능하다." }
    ],
    answer: 3,
    explanation: "상태(know, believe), 감정(like, love, want), 소유(have, belong)를 나타내는 동사는 1초 만에 멈추거나 시작할 수 없는 '지속적인 상태'이므로 진행형으로 쓰지 않는 것이 원칙이다."
  },
  {
    id: "e1-2-021",
    unitId: "e1-2",
    type: "choice",
    question: "동사 'have'의 쓰임이 어법상 **틀린** 것은?",
    options: [
      { text: "I have a lot of books.", rationale: "소유(~을 가지고 있다)를 나타내는 단순 현재형. 올바르다." },
      { text: "She is having breakfast.", rationale: "have가 '먹다'라는 동작의 뜻으로 쓰일 때는 진행형이 가능하다. 올바르다." },
      { text: "We are having a good time.", rationale: "have가 '시간을 보내다'라는 뜻일 때는 진행형이 가능하다. 올바르다." },
      { text: "He is having two sisters.", rationale: "정답! have가 가족 관계나 물건을 '소유하다'라는 뜻일 때는 진행형으로 쓸 수 없다. He has two sisters. 로 고쳐야 한다." },
      { text: "They had a meeting yesterday.", rationale: "과거형. 올바르다." }
    ],
    answer: 4,
    explanation: "동사 have는 뜻에 따라 진행형 가능 여부가 달라진다. '먹다, 시간을 보내다'와 같은 동작의 의미일 때는 -ing가 가능하지만, '가지고 있다(소유)'일 때는 절대 -ing를 붙일 수 없다."
  },
  {
    id: "e1-2-022",
    unitId: "e1-2",
    type: "short",
    passage: "A: (      ) you sleeping when I called you last night?\nB: No, I was doing my homework.",
    question: "위 대화의 빈칸에 알맞은 단어를 쓰시오.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "were",
    explanation: "대답이 I was doing~(과거 진행형)이고 질문 시점이 last night이므로 과거 진행형 의문문이다. 주어가 you이므로 be동사의 과거형 were가 쓰여야 한다. (Were you ~ing?)"
  },
  {
    id: "e1-2-023",
    unitId: "e1-2",
    type: "choice",
    question: "다음 빈칸 (A)와 (B)에 들어갈 말이 알맞게 짝지어진 것은?\nHe usually ( A ) to school, but he ( B ) a bus right now.",
    options: [
      { text: "walk - takes", rationale: "주어가 He이므로 walk는 틀렸고, right now가 있으므로 takes도 틀렸다." },
      { text: "walks - is taking", rationale: "정답! usually(보통, 대개)와 같이 반복되는 습관은 '현재 시제(walks)'로 쓰고, right now(지금 당장)와 같이 현재 벌어지는 일은 '현재 진행형(is taking)'으로 쓴다." },
      { text: "is walking - takes", rationale: "시제 적용이 반대로 되었다." },
      { text: "walks - took", rationale: "right now는 현재 진행 중인 일이므로 과거형 took은 어색하다." },
      { text: "walked - is taking", rationale: "usually는 현재의 습관을 나타낸다." }
    ],
    answer: 2,
    explanation: "습관적인 행동(usually, every day)은 '단순 현재 시제'로, 지금 당장 벌어지고 있는 일(now, right now, at the moment)은 '진행 시제'로 구별해서 쓰는 것이 핵심 출제 포인트다."
  },
  {
    id: "e1-2-024",
    unitId: "e1-2",
    type: "short",
    question: "다음 문장을 부정문으로 고칠 때 빈칸에 알맞은 단어를 쓰시오.\nShe is reading a comic book.\n-> She is (      ) reading a comic book.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "not",
    explanation: "진행형 문장(be + -ing)은 be동사가 포함된 문장이므로, 부정문을 만들 때는 be동사 바로 뒤에 not을 붙인다."
  },
  {
    id: "e1-2-025",
    unitId: "e1-2",
    type: "choice",
    question: "다음 중 진행형으로 쓸 수 **없는** 동사들로만 짝지어진 것은?",
    options: [
      { text: "know, want, have(가지다)", rationale: "정답! know(인지/상태), want(감정/원함), have(소유)는 모두 진행형으로 만들 수 없는 대표적인 상태 동사들이다." },
      { text: "run, eat, sleep", rationale: "모두 동작을 나타내므로 진행형이 가능하다." },
      { text: "like, make, read", rationale: "like는 불가능하지만, make와 read는 진행형이 가능하다." },
      { text: "understand, sing, dance", rationale: "understand는 불가능하지만, sing과 dance는 진행형이 가능하다." },
      { text: "have(먹다), wash, watch", rationale: "모두 동작을 나타내므로 진행형이 가능하다." }
    ],
    answer: 1,
    explanation: "진행형(-ing)은 '지금 이 순간 역동적으로 움직이고 있는 모습'을 나타낸다. '원하다(want), 알다(know), 좋아하다(like)' 등은 마음이나 머릿속의 상태이므로 동작처럼 진행형으로 표현하지 않는다."
  }
];