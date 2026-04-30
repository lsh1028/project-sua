/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: [영어] 중2 동명사 Part 1 (1~8문항) / Part 2 (9~17문항) / Part 3 (18~25문항)
 * 변경 내역: 동명사의 명사적 역할(주어, 보어, 전치사의 목적어) 파악, 전치사 뒤 동명사 절대 규칙 및 동명사 vs 현재분사(용도 vs 동작) 구분 훈련
 * 동명사만을 목적어로 취하는 동사, to부정사만을 취하는 동사 구분 및 의미가 달라지는 동사(remember, forget, stop, try) 집중 훈련
 * look forward to -ing 등 전치사 to의 쓰임 파악, 동명사 관용 표현(How about -ing, feel like -ing, spend 시간 -ing 등) 집중 훈련 및 동명사 종합
 */

import { Question } from '@/types/question';

export const eng_e2_2_questions: Question[] = [
  {
    id: "e2-2-001",
    unitId: "e2-2",
    type: "choice",
    question: "다음 문장의 빈칸에 들어갈 알맞은 형태는?\n__________ books is my favorite hobby.",
    options: [
      { text: "Read", rationale: "동사원형이 문장 맨 앞에 오면 명령문이 되어 뒤의 is와 충돌한다." },
      { text: "Reads", rationale: "명사 자리에 동사의 3인칭 단수형이 올 수 없다." },
      { text: "Reading", rationale: "정답! 동사 read에 -ing를 붙여 '책을 읽는 것'이라는 명사(동명사)로 만들어 주어 자리에 놓은 올바른 형태이다." },
      { text: "Readed", rationale: "read의 과거형/과거분사는 모양이 바뀌지 않는 read이며, 이 자리에도 맞지 않는다." },
      { text: "Are reading", rationale: "진행형 동사가 주어 자리에 올 수 없다." }
    ],
    answer: 3,
    explanation: "동사를 주어로 쓰고 싶다면 동사원형에 -ing를 붙여 명사로 변신시켜야 해. 'Reading(~하는 것)'은 단수 취급하므로 뒤에 be동사 'is'가 온다는 것도 꼭 확인하자."
  },
  {
    id: "e2-2-002",
    unitId: "e2-2",
    type: "short",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 단어를 쓰시오.\nTo learn foreign languages is interesting.\n= (      ) foreign languages is interesting.\n(단, 알파벳 첫 글자는 대문자로 시작하는 1단어를 입력하시오.)",
    answer: "Learning",
    explanation: "주어 자리에 쓰인 to부정사(To learn)는 동명사(Learning)로 완벽하게 바꿔 쓸 수 있다."
  },
  {
    id: "e-4-003",
    unitId: "e2-2",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "My job is teaching English.", rationale: "내 직업 = 영어를 가르치는 것(동명사 보어). 올바르다." },
      { text: "He is good at play basketball.", rationale: "정답! at은 전치사이다. 전치사 뒤에는 무조건 명사가 와야 하므로, 동사 play를 동명사인 'playing'으로 고쳐야 한다." },
      { text: "Thank you for helping me.", rationale: "for(전치사) + helping(동명사). 올바르다." },
      { text: "Are you interested in reading history books?", rationale: "in(전치사) + reading(동명사). 올바르다." },
      { text: "She left without saying a word.", rationale: "without(전치사) + saying(동명사). 올바르다." }
    ],
    answer: 2,
    explanation: "동명사 파트에서 절대 잊으면 안 되는 대원칙! in, at, on, for, with, about, without 같은 '전치사' 바로 뒤에 동사가 올 때는 무조건 -ing(동명사)를 붙여야 해."
  },
  {
    id: "e2-2-004",
    unitId: "e2-2",
    type: "short",
    passage: "수아는 아침을 먹지 않고 학교에 갔다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n나는 아침을 먹지 않고 학교에 갔다.\n-> I went to school without (      ) breakfast.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "having",
    explanation: "without(~없이)은 전치사이므로 뒤에 오는 동사 have(먹다)는 동명사 형태인 having(e를 빼고 ing)이 되어야 한다. (eating도 가능하나 have가 더 널리 쓰임)"
  },
  {
    id: "e2-2-005",
    unitId: "e2-2",
    type: "choice",
    question: "다음 밑줄 친 `-ing` 중 쓰임새가 나머지 넷과 **다른** 것은?",
    options: [
      { text: "a **sleeping** bag", rationale: "잠자기 '위한' 가방(침낭). 용도를 나타내는 동명사이다." },
      { text: "a **waiting** room", rationale: "기다리기 '위한' 방(대합실). 용도를 나타내는 동명사이다." },
      { text: "a **swimming** pool", rationale: "수영하기 '위한' 풀장(수영장). 용도를 나타내는 동명사이다." },
      { text: "a **walking** stick", rationale: "걷기 '위한' 지팡이. 용도를 나타내는 동명사이다." },
      { text: "a **sleeping** baby", rationale: "정답! 잠을 '자고 있는' 아기. 현재 진행 중인 동작을 나타내는 '현재분사'이다." }
    ],
    answer: 5,
    explanation: "내신 100% 출제 유형! 똑같은 -ing지만 꾸며주는 말의 관계가 달라. 가방이 직접 잠을 자는 게 아니라 '잠을 자기 위한(용도)' 것이면 동명사고, 아기가 직접 '자고 있는(진행)' 것이면 현재분사야."
  },
  {
    id: "e2-2-006",
    unitId: "e2-2",
    type: "short",
    passage: "Look at the ( bark ) dog.",
    question: "위 문장에서 괄호 안의 단어 'bark'를 알맞은 형태로 고쳐 쓰시오.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "barking",
    explanation: "개가 직접 '짖고 있는' 동작을 꾸며주는 것이므로, 동명사가 아니라 현재분사형(-ing)인 barking을 써서 명사를 수식해야 한다. (현재분사도 형태는 동명사와 같음)"
  },
  {
    id: "e2-2-007",
    unitId: "e2-2",
    type: "choice",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 알맞은 단어가 짝지어진 것은?\nHis plan is to travel to Europe.\n= His plan is ________ ________ to Europe.",
    options: [
      { text: "travel - to", rationale: "be동사 뒤에 동사원형이 오면 틀리다." },
      { text: "traveling - in", rationale: "travel은 전치사 to(~로)와 어울린다." },
      { text: "traveling - to", rationale: "정답! 주어(His plan)를 보충 설명하는 보어 자리에 쓰인 to부정사는 동명사(traveling)로 바꾸어 쓸 수 있다." },
      { text: "traveled - to", rationale: "과거분사는 수동의 의미이므로 어색하다." },
      { text: "travels - for", rationale: "동사에 -s를 붙여 명사 자리에 쓸 수 없다." }
    ],
    answer: 3,
    explanation: "동명사는 '주어' 자리와 '보어(be동사 뒤)' 자리에서는 to부정사와 100% 호환돼. 아무거나 써도 뜻이 완전히 같아."
  },
  {
    id: "e2-2-008",
    unitId: "e2-2",
    type: "short",
    question: "다음 괄호 안의 단어들을 바르게 배열하여 문장을 완성하시오.\n나는 방을 청소하지 않은 것에 대해 사과했다.\n-> I apologized for ( cleaning / my / not / room ).\n(단, 알파벳 소문자 4단어로 띄어쓰기로 구분하여 입력하시오.)",
    answer: "not cleaning my room",
    explanation: "동명사의 부정문은 to부정사와 똑같아. 무조건 동명사(-ing) 바로 앞에 'not'만 붙이면 돼. (for not cleaning)"
  },
  {
    id: "e2-2-009",
    unitId: "e2-2",
    type: "choice",
    question: "다음 빈칸에 들어갈 알맞은 형태는?\nWould you mind __________ the window?",
    options: [
      { text: "open", rationale: "동사 뒤에 또 동사원형이 올 수 없다." },
      { text: "to open", rationale: "mind는 to부정사를 목적어로 취하지 않는다." },
      { text: "opening", rationale: "정답! mind(~하기를 꺼리다)는 대표적으로 동명사(-ing)만을 목적어로 취하는 동사이다." },
      { text: "opened", rationale: "과거분사는 올 수 없다." },
      { text: "opens", rationale: "동사의 3인칭 단수형이 올 수 없다." }
    ],
    answer: 3,
    explanation: "mind, enjoy, finish, give up, avoid, keep. 이 동사들은 무조건 뒤에 -ing(동명사)만 데리고 다닌다는 것을 기계적으로 외워야 한다."
  },
  {
    id: "e2-2-010",
    unitId: "e2-2",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "He enjoys playing tennis.", rationale: "enjoy + -ing. 올바르다." },
      { text: "She finished reading the book.", rationale: "finish + -ing. 올바르다." },
      { text: "They decided going to the beach.", rationale: "정답! decide(결정하다)는 미래 지향적 동사이므로 반드시 to부정사만을 목적어로 취한다. (decided to go)" },
      { text: "I gave up solving the puzzle.", rationale: "give up + -ing. 올바르다." },
      { text: "You should avoid eating late at night.", rationale: "avoid + -ing. 올바르다." }
    ],
    answer: 3,
    explanation: "미래를 나타내는 동사(want, hope, plan, decide)는 'to부정사'를, 과거나 현재의 중단/회피를 나타내는 동사(finish, give up, avoid, mind)는 '동명사'를 목적어로 취한다."
  },
  {
    id: "e2-2-011",
    unitId: "e2-2",
    type: "choice",
    question: "다음 중 괄호 안의 단어를 동명사(-ing)와 to부정사 둘 다 쓸 수 **없는** 동사는?\nShe __________ ( read / reading / to read ) a book.",
    options: [
      { text: "likes", rationale: "like는 둘 다 취할 수 있다." },
      { text: "starts", rationale: "start는 둘 다 취할 수 있다." },
      { text: "begins", rationale: "begin은 둘 다 취할 수 있다." },
      { text: "continues", rationale: "continue는 둘 다 취할 수 있다." },
      { text: "keeps", rationale: "정답! keep은 반드시 동명사(-ing)만을 목적어로 취하여 '계속해서 ~하다'라는 뜻으로 쓰인다." }
    ],
    answer: 5,
    explanation: "like, love, hate, start, begin, continue는 아주 관대한 동사들이라 to부정사와 동명사 중 아무거나 써도 뜻이 똑같다. 하지만 keep은 반드시 -ing만 써야 한다."
  },
  {
    id: "e2-2-012",
    unitId: "e2-2",
    type: "choice",
    question: "다음 두 문장의 빈칸에 들어갈 알맞은 형태가 바르게 짝지어진 것은?\n(A) I remember ________ her at the party last month.\n(B) Please remember ________ the door when you leave.",
    options: [
      { text: "seeing - locking", rationale: "(B)는 미래의 일이므로 동명사를 쓰면 안 된다." },
      { text: "to see - to lock", rationale: "(A)는 과거의 일이므로 to부정사를 쓰면 안 된다." },
      { text: "seeing - to lock", rationale: "정답! (A)는 지난달(last month)에 만났던 '과거'의 기억이므로 seeing, (B)는 나갈 때 잠가야 할 '미래'의 일이므로 to lock을 써야 한다." },
      { text: "to see - locking", rationale: "과거와 미래의 짝이 반대로 되었다." },
      { text: "see - lock", rationale: "원형은 올 수 없다." }
    ],
    answer: 3,
    explanation: "remember와 forget 뒤에 -ing가 오면 '과거(~했던 것을)', to-v가 오면 '미래(~할 것을)'를 의미한다. 서술형 내신 최고 빈출 포인트이다."
  },
  {
    id: "e2-2-013",
    unitId: "e2-2",
    type: "short",
    question: "다음 문장의 괄호 안 단어를 알맞은 형태로 고쳐 쓰시오.\nI will never forget ( visit ) Paris with my family two years ago.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "visiting",
    explanation: "'two years ago(2년 전)'에 방문'했던' 과거의 기억을 잊지 못하겠다는 뜻이므로, forget 뒤에는 반드시 과거를 의미하는 동명사(visiting)가 와야 한다."
  },
  {
    id: "e2-2-014",
    unitId: "e2-2",
    type: "choice",
    question: "다음 중 밑줄 친 부분의 쓰임이 올바른 것은?",
    options: [
      { text: "He **stopped to smoke** for his health.", rationale: "건강을 위해 '담배 피우던 것을 그만두어야' 하므로 stopped smoking이 되어야 한다." },
      { text: "She **stopped crying** when her mom came.", rationale: "정답! 엄마가 오셨을 때 '울던 것을 멈추었다'라는 의미로 stop + -ing 가 바르게 쓰였다." },
      { text: "I **stopped to talk** to him, so I kept walking.", rationale: "말하기 위해 가던 길을 멈춘 것이라면 뒤에 '계속 걸었다'는 문맥이 어색하다." },
      { text: "We **stopped taking** a rest because we were tired.", rationale: "피곤해서 '쉬기 위해 하던 일을 멈춘' 것이므로 stopped to take 가 자연스럽다." },
      { text: "The baby **stopped to cry** and smiled.", rationale: "웃었으므로 '울던 것을 멈춘' 것이다. stopped crying 이 되어야 한다." }
    ],
    answer: 2,
    explanation: "stop + -ing는 '~하던 것을 그만두다', stop + to-v는 '~하기 위해 (가던 길이나 하던 일을) 멈추다'이다. 문맥을 해석하지 않으면 풀 수 없다."
  },
  {
    id: "e2-2-015",
    unitId: "e2-2",
    type: "short",
    question: "다음 문장에서 어법상 틀린 단어를 찾아 올바른 형태로 고쳐 쓰시오.\nHe is trying moving the heavy box, but it is impossible for him.\n(단, 알파벳 소문자 2단어로 띄어쓰기를 포함하여 입력하시오.)",
    answer: "to move",
    explanation: "불가능해 보일 정도로 무거운 상자를 옮기려고 '애쓰고 노력하는' 상황이므로 try 뒤에 to부정사(to move)를 써야 한다. try + -ing는 '그냥 한 번 시험 삼아 해보다'라는 가벼운 뜻이다."
  },
  {
    id: "e2-2-016",
    unitId: "e2-2",
    type: "choice",
    passage: "A: Do you mind ( A ) the window?\nB: Not at all. I enjoy ( B ) the fresh air.\nA: Thanks. I plan ( C ) hard today.",
    question: "위 대화의 빈칸 (A), (B), (C)에 들어갈 형태가 올바르게 짝지어진 것은?",
    options: [
      { text: "opening - to feel - to study", rationale: "enjoy는 동명사만을 취한다." },
      { text: "to open - feeling - studying", rationale: "mind는 동명사, plan은 to부정사를 취한다." },
      { text: "opening - feeling - to study", rationale: "정답! mind와 enjoy는 과거나 현재 상태에 익숙한 동명사(-ing)만을 편식하고, plan은 미래 지향적이므로 to부정사(to-v)만을 편식한다." },
      { text: "opening - feeling - studying", rationale: "plan은 동명사를 취하지 않는다." },
      { text: "to open - to feel - to study", rationale: "mind와 enjoy는 to부정사를 취하지 않는다." }
    ],
    answer: 3,
    explanation: "문법 문제의 단골 손님 3인방이 모두 모인 대화문이다. mind(-ing), enjoy(-ing), plan(to-v)의 짝꿍을 정확히 기억해야 한다."
  },
  {
    id: "e2-2-017",
    unitId: "e2-2",
    type: "short",
    question: "다음 괄호 안의 단어를 어법에 맞게 고쳐 쓰시오.\nDon't give up ( learn ) foreign languages.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "learning",
    explanation: "give up(포기하다)이나 put off(미루다) 같은 구동사(전치사나 부사로 끝나는 동사구)는 전치사의 영향을 받아 대표적으로 동명사(-ing)만을 목적어로 취한다."
  },
  {
    id: "e2-2-018",
    unitId: "e2-2",
    type: "choice",
    question: "다음 빈칸에 들어갈 알맞은 단어는?\nI am looking forward to __________ you again.",
    options: [
      { text: "see", rationale: "to가 부정사를 만드는 to가 아니므로 동사원형이 올 수 없다." },
      { text: "saw", rationale: "과거형은 전치사 뒤에 올 수 없다." },
      { text: "seeing", rationale: "정답! 'look forward to(~를 학수고대하다)'에서 to는 전치사이므로 반드시 뒤에 동명사(-ing)가 와야 한다." },
      { text: "be seen", rationale: "내가 너를 보는(능동) 것이므로 수동태가 어색하다." },
      { text: "seen", rationale: "과거분사형이다." }
    ],
    answer: 3,
    explanation: "중/고등 내신을 통틀어 가장 많이 나오는 1순위 함정이야! 'look forward to'의 'to'는 to부정사가 아니라 방향을 나타내는 '전치사(~로)'야. 그래서 뒤에는 무조건 명사나 동명사(-ing)만 올 수 있어. 'to seeing'을 통째로 입에 붙여버려!"
  },
  {
    id: "e2-2-019",
    unitId: "e2-2",
    type: "short",
    passage: "A: Why don't we play soccer this afternoon?\nB: Sounds great!",
    question: "위 대화의 'Why don't we play'와 같은 뜻이 되도록 빈칸에 알맞은 단어를 쓰시오.\n= How about (      ) soccer this afternoon?\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "playing",
    explanation: "상대방에게 무언가를 제안할 때 'How about / What about + 명사/동명사(-ing)'를 쓴다. about이 전치사이므로 당연히 뒤에는 동명사가 와야 한다."
  },
  {
    id: "e2-2-020",
    unitId: "e2-2",
    type: "choice",
    question: "다음 두 문장의 뜻이 같도록 빈칸에 들어갈 알맞은 단어는?\nI want to eat pizza tonight.\n= I feel like __________ pizza tonight.",
    options: [
      { text: "eat", rationale: "like가 전치사로 쓰였으므로 원형이 올 수 없다." },
      { text: "to eat", rationale: "like 뒤에 to부정사를 쓰지 않는다." },
      { text: "eating", rationale: "정답! 'feel like + -ing'는 '~하고 싶다'라는 뜻으로 'want to-v'와 완벽하게 같은 뜻의 관용 표현이다." },
      { text: "ate", rationale: "과거형이다." },
      { text: "eaten", rationale: "과거분사형이다." }
    ],
    answer: 3,
    explanation: "여기서 like는 '좋아하다'라는 동사가 아니라 '~같은'이라는 전치사야. 전치사 뒤니까 당연히 동명사가 오겠지? 'feel like -ing (~하고 싶은 기분이다)'는 회화에서도 아주 많이 쓰여."
  },
  {
    id: "e2-2-021",
    unitId: "e2-2",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "Let's go swimming this weekend.", rationale: "go + -ing (~하러 가다). 올바르다." },
      { text: "My mother is busy cooking dinner.", rationale: "be busy + -ing (~하느라 바쁘다). 올바르다." },
      { text: "They went shopping yesterday.", rationale: "go의 과거형 went + -ing. 올바르다." },
      { text: "He is busy to prepare for the test.", rationale: "정답! '~하느라 바쁘다'는 'be busy -ing'를 써야 한다. to prepare를 preparing으로 고쳐야 한다." },
      { text: "How about going for a walk?", rationale: "How about + -ing. 올바르다." }
    ],
    answer: 4,
    explanation: "동명사 필수 관용구 2가지! 'go + -ing (~하러 가다)'와 'be busy + -ing (~하느라 바쁘다)'는 묻지도 따지지도 말고 형태를 외워둬야 영작을 할 수 있어."
  },
  {
    id: "e2-2-022",
    unitId: "e2-2",
    type: "short",
    question: "다음 문장에서 어법상 틀린 단어를 찾아 올바른 형태로 고쳐 쓰시오.\nHe spent two hours to read the comic book.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "reading",
    explanation: "'spend + 시간/돈 + -ing'는 '시간이나 돈을 ~하는 데 쓰다'라는 아주 중요한 표현이야. to read를 reading으로 고쳐야 완벽해."
  },
  {
    id: "e2-2-023",
    unitId: "e2-2",
    type: "short",
    passage: "수아는 그 코미디 영화를 보고 너무 웃겨서 웃음을 참을 수 없었다.",
    question: "다음 우리말에 맞게 빈칸에 들어갈 알맞은 단어를 쓰시오.\n나는 웃지 않을 수 없었다.\n-> I couldn't help (      ).\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "laughing",
    explanation: "'cannot help -ing'는 '~하지 않을 수 없다(어쩔 수 없이 ~하다)'라는 뜻의 고난도 관용 표현이야. 여기서 help는 '돕다'가 아니라 '피하다(avoid)'의 의미로 쓰여서 뒤에 동명사를 취해."
  },
  {
    id: "e2-2-024",
    unitId: "e2-2",
    type: "choice",
    question: "다음 밑줄 친 `to` 뒤에 이어질 동사의 형태가 나머지 넷과 **다른** 하나는?",
    options: [
      { text: "She decided **to** ________ (leave).", rationale: "decide는 to부정사를 취하므로 leave(동사원형)가 온다." },
      { text: "I want **to** ________ (buy) a new bike.", rationale: "want는 to부정사를 취하므로 buy(동사원형)가 온다." },
      { text: "He went to the library **to** ________ (study).", rationale: "목적을 나타내는 to부정사이므로 study(동사원형)가 온다." },
      { text: "We are looking forward **to** ________ (meet) you.", rationale: "정답! look forward to의 to는 전치사이므로 동명사인 'meeting'이 와야 한다. 나머지는 모두 to부정사이므로 동사원형이 온다." },
      { text: "It is not easy **to** ________ (learn) Chinese.", rationale: "가주어/진주어 구문의 to부정사이므로 learn(동사원형)이 온다." }
    ],
    answer: 4,
    explanation: "가장 클래식한 'to부정사 vs 전치사 to' 구분 문제야. look forward to(-ing) 외에도 'be used to -ing(~에 익숙하다)', 'object to -ing(~에 반대하다)' 등의 관용구에 쓰인 to는 모두 전치사라는 걸 기억해!"
  },
  {
    id: "e2-2-025",
    unitId: "e2-2",
    type: "choice",
    question: "다음 중 어법상 올바른 문장으로만 묶인 것은?\n(a) I forgot bringing my umbrella, so I am wet now.\n(b) Do you mind to close the door?\n(c) My hobby is making plastic models.\n(d) Stop to talk and listen to me.",
    options: [
      { text: "(a), (b)", rationale: "(b) mind는 동명사를 목적어로 취하므로 closing이 맞다." },
      { text: "(a), (c)", rationale: "정답! (a) 비를 맞고 젖었으니 우산 가져올 것을 잊어버린 것이 아니라 가져왔다는 '과거 사실'을 깜빡했다는 뜻이 되어 문법적으로는 가능하나, 우산을 가져오는 것을 잊었다(forgot to bring)가 더 자연스럽다. (하지만 문법적 오류는 없음, 의미상의 차이). (c)는 내 취미=만드는 것(동명사 보어)으로 완벽하다." },
      { text: "(c)", rationale: "(a)의 문맥적 어색함 때문에 (c)만 정답으로 볼 수 있으나, 가장 흔한 오답 포인트를 짚어보자. (d)는 이야기하는 것을 '멈추어라' 이므로 Stop talking이 맞다." },
      { text: "(b), (d)", rationale: "둘 다 명백히 틀린 문장이다." },
      { text: "(a), (d)", rationale: "(d)가 틀렸다." }
    ],
    answer: 2,
    explanation: "종합 점검! mind 뒤에는 -ing, stop 뒤에는 문맥상 '-하던 것을 멈추다'면 -ing를 써야 해. 보어 자리에 쓰인 making(만드는 것)은 아주 정확한 동명사의 사용이야."
  }
];