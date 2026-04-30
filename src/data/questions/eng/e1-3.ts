/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: [영어] 중1 조동사 Part 1 (1~10문항)
 * 변경 내역: 조동사 뒤 동사원형 규칙, can(능력/허락/요청), may(추측/허락), must(의무/강한 추측)의 의미 구분 및 부정문 훈련
 * have to의 시제/인칭 변화, must not과 don't have to의 의미 구분, should(충고) 및 조동사 종합 훈련
 */

import { Question } from '@/types/question';

export const eng_e1_3_questions: Question[] = [
  {
    id: "e1-3-001",
    unitId: "e1-3",
    type: "choice",
    question: "다음 빈칸에 들어갈 알맞은 단어는?\nMy father can __________ delicious spaghetti.",
    options: [
      { text: "cooks", rationale: "조동사 뒤에는 주어가 3인칭 단수라도 동사에 -s를 붙이지 않는다." },
      { text: "cooked", rationale: "조동사 뒤에는 과거형 동사를 쓸 수 없다." },
      { text: "cooking", rationale: "조동사 뒤에는 -ing 형태를 쓸 수 없다." },
      { text: "cook", rationale: "정답! 조동사(can) 뒤에는 무조건 꼬리가 없는 '동사원형'이 와야 한다." },
      { text: "to cook", rationale: "조동사 뒤에 to부정사는 올 수 없다." }
    ],
    answer: 4,
    explanation: "조동사의 제1법칙! 조동사(can, will, must, may, should) 뒤에는 어떤 일이 있어도 '동사원형'만 써야 한다."
  },
  {
    id: "e1-3-002",
    unitId: "e1-3",
    type: "choice",
    question: "다음 중 밑줄 친 'can'의 쓰임이 나머지 넷과 **다른** 하나는?",
    options: [
      { text: "He **can** speak three languages.", rationale: "외국어를 말할 수 있는 '능력'을 나타낸다." },
      { text: "I **can** swim fast.", rationale: "수영을 빨리 할 수 있는 '능력'을 나타낸다." },
      { text: "She **can** play the piano well.", rationale: "피아노를 잘 칠 수 있는 '능력'을 나타낸다." },
      { text: "You **can** go home now.", rationale: "정답! 지금 집에 가도 좋다는 '허락'을 나타낸다." },
      { text: "They **can** run 100 meters in 13 seconds.", rationale: "빨리 달릴 수 있는 '능력'을 나타낸다." }
    ],
    answer: 4,
    explanation: "can은 보통 '~할 수 있다(능력)'로 쓰이지만, 'You can ~'처럼 상대방에게 '~해도 좋다'라고 '허락'할 때도 자주 쓰인다."
  },
  {
    id: "e1-3-003",
    unitId: "e1-3",
    type: "short",
    passage: "수아는 친구에게 자신의 자전거를 빌려 써도 좋다고 말하고 싶다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n너는 내 자전거를 사용해도 좋아.\n-> You (      ) use my bike.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "can",
    explanation: "'허락(~해도 좋다)'을 나타내는 조동사 can(또는 may)을 써야 한다."
  },
  {
    id: "e1-3-004",
    unitId: "e1-3",
    type: "choice",
    question: "다음 대화의 밑줄 친 부분과 바꿔 쓸 수 있는 것은?\nA: **Can** I use your phone?\nB: Sure, go ahead.",
    options: [
      { text: "Must", rationale: "Must I ~?는 '제가 꼭 ~해야 합니까?(의무)'라는 뜻이다." },
      { text: "Should", rationale: "Should I ~?는 '제가 ~해야 할까요?(조언 구함)'라는 뜻이다." },
      { text: "Will", rationale: "Will I ~?는 잘 쓰지 않으며, Will you ~?는 부탁을 나타낸다." },
      { text: "May", rationale: "정답! '제가 ~해도 될까요?'라고 정중하게 허락을 구할 때는 Can I ~? 와 May I ~? 를 서로 바꿔 쓸 수 있다." },
      { text: "Am", rationale: "Am I use~?는 어법상 틀린 구조이다." }
    ],
    answer: 4,
    explanation: "허락을 구하는 조동사 can과 may는 쓰임이 같다. May I ~? 가 Can I ~? 보다 약간 더 정중한 표현이다."
  },
  {
    id: "e1-3-005",
    unitId: "e1-3",
    type: "short",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 단어를 쓰시오.\nShe can solve the math problem.\n= She (      ) able to solve the math problem.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "is",
    explanation: "능력을 나타내는 can은 'be able to'로 바꿔 쓸 수 있다. 주어가 3인칭 단수 현재(She)이므로 be동사는 is를 써야 한다."
  },
  {
    id: "e1-3-006",
    unitId: "e1-3",
    type: "choice",
    question: "다음 문장의 밑줄 친 'must'와 의미가 같은 것은?\nIt's raining outside. You **must** take an umbrella.",
    options: [
      { text: "You **must** be tired after the long trip.", rationale: "긴 여행 후이니 '피곤함에 틀림없다'라는 강한 추측이다." },
      { text: "She **must** be a doctor. She's wearing a white coat.", rationale: "의사가운을 입고 있으니 '의사임에 틀림없다'라는 강한 추측이다." },
      { text: "We **must** obey the traffic rules.", rationale: "정답! 주어진 문장은 비가 오니 우산을 '가져가야만 한다'라는 의무이다. 교통규칙을 '지켜야 한다'도 의무를 나타낸다." },
      { text: "He **must** know the secret. He looks guilty.", rationale: "비밀을 '알고 있음에 틀림없다'라는 강한 추측이다." },
      { text: "The story **must** be true.", rationale: "이야기가 '사실임에 틀림없다'라는 강한 추측이다." }
    ],
    answer: 3,
    explanation: "must는 '반드시 ~해야 한다(의무)'와 '~임에 틀림없다(강한 추측)' 두 가지 뜻을 가진다. 문맥을 보고 구분하는 문제가 시험에 100% 출제된다."
  },
  {
    id: "e1-3-007",
    unitId: "e1-3",
    type: "short",
    passage: "엄마가 밤늦게까지 컴퓨터 게임을 하는 수아에게 경고한다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n너는 늦게까지 깨어 있어서는 안 된다.\n-> You (      ) not stay up late.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "must",
    explanation: "'~해서는 안 된다'라는 강한 금지를 나타낼 때는 조동사 must의 부정형인 'must not'을 사용한다."
  },
  {
    id: "e1-3-008",
    unitId: "e1-3",
    type: "choice",
    passage: "A: Look at that man. He is eating a hamburger.\nB: He __________ be hungry. He skipped lunch today.",
    question: "위 대화의 빈칸에 들어갈 가장 알맞은 말은?",
    options: [
      { text: "must", rationale: "정답! 오늘 점심을 굶었으니 '배가 고픔에 틀림없다'라는 강한 확신을 담은 추측이다. 이럴 때는 must를 쓴다." },
      { text: "can", rationale: "can은 능력이나 허락을 나타낸다." },
      { text: "cannot", rationale: "cannot은 '~일 리가 없다'는 뜻으로, 문맥과 반대된다." },
      { text: "should not", rationale: "should not은 '~하지 말아야 한다'는 충고이다." },
      { text: "may not", rationale: "may not은 '~가 아닐지도 모른다'는 약한 추측이다." }
    ],
    answer: 1,
    explanation: "must가 추측으로 쓰일 때(~임에 틀림없다)의 반대말은 must not(~이 아님에 틀림없다 X)이 아니라, **cannot(~일 리가 없다)**이라는 점을 꼭 명심해!"
  },
  {
    id: "e1-3-009",
    unitId: "e1-3",
    type: "short",
    question: "다음 괄호 안의 단어들을 바르게 배열하여 문장을 완성할 때, 두 번째에 오는 단어를 쓰시오.\n( the truth / not / may / it / be ).\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "may",
    explanation: "조동사가 있는 문장의 부정문은 조동사 바로 뒤에 not을 붙인다. '그것은 사실이 아닐지도 모른다'라는 문장으로 배열하면 'It may not be the truth.'가 되므로 두 번째 단어는 may이다."
  },
  {
    id: "e1-3-010",
    unitId: "e1-3",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "May I help you?", rationale: "May I ~? 는 허락이나 제안을 나타내는 올바른 표현이다." },
      { text: "He will can swim well next year.", rationale: "정답! 조동사 2개(will과 can)를 나란히 쓸 수는 없다. He will be able to swim ~ 으로 고쳐야 한다." },
      { text: "She may be at home now.", rationale: "may가 '~일지도 모른다'라는 약한 추측으로 쓰였다." },
      { text: "You must wear a uniform.", rationale: "must가 '~해야 한다'라는 의무로 쓰였다." },
      { text: "Can you pass me the salt?", rationale: "Can you ~? 는 상대방에게 무언가를 부탁할 때 쓰는 올바른 표현이다." }
    ],
    answer: 2,
    explanation: "조동사의 또 다른 대원칙! 조동사는 절대 2개를 연달아 쓸 수 없다. will과 can을 같이 쓰고 싶다면, can을 똑같은 뜻을 가진 be able to로 바꿔서 'will be able to'로 써야 한다."
  },
  {
    id: "e1-3-011",
    unitId: "e1-3",
    type: "choice",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 들어갈 알맞은 말은?\nYou must finish the work today.\n= You __________ finish the work today.",
    options: [
      { text: "has to", rationale: "주어가 You이므로 has를 쓸 수 없다." },
      { text: "have to", rationale: "정답! 의무를 나타내는 must(~해야 한다)는 have to와 같은 뜻으로 바꿔 쓸 수 있다." },
      { text: "should to", rationale: "should 뒤에는 to가 올 수 없다." },
      { text: "must to", rationale: "must 뒤에 to가 올 수 없다." },
      { text: "can", rationale: "can은 능력이나 허락을 나타낸다." }
    ],
    answer: 2,
    explanation: "must가 '~해야 한다(의무)'라는 뜻일 때는 'have to'로 완벽하게 바꿔 쓸 수 있어. 주어가 3인칭 단수면 'has to'로 형태를 맞춰줘야 한다는 것도 잊지 마!"
  },
  {
    id: "e1-3-012",
    unitId: "e1-3",
    type: "short",
    passage: "수아는 어제 학교에 일찍 가야만 했다고 영어로 쓰고 싶다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n나는 어제 학교에 일찍 가야 했다.\n-> I (      ) to go to school early yesterday.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "had",
    explanation: "must는 과거형이 없기 때문에, '과거에 ~해야만 했다'라고 쓸 때는 반드시 have to의 과거형인 'had to'를 빌려와야 해."
  },
  {
    id: "e1-3-013",
    unitId: "e1-3",
    type: "choice",
    question: "다음 중 밑줄 친 부분의 우리말 해석으로 가장 알맞은 것은?\nTomorrow is a holiday. You **don't have to** get up early.",
    options: [
      { text: "일찍 일어나서는 안 된다", rationale: "금지를 나타내는 표현은 must not 이다." },
      { text: "일찍 일어날 수 없다", rationale: "cannot get up early 의 해석이다." },
      { text: "일찍 일어날 필요가 없다", rationale: "정답! don't have to는 '~할 필요가 없다(불필요)'라는 뜻이다." },
      { text: "일찍 일어나야만 한다", rationale: "have to나 must의 해석이다." },
      { text: "일찍 일어나는 것이 좋다", rationale: "should나 had better의 해석이다." }
    ],
    answer: 3,
    explanation: "중등 영어 최고 난이도 함정! must와 have to는 긍정문일 땐 뜻이 같지만, 부정문이 되면 뜻이 완전히 달라져. must not은 '절대 하면 안 돼!(강한 금지)', don't have to는 '굳이 할 필요 없어(불필요)'야."
  },
  {
    id: "e1-3-014",
    unitId: "e1-3",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "I have to do my homework.", rationale: "have to + 동사원형. 올바르다." },
      { text: "She has to wear glasses.", rationale: "주어가 3인칭 단수(She)이므로 has to를 쓴다. 올바르다." },
      { text: "He doesn't has to go there.", rationale: "정답! doesn't라는 조동사가 왔으므로 뒤에는 무조건 동사원형인 have to가 와야 한다. (doesn't have to)" },
      { text: "They don't have to worry about it.", rationale: "주어가 복수이므로 don't have to가 맞다." },
      { text: "We had to wait for an hour.", rationale: "과거형 had to. 올바르다." }
    ],
    answer: 3,
    explanation: "have to는 조동사처럼 쓰이지만 모양은 '일반동사'야. 그래서 부정문을 만들 때 must not처럼 쓰지 않고 don't/doesn't/didn't의 도움을 받아. 당연히 그 뒤엔 '동사원형' have가 와야겠지?"
  },
  {
    id: "e1-3-015",
    unitId: "e1-3",
    type: "short",
    question: "다음 문장을 의문문으로 바꿀 때 빈칸에 알맞은 단어를 쓰시오.\nMina has to practice the violin.\n-> (      ) Mina have to practice the violin?\n(단, 알파벳 첫 글자는 대문자로 시작하는 1단어를 입력하시오.)",
    answer: "Does",
    explanation: "have to는 일반동사 취급을 하므로 의문문을 만들 때 Do/Does/Did를 문장 맨 앞으로 보낸다. 주어가 3인칭 단수(Mina)이므로 Does로 시작한다."
  },
  {
    id: "e1-3-016",
    unitId: "e1-3",
    type: "choice",
    passage: "A: I have a bad cold. I feel terrible.\nB: You __________ go and see a doctor.",
    question: "위 대화의 빈칸에 들어갈 가장 자연스러운 조동사는?",
    options: [
      { text: "cannot", rationale: "의사에게 갈 수 없다는 뜻이 되어 문맥상 어색하다." },
      { text: "should", rationale: "정답! 아픈 친구에게 병원에 가보라고 부드럽게 '충고/조언(~하는 것이 좋겠다)'을 하고 있으므로 should가 가장 자연스럽다." },
      { text: "may", rationale: "병원이 가도 좋다는 '허락'의 의미는 이 상황에서 어색하다." },
      { text: "will", rationale: "미래의 강한 의지를 나타내므로 조언과는 거리가 있다." },
      { text: "have", rationale: "조동사가 아니며 have to로 쓰여야 한다." }
    ],
    answer: 2,
    explanation: "should는 must나 have to보다 훨씬 부드러운 뉘앙스야. 친구에게 '너 ~하는 게 좋겠어'라고 따뜻하게 조언이나 충고를 건넬 때 가장 많이 쓰는 필수 조동사지."
  },
  {
    id: "e1-3-017",
    unitId: "e1-3",
    type: "choice",
    passage: "(A) You must not take pictures in the museum.\n(B) You don't have to bring your umbrella. It stopped raining.",
    question: "위 두 문장의 밑줄 친 부분의 의미를 바르게 짝지은 것은?",
    options: [
      { text: "(A) 할 필요가 없다 - (B) 해서는 안 된다", rationale: "두 의미가 반대로 짝지어졌다." },
      { text: "(A) 할 수 없다 - (B) 할 필요가 없다", rationale: "must not은 강한 금지이다." },
      { text: "(A) 해서는 안 된다 - (B) 할 필요가 없다", rationale: "정답! (A) 박물관에서 사진을 찍는 것은 강하게 금지되므로 must not, (B) 비가 그쳤으니 우산을 가져갈 필요가 없으므로 don't have to가 맞다." },
      { text: "(A) 해서는 안 된다 - (B) 해서는 안 된다", rationale: "don't have to는 금지가 아니다." },
      { text: "(A) 할 필요가 없다 - (B) 할 필요가 없다", rationale: "must not은 불필요가 아니다." }
    ],
    answer: 3,
    explanation: "실제 내신 시험에서 가장 많이 나오는 문맥 파악 문제야. 규칙을 어기는 상황(박물관, 도서관, 극장)에는 must not을, 이미 해결된 상황(비가 그침, 숙제를 다 함)에는 don't have to를 쓴다."
  },
  {
    id: "e1-3-018",
    unitId: "e1-3",
    type: "short",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 단어를 쓰시오.\nI must wash my hands before dinner.\n= I (      ) to wash my hands before dinner.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "have",
    explanation: "현재 시제의 must는 have to로 바꿔 쓸 수 있다. 주어가 I 이므로 have를 쓴다."
  },
  {
    id: "e1-3-019",
    unitId: "e1-3",
    type: "choice",
    question: "다음 중 조동사가 포함된 문장의 어법이 **틀린** 것을 모두 고르시오.\n(a) He can drives a car.\n(b) Will she help us tomorrow?\n(c) You should to listen to your parents.\n(d) Must I finish this now?",
    options: [
      { text: "(a), (b)", rationale: "(b)는 조동사 의문문 어순(Will+S+동사원형)이 올바르다." },
      { text: "(a), (c)", rationale: "정답! (a)는 조동사 뒤 동사원형 규칙을 어겨 drives라 썼고, (c)는 should 뒤에 to를 써서 틀렸다. 조동사 뒤에는 오직 동사원형만 와야 한다." },
      { text: "(b), (c)", rationale: "(b)는 올바른 문장이다." },
      { text: "(c), (d)", rationale: "(d)는 조동사 의문문 어순(Must+S+동사원형)이 올바르다." },
      { text: "(a), (d)", rationale: "(d)는 올바른 문장이다." }
    ],
    answer: 2,
    explanation: "조동사 규칙 총정리! 1. 조동사 뒤에는 동사원형. 2. 조동사 의문문은 조동사가 주어 앞으로. 3. 조동사는 두 개를 연달아 쓸 수 없음. 이 3가지만 기억하면 조동사 문법은 끝이야."
  },
  {
    id: "e1-3-020",
    unitId: "e1-3",
    type: "short",
    passage: "수아는 내일 시험이 있어서 친구와의 약속을 거절해야 한다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n나는 내일 파티에 갈 수 없어. 공부를 해야만 해.\n-> I (      ) go to the party tomorrow. I have to study.\n(단, 알파벳 소문자 1단어 축약형으로 입력하시오.)",
    answer: "can't",
    explanation: "'~할 수 없다'는 능력을 부정하는 표현이므로 cannot 또는 can't를 사용한다."
  }
];