/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: [영어] 중2 현재완료 시제 Part 1 (1~10문항) / Part 2 (11~20문항) / Part 3 (21~30문항)
 * 변경 내역: 현재완료(have/has + p.p.)의 긍정, 부정, 의문문 형태 파악 및 불규칙 과거분사, 대답하는 방법 집중 훈련
 * 현재완료의 4가지 용법(계속, 경험, 완료, 결과) 구분 및 핵심 부사(ever, never, before, for, since, just, already, yet) 매칭 집중 훈련
 * 명백한 과거 표시어(yesterday, ago, last, when 등)와 현재완료의 동시 사용 불가 규칙, 단순 과거와의 문맥 비교 및 종합 훈련
 */

import { Question } from '@/types/question';

export const eng_e2_3_questions: Question[] = [
  {
    id: "e2-3-001",
    unitId: "e2-3",
    type: "choice",
    question: "현재완료 시제의 기본 형태로 알맞은 것은?",
    options: [
      { text: "be동사 + 동사원형-ing", rationale: "이것은 '~하고 있다'를 나타내는 '현재 진행형'의 형태이다." },
      { text: "have / has + 동사원형", rationale: "have 뒤에 동사원형이 오면 '~해야 한다(have to)'나 일반동사(가지다, 먹다)로 쓰인 것이다." },
      { text: "have / has + 과거분사(p.p.)", rationale: "정답! 과거에 일어난 일이 현재까지 영향을 미칠 때 쓰는 현재완료의 절대 공식이다." },
      { text: "had + 과거분사(p.p.)", rationale: "이것은 과거완료(대과거)의 형태이다." },
      { text: "will have + 과거분사(p.p.)", rationale: "이것은 미래완료의 형태이다." }
    ],
    answer: 3,
    explanation: "현재완료는 글자 그대로 '현재(have/has)'에 '완료(p.p.)'된 상태를 가지고 있다는 뜻이야. 과거와 현재를 연결하는 다리 역할을 하지."
  },
  {
    id: "e2-3-002",
    unitId: "e2-3",
    type: "short",
    question: "다음 빈칸에 알맞은 단어를 쓰시오.\nShe (      ) lost her smartphone.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "has",
    explanation: "주어가 3인칭 단수(She, He, It, Mina 등)일 때는 have가 아니라 'has'를 써야 해. 과거분사 lost 앞이므로 has가 정답이다."
  },
  {
    id: "e2-3-003",
    unitId: "e2-3",
    type: "choice",
    question: "다음 동사의 원형 - 과거형 - 과거분사(p.p.) 변화가 바르게 짝지어지지 **않은** 것은?",
    options: [
      { text: "see - saw - seen", rationale: "올바른 불규칙 변화이다." },
      { text: "write - wrote - written", rationale: "올바른 불규칙 변화이다." },
      { text: "eat - ate - eaten", rationale: "올바른 불규칙 변화이다." },
      { text: "go - went - goen", rationale: "정답! go의 과거분사는 goen이 아니라 'gone'이다." },
      { text: "do - did - done", rationale: "올바른 불규칙 변화이다." }
    ],
    answer: 4,
    explanation: "현재완료를 공부할 때 가장 먼저 넘어야 할 산이 바로 '불규칙 동사표 3단 변화' 암기야. p.p. 형태를 모르면 현재완료 문장을 아예 만들 수가 없어."
  },
  {
    id: "e2-3-004",
    unitId: "e2-3",
    type: "choice",
    question: "다음 문장을 부정문으로 바르게 고친 것은?\nI have finished my homework.",
    options: [
      { text: "I don't have finished my homework.", rationale: "현재완료의 have는 일반동사가 아니라 '조동사'처럼 취급되므로 don't를 쓰지 않는다." },
      { text: "I didn't have finished my homework.", rationale: "과거형 조동사 didn't를 쓸 수 없다." },
      { text: "I have not finished my homework.", rationale: "정답! 현재완료(have+p.p.)의 부정문은 have나 has 바로 뒤에 not을 붙인다. (haven't / hasn't)" },
      { text: "I have finished not my homework.", rationale: "not의 위치가 틀렸다." },
      { text: "I am not have finished my homework.", rationale: "be동사가 끼어들 자리가 아니다." }
    ],
    answer: 3,
    explanation: "현재완료에서 쓰이는 have는 '가지다'라는 일반동사가 아니야. 조동사(can, will)처럼 행동해! 그래서 부정문을 만들 때 don't have가 아니라 'have not(haven't)'이 되는 거야."
  },
  {
    id: "e2-3-005",
    unitId: "e2-3",
    type: "short",
    question: "다음 두 문장을 의미가 같은 하나의 현재완료 문장으로 합칠 때, 빈칸에 들어갈 단어를 쓰시오.\nTom lost his dog yesterday. + He doesn't have it now.\n= Tom (      ) lost his dog.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "has",
    explanation: "과거에 강아지를 잃어버렸고, 그 결과 '현재도' 강아지가 없다는 두 가지 정보를 한 번에 담는 시제가 바로 현재완료야. 주어가 Tom이므로 has lost가 된다."
  },
  {
    id: "e2-3-006",
    unitId: "e2-3",
    type: "choice",
    passage: "A: ________ you ever visited Paris?\nB: Yes, I ________.",
    question: "위 대화의 빈칸에 들어갈 말이 바르게 짝지어진 것은?",
    options: [
      { text: "Do - do", rationale: "visited(p.p.)가 있으므로 일반동사 의문문(Do)이 아니다." },
      { text: "Did - did", rationale: "과거형 의문문이라면 Did you visit(동사원형)이 되어야 한다." },
      { text: "Are - am", rationale: "수동태나 진행형이 아니므로 be동사가 올 수 없다." },
      { text: "Have - have", rationale: "정답! 'have + 주어 + p.p.?' 형태의 현재완료 의문문이며, Have로 물었으므로 대답도 Yes, I have.로 한다." },
      { text: "Have - do", rationale: "Have로 묻고 do로 대답할 수 없다." }
    ],
    answer: 4,
    explanation: "조동사 규칙과 똑같아! 의문문을 만들 때는 Have/Has를 주어 앞으로 던지면 끝이야. 대답할 때도 Yes, I have. / No, I haven't. 로 받아치면 돼."
  },
  {
    id: "e2-3-007",
    unitId: "e2-3",
    type: "short",
    passage: "수아는 친구 미나가 숙제를 다 했는지 영어로 물어보고 싶다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 단어를 쓰시오.\n미나는 숙제를 끝냈니?\n-> (      ) Mina finished her homework?\n(단, 알파벳 첫 글자는 대문자로 시작하는 1단어를 입력하시오.)",
    answer: "Has",
    explanation: "Mina는 3인칭 단수이므로 의문문을 만들 때 Have가 아니라 'Has'가 주어 앞으로 나가야 한다."
  },
  {
    id: "e2-3-008",
    unitId: "e2-3",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "I have lived here for 5 years.", rationale: "I have + p.p. 올바르다." },
      { text: "She has been sick since yesterday.", rationale: "She has + be동사의 p.p.(been). 올바르다." },
      { text: "We haven't met him before.", rationale: "have not + p.p. 올바르다." },
      { text: "Has they arrived at the station?", rationale: "정답! 주어가 They(복수)이므로 Has가 아니라 'Have'를 써야 한다. (Have they arrived~?)" },
      { text: "He hasn't eaten breakfast yet.", rationale: "He has not + p.p. 올바르다." }
    ],
    answer: 4,
    explanation: "가장 기본적이지만 시험 볼 때 긴장하면 제일 많이 놓치는 실수야. 문장 맨 앞의 Have/Has는 무조건 그 바로 뒤에 있는 '주어'의 인칭과 수에 맞춰야 해."
  },
  {
    id: "e2-3-009",
    unitId: "e2-3",
    type: "short",
    question: "다음 문장에서 어법상 틀린 단어를 찾아 올바른 형태로 고쳐 쓰시오.\nI have know him since 2020.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "known",
    explanation: "현재완료는 have + p.p.(과거분사) 형태여야 한다. know의 원형을 썼으므로 틀렸다. know-knew-known 이므로 known으로 고쳐야 한다."
  },
  {
    id: "e2-3-010",
    unitId: "e2-3",
    type: "choice",
    question: "다음 두 사람의 대화 중 어색한 것은?",
    options: [
      { text: "A: Have you cleaned your room?\nB: Yes, I have.", rationale: "Have you~? 에 Yes, I have. 로 잘 대답했다." },
      { text: "A: Has your father come back?\nB: No, he hasn't.", rationale: "Has he~? 에 No, he hasn't. 로 잘 대답했다." },
      { text: "A: Have they finished the project?\nB: Yes, they did.", rationale: "정답! Have로 물었으면 have로 대답해야 한다. Yes, they have. 가 맞다." },
      { text: "A: Has she found her keys?\nB: Yes, she has.", rationale: "Has she~? 에 Yes, she has. 로 잘 대답했다." },
      { text: "A: Have you ever eaten Thai food?\nB: No, I haven't.", rationale: "Have you~? 에 No, I haven't. 로 잘 대답했다." }
    ],
    answer: 3,
    explanation: "명심해! 영어 대답의 절대 진리, '물어본 놈으로 대답한다.' Have로 물었으면 대답도 Have야. Did로 묻지 않았는데 did로 대답할 수 없어."
  },
  {
    id: "e2-3-011",
    unitId: "e2-3",
    type: "choice",
    question: "다음 중 현재완료의 '경험'을 나타내는 문장과 가장 잘 어울리는 부사는?",
    options: [
      { text: "since", rationale: "since는 '~이후로 쭉'이라는 뜻으로 '계속' 용법에 쓰인다." },
      { text: "for", rationale: "for는 '~동안 쭉'이라는 뜻으로 '계속' 용법에 쓰인다." },
      { text: "just", rationale: "just는 '방금(막)'이라는 뜻으로 '완료' 용법에 쓰인다." },
      { text: "ever", rationale: "정답! ever(~해본 적 있다), never(결코 ~해본 적 없다), before(이전에)는 '경험'을 묻고 답할 때 쓰이는 핵심 부사이다." },
      { text: "yet", rationale: "yet은 '아직'이라는 뜻으로 '완료' 용법(부정문/의문문)에 쓰인다." }
    ],
    answer: 4,
    explanation: "현재완료의 4가지 뜻(용법)은 문장 속에 숨어있는 힌트 단어(부사)만 찾으면 1초 만에 풀 수 있어. '경험'의 힌트는 ever, never, before, once(한 번), twice(두 번) 등이야."
  },
  {
    id: "e2-3-012",
    unitId: "e2-3",
    type: "choice",
    question: "다음 두 문장의 빈칸에 공통으로 들어갈 알맞은 단어는?\n- Have you (      ) seen a koala?\n- This is the best movie I have (      ) watched.",
    options: [
      { text: "never", rationale: "Have you never~? 보다는 ever가 자연스러우며, 두 번째 문장(가장 ~한 영화이다)에는 결코 본 적 없다는 never가 어색하다." },
      { text: "ever", rationale: "정답! Have you ever p.p.? (~해본 적 있니?) 와 최상급 뒤에 쓰이는 have ever p.p.(지금껏 ~한 것 중 가장 ~하다)에서 모두 '경험'을 강조하는 ever가 쓰인다." },
      { text: "before", rationale: "before는 문장 맨 끝에 위치한다." },
      { text: "just", rationale: "방금 코알라를 봤니? 라는 뜻은 가능하지만, 두 번째 문장에는 어색하다." },
      { text: "since", rationale: "since는 '계속'을 나타낸다." }
    ],
    answer: 2,
    explanation: "의문문에서 '너 ~해본 적 있어?'라고 물을 때는 Have you ever + p.p.? 를 공식처럼 외워두면 돼."
  },
  {
    id: "e2-3-013",
    unitId: "e2-3",
    type: "short",
    passage: "수아는 친구에게 방금 막 숙제를 끝냈다고 말하고 싶다.\nI have ( A ) finished my homework.",
    question: "위 빈칸 ( A )에 들어갈 알맞은 단어를 쓰시오.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "just",
    explanation: "현재완료에서 '막, 방금' 어떤 동작이 끝났음을 나타내는 '완료' 용법의 대표적인 부사는 just야. 위치는 have와 p.p. 사이라는 것도 기억해둬."
  },
  {
    id: "e2-3-014",
    unitId: "e2-3",
    type: "choice",
    question: "다음 문장 중 쓰임새(용법)가 나머지 넷과 **다른** 하나는?",
    options: [
      { text: "I have **just** cleaned my room.", rationale: "just(방금)가 쓰인 '완료' 용법이다." },
      { text: "She has **already** eaten dinner.", rationale: "already(이미)가 쓰인 '완료' 용법이다." },
      { text: "Have you finished the report **yet**?", rationale: "yet(벌써/아직)이 쓰인 '완료' 용법이다." },
      { text: "I have **never** been to Japan.", rationale: "정답! never(결코 ~해본 적 없다)가 쓰였으므로 '경험' 용법이다." },
      { text: "He hasn't arrived **yet**.", rationale: "yet(아직)이 쓰인 '완료' 용법이다." }
    ],
    answer: 4,
    explanation: "just(방금), already(이미), yet(아직/벌써) 3총사는 현재완료가 '완료'의 뜻으로 쓰였음을 알려주는 강력한 힌트야."
  },
  {
    id: "e2-3-015",
    unitId: "e2-3",
    type: "choice",
    question: "다음 문장의 밑줄 친 부분과 용법이 같은 것은?\nWe have known each other **for** 10 years.",
    options: [
      { text: "I have **lost** my wallet.", rationale: "잃어버려서 지금 없다는 '결과' 용법이다." },
      { text: "She has **gone** to America.", rationale: "가버리고 지금 여기 없다는 '결과' 용법이다." },
      { text: "Have you **ever** met a famous person?", rationale: "ever가 쓰인 '경험' 용법이다." },
      { text: "He has studied English **since** 2020.", rationale: "정답! 주어진 문장의 for(~동안)와 보기의 since(~이후로)는 모두 과거부터 지금까지 쭈욱 이어지고 있다는 '계속' 용법을 나타낸다." },
      { text: "I have **just** heard the news.", rationale: "just가 쓰인 '완료' 용법이다." }
    ],
    answer: 4,
    explanation: "현재완료의 '계속' 용법을 찾을 때는 문장 뒤쪽을 살펴봐. 'for + 기간(~동안)', 'since + 과거 시점(~이후로 쭉)', 'How long~?(얼마나 오래)' 이 3가지 힌트 중 하나가 무조건 있을 거야."
  },
  {
    id: "e2-3-016",
    unitId: "e2-3",
    type: "short",
    passage: "Mina started to play the piano when she was 10. She is 15 now, and she still plays the piano.",
    question: "위 지문의 내용을 현재완료 문장으로 바꿀 때, 빈칸 (A)에 들어갈 알맞은 단어를 쓰시오.\n-> Mina has played the piano ( A ) 5 years.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "for",
    explanation: "10살 때부터 15살인 지금까지 피아노를 쳤으므로 그 기간은 '5년'이야. 5년이라는 '기간' 앞에는 since가 아니라 전치사 for(~동안)를 써야 해."
  },
  {
    id: "e2-3-017",
    unitId: "e2-3",
    type: "short",
    question: "다음 문장에서 어법상 틀린 단어를 찾아 올바르게 고쳐 쓰시오.\nHe has lived in Seoul for he was born.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "since",
    explanation: "for 뒤에는 '숫자 기간(3 days, 5 years 등)'이 오고, 'he was born(그가 태어났을 때)'처럼 구체적인 과거의 시작 시점이 올 때는 since(~이후로 쭉)를 써야 한다."
  },
  {
    id: "e2-3-018",
    unitId: "e2-3",
    type: "choice",
    question: "다음 두 문장의 의미 차이를 바르게 설명한 것은?\n(A) She went to Paris.\n(B) She has gone to Paris.",
    options: [
      { text: "두 문장의 의미는 완전히 같다.", rationale: "단순 과거(went)와 현재완료(has gone)는 현재의 상태를 알려주는지 여부가 다르다." },
      { text: "(A)는 파리에 가본 적이 있다는 뜻이고, (B)는 지금 파리에 있다는 뜻이다.", rationale: "가본 적이 있다(경험)는 has been to 를 쓴다." },
      { text: "(A)는 과거에 파리에 갔었다는 사실만 알려주고 현재 어디 있는지는 모른다. (B)는 과거에 파리로 가서 그 결과 '지금 여기 없다'는 뜻이다.", rationale: "정답! 단순 과거(A)는 과거의 사실만, 현재완료의 결과 용법(B)은 그 행동으로 인한 '현재의 상태'까지 포함한다." },
      { text: "(A)는 지금 파리에 없다는 뜻이고, (B)는 과거에 파리에 갔다는 뜻이다.", rationale: "설명이 반대로 되었다." },
      { text: "(A)와 (B) 모두 파리에 가본 적이 있다(경험)는 뜻이다.", rationale: "went와 has gone은 경험을 나타내지 않는다." }
    ],
    answer: 3,
    explanation: "현재완료의 '결과' 용법을 대표하는 문장이야. 'have gone to(~에 가버렸다)'는 1, 2인칭 주어(I, You)와는 절대 쓸 수 없다는 것도 시험 단골 문제지! (내가 가버리고 여기 없는데 어떻게 말을 하겠어?)"
  },
  {
    id: "e2-3-019",
    unitId: "e2-3",
    type: "choice",
    passage: "(A) I have ________ my umbrella, so I don't have it now.\n(B) She has ________ to America, so she is not here.",
    question: "위 두 문장이 모두 현재완료의 '결과' 용법이 되도록 빈칸에 들어갈 과거분사가 바르게 짝지어진 것은?",
    options: [
      { text: "lost - been", rationale: "has been to는 '~에 가본 적이 있다(경험)'이다." },
      { text: "lost - gone", rationale: "정답! 잃어버려서 지금 없다(have lost), 가버리고 지금 여기 없다(have gone)는 현재완료 결과 용법의 대표적인 두 동사이다." },
      { text: "losed - gone", rationale: "lose의 과거분사는 lost이다." },
      { text: "lost - went", rationale: "has 뒤에는 과거분사가 와야 한다." },
      { text: "lost - visited", rationale: "visited는 경험이나 계속 용법에 주로 쓰인다." }
    ],
    answer: 2,
    explanation: "현재완료 결과 용법은 이 두 개만 외우면 돼. 'have lost(잃어버려서 지금 없다)', 'have gone to(가버리고 지금 여기 없다)'. 이 두 개는 힌트 부사 없이 동사 자체로 결과를 나타내."
  },
  {
    id: "e2-3-020",
    unitId: "e2-3",
    type: "short",
    passage: "수아는 친구에게 호주에 가본 적이 있는지 경험을 물어보려고 한다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n너는 호주에 가본 적이 있니?\n-> Have you ever (      ) to Australia?\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "been",
    explanation: "'~에 가본 적이 있다(경험)'를 표현할 때는 gone이 아니라 반드시 'have been to'를 써야 해. gone을 쓰면 '가버리고 없다(결과)'가 되니까 절대 안 돼!"
  },
  {
    id: "e2-3-021",
    unitId: "e2-3",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "I have lived in Seoul since 2015.", rationale: "since(~이후로)는 현재완료의 계속 용법과 잘 어울린다." },
      { text: "She has already finished her project.", rationale: "already(이미)는 현재완료의 완료 용법과 잘 어울린다." },
      { text: "We have arrived at the airport yesterday.", rationale: "정답! yesterday(어제)는 명백한 과거 시점을 나타내므로 현재완료(have arrived)와 절대 함께 쓸 수 없다. 단순 과거형(arrived)으로 써야 한다." },
      { text: "Have you ever seen a shooting star?", rationale: "ever는 현재완료의 경험 용법과 잘 어울린다." },
      { text: "He has just left for New York.", rationale: "just(막, 방금)는 현재완료의 완료 용법과 잘 어울린다." }
    ],
    answer: 3,
    explanation: "현재완료는 '과거부터 현재까지의 선'을 나타내! yesterday(어제)처럼 과거의 딱 한 지점을 콕 집어주는 단어와는 절대 같이 쓸 수 없다는 게 내신 출제율 1위 규칙이야."
  },
  {
    id: "e2-3-022",
    unitId: "e2-3",
    type: "short",
    passage: "수아는 친구에게 2020년에 이 스마트폰을 샀다고 말하려고 한다.",
    question: "다음 문장에서 어법상 틀린 단어 한 개를 찾아 올바른 형태로 고쳐 쓰시오.\nI have bought this smartphone in 2020.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "bought",
    explanation: "'in + 과거 연도(in 2020)'는 명백한 과거 시점을 나타내므로 현재완료(have bought)를 쓸 수 없어. have를 지우고 단순 과거형인 'bought'만 써야 해."
  },
  {
    id: "e2-3-023",
    unitId: "e2-3",
    type: "choice",
    question: "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n________ did you start learning English?",
    options: [
      { text: "How long", rationale: "How long(얼마나 오래)은 기간을 묻는 표현으로 현재완료(How long have you p.p.?)와 주로 쓰인다." },
      { text: "When", rationale: "정답! '언제'라는 명확한 과거 시점을 묻고 있으며, 뒤에 과거형 조동사 did가 쓰였으므로 When이 완벽하게 어울린다." },
      { text: "What time", rationale: "구체적인 시각을 물을 때는 어색하다." },
      { text: "Why", rationale: "이유를 묻는 의문사이다." },
      { text: "Where", rationale: "장소를 묻는 의문사이다." }
    ],
    answer: 2,
    explanation: "의문사 When(언제)은 그 자체로 특정 시점을 콕 집어 묻는 말이야. 그래서 'When have you~?' 처럼 현재완료와는 절대로 같이 쓸 수 없고, 항상 'When did you~?' 처럼 단순 과거와 짝꿍을 이뤄."
  },
  {
    id: "e2-3-024",
    unitId: "e2-3",
    type: "short",
    question: "다음 괄호 안의 두 형태 중 어법상 알맞은 것을 고르시오.\nI ( have met / met ) my middle school teacher two days ago.\n(단, 알파벳 소문자로만 입력하시오.)",
    answer: "met",
    explanation: "문장 맨 끝에 있는 'two days ago(이틀 전에)'를 놓치면 안 돼. 'ago'는 현재완료의 철천지원수야! 무조건 단순 과거형(met)을 써야 해."
  },
  {
    id: "e2-3-025",
    unitId: "e2-3",
    type: "choice",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 단어를 쓰시오.\nShe came to Korea three years ago, and she is still here.\n= She has __________ in Korea for three years.",
    options: [
      { text: "came", rationale: "has 뒤에는 과거형이 올 수 없다." },
      { text: "come", rationale: "has come은 '와서 지금 있다(결과)'가 되지만, 3년 동안 '있었다'는 계속적 의미를 표현하기엔 be동사가 더 적절하다." },
      { text: "been", rationale: "정답! 3년 전에 와서 지금까지 계속 한국에 '있다'라는 뜻이므로, be동사(~에 있다)의 p.p.형태인 been을 써야 완벽하다." },
      { text: "gone", rationale: "has gone to는 '가버리고 없다'는 뜻이다." },
      { text: "stay", rationale: "과거분사 형태가 아니다. (stayed가 와야 함)" }
    ],
    answer: 3,
    explanation: "단순 과거 두 문장을 현재완료 한 문장으로 합치는 서술형 단골 문제야. 3년 동안 쭉 '있는' 상태니까 be동사의 과거분사인 been을 써야 해."
  },
  {
    id: "e2-3-026",
    unitId: "e2-3",
    type: "choice",
    passage: "A: Have you finished your science report?\nB: Yes, I ________ it last night.",
    question: "위 대화의 빈칸에 들어갈 알맞은 말은?",
    options: [
      { text: "have finished", rationale: "last night이 있으므로 현재완료를 쓸 수 없다." },
      { text: "finish", rationale: "어젯밤의 일이므로 현재형을 쓸 수 없다." },
      { text: "finished", rationale: "정답! 질문은 현재완료(Have you~?)로 했더라도, 대답할 때 'last night(어젯밤)'이라는 구체적인 과거 시점을 언급했으므로 동사는 반드시 단순 과거형(finished)으로 써야 한다." },
      { text: "was finishing", rationale: "과거 진행형은 '어젯밤에 끝내고 있던 중이었다'가 되어 어색하다." },
      { text: "did finished", rationale: "did 뒤에는 동사원형이 와야 한다." }
    ],
    answer: 3,
    explanation: "질문자가 Have you~? 로 물었다고 해서 기계적으로 I have p.p. 로 대답하면 함정에 빠져! 문장 안에 last night 같은 과거 힌트가 들어왔다면 당장 과거형으로 태세를 전환해야 해."
  },
  {
    id: "e2-3-027",
    unitId: "e2-3",
    type: "short",
    question: "다음 두 문장 중 어법상 **틀린** 문장의 기호를 고르시오.\n(A) I have just finished reading the book.\n(B) I have finished reading the book just now.\n(단, 대문자 A 또는 B로만 입력하시오.)",
    answer: "B",
    explanation: "'just(방금)'는 현재완료와 쓰이지만, 'just now(방금 전)'는 명백한 과거를 나타내는 부사구라서 단순 과거 시제(I finished ~ just now)와 써야 해! 정말 많이 헷갈리는 포인트야."
  },
  {
    id: "e2-3-028",
    unitId: "e2-3",
    type: "choice",
    question: "다음 중 어법상 올바른 문장으로만 묶인 것은?\n(a) Did you ever visit London?\n(b) When have you lost your watch?\n(c) My uncle has died 3 years ago.\n(d) We have known each other since we were kids.",
    options: [
      { text: "(a), (b)", rationale: "(b)는 When과 have p.p.가 함께 쓰여 틀렸다." },
      { text: "(b), (c)", rationale: "(c)는 ago가 있으므로 died(과거형)로 써야 한다." },
      { text: "(c), (d)", rationale: "(c)가 틀렸다." },
      { text: "(d)", rationale: "정답! (a)는 경험을 물을 땐 Have you ever visited~? 가 자연스럽다. (b)는 When did you lose~? 로 써야 한다. (c)는 My uncle died 3 years ago. 로 써야 한다. (d)만이 since 절과 현재완료가 올바르게 쓰였다." },
      { text: "(a), (d)", rationale: "엄밀히 말해 (a) 구어체에서 쓰이긴 하지만 문법적으로는 경험을 나타낼 때 현재완료가 표준이다." }
    ],
    answer: 4,
    explanation: "문장을 볼 때 동사의 시제와 짝꿍이 되는 시간 부사(ago, since, when 등)를 찾는 것이 시제 문제 풀이의 알파이자 오메가야!"
  },
  {
    id: "e2-3-029",
    unitId: "e2-3",
    type: "short",
    passage: "수아는 언제 서울로 이사 왔는지 묻는 질문에 다음과 같이 대답했다.\nQ: How long have you lived in Seoul?\nA: I have lived in Seoul (      ) I was ten years old.",
    question: "위 대답의 빈칸에 들어갈 알맞은 단어를 쓰시오.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "since",
    explanation: "'내가 10살이었을 때'는 과거의 특정한 시작점이야. 과거의 한 시점부터 지금까지 계속되고 있음을 나타낼 때는 for가 아니라 since(~이래로)를 써야 해."
  },
  {
    id: "e2-3-030",
    unitId: "e2-3",
    type: "choice",
    question: "다음 빈칸에 공통으로 들어갈 단어로 알맞은 것은?\n- Where have you ________?\n- She has ________ to Europe twice.",
    options: [
      { text: "gone", rationale: "Where have you gone? 은 2인칭과 쓰일 수 없으며, 두 번째 문장에서 경험을 나타낼 때도 쓰지 않는다." },
      { text: "visited", rationale: "어디를 방문했는지 물을 순 있지만, be to(~에 가본 적 있다)라는 관용 표현이 더 알맞다." },
      { text: "been", rationale: "정답! Where have you been? (너 어디 있었어/다녀왔어?), She has been to Europe twice. (그녀는 유럽에 두 번 다녀온 적이 있다) 모두 be동사의 p.p.인 been이 완벽하게 들어맞는다." },
      { text: "stayed", rationale: "stayed to Europe 이라는 표현은 어색하다." },
      { text: "went", rationale: "과거분사가 와야 할 자리이다." }
    ],
    answer: 3,
    explanation: "현재완료에서 'go(가다)'라는 의미를 쓰고 싶을 때, '가버리고 지금 없다(결과)'일 때는 gone을 쓰지만, '다녀왔다/가본 적 있다(경험/완료)'일 때는 무조건 been을 써야 한다는 사실을 꼭 구별해 둬!"
  }
];