/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: [영어] 중3 분사 Part 1 (1~12문항) / Part 2 (13~24문항) / Part 3 (25~35문항)
 * 변경 내역: 현재분사(-ing)와 과거분사(p.p.)의 의미적 차이(능동/수동, 진행/완료) 구별, 명사 수식 위치(전치/후치) 파악 집중 훈련
 * 감정 분사(원인 제공 -ing / 감정 느낌 p.p.) 판별, 2형식 주격 보어 및 5형식 목적격 보어 자리의 능동/수동 관계 집중 훈련, Unit ID(e3-1) 수정 반영
 * 분사구문의 생성 원리(접속사/주어 생략), 부정형, 완료 분사구문(Having p.p.), 수동 분사구문(p.p. 시작), 부대 상황(with+O+분사) 및 절 변환 종합 훈련
 */

import { Question } from '@/types/question';

export const eng_e3_1_questions: Question[] = [
  {
    id: "e3-1-001",
    unitId: "e3-1",
    type: "choice",
    question: "현재분사와 과거분사의 의미를 바르게 설명한 것은?",
    options: [
      { text: "현재분사는 과거의 일을, 과거분사는 현재의 일을 나타낸다.", rationale: "분사는 시제가 아니라 '태(능동/수동)'와 '상태(진행/완료)'를 나타낸다." },
      { text: "현재분사는 '수동/완료'를, 과거분사는 '능동/진행'을 의미한다.", rationale: "설명이 반대로 되었다." },
      { text: "정답! 현재분사(-ing)는 '능동/진행(~하고 있는)'을, 과거분사(p.p.)는 '수동/완료(~된, ~해진)'를 의미한다.", rationale: "분사의 가장 핵심적인 개념을 정확히 설명했다." },
      { text: "현재분사는 명사를 꾸미고, 과거분사는 부사를 꾸민다.", rationale: "둘 다 형용사 역할을 하므로 명사를 꾸민다." },
      { text: "현재분사는 사물에만 쓰고, 과거분사는 사람에만 쓴다.", rationale: "사람과 사물 모두 상황에 따라 두 가지 분사를 다 쓸 수 있다." }
    ],
    answer: 3,
    explanation: "분사(Participle)는 동사를 '형용사'로 변신시킨 거야. 스스로 역동적으로 움직이면 현재분사(-ing), 남에 의해 당하거나 이미 완료된 상태면 과거분사(p.p.)를 써야 해."
  },
  {
    id: "e3-1-002",
    unitId: "e3-1",
    type: "choice",
    question: "다음 빈칸에 들어갈 알맞은 단어는?\nLook at the __________ baby in the bed.",
    options: [
      { text: "sleeps", rationale: "동사가 명사(baby)를 앞에서 꾸밀 수 없다." },
      { text: "slept", rationale: "잠이 든 상태(완료)를 강조할 때는 쓸 수 있지만, 아기가 직접 '자고 있는' 진행의 능동적 상황이므로 sleeping이 훨씬 자연스럽다." },
      { text: "sleep", rationale: "동사원형이 명사를 꾸밀 수 없다." },
      { text: "sleeping", rationale: "정답! 아기가 직접 잠을 '자고 있는' 진행과 능동의 의미이므로 현재분사(-ing)를 써야 한다." },
      { text: "to sleep", rationale: "형용사적 용법으로 쓰이려면 명사 뒤(baby to sleep)로 가야 한다." }
    ],
    answer: 4,
    explanation: "아기가 직접 자고 있는 중(진행/능동)이니까 현재분사 sleeping이야. 그리고 꾸며주는 단어가 sleeping 딱 하나일 때는 명사 '앞에서' 꾸며준다는 위치도 눈여겨봐."
  },
  {
    id: "e3-1-003",
    unitId: "e3-1",
    type: "short",
    question: "다음 괄호 안의 단어를 알맞은 형태로 고쳐 쓰시오.\nDo you know the boy ( play ) the piano over there?\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "playing",
    explanation: "소년이 직접 피아노를 '치고 있는' 능동의 의미이므로 현재분사 playing을 써야 해. 이번에는 playing the piano처럼 식구가 길어져서 명사(the boy)를 '뒤에서' 꾸며주고 있어."
  },
  {
    id: "e3-1-004",
    unitId: "e3-1",
    type: "choice",
    question: "다음 두 문장의 빈칸에 들어갈 형태가 알맞게 짝지어진 것은?\n- She is sweeping the ________ (fall) leaves.\n- I bought a ________ (use) car yesterday.",
    options: [
      { text: "falling - using", rationale: "이미 바닥에 떨어진 낙엽을 쓸고 중고차(사용된 차)를 산 것이므로 완료/수동이 알맞다." },
      { text: "fallen - used", rationale: "정답! 이미 다 땅에 떨어진(완료) 낙엽이므로 fallen, 누군가에 의해 이미 사용된(수동) 자동차이므로 used를 써야 한다." },
      { text: "falling - used", rationale: "falling leaves는 지금 허공에서 떨어지고 있는 중인 나뭇잎을 쓸고 있다는 뜻이 되어 어색하다." },
      { text: "fallen - using", rationale: "using car는 차가 스스로 무언가를 사용한다는 뜻이 되어 어색하다." },
      { text: "fall - use", rationale: "동사원형은 명사를 꾸밀 수 없다." }
    ],
    answer: 2,
    explanation: "과거분사(p.p.)는 '~당한(수동)'이라는 뜻도 있지만, '이미 다 끝난(완료)'이라는 뜻도 있어. 바닥에 이미 떨어진 낙엽(fallen leaves)과 남에 의해 사용된 중고차(used car)는 시험에 무조건 나오는 단골 단어야."
  },
  {
    id: "e3-1-005",
    unitId: "e3-1",
    type: "short",
    passage: "수아는 유리창을 깬 범인을 찾고 있다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n저 깨진 창문을 보아라.\n-> Look at that (      ) window.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "broken",
    explanation: "창문은 스스로 깨는 게 아니라 누군가에 의해 '깨진(수동)' 것이므로 break의 과거분사인 broken을 써야 한다."
  },
  {
    id: "e3-1-006",
    unitId: "e3-1",
    type: "choice",
    passage: "(A) I got an email ________ in English.\n(B) The girl ________ a letter is my sister.",
    question: "위 빈칸 (A)와 (B)에 들어갈 단어가 바르게 짝지어진 것은?",
    options: [
      { text: "writing - written", rationale: "이메일이 스스로 쓰고(능동), 소녀가 쓰여진(수동) 것이 되어 의미가 완전히 반대가 된다." },
      { text: "written - writing", rationale: "정답! (A) 이메일은 영어로 '쓰여진(수동)' 것이므로 과거분사 written, (B) 소녀는 편지를 직접 '쓰고 있는(능동)' 것이므로 현재분사 writing을 써야 한다." },
      { text: "written - written", rationale: "(B)에서 소녀가 편지를 쓰는 것은 능동이다." },
      { text: "writing - writing", rationale: "(A)에서 이메일은 스스로 글을 쓸 수 없다." },
      { text: "wrote - writing", rationale: "(A)의 wrote는 과거형 동사이므로 한 문장에 동사가 두 개가 되어 틀리다." }
    ],
    answer: 2,
    explanation: "수식받는 명사와 분사의 관계를 반드시 따져봐야 해! 이메일(email) 입장에선 쓰여지는 거니까 수동(p.p.), 소녀(girl) 입장에선 직접 쓰는 거니까 능동(-ing)이야."
  },
  {
    id: "e3-1-007",
    unitId: "e3-1",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "The crying baby is hungry.", rationale: "우는(능동) 아기. 올바르다." },
      { text: "Look at the picture painting by Picasso.", rationale: "정답! 그림은 피카소에 의해 '그려진' 것이므로 능동/진행의 painting이 아니라 수동의 과거분사 'painted'로 고쳐야 한다." },
      { text: "The boy reading a book is Tom.", rationale: "책을 읽고 있는(능동) 소년. 올바르다." },
      { text: "She fixed the broken chair.", rationale: "부서진(수동) 의자. 올바르다." },
      { text: "I like the cookies baked by my mom.", rationale: "구워진(수동) 쿠키. 올바르다." }
    ],
    answer: 2,
    explanation: "명사 뒤에 분사가 길게 붙어있을 때 그 뒤에 'by(~에 의해)'가 있다면 거의 100% 수동을 나타내는 과거분사(p.p.)가 와야 한다는 힌트야!"
  },
  {
    id: "e3-1-008",
    unitId: "e3-1",
    type: "short",
    passage: "수아는 영어로 진행되는 회의에 참석했다.",
    question: "다음 문장에서 어법상 틀린 단어를 찾아 올바른 형태로 고쳐 쓰시오.\nEnglish is a language speaking all over the world.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "spoken",
    explanation: "언어(language)는 스스로 말하는 것이 아니라 사람들에 의해 '말해지는(사용되는)' 수동의 대상이므로, speaking을 과거분사인 spoken으로 고쳐야 한다."
  },
  {
    id: "e3-1-009",
    unitId: "e3-1",
    type: "choice",
    question: "다음 밑줄 친 `-ing` 중 쓰임이 **다른** 하나는? (동명사 vs 현재분사)",
    options: [
      { text: "She is carrying a **sleeping** bag.", rationale: "잠을 자기 '위한' 가방. 용도를 나타내는 동명사이다." },
      { text: "He needs a new **walking** stick.", rationale: "걷기 '위한' 지팡이. 용도를 나타내는 동명사이다." },
      { text: "Look at the **running** dog.", rationale: "정답! 직접 '달리고 있는' 개. 진행과 능동을 나타내는 형용사 역할의 '현재분사'이다. 나머지는 모두 명사를 꾸미는 척하지만 실제로는 '용도'를 나타내는 '동명사'이다." },
      { text: "There is a **waiting** room here.", rationale: "기다리기 '위한' 방(대합실). 동명사이다." },
      { text: "I bought some **running** shoes.", rationale: "달리기 '위한' 신발(운동화). 동명사이다." }
    ],
    answer: 3,
    explanation: "동명사에서 배웠던 개념의 확장판이야! 둘 다 똑같은 -ing지만, '달리고 있는(진행)' 개는 현재분사, '달리기 위한(용도)' 신발은 동명사야. 해석으로 구분해야 해."
  },
  {
    id: "e3-1-010",
    unitId: "e3-1",
    type: "short",
    question: "다음 괄호 안의 단어를 바르게 배열하여 문장을 완성하시오.\n그 파티에 초대받은 사람들은 행복해 보였다.\n-> ( invited / the people / to the party ) looked happy.\n(단, 알파벳 소문자로 띄어쓰기로 구분하여 입력하시오.)",
    answer: "the people invited to the party",
    explanation: "분사구가 길어지면 무조건 명사 뒤로 가야 해. '사람들(the people)' + '파티에 초대받은(invited to the party)' 순서로 배열한다. (the people이 주어, looked가 본동사이다.)"
  },
  {
    id: "e3-1-011",
    unitId: "e3-1",
    type: "choice",
    passage: "Last night, I found my cat ________ under the sofa. Also, I saw a mouse ________ by the cat.",
    question: "위 빈칸에 들어갈 분사 형태가 순서대로 바르게 짝지어진 것은?",
    options: [
      { text: "hiding - catching", rationale: "쥐가 스스로 고양이를 잡을 수 없다." },
      { text: "hidden - catching", rationale: "쥐의 입장에서 잡히는 것이므로 수동이다." },
      { text: "hiding - caught", rationale: "정답! 고양이는 소파 아래 직접 '숨어있는(능동/진행)' 것이므로 hiding, 쥐는 고양이에게 '잡힌(수동)' 것이므로 과거분사 caught를 써야 한다." },
      { text: "hidden - caught", rationale: "고양이가 숨겨진 것이 아니라 스스로 숨어있는 상태를 묘사하는 것이 자연스럽다." },
      { text: "hide - catch", rationale: "동사원형은 분사 자리에 올 수 없다." }
    ],
    answer: 3,
    explanation: "5형식 문장에서 목적어와 목적격 보어(분사)의 관계를 따지는 아주 훌륭한 문장이야. 목적어(cat)가 직접 하면 -ing, 목적어(mouse)가 당하면 p.p. 를 써."
  },
  {
    id: "e3-1-012",
    unitId: "e3-1",
    type: "short",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 단어를 쓰시오.\nThe man who is wearing a black hat is my uncle.\n= The man (      ) a black hat is my uncle.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "wearing",
    explanation: "관계대명사 주격 + be동사(who is)는 생략이 가능해. 생략하고 나면 자연스럽게 현재분사(wearing) 덩어리가 명사(The man)를 뒤에서 꾸며주는 분사의 후치 수식 구조가 만들어지지."
  },
  {
    id: "e3-1-013",
    unitId: "e3-1",
    type: "choice",
    question: "감정을 나타내는 분사에 대한 설명으로 가장 알맞은 것은?",
    options: [
      { text: "사람을 꾸밀 때는 항상 현재분사(-ing)를 쓴다.", rationale: "사람이 감정을 유발할 때는 -ing를 쓸 수 있지만, 대부분 감정을 '느끼므로' 과거분사를 쓴다." },
      { text: "사물을 꾸밀 때는 항상 과거분사(p.p.)를 쓴다.", rationale: "사물은 감정을 느낄 수 없고 원인을 '제공'하므로 주로 현재분사를 쓴다." },
      { text: "정답! 감정의 '원인을 제공'할 때는 현재분사(-ing), 그 감정을 '느낄 때'는 과거분사(p.p.)를 쓴다.", rationale: "감정 분사의 핵심 원리를 정확하게 설명했다." },
      { text: "현재분사와 과거분사는 감정의 강도 차이를 나타낸다.", rationale: "강도의 차이가 아니라 능동(유발)/수동(느낌)의 차이이다." },
      { text: "감정 분사는 명사를 꾸며줄 수 없고 보어로만 쓰인다.", rationale: "an interesting book 처럼 명사를 직접 꾸며줄 수 있다." }
    ],
    answer: 3,
    explanation: "surprise, bore, excite 같은 감정 동사들은 원래 '~하게 만들다'라는 뜻이야. 그래서 그 감정을 남에게 뿜어내면 -ing, 그 감정의 화살을 맞고 느끼면 p.p.가 되는 거지!"
  },
  {
    id: "e3-1-014",
    unitId: "e3-1",
    type: "short",
    question: "다음 괄호 안의 단어를 문맥에 맞게 고쳐 쓰시오.\nThe soccer game was very ( excite ).\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "exciting",
    explanation: "축구 경기(The soccer game)는 스스로 흥분을 '느끼는(excited)' 것이 아니라, 사람들에게 흥분을 '주는(유발하는)' 원인이므로 현재분사인 exciting을 써야 한다."
  },
  {
    id: "e3-1-015",
    unitId: "e3-1",
    type: "choice",
    passage: "I was very ________ because the news was ________.",
    question: "위 빈칸에 들어갈 알맞은 말이 순서대로 짝지어진 것은?",
    options: [
      { text: "surprising - surprised", rationale: "내가 놀라움을 뿜어내고, 뉴스가 놀라움을 느낀다는 뜻이 되어 어색하다." },
      { text: "surprising - surprising", rationale: "내가 놀라움을 느낀 것이므로 surprised가 되어야 한다." },
      { text: "surprised - surprised", rationale: "뉴스는 놀라움을 느낄 수 없으므로 surprising이 되어야 한다." },
      { text: "surprised - surprising", rationale: "정답! 나(I)는 놀라움을 '느꼈으므로' surprised, 뉴스(news)는 놀라움을 '주었으므로' surprising이다." },
      { text: "surprise - surprising", rationale: "동사원형(surprise)은 보어 자리에 올 수 없다." }
    ],
    answer: 4,
    explanation: "'사람 = p.p. / 사물 = -ing' 라는 공식이 90% 이상 통하는 파트야! 사람은 감정을 느끼고, 사물은 사람에게 감정을 주니까."
  },
  {
    id: "e3-1-016",
    unitId: "e3-1",
    type: "short",
    passage: "수아는 그 수학 문제가 너무 혼란스러웠다고 말하고 싶다.",
    question: "다음 문장에서 어법상 틀린 단어를 찾아 올바른 형태로 고쳐 쓰시오.\nThe math problem was very confused.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "confusing",
    explanation: "수학 문제(The math problem)는 혼란스러움을 느끼는(confused) 사람이 아니다. 혼란스러움을 유발하는 원인이므로 confusing으로 고쳐야 한다."
  },
  {
    id: "e3-1-017",
    unitId: "e3-1",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "The movie was deeply moving.", rationale: "영화가 감동을 '주는' 것이므로 moving(-ing). 올바르다." },
      { text: "Are you interested in history?", rationale: "사람이 흥미를 '느끼는' 것이므로 interested(p.p.). 올바르다." },
      { text: "I am very tiring today.", rationale: "정답! 내(I)가 오늘 피곤함을 '느끼는' 것이므로 tiring이 아니라 'tired'를 써야 한다." },
      { text: "The result was disappointing.", rationale: "결과가 실망감을 '주는' 것이므로 disappointing(-ing). 올바르다." },
      { text: "We were satisfied with the service.", rationale: "우리가 만족감을 '느끼는' 것이므로 satisfied(p.p.). 올바르다." }
    ],
    answer: 3,
    explanation: "I am tiring. 이라고 쓰면 '나는 남들을 피곤하게 만드는 진상이다'라는 뜻이 되어버려! 내가 피곤한 상태라면 반드시 'I am tired.' 라고 써야 해."
  },
  {
    id: "e3-1-018",
    unitId: "e3-1",
    type: "choice",
    question: "다음 문장의 빈칸에 들어갈 알맞은 단어는?\nShe sat ________ on the sofa.",
    options: [
      { text: "read", rationale: "동사가 연달아 두 개(sat read) 올 수 없다." },
      { text: "to read", rationale: "소파 위에서 책을 읽기 '위해' 앉았다는 부사적 용법도 가능하지만, 분사 구문(동시 동작)이 더 자연스럽다." },
      { text: "reading", rationale: "정답! 2형식 동사(sit) 뒤에서 주어의 동시 동작(~하면서)을 나타내는 주격 보어로 현재분사 reading이 가장 알맞다." },
      { text: "readed", rationale: "과거형/과거분사는 read이며, 수동의 뜻도 아니다." },
      { text: "reads", rationale: "동사에 -s를 붙일 수 없다." }
    ],
    answer: 3,
    explanation: "sit, stand, lie, come, go 같은 동사 뒤에 현재분사(-ing)가 오면 '주어가 ~한 상태로(하면서) 앉아있다/서있다'라고 주어의 행동을 묘사하는 주격 보어 역할을 해."
  },
  {
    id: "e3-1-019",
    unitId: "e3-1",
    type: "short",
    passage: "수아는 팬들에게 둘러싸인 채 서 있었다.",
    question: "다음 괄호 안의 단어를 문맥에 맞게 알맞은 형태로 고쳐 쓰시오.\nShe stood ( surround ) by her fans.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "surrounded",
    explanation: "주어인 She가 팬들에게 '둘러싸여진(수동)' 상태로 서 있는 것이므로, 현재분사가 아니라 과거분사 surrounded를 주격 보어로 써야 한다. (뒤에 by가 있다는 것도 강력한 힌트!)"
  },
  {
    id: "e3-1-020",
    unitId: "e3-1",
    type: "choice",
    question: "다음 밑줄 친 부분 중 어법상 **틀린** 것은?",
    options: [
      { text: "I kept the engine **running**.", rationale: "엔진이 스스로 작동하고 있는(능동/진행) 상태이므로 running이 맞다." },
      { text: "He left the door **unlocking**.", rationale: "정답! 문(the door)은 스스로 잠금을 해제하는 것이 아니라 사람에 의해 잠금이 해제되는(수동) 것이므로, 과거분사 'unlocked'를 써야 한다." },
      { text: "I found the book very **interesting**.", rationale: "책이 흥미를 유발하는(능동) 것이므로 interesting이 맞다." },
      { text: "She had her car **repaired**.", rationale: "자동차가 수리되는(수동) 것이므로 repaired가 맞다." },
      { text: "I heard someone **knocking** on the door.", rationale: "누군가가 직접 노크하는(능동/진행) 것이므로 knocking이 맞다." }
    ],
    answer: 2,
    explanation: "5형식 문장에서 목적격 보어 자리에 어떤 분사가 오는지 묻는 문제야. 목적어(the door)와 분사(unlock)의 관계만 따져! 문은 잠기는 거니까 수동(p.p.)!"
  },
  {
    id: "e3-1-021",
    unitId: "e3-1",
    type: "short",
    passage: "수아는 미용실에서 머리를 잘랐다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n나는 어제 머리를 잘랐다.\n-> I had my hair (      ) yesterday.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "cut",
    explanation: "내 머리카락(my hair)은 스스로 자르는 게 아니라 미용사에 의해 '잘리는(수동)' 것이야. 따라서 목적격 보어 자리에 cut의 과거분사형인 cut(원형과 형태 동일)을 써야 해."
  },
  {
    id: "e3-1-022",
    unitId: "e3-1",
    type: "choice",
    passage: "A: Did you see Mina?\nB: Yes, I saw her ________ for the bus.",
    question: "위 대화의 빈칸에 들어갈 알맞은 말은?",
    options: [
      { text: "wait", rationale: "지각동사(saw)의 목적격 보어로 동사원형이 올 수 있지만, 보기 중에는 동사원형과 현재분사를 구별하는 문제이다. 현재 진행 중인 동작을 강조할 땐 -ing가 더 자연스럽다." },
      { text: "to wait", rationale: "지각동사 뒤에 to부정사는 절대 올 수 없다." },
      { text: "waiting", rationale: "정답! 지각동사(see) + 목적어(her) + 목적격 보어로 능동/진행의 의미를 강조하는 현재분사(-ing)가 쓰였다. '버스를 기다리고 있는' 그녀를 보았다는 뜻이다." },
      { text: "waited", rationale: "그녀가 기다려지는(수동) 것이 아니므로 과거분사는 틀리다." },
      { text: "waits", rationale: "동사에 -s를 붙일 수 없다." }
    ],
    answer: 3,
    explanation: "지각동사(see, hear, feel)는 목적어가 하는 행동을 직접 목격하는 거잖아? 그래서 생동감 있게 '지금 막 ~하고 있는' 진행을 강조할 때 현재분사(-ing)를 아주 즐겨 써."
  },
  {
    id: "e3-1-023",
    unitId: "e3-1",
    type: "choice",
    question: "다음 두 문장의 빈칸 (A)와 (B)에 들어갈 분사의 형태가 올바르게 짝지어진 것은?\n- She kept her eyes ( A ) while listening to music.\n- I caught him ( B ) my diary.",
    options: [
      { text: "closing - reading", rationale: "눈(eyes)은 감겨지는(수동) 것이므로 closing은 틀리다." },
      { text: "closed - read", rationale: "read(원형)는 catch의 목적격 보어로 오기 어색하다." },
      { text: "closed - reading", rationale: "정답! 눈은 신체 일부로 '감겨지는(수동)' 것이라 과거분사 closed, 그는 직접 일기장을 '읽고 있는(능동/진행)' 현장이 들킨 것이라 현재분사 reading을 쓴다." },
      { text: "closing - read", rationale: "둘 다 형태가 틀렸다." },
      { text: "close - reading", rationale: "close(원형)는 올 수 없다." }
    ],
    answer: 3,
    explanation: "keep one's eyes closed (눈을 감은 채로 있다) / keep one's fingers crossed (행운을 빌다) 처럼 신체 부위는 내 뇌의 명령을 받아 '움직여지는(수동)' 대상으로 보아 p.p.를 쓴다는 점을 기억해!"
  },
  {
    id: "e3-1-024",
    unitId: "e3-1",
    type: "short",
    passage: "수아는 미국 여행 중 자신의 영어 실력이 부족해 의사소통에 어려움을 겪었다.",
    question: "다음 문장에서 어법상 틀린 단어 한 개를 찾아 올바른 형태로 고쳐 쓰시오.\nHe couldn't make himself understanding in English.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "understood",
    explanation: "make oneself understood는 '자신의 말을 남에게 이해시키다(의사소통하다)'라는 뜻의 고난도 관용 표현이야. 내 말이 다른 사람들에게 '이해되어지는(수동)' 상황이므로 과거분사를 써야 해."
  },
  {
    id: "e3-1-025",
    unitId: "e3-1",
    type: "choice",
    passage: "As I felt very tired, I went to bed early.",
    question: "위 부사절을 분사구문으로 바르게 전환한 것은?",
    options: [
      { text: "Feel very tired, I went to bed early.", rationale: "동사원형을 쓸 수 없다." },
      { text: "Felt very tired, I went to bed early.", rationale: "과거분사는 수동의 의미이다. 내가 피곤함을 느낀 것(능동)이므로 틀리다." },
      { text: "Feeling very tired, I went to bed early.", rationale: "정답! 접속사(As) 생략, 주어(I) 같으므로 생략, 동사(felt)를 원형으로 바꾸고 -ing를 붙인 완벽한 분사구문이다." },
      { text: "To feel very tired, I went to bed early.", rationale: "to부정사는 주로 목적(~하기 위해)을 나타내어 문맥이 어색해진다." },
      { text: "Was feeling very tired, I went to bed early.", rationale: "동사가 그대로 남아있을 수 없다." }
    ],
    answer: 3,
    explanation: "분사구문 만드는 3단계 절대 공식! 1. 접속사 지우기, 2. 앞뒤 주어가 같으면 앞 주어 지우기, 3. 남은 동사를 무조건 '-ing'로 바꾸기."
  },
  {
    id: "e3-1-026",
    unitId: "e3-1",
    type: "short",
    passage: "Because she didn't know his phone number, she couldn't call him.",
    question: "위 문장을 분사구문으로 바꿀 때 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n-> ( A ) knowing his phone number, she couldn't call him.\n(단, 알파벳 첫 글자는 대문자로 시작하는 1단어를 입력하시오.)",
    answer: "Not",
    explanation: "부정문(didn't know)을 분사구문으로 만들 때는 did/do/does를 모두 버리고, 분사(-ing) 바로 앞에 부정어인 'Not'이나 'Never'만 붙이면 된다."
  },
  {
    id: "e3-1-027",
    unitId: "e3-1",
    type: "choice",
    question: "다음 분사구문의 밑줄 친 부분과 의미가 가장 가까운 접속사는?\n**Turning to the right**, you will find the bank.",
    options: [
      { text: "When (시간)", rationale: "우회전할 '때' 은행을 발견할 것이라는 의미도 가능하나 조건이 더 자연스럽다." },
      { text: "Because (이유)", rationale: "우회전했기 '때문에' 발견한다는 뜻은 어색하다." },
      { text: "If (조건)", rationale: "정답! 문맥상 '오른쪽으로 돌면(조건), 은행을 발견할 것이다'가 가장 자연스러우므로 If로 바꾸는 것이 적절하다." },
      { text: "Though (양보)", rationale: "우회전할'지라도'는 문맥에 맞지 않는다." },
      { text: "While (동시 동작)", rationale: "우회전하는 '동안'은 어색하다." }
    ],
    answer: 3,
    explanation: "분사구문은 접속사를 생략해 버렸기 때문에 문맥을 보고 알맞은 접속사를 유추해야 해. 뒤에 'will'이 오면 주로 조건(If)이나 시간(When)으로 해석하면 자연스러워."
  },
  {
    id: "e3-1-028",
    unitId: "e3-1",
    type: "short",
    passage: "As he had finished his homework, he went out to play.",
    question: "위 문장을 분사구문으로 바꿀 때 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n-> ( A ) finished his homework, he went out to play.\n(단, 알파벳 첫 글자는 대문자로 시작하는 1단어를 입력하시오.)",
    answer: "Having",
    explanation: "종속절의 시제(had finished, 대과거)가 주절의 시제(went, 과거)보다 한 시제 더 과거일 때는 단순한 V-ing가 아니라 완료형 분사구문인 'Having p.p.'를 써야 해."
  },
  {
    id: "e3-1-029",
    unitId: "e3-1",
    type: "choice",
    passage: "(          ) written in easy English, the book is good for beginners.",
    question: "위 문장의 괄호 안에서 생략된 한 단어로 가장 알맞은 것은?",
    options: [
      { text: "Have", rationale: "Have는 생략될 수 없다." },
      { text: "Having", rationale: "Having 뒤에는 p.p.가 오지만, 수동 분사구문에서 생략되는 기본 형태는 Being이다. (Having been 도 가능하나 보기 중에는 없다.)" },
      { text: "Be", rationale: "원형이 생략되지 않는다." },
      { text: "Being", rationale: "정답! 'Because it is written~'에서 접속사 지우고, 주어 지우고, is를 Being으로 바꾼 후 생략한 수동 분사구문이다." },
      { text: "Was", rationale: "Was는 생략될 수 없다." }
    ],
    answer: 4,
    explanation: "분사구문이 -ing가 아니라 갑자기 과거분사(p.p.)로 시작한다면? 그건 100% 앞에 있던 'Being'이나 'Having been'이 생략된 수동 분사구문이야!"
  },
  {
    id: "e3-1-030",
    unitId: "e3-1",
    type: "short",
    passage: "As it was a rainy day, we stayed at home.",
    question: "위 문장을 분사구문으로 바꿀 때 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n-> ( A ) being a rainy day, we stayed at home.\n(단, 알파벳 첫 글자는 대문자로 시작하는 1단어를 입력하시오.)",
    answer: "It",
    explanation: "앞 절의 주어는 비인칭 주어 'it'이고 뒷 절의 주어는 'we'로 서로 다르다! 이렇게 주어가 다를 때는 앞 주어를 절대 지우지 말고 분사(being) 앞에 그대로 살려두어야 한다. (독립 분사구문)"
  },
  {
    id: "e3-1-031",
    unitId: "e3-1",
    type: "choice",
    question: "다음 중 어법상 **틀린** 분사구문은?",
    options: [
      { text: "Smiling brightly, she answered the question.", rationale: "그녀가 밝게 웃으면서(능동) 대답한 것이므로 올바르다." },
      { text: "Left alone, the child began to cry.", rationale: "아이가 홀로 남겨진(수동) 것이므로 (Being) Left 가 올바르다." },
      { text: "Walking along the street, I met an old friend.", rationale: "내가 거리를 걷다가(능동) 만난 것이므로 올바르다." },
      { text: "Looked out of the window, I saw a bird.", rationale: "정답! 내가 창밖을 내다본 것(능동)이므로 Looked가 아니라 'Looking'으로 써야 한다." },
      { text: "Not knowing what to do, he just stood there.", rationale: "무엇을 할지 몰라서(능동/부정) 서 있던 것이므로 올바르다." }
    ],
    answer: 4,
    explanation: "분사구문의 태(능동/수동)를 결정하는 주체는 무조건 쉼표(,) 뒤에 있는 주절의 '주어'야. 나(I)는 창밖을 스스로 내다보는(능동) 것이므로 -ing를 써야 해."
  },
  {
    id: "e3-1-032",
    unitId: "e3-1",
    type: "short",
    passage: "수아는 눈을 감은 채로 음악을 듣고 있었다.",
    question: "다음 우리말에 맞게 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n그녀는 눈을 감은 채 음악을 들었다.\n-> She listened to music with her eyes ( A ).\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "closed",
    explanation: "'with + 목적어 + 분사'는 '~한 채로'라는 뜻의 동시 동작(부대 상황) 구문이야. 눈(her eyes)은 감겨지는(수동) 대상이므로 반드시 과거분사(closed)를 써야 해."
  },
  {
    id: "e3-1-033",
    unitId: "e3-1",
    type: "choice",
    question: "다음 우리말을 영어로 가장 바르게 옮긴 것은?\n그는 개가 자신을 따라오게 한 채로 산책했다.",
    options: [
      { text: "He took a walk with his dog followed him.", rationale: "개가 그를 따라오는 것은 능동이므로 과거분사를 쓸 수 없다." },
      { text: "He took a walk with his dog following him.", rationale: "정답! 개(his dog)가 직접 그를 쫓아오는(능동) 관계이므로 'with + 목적어 + 현재분사(-ing)' 구문이 완벽하게 쓰였다." },
      { text: "He took a walk with his dog to follow him.", rationale: "with 구문에는 to부정사를 쓰지 않는다." },
      { text: "He took a walk with his dog follow him.", rationale: "with 전치사 뒤에 동사원형이 올 수 없다." },
      { text: "He took a walk with his dog follows him.", rationale: "동사가 올 수 없다." }
    ],
    answer: 2,
    explanation: "with 부대 상황 구문에서도 능동/수동 판별이 핵심이야! 팔이나 다리를 꼬는 건 뇌의 명령을 받는 수동이라 crossed(p.p.)지만, 개가 따라오는 건 개 스스로 하는 능동이라 following(-ing)이야."
  },
  {
    id: "e3-1-034",
    unitId: "e3-1",
    type: "short",
    passage: "Reading a book, he fell asleep.",
    question: "위 분사구문을 부사절로 바르게 전환할 때 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n-> While he ( A ) reading a book, he fell asleep.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "was",
    explanation: "분사구문을 원래 문장으로 돌려놓는 역추적 훈련! 주절의 시제가 과거(fell)이므로 종속절의 시제도 과거로 맞춰 주어야 한다. While절의 주어가 he이므로 be동사의 과거형 was가 들어간다."
  },
  {
    id: "e3-1-035",
    unitId: "e3-1",
    type: "choice",
    question: "다음 두 문장의 뜻이 서로 **다른** 것은?",
    options: [
      { text: "Arriving at the station, I called him.\n= When I arrived at the station, I called him.", rationale: "역에 도착했을 '때'로 자연스럽게 변환되었다." },
      { text: "Being sick, she didn't go to school.\n= Because she was sick, she didn't go to school.", rationale: "아팠기 '때문에'로 자연스럽게 변환되었다." },
      { text: "Having no money, I couldn't buy it.\n= As I had no money, I couldn't buy it.", rationale: "돈이 없었기 '때문에'로 자연스럽게 변환되었다." },
      { text: "Turning left, you will see the hospital.\n= Though you turn left, you will see the hospital.", rationale: "정답! '왼쪽으로 돌면(조건)' 병원이 보일 것이라는 뜻이므로 Though(비록 ~일지라도)가 아니라 If(만약 ~라면)로 바꾸어야 한다." },
      { text: "Not knowing what to say, I kept silent.\n= Because I didn't know what to say, I kept silent.", rationale: "무엇을 말할지 몰랐기 '때문에'로 자연스럽게 변환되었다." }
    ],
    answer: 4,
    explanation: "분사구문의 해석을 묻는 가장 정석적인 문제야. 뒤에 주절의 내용(will see)을 보면 '조건'이 가장 알맞다는 것을 알 수 있지. Though를 넣으면 '왼쪽으로 돌았음에도 불구하고 병원이 보인다'는 이상한 뜻이 돼버려."
  }
];