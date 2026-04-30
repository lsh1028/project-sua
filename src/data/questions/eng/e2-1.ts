/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: [영어] 중2 to부정사 Part 1 (1~12문항) / Part 2 (13~24문항) /  Part 3 (25~35문항)
 * 변경 내역: to부정사의 명사적 용법(주어, 목적어, 보어 역할) 파악, 목적어로 to부정사만을 취하는 핵심 동사 암기, 부정형(not to-v) 및 의문사+to-v 훈련
 * to부정사의 형용사적 용법(전치사 주의) 및 부사적 용법(목적, 감정의 원인 등)의 해석 구분 집중 훈련
 * 가주어/진주어(It ~ to-v), 의미상의 주어(for vs of 목적격), too~to / enough to 구문 변환 및 종합 서술형 대비 훈련
 */

import { Question } from '@/types/question';

export const eng_e2_1_questions: Question[] = [
  {
    id: "e2-1-001",
    unitId: "e2-1",
    type: "choice",
    question: "다음 문장에서 밑줄 친 to부정사가 문장 내에서 하는 역할은?\n**To learn English** is very important.",
    options: [
      { text: "주어", rationale: "정답! 문장 맨 앞에 위치하여 '~하는 것은'이라고 해석되며, 동사(is)의 주체 역할을 하는 주어이다." },
      { text: "목적어", rationale: "일반동사 뒤에서 '~하는 것을'로 해석되지 않았다." },
      { text: "보어", rationale: "be동사 뒤에서 주어를 보충 설명하지 않았다." },
      { text: "형용사", rationale: "명사를 꾸며주지 않았다." },
      { text: "부사", rationale: "'~하기 위해' 등으로 해석되지 않았다." }
    ],
    answer: 1,
    explanation: "동사 learn(배우다) 앞에 to를 붙여서 '영어를 배우는 것(은)'이라는 명사로 변신시켰어. 그리고 문장 맨 앞에 두어 당당하게 주어 자리를 차지했지!"
  },
  {
    id: "e2-1-002",
    unitId: "e2-1",
    type: "short",
    question: "다음 우리말과 같은 뜻이 되도록 빈칸에 알맞은 단어를 쓰시오.\n내 꿈은 의사가 되는 것이다.\n-> My dream is (      ) be a doctor.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "to",
    explanation: "문장의 주어(My dream)가 무엇인지 보충 설명하는 '보어' 자리에 동사가 오려면, 명사로 변신해야 해. 'be(되다)' 앞에 to를 붙여 'to be(~되는 것)'로 만들어야 완벽해진다."
  },
  {
    id: "e2-1-003",
    unitId: "e2-1",
    type: "choice",
    question: "다음 중 빈칸에 `to study`를 쓸 수 **없는** 동사는?\nShe __________ to study math harder.",
    options: [
      { text: "wants", rationale: "want는 to부정사를 목적어로 취한다." },
      { text: "hopes", rationale: "hope는 to부정사를 목적어로 취한다." },
      { text: "plans", rationale: "plan은 to부정사를 목적어로 취한다." },
      { text: "decided", rationale: "decide는 to부정사를 목적어로 취한다." },
      { text: "finished", rationale: "정답! finish(끝내다)는 과거 지향적인 동사로, 뒤에 반드시 동명사(-ing)만을 목적어로 취한다." }
    ],
    answer: 5,
    explanation: "to부정사는 '미래(~할 것)'의 느낌이 강해! 그래서 원하고(want, hope), 계획하고(plan), 결정하는(decide) 미래 지향적 동사들과 찰떡궁합이야. 반면 finish나 give up처럼 끝내고 포기하는 동사들은 to를 싫어해."
  },
  {
    id: "e2-1-004",
    unitId: "e2-1",
    type: "short",
    passage: "수아는 내일 일찍 일어나기로 결심했다.",
    question: "다음 문장에서 어법상 틀린 단어를 찾아 올바른 형태로 고쳐 쓰시오.\nI decided getting up early tomorrow.\n(단, 알파벳 소문자 2단어로 띄어쓰기를 포함하여 입력하시오.)",
    answer: "to get",
    explanation: "decide(결심하다)는 앞으로 '~할 것을' 결심하는 것이므로, 목적어 자리에 동명사(-ing)가 아니라 반드시 to부정사를 써야 한다. (getting -> to get)"
  },
  {
    id: "e2-1-005",
    unitId: "e2-1",
    type: "choice",
    question: "다음 중 어법상 올바른 문장은?",
    options: [
      { text: "I promised not to tell a lie.", rationale: "정답! to부정사의 부정을 만들 때는 반드시 to 바로 앞에 not을 붙인다. (not to-v)" },
      { text: "She expects to not fail the exam.", rationale: "not의 위치가 틀렸다. not to fail이 되어야 한다." },
      { text: "They planned to didn't go there.", rationale: "to부정사의 부정에는 조동사(didn't)를 쓰지 않는다." },
      { text: "He decided to don't eat junk food.", rationale: "to부정사의 부정에는 don't를 쓰지 않는다." },
      { text: "We hope no to rain tomorrow.", rationale: "no가 아니라 not을 써야 한다." }
    ],
    answer: 1,
    explanation: "서술형 감점 1순위! to부정사한테 '~하지 않기'라고 부정의 뜻을 입히고 싶으면 다른 거 다 필요 없고, 무조건 'to 바로 앞'에 딱 하나, **not**만 붙이면 돼."
  },
  {
    id: "e2-1-006",
    unitId: "e2-1",
    type: "short",
    passage: "수아는 다이어트를 위해 밤늦게 먹지 않기로 약속했다.",
    question: "다음 우리말에 맞게 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n나는 늦게 먹지 않기로 약속했다.\n-> I promised ( A ) to eat late.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "not",
    explanation: "promise는 to부정사를 목적어로 취하는 동사이고, '먹지 않기로'라는 부정을 표현하려면 to부정사 바로 앞에 not을 붙여야 한다."
  },
  {
    id: "e2-1-007",
    unitId: "e2-1",
    type: "choice",
    passage: "A: What are you going to do this weekend?\nB: I haven't decided ________ to do yet.",
    question: "위 대화의 빈칸에 들어갈 알맞은 단어는?",
    options: [
      { text: "how", rationale: "how to do는 '어떻게 할지(방법)'를 의미하므로 질문(무엇을 할 거니?)에 대한 대답으로 어색하다." },
      { text: "where", rationale: "where to do는 '어디서 할지'를 의미한다." },
      { text: "what", rationale: "정답! '무엇을 할지'라는 뜻의 명사구를 만드는 [의문사 + to부정사] 구문이다." },
      { text: "when", rationale: "when to do는 '언제 할지'를 의미한다." },
      { text: "who", rationale: "who to do는 '누구를 할지'가 되어 어색하다." }
    ],
    answer: 3,
    explanation: "[의문사 + to부정사]는 덩어리째로 명사처럼 쓰여. '무엇을 ~할지(what to)', '어떻게 ~할지(how to)' 등 묻는 말에 따라 의문사만 쏙쏙 바꿔 끼우면 돼."
  },
  {
    id: "e2-1-008",
    unitId: "e2-1",
    type: "short",
    passage: "수아는 새로 산 카메라의 사용법을 몰라 친구에게 묻고 있다.",
    question: "다음 우리말에 맞게 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n너는 이 카메라를 어떻게 사용하는지 아니?\n-> Do you know ( A ) to use this camera?\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "how",
    explanation: "'어떻게 ~할지, ~하는 방법'을 뜻하는 명사구를 만들려면 [how + to부정사]를 써야 한다."
  },
  {
    id: "e2-1-009",
    unitId: "e2-1",
    type: "choice",
    question: "다음 밑줄 친 to부정사의 쓰임이 <보기>와 같은 것은?\n<보기> I want **to travel** around the world.",
    options: [
      { text: "I went to the park **to meet** him.", rationale: "만나기 위해(부사적 용법 - 목적)." },
      { text: "He needs a chair **to sit** on.", rationale: "앉을 의자(형용사적 용법)." },
      { text: "We expected **to win** the game.", rationale: "정답! <보기>는 want의 목적어(~하는 것을)로 쓰인 명사적 용법이다. 이 문장도 expect의 목적어로 쓰인 명사적 용법이다." },
      { text: "I was glad **to see** you again.", rationale: "만나서 기쁘다(부사적 용법 - 감정의 원인)." },
      { text: "**To learn** English is fun.", rationale: "같은 명사적 용법이지만, 목적어가 아닌 '주어' 역할이다." }
    ],
    answer: 3,
    explanation: "<보기>의 문장은 '나는 원한다 / 여행하는 것(을)'. 즉, 일반동사 뒤에서 '을/를'로 해석되는 목적어 역할(명사적 용법)이야. 보기 중에서 목적어 역할을 하는 것을 찾으면 돼."
  },
  {
    id: "e2-1-010",
    unitId: "e2-1",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "I don't know what to say.", rationale: "[what + to부정사] 명사구 역할. 올바르다." },
      { text: "She learned how to drive a car.", rationale: "[how + to부정사] 명사구 역할. 올바르다." },
      { text: "Please tell me where to go.", rationale: "[where + to부정사] 명사구 역할. 올바르다." },
      { text: "He asked me when to start.", rationale: "[when + to부정사] 명사구 역할. 올바르다." },
      { text: "I wonder why to choose this one.", rationale: "정답! 의문사 중 'why'는 절대로 to부정사와 함께 결합하여 쓸 수 없다. (why to-v 불가)" }
    ],
    answer: 5,
    explanation: "이건 고등학교 어법 문제로도 종종 나오는 함정이야. 의문사+to부정사(what to, how to, where to, when to, who to)는 다 되지만, 오직 **'why to'**라는 표현은 영어에 존재하지 않아!"
  },
  {
    id: "e2-1-011",
    unitId: "e2-1",
    type: "short",
    question: "다음 괄호 안의 두 형태 중 어법상 알맞은 것을 고르시오.\nMy parents expected me ( pass / to pass ) the exam.\n(단, 알파벳 소문자 2단어로 띄어쓰기를 포함하여 입력하시오.)",
    answer: "to pass",
    explanation: "expect, want, tell, ask 등의 동사는 5형식 문장에서 목적격 보어 자리에 반드시 'to부정사'를 취한다."
  },
  {
    id: "e2-1-012",
    unitId: "e2-1",
    type: "choice",
    question: "다음 문장들을 5형식으로 바르게 전환한 것은?\nMom told me. + \"Wash your hands.\"",
    options: [
      { text: "Mom told me wash your hands.", rationale: "동사원형이 오면 사역/지각동사 구조가 되어 틀리다." },
      { text: "Mom told me washing my hands.", rationale: "tell은 목적격 보어로 -ing를 취하지 않는다." },
      { text: "Mom told me washed my hands.", rationale: "과거분사는 수동의 의미일 때 쓰는데, 내가 손을 씻는 것은 능동이다." },
      { text: "Mom told me to wash my hands.", rationale: "정답! tell + 목적어 + to부정사 구조로, '엄마는 나에게 내 손을 씻으라고 말씀하셨다'라는 완벽한 5형식 문장이다." },
      { text: "Mom told to me wash my hands.", rationale: "tell 뒤에는 전치사 없이 바로 목적어가 온다." }
    ],
    answer: 4,
    explanation: "5형식 문장(주어 + 동사 + 목적어 + 목적격보어)에서 목적어가 '~하도록' 시킬 때, 사역동사(make, have, let)가 아닌 이상 대부분의 동사(tell, want, ask)는 안전하게 'to부정사'를 쓴다고 생각하면 돼!"
  },
  {
    id: "e2-1-013",
    unitId: "e2-1",
    type: "choice",
    question: "다음 밑줄 친 to부정사 중 '형용사적 용법'으로 쓰인 것은?",
    options: [
      { text: "He went to the store **to buy** some milk.", rationale: "우유를 사기 위해 (부사적 용법 - 목적)." },
      { text: "My hobby is **to collect** old coins.", rationale: "동전을 수집하는 것 (명사적 용법 - 보어)." },
      { text: "I have a lot of homework **to do** today.", rationale: "정답! '해야 할' 숙제라는 뜻으로 앞의 명사(homework)를 꾸며주는 형용사적 용법이다." },
      { text: "She wants **to be** a famous singer.", rationale: "유명한 가수가 되는 것을 원한다 (명사적 용법 - 목적어)." },
      { text: "I am happy **to see** you again.", rationale: "만나서 기쁘다 (부사적 용법 - 감정의 원인)." }
    ],
    answer: 3,
    explanation: "형용사적 용법의 가장 큰 특징은 항상 '명사 뒤'에 바짝 붙어서 그 명사를 꾸며준다는 거야. 해석은 '~할, ~하는'으로 자연스럽게 떨어져."
  },
  {
    id: "e2-1-014",
    unitId: "e2-1",
    type: "short",
    passage: "수아는 친구에게 마실 물이 좀 필요하다고 말하고 싶다.",
    question: "다음 우리말에 맞게 빈칸 (A), (B)에 들어갈 알맞은 단어를 순서대로 쓰시오.\n나는 마실 물이 약간 필요하다.\n-> I need some water ( A ) ( B ).\n(단, 알파벳 소문자로 띄어쓰기로 구분하여 입력하시오.)",
    answer: "to drink",
    explanation: "'마실' 물이므로 명사 water 뒤에 to부정사인 to drink를 써서 꾸며주어야 한다."
  },
  {
    id: "e2-1-015",
    unitId: "e2-1",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "I need a pen to write with.", rationale: "펜을 가지고(with) 쓰는 것이므로 올바르다." },
      { text: "She has no friends to talk to.", rationale: "친구에게(to) 말하는 것이므로 올바르다." },
      { text: "He bought a house to live in.", rationale: "집 안에서(in) 사는 것이므로 올바르다." },
      { text: "Give me a piece of paper to write on.", rationale: "종이 위에(on) 쓰는 것이므로 올바르다." },
      { text: "I am looking for a chair to sit.", rationale: "정답! 의자 위에(on) 앉는 것이므로 'to sit on'이라고 전치사를 꼭 써주어야 한다." }
    ],
    answer: 5,
    explanation: "형용사적 용법에서 시험에 가장 많이 나오는 '전치사' 함정이야! '명사 + to + 자동사' 구조일 때는 반드시 뒤에 짝꿍 전치사(on, with, in, to)가 남아 있어야 문장이 완성돼."
  },
  {
    id: "e2-1-016",
    unitId: "e2-1",
    type: "short",
    question: "다음 문장에서 빠진 단어 한 개를 맨 끝에 추가하여 올바른 문장으로 고쳐 쓰시오.\nI have no one to talk.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "to",
    explanation: "누군가'에게' 말하는 것이므로 talk to(~에게 말하다)가 되어야 한다. (talk with도 가능하지만 가장 일반적인 to를 권장)"
  },
  {
    id: "e2-1-017",
    unitId: "e2-1",
    type: "choice",
    question: "다음 밑줄 친 to부정사의 용법이 나머지 넷과 **다른** 하나는?",
    options: [
      { text: "I went to the library **to study** math.", rationale: "수학을 공부하기 위해 (목적)" },
      { text: "She worked hard **to pass** the exam.", rationale: "시험에 통과하기 위해 (목적)" },
      { text: "He woke up early **to catch** the first train.", rationale: "첫차를 타기 위해 (목적)" },
      { text: "We use this machine **to make** coffee.", rationale: "커피를 만들기 위해 (목적)" },
      { text: "I was surprised **to hear** the news.", rationale: "정답! 소식을 '듣고서' 놀랐다는 뜻으로, 감정 형용사(surprised) 뒤에 와서 '감정의 원인'을 나타내는 부사적 용법이다. 나머지는 모두 '~하기 위해(목적)'이다." }
    ],
    answer: 5,
    explanation: "to부정사의 부사적 용법 중 90%는 '~하기 위해(목적)'로 해석돼. 하지만 바로 앞에 happy, sad, surprised 같은 '감정을 나타내는 형용사'가 있다면 그건 무조건 '~해서(감정의 원인)'로 해석해야 해."
  },
  {
    id: "e2-1-018",
    unitId: "e2-1",
    type: "short",
    passage: "수아는 그 슬픈 영화를 보고 나서 울었다고 썼다.\nI cried to watch the sad movie.",
    question: "위 문장의 to watch는 부사적 용법 중 어떤 뜻으로 해석되었는지, 괄호 안에서 가장 알맞은 것을 고르시오.\n( 목적 / 감정의원인 / 판단의근거 / 결과 )\n(단, 띄어쓰기 없이 한글로만 입력하시오.)",
    answer: "감정의원인",
    explanation: "cry(울다)라는 감정의 표출이나 상태 뒤에 온 to watch는 '~을 보고서(울었다)'라는 감정의 원인을 나타낸다."
  },
  {
    id: "e2-1-019",
    unitId: "e2-1",
    type: "choice",
    passage: "(A) He grew up **to be** a famous scientist.\n(B) He must be a genius **to solve** the problem so easily.",
    question: "위 두 문장의 밑줄 친 to부정사의 용법을 바르게 짝지은 것은?",
    options: [
      { text: "(A) 목적 - (B) 감정의 원인", rationale: "의미가 전혀 맞지 않는다." },
      { text: "(A) 결과 - (B) 판단의 근거", rationale: "정답! (A)는 자라서 '그 결과' 과학자가 되었다는 뜻(결과)이고, (B)는 그 문제를 쉽게 푸는 것을 '보니(근거)' 천재임에 틀림없다(must be)는 뜻(판단의 근거)이다." },
      { text: "(A) 명사적 용법 - (B) 부사적 용법", rationale: "(A)도 부사적 용법이다." },
      { text: "(A) 부사적 용법 - (B) 형용사적 용법", rationale: "(B)는 명사를 꾸미지 않으므로 형용사적 용법이 아니다." },
      { text: "(A) 목적 - (B) 결과", rationale: "해석이 맞지 않는다." }
    ],
    answer: 2,
    explanation: "'자라서 ~가 되다(grow up to be)', '살아서 ~세까지 살다(live to be)'는 부사적 용법 중 '결과'를 나타내는 대표적인 공식이야. 그리고 'must be(~임에 틀림없다)' 뒤에 오는 to부정사는 거의 100% '판단의 근거(~하는 것을 보니)'로 쓰여."
  },
  {
    id: "e2-1-020",
    unitId: "e2-1",
    type: "short",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 두 단어를 쓰시오.\nI went to the store to buy some bread.\n= I went to the store (      ) (      ) to buy some bread.\n(단, 알파벳 소문자 2단어로 띄어쓰기로 구분하여 입력하시오.)",
    answer: "in order",
    explanation: "to부정사가 '~하기 위해(목적)'로 쓰였을 때, 그 목적의 의미를 아주 명확하게 강조하고 싶으면 to 앞에 'in order' 또는 'so as'를 붙일 수 있어. (in order to-v / so as to-v)"
  },
  {
    id: "e2-1-021",
    unitId: "e2-1",
    type: "choice",
    question: "다음 중 to부정사의 용법이 <보기>와 **다른** 것은?\n<보기> I have something **to tell** you.",
    options: [
      { text: "Do you have anything **to say**?", rationale: "말할 어떤 것 (형용사적 용법)" },
      { text: "There is nothing **to eat** in the fridge.", rationale: "먹을 아무것도 (형용사적 용법)" },
      { text: "Give me something cold **to drink**.", rationale: "마실 시원한 어떤 것 (형용사적 용법)" },
      { text: "She needs a friend **to help** her.", rationale: "그녀를 도와줄 친구 (형용사적 용법)" },
      { text: "He went to the airport **to meet** his friend.", rationale: "정답! 친구를 만나기 '위해' 공항에 간 것이므로 부사적 용법(목적)이다. <보기>는 너에게 '말할' 무언가라는 형용사적 용법이다." }
    ],
    answer: 5,
    explanation: "<보기>처럼 -thing으로 끝나는 명사(something, anything, nothing)는 형용사가 뒤에서 꾸며주는데, to부정사까지 붙으면 'something + 형용사 + to-v' 어순이 돼. (마실 차가운 것: something cold to drink)"
  },
  {
    id: "e2-1-022",
    unitId: "e2-1",
    type: "short",
    passage: "수아는 배가 고파서 '먹을 따뜻한 무언가'를 찾고 있다.",
    question: "다음 우리말에 맞게 괄호 안의 세 단어를 바르게 배열하시오.\n나는 먹을 따뜻한 무언가를 원한다.\n-> I want ( to eat / warm / something ).\n(단, 알파벳 소문자 3단어로 띄어쓰기로 구분하여 입력하시오.)",
    answer: "something warm to eat",
    explanation: "-thing으로 끝나는 대명사를 꾸밀 때는 항상 '대명사 + 형용사 + to부정사'의 순서를 지켜야 해. (something -> warm -> to eat)"
  },
  {
    id: "e2-1-023",
    unitId: "e2-1",
    type: "choice",
    question: "다음 밑줄 친 to부정사를 해석할 때 가장 자연스러운 것은?\nEnglish is not easy **to learn**.",
    options: [
      { text: "배우는 것", rationale: "명사적 용법이 아니다." },
      { text: "배울", rationale: "명사를 수식하지 않는다." },
      { text: "배우기 위해", rationale: "목적을 나타내지 않는다." },
      { text: "배워서", rationale: "감정의 원인이 아니다." },
      { text: "배우기에", rationale: "정답! 앞에 있는 형용사(easy)를 꾸며주어 '배우기에 쉽지 않다'라고 해석하는 부사적 용법(형용사 수식)이다." }
    ],
    answer: 5,
    explanation: "easy, hard, difficult, dangerous 같은 형용사 바로 뒤에 to부정사가 오면, 그 형용사를 꾸며주면서 '~하기에'라고 해석하면 아주 매끄러워."
  },
  {
    id: "e2-1-024",
    unitId: "e2-1",
    type: "short",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 세 단어를 쓰시오.\nHe turned on the TV in order to watch the news.\n= He turned on the TV (      ) (      ) (      ) watch the news.\n(단, 알파벳 소문자 3단어로 띄어쓰기로 구분하여 입력하시오.)",
    answer: "so as to",
    explanation: "'in order to(~하기 위해)'와 완벽하게 똑같은 뜻으로 쓰이는 또 다른 강조 표현은 'so as to'야. 둘 다 내신 빈출 표현이니 꼭 세트로 묶어서 외워둬."
  },
  {
    id: "e2-1-025",
    unitId: "e2-1",
    type: "choice",
    question: "다음 중 밑줄 친 'It'의 쓰임이 나머지 넷과 **다른** 하나는?",
    options: [
      { text: "**It** is Friday today.", rationale: "요일을 나타내는 비인칭 주어이다." },
      { text: "**It** is raining heavily outside.", rationale: "날씨를 나타내는 비인칭 주어이다." },
      { text: "**It** is a very interesting book.", rationale: "앞서 언급된 사물을 가리키는 대명사(그것)이다." },
      { text: "**It** takes two hours to go there.", rationale: "시간이 걸리다를 나타내는 비인칭 주어이다. (여기서 to go는 진주어가 아님)" },
      { text: "**It** is difficult to learn a new language.", rationale: "정답! 뒤에 있는 진주어(to learn~)를 대신하여 문장 맨 앞에 자리만 차지하고 있는 '가주어'이다." }
    ],
    answer: 5,
    explanation: "영어는 주어가 긴 것을 극도로 싫어해. 그래서 'To learn a new language is difficult.'에서 긴 주어를 문장 맨 뒤로 던져버리고, 빈 주어 자리에 가짜 주어(가주어) 'It'을 세워둔단다. 이때 It은 '그것'이라고 해석하지 않아!"
  },
  {
    id: "e2-1-026",
    unitId: "e2-1",
    type: "short",
    passage: "수아는 아침에 일찍 일어나는 것이 불가능하다고 영어로 쓰려고 한다.",
    question: "다음 우리말에 맞게 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n일찍 일어나는 것은 불가능하다.\n-> ( A ) is impossible to get up early.\n(단, 알파벳 첫 글자는 대문자로 시작하는 1단어를 입력하시오.)",
    answer: "It",
    explanation: "뒤에 진주어 'to get up early'가 있으므로, 주어 자리에는 빈자리를 채우는 가주어 'It'을 써야 한다."
  },
  {
    id: "e2-1-027",
    unitId: "e2-1",
    type: "choice",
    question: "다음 빈칸에 공통으로 들어갈 전치사로 알맞은 것은?\n- It is important ________ us to save energy.\n- The box is too heavy ________ him to lift.",
    options: [
      { text: "of", rationale: "사람의 성격을 나타내는 형용사가 아니므로 of는 틀리다." },
      { text: "to", rationale: "의미상의 주어 앞에는 to를 쓰지 않는다." },
      { text: "for", rationale: "정답! to부정사의 행동을 직접 하는 사람(의미상의 주어)을 나타낼 때는 to부정사 바로 앞에 'for + 목적격'을 쓴다." },
      { text: "by", rationale: "의미상의 주어로 by를 쓰지 않는다." },
      { text: "about", rationale: "의미상의 주어로 about을 쓰지 않는다." }
    ],
    answer: 3,
    explanation: "to부정사의 동작을 누가 하는지 콕 집어주고 싶을 때, to부정사 바로 앞에 'for + 사람(목적격)'을 써. 이걸 문법 용어로 '의미상의 주어'라고 불러."
  },
  {
    id: "e2-1-028",
    unitId: "e2-1",
    type: "short",
    question: "다음 문장의 빈칸에 알맞은 단어를 쓰시오.\nIt is very kind (      ) you to help the old lady.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "of",
    explanation: "가장 중요한 예외 규칙! kind, nice, foolish, smart, stupid, careless 처럼 '사람의 성격이나 태도'를 나타내는 형용사가 올 때는 for가 아니라 반드시 'of + 목적격'을 써야 해."
  },
  {
    id: "e2-1-029",
    unitId: "e2-1",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "It is necessary for her to study hard.", rationale: "necessary는 성격이 아니므로 for her 가 맞다." },
      { text: "It was foolish of him to say that.", rationale: "foolish(어리석은)는 성격/태도이므로 of him 이 맞다." },
      { text: "It is hard of me to solve this puzzle.", rationale: "정답! hard(어려운)는 사물의 난이도일 뿐 사람의 성격이 아니므로, of me가 아니라 'for me'로 써야 한다." },
      { text: "It was nice of you to invite me.", rationale: "nice(친절한)는 성격/태도이므로 of you 가 맞다." },
      { text: "It is easy for them to win the game.", rationale: "easy는 성격이 아니므로 for them 이 맞다." }
    ],
    answer: 3,
    explanation: "의미상의 주어를 고를 때는 딱 하나만 봐. 바로 앞에 있는 형용사가 '사람 성격/칭찬/비난'이냐, 아니냐. 성격이면 of, 그 외의 모든 경우는 for야."
  },
  {
    id: "e2-1-030",
    unitId: "e2-1",
    type: "choice",
    passage: "The coffee was too hot for me to drink.",
    question: "위 문장과 같은 의미를 가진 문장으로 가장 알맞은 것은?",
    options: [
      { text: "The coffee was so hot that I can drink it.", rationale: "너무 뜨거워서 '마실 수 없다'는 의미가 되어야 한다." },
      { text: "The coffee was so hot that I couldn't drink it.", rationale: "정답! 'too ~ to-v(너무 ~해서 할 수 없다)'는 'so ~ that 주어 can't(couldn't)' 구문으로 바꿔 쓸 수 있다. 시제가 과거(was)이므로 couldn't와 목적어(it)까지 완벽하게 맞다." },
      { text: "The coffee was hot enough for me to drink.", rationale: "enough to는 충분히 마실 수 있다는 반대 의미이다." },
      { text: "The coffee was so hot that I couldn't drink.", rationale: "that 절 뒤에는 완전한 문장이 와야 하므로 drink의 목적어인 it이 빠지면 틀린다. (서술형 최고 오답률)" },
      { text: "The coffee was so hot that me couldn't drink it.", rationale: "that 절의 주어는 주격(I)을 써야 한다." }
    ],
    answer: 2,
    explanation: "'too ~ to-v'를 'so ~ that can't'로 바꿀 때 3가지를 조심해! 1. 시제 맞추기(can't vs couldn't), 2. 의미상 주어(for me)를 주격(I)으로 바꾸기, 3. that절 끝에 대명사 목적어(it) 살려내기!"
  },
  {
    id: "e2-1-031",
    unitId: "e2-1",
    type: "short",
    passage: "This book is so difficult that I can't read it.",
    question: "위 문장을 'too ~ to' 구문을 사용하여 바꿀 때 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n-> This book is ( A ) difficult for me to read.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "too",
    explanation: "so ~ that ~ can't 구문은 'too 형용사/부사 to-v' 구문으로 바꾼다."
  },
  {
    id: "e2-1-032",
    unitId: "e2-1",
    type: "choice",
    question: "다음 두 문장의 의미가 같도록 빈칸에 알맞은 단어가 짝지어진 것은?\nHe is rich enough to buy the sports car.\n= He is ________ rich ________ he can buy the sports car.",
    options: [
      { text: "too - to", rationale: "too ~ to는 부정의 의미(~할 수 없다)가 된다." },
      { text: "so - that", rationale: "정답! '형용사 + enough to-v(~할 만큼 충분히 ...하다)'는 긍정의 의미이므로 'so ~ that 주어 can' 구문으로 바꿔 쓸 수 있다." },
      { text: "very - that", rationale: "so ~ that 구문이어야 한다." },
      { text: "so - as", rationale: "so ~ that 구문이어야 한다." },
      { text: "enough - that", rationale: "so ~ that 구문이어야 한다." }
    ],
    answer: 2,
    explanation: "부정의 의미인 too~to(너무 ~해서 못하다)와 달리, enough to(~할 정도로 충분히)는 긍정의 의미이기 때문에 'so ~ that can'으로 변신한다는 걸 명심해!"
  },
  {
    id: "e2-1-033",
    unitId: "e2-1",
    type: "short",
    question: "다음 괄호 안의 단어들을 바르게 배열하여 문장을 완성하시오.\n그녀는 농구를 할 만큼 충분히 키가 크다.\n-> She is ( enough / tall / to play ) basketball.\n(단, 띄어쓰기로 구분하여 소문자로만 입력하시오.)",
    answer: "tall enough to play",
    explanation: "형용사/부사를 수식하는 enough는 반드시 **뒤에서 앞으로** 꾸며주어야 해. 'enough tall(X)'이 아니라 무조건 'tall enough to-v(O)' 어순이라는 것, 내신 서술형의 특급 함정이야!"
  },
  {
    id: "e2-1-034",
    unitId: "e2-1",
    type: "choice",
    passage: "It seems that she likes dogs.\n= She ________ ________ ________ like dogs.",
    question: "위 두 문장의 뜻이 같도록 빈칸에 들어갈 알맞은 말이 순서대로 짝지어진 것은?",
    options: [
      { text: "seem - to - likes", rationale: "주어가 She 이므로 seems가 되어야 하고, to 뒤에는 동사원형이 와야 한다." },
      { text: "seems - to - like", rationale: "정답! 'It seems that S V' 구문은 주어를 문장 맨 앞으로 빼서 'S seem(s) to-v' 구문으로 변환할 수 있다. 주어가 She 이므로 seems, to 뒤에는 원형 like가 온다." },
      { text: "is - seeming - to", rationale: "어색한 구문이다." },
      { text: "seems - that - likes", rationale: "that 절이 오려면 주어가 It 이어야 한다." },
      { text: "seemed - to - like", rationale: "원래 문장의 시제가 현재(seems)이므로 과거형 seemed를 쓸 수 없다." }
    ],
    answer: 2,
    explanation: "고등학교 필수 구문! 'It seems that 주어 + 동사'는 '주어 + seem(s) to부정사'로 간단하게 압축할 수 있어. 뜻은 둘 다 '~인 것 같다'야."
  },
  {
    id: "e2-1-035",
    unitId: "e2-1",
    type: "short",
    passage: "다음 문장은 수아가 쓴 영어 일기의 일부이다. 문법적으로 틀린 부분을 찾아 올바르게 고쳐 쓰려고 한다.",
    question: "다음 문장에서 틀린 단어 한 개를 찾아 올바른 형태로 고치시오.\nIt is hard of him to wake up early.\n(단, 올바른 단어 1개만 소문자로 입력하시오.)",
    answer: "for",
    explanation: "어려운(hard)이라는 형용사는 사람의 성격을 나타내지 않아. 사람 성격(kind, nice, foolish)일 때만 of를 쓰고, 나머지 모든 상황(hard, easy, impossible 등)에서는 의미상의 주어로 'for'를 써야 완벽해."
  }
];