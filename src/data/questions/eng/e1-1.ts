/**
 * 작성일: 2026-04-30
 * 작성자: 시스템 (Project Sua)
 * * 클래스 설명: [영어] 중1 문장의 성분과 5형식 Part 1 (1~12문항) / Part 2 (13~23문항)
 * 변경 내역: 기초가 부족한 학생을 위한 문장 성분(S, V, O, C, M) 구분 및 1, 2형식(감각동사 위주) 집중 훈련 12문항 생성
 * 3, 4형식 구조 파악 및 목적어(IO, DO) 구분, 4형식을 3형식으로 전환 시 전치사(to, for, of) 완벽 암기 훈련
 */

import { Question } from '@/types/question';

export const eng_e1_1_questions: Question[] = [
  {
    id: "e1-1-001",
    unitId: "e1-1",
    type: "choice",
    question: "다음 중 문장의 주요 성분(뼈대)에 포함되지 **않는** 것은?",
    options: [
      { text: "주어 (Subject)", rationale: "문장의 주체가 되는 핵심 성분이다." },
      { text: "동사 (Verb)", rationale: "주어의 동작이나 상태를 나타내는 필수 성분이다." },
      { text: "보어 (Complement)", rationale: "주어나 목적어를 보충 설명하는 필수 성분이다." },
      { text: "수식어 (Modifier)", rationale: "정답! 수식어(부사, 전치사구 등)는 문장을 꾸며줄 뿐, 문장의 1~5형식을 결정하는 필수 뼈대 성분이 아니다. 생략해도 문장이 성립한다." },
      { text: "목적어 (Object)", rationale: "동사의 대상이 되는 필수 성분이다." }
    ],
    answer: 4,
    explanation: "영어 문장의 뼈대는 S(주어), V(동사), O(목적어), C(보어) 4가지뿐이다. 부사나 전치사구(in the room, yesterday 등)는 아무리 길어도 뼈대가 될 수 없는 '수식어(M)' 찌꺼기다."
  },
  {
    id: "e1-1-002",
    unitId: "e1-1",
    type: "choice",
    question: "다음 문장에서 밑줄 친 부분의 문장 성분은?\nMy father is a **teacher**.",
    options: [
      { text: "주어 (S)", rationale: "주어는 'My father'이다." },
      { text: "동사 (V)", rationale: "동사는 'is'이다." },
      { text: "목적어 (O)", rationale: "'My father(주어) = teacher'의 관계가 성립하므로 목적어가 아니다. 목적어는 주어와 다른 대상이어야 한다." },
      { text: "보어 (C)", rationale: "정답! 주어인 아빠가 곧 선생님(My father = teacher)이라는 '보충 설명'을 하고 있으므로 주격 보어(C)이다." },
      { text: "수식어 (M)", rationale: "teacher를 빼면 'My father is.'가 되어 문장이 불완전해지므로, 생략 불가능한 보어이다." }
    ],
    answer: 4,
    explanation: "be동사(am, are, is) 뒤에 나오는 명사나 형용사는 주어의 상태나 직업 등을 보충 설명하는 '주격 보어(C)' 역할을 한다."
  },
  {
    id: "e1-1-003",
    unitId: "e1-1",
    type: "choice",
    question: "다음 문장의 형식으로 알맞은 것은?\nBirds sing beautifully in the morning.",
    options: [
      { text: "1형식 (S + V)", rationale: "정답! 'Birds(S) sing(V)'이 뼈대이다. 'beautifully(부사)'와 'in the morning(전치사구)'은 모두 수식어(M)이므로 문장 형식에 영향을 주지 않는다." },
      { text: "2형식 (S + V + C)", rationale: "beautifully는 부사이므로 보어가 될 수 없다." },
      { text: "3형식 (S + V + O)", rationale: "노래하는 대상(목적어)이 명시되어 있지 않다." },
      { text: "4형식 (S + V + IO + DO)", rationale: "수여동사가 아니다." },
      { text: "5형식 (S + V + O + OC)", rationale: "목적어와 보어가 모두 없다." }
    ],
    answer: 1,
    explanation: "문장이 길어 보인다고 당황하지 마라. 전치사(+명사)와 부사는 모두 문장 성분에서 지우고 남는 뼈대만 보면 1형식(주어+동사) 문장이다."
  },
  {
    id: "e1-1-004",
    unitId: "e1-1",
    type: "choice",
    question: "빈칸에 들어갈 말로 가장 알맞은 것은?\nThe soup smells __________.",
    options: [
      { text: "good", rationale: "정답! smell은 '~한 냄새가 나다'라는 2형식 감각동사이다. 감각동사 뒤에는 반드시 '형용사' 보어가 와야 한다." },
      { text: "well", rationale: "well은 '잘'이라는 뜻의 부사이므로 보어 자리에 올 수 없다." },
      { text: "goodly", rationale: "이런 단어는 존재하지 않는다." },
      { text: "like good", rationale: "'like + 명사' 형태가 와야 하는데 good은 형용사이다." },
      { text: "to good", rationale: "감각동사 뒤에 to부정사나 전치사는 오지 않는다." }
    ],
    answer: 1,
    explanation: "감각동사(look, smell, sound, taste, feel) 뒤에는 부사(~하게)가 우리말 해석상 자연스러워 보여도, 영어 문법에서는 절대 부사를 쓸 수 없고 무조건 **형용사**를 써야 한다."
  },
  {
    id: "e1-1-005",
    unitId: "e1-1",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "He looks happily.", rationale: "정답! look은 감각동사이므로 뒤에 부사(happily)가 올 수 없다. 형용사인 happy로 고쳐야 한다." },
      { text: "The pizza tastes delicious.", rationale: "taste(감각동사) + delicious(형용사). 올바른 문장이다." },
      { text: "She sounds like an angel.", rationale: "감각동사 뒤에 명사가 올 때는 전치사 like를 붙인다. (sound like + 명사). 올바른 문장이다." },
      { text: "The blanket feels soft.", rationale: "feel(감각동사) + soft(형용사). 올바른 문장이다." },
      { text: "They got angry.", rationale: "get은 '~해지다'라는 뜻의 2형식 동사로 쓰였고, 뒤에 형용사(angry)가 잘 왔다." }
    ],
    answer: 1,
    explanation: "중학교 시험 단골 출제 포인트! '행복하게 보인다'라고 해석되더라도 'look happily'는 절대 안 된다. 형용사인 'look happy'가 맞다."
  },
  {
    id: "e1-1-006",
    unitId: "e1-1",
    type: "short",
    question: "다음 괄호 안의 단어 중 어법상 알맞은 것을 고르시오.\nYour voice sounds ( strange / strangely ). (단, 알파벳 소문자로만 입력하시오.)",
    answer: "strange",
    explanation: "sound는 '~하게 들리다'라는 뜻의 2형식 감각동사이다. 보어 자리에는 부사(strangely)가 올 수 없고 반드시 형용사(strange)가 와야 한다."
  },
  {
    id: "e1-1-007",
    unitId: "e1-1",
    type: "choice",
    question: "다음 밑줄 친 동사의 쓰임이 나머지 넷과 **다른** 것은?",
    options: [
      { text: "The leaves **turned** red.", rationale: "turn이 '~한 상태가 되다'라는 2형식 동사로 쓰였다." },
      { text: "He **grew** tired.", rationale: "grow가 '자라다'가 아니라 '~해지다'라는 2형식 동사로 쓰였다." },
      { text: "She **became** a doctor.", rationale: "become은 대표적인 2형식 동사이다." },
      { text: "The milk **went** bad.", rationale: "go가 '가다'가 아니라 '(음식이) 상하다, 나쁘게 되다'라는 2형식 동사로 쓰였다." },
      { text: "We **went** to the park.", rationale: "정답! 여기서 go는 '가다'라는 뜻의 1형식 동사이다. 뒤의 'to the park'는 장소를 나타내는 전치사구(수식어 M)이다." }
    ],
    answer: 5,
    explanation: "turn, grow, go 같은 동사들은 1형식(가다, 자라다, 돌다)으로도 쓰이지만, 뒤에 형용사가 오면 '~한 상태가 되다'라는 뜻의 2형식 동사로 변신한다는 것을 기억해."
  },
  {
    id: "e1-1-008",
    unitId: "e1-1",
    type: "short",
    question: "다음 문장을 2형식 문장으로 바르게 고치기 위해 추가해야 할 단어를 적으시오.\nThis material feels silk. (단, 알파벳 소문자로만 입력하시오.)",
    answer: "like",
    explanation: "feel, look, sound, taste, smell 등의 감각동사 뒤에 형용사가 아닌 명사(silk, 비단)가 올 때는 반드시 전치사 like를 써야 한다. (feels like silk)"
  },
  {
    id: "e1-1-009",
    unitId: "e1-1",
    type: "choice",
    question: "문장의 형식이 나머지 넷과 **다른** 하나는?",
    options: [
      { text: "I ran fast.", rationale: "S + V + M (fast는 부사). 1형식이다." },
      { text: "She smiled brightly.", rationale: "S + V + M (brightly는 부사). 1형식이다." },
      { text: "The sun rises in the east.", rationale: "S + V + M (in the east는 전치사구). 1형식이다." },
      { text: "The baby cried loudly.", rationale: "S + V + M (loudly는 부사). 1형식이다." },
      { text: "The weather became cold.", rationale: "정답! S + V + C (cold는 날씨를 설명하는 형용사 보어). 2형식이다." }
    ],
    answer: 5,
    explanation: "문장의 형식을 찾을 때는 항상 부사와 전치사구부터 괄호 치고 무시해. 그러면 뼈대가 명확하게 보인다."
  },
  {
    id: "e1-1-010",
    unitId: "e1-1",
    type: "short",
    question: "다음 괄호 안의 두 단어 중 올바른 것을 고르시오.\nThe problem proved ( difficult / difficultly ). (단, 알파벳 소문자로만 입력하시오.)",
    answer: "difficult",
    explanation: "prove는 '~임이 판명되다'라는 2형식 동사로 쓰일 수 있어. 2형식 문장에서 주어의 상태를 설명하는 보어 자리에는 절대로 부사(-ly)가 올 수 없고 형용사가 와야 해."
  },
  {
    id: "e1-1-011",
    unitId: "e1-1",
    type: "choice",
    question: "다음 문장의 밑줄 친 부분과 같은 문장 성분으로 쓰인 것은?\nThe story sounds **interesting**.",
    options: [
      { text: "She plays **the piano**.", rationale: "the piano는 동사 play의 대상인 목적어(O)이다." },
      { text: "He looks **tired** today.", rationale: "정답! tired는 주어 He의 상태를 보충 설명하는 주격 보어(C)이다. 주어진 문장의 interesting 역시 보어이다." },
      { text: "They live **in Seoul**.", rationale: "in Seoul은 장소를 나타내는 전치사구, 즉 수식어(M)이다." },
      { text: "I bought **a book** yesterday.", rationale: "a book은 동사 bought의 대상인 목적어(O)이다." },
      { text: "We studied **hard**.", rationale: "hard는 '열심히'라는 뜻의 부사(M)이다." }
    ],
    answer: 2,
    explanation: "주어진 문장은 2형식(감각동사 sound + 형용사 보어)이다. 같은 구조의 2형식 문장(look + 형용사 보어)을 찾으면 된다."
  },
  {
    id: "e1-1-012",
    unitId: "e1-1",
    type: "short",
    question: "다음 문장에서 수식어(Modifier)에 해당하는 단어를 모두 찾아 띄어쓰기로 구분하여 적으시오.\nThe old man slowly walked to the park.",
    answer: "slowly to the park",
    explanation: "주어는 'The old man', 동사는 'walked'이다. 문장의 뼈대에 포함되지 않고 동사를 꾸며주는 부사 'slowly'와 장소를 나타내는 전치사구 'to the park'가 모두 수식어(M)이다."
  },
  {
    id: "e1-1-013",
    unitId: "e1-1",
    type: "choice",
    question: "다음 중 4형식(S + V + IO + DO) 문장으로 바르게 구성된 것은?",
    options: [
      { text: "She bought a book for me.", rationale: "전치사(for)가 이끄는 명사는 수식어(M)가 되므로 3형식(S + V + O)이다." },
      { text: "He became a great teacher.", rationale: "become은 2형식 동사이다." },
      { text: "I gave him some money.", rationale: "정답! give는 수여동사이며, him(간접목적어: ~에게)과 some money(직접목적어: ~을/를)가 나란히 온 완벽한 4형식이다." },
      { text: "They painted the door green.", rationale: "목적어(the door)를 보충 설명하는 목적격 보어(green)가 온 5형식이다." },
      { text: "My mom smiled at me.", rationale: "smile은 1형식 동사이고, at me는 수식어이다." }
    ],
    answer: 3,
    explanation: "4형식 문장은 '주어 + 수여동사(주다) + ~에게(사람) + ~을/를(사물)'의 순서로 단어들이 나열된다. 중간에 전치사가 끼어들면 3형식으로 바뀐다."
  },
  {
    id: "e1-1-014",
    unitId: "e1-1",
    type: "choice",
    question: "다음 4형식 문장을 3형식으로 바꿀 때, 빈칸에 들어갈 전치사가 나머지 넷과 **다른** 하나는?",
    options: [
      { text: "He sent a letter (   ) his friend.", rationale: "send는 방향성이 있으므로 'to'를 쓴다." },
      { text: "I taught English (   ) them.", rationale: "teach는 방향성이 있으므로 'to'를 쓴다." },
      { text: "She made a doll (   ) her daughter.", rationale: "정답! make는 시간과 정성이 들어가는 동사이므로 'for(~를 위해)'를 쓴다." },
      { text: "They showed the picture (   ) us.", rationale: "show는 방향성이 있으므로 'to'를 쓴다." },
      { text: "He handed the salt (   ) me.", rationale: "hand(건네주다)는 방향성이 있으므로 'to'를 쓴다." }
    ],
    answer: 3,
    explanation: "4형식을 3형식으로 바꿀 때 대부분의 동사(give, send, show, teach 등)는 'to'를 쓰지만, 시간과 노력, 돈이 들어가는 동사(make, buy, cook, get, find)는 'for'를 쓴다."
  },
  {
    id: "e1-1-015",
    unitId: "e1-1",
    type: "short",
    question: "다음 문장을 3형식으로 바꿀 때 빈칸에 알맞은 단어를 쓰시오.\nMy father bought me a new computer.\n-> My father bought a new computer (      ) me.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "for",
    explanation: "buy(사주다)는 누군가를 '위해' 돈과 정성을 쓰는 동사이므로 전치사 for를 사용한다."
  },
  {
    id: "e1-1-016",
    unitId: "e1-1",
    type: "short",
    question: "다음 문장을 3형식으로 바꿀 때 빈칸에 알맞은 단어를 쓰시오.\nCan I ask you a favor?\n-> Can I ask a favor (      ) you?\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "of",
    explanation: "ask, require, beg 등의 '요구하다, 묻다' 계열의 수여동사는 3형식으로 전환할 때 전치사 of를 사용한다. (중학교 내신 필수 암기 사항!)"
  },
  {
    id: "e1-1-017",
    unitId: "e1-1",
    type: "choice",
    question: "다음 중 4형식을 3형식으로 변환한 문장으로 어법상 **틀린** 것은?",
    options: [
      { text: "He gave an apple to me.", rationale: "give는 to를 쓴다. 올바른 문장이다." },
      { text: "She cooked dinner for us.", rationale: "cook은 정성이 들어가는 동사이므로 for를 쓴다. 올바른 문장이다." },
      { text: "I asked a question of the teacher.", rationale: "ask는 of를 쓴다. 올바른 문장이다." },
      { text: "They built a house for him.", rationale: "build(지어주다)는 노력과 시간이 들어가므로 for를 쓴다. 올바른 문장이다." },
      { text: "He found a good job to his son.", rationale: "정답! find(찾아주다)는 시간과 노력이 들어가는 동사이므로 to가 아니라 for를 써야 한다." }
    ],
    answer: 5,
    explanation: "'MBC GF'로 외워두면 편하다! Make, Buy, Cook, Get, Find 동사들은 모두 전치사 for를 쓴다."
  },
  {
    id: "e1-1-018",
    unitId: "e1-1",
    type: "choice",
    passage: "Yesterday was my sister's birthday. I bought a pretty dress ( A ) her. My parents gave a new laptop ( B ) her. Also, my little brother made a cute card ( C ) her. We all asked a big favor ( D ) her: to share the cake with us!",
    question: "위 지문의 빈칸 ( A ), ( B ), ( C ), ( D )에 들어갈 전치사를 순서대로 바르게 나열한 것은?",
    options: [
      { text: "to - to - for - of", rationale: "bought는 for를 써야 한다." },
      { text: "for - to - for - of", rationale: "정답! bought(buy) -> for, gave(give) -> to, made(make) -> for, asked(ask) -> of 이다." },
      { text: "for - for - to - of", rationale: "gave는 to, made는 for이다." },
      { text: "to - for - to - of", rationale: "동사의 성격을 완전히 반대로 파악했다." },
      { text: "for - to - of - for", rationale: "ask는 of를 써야 한다." }
    ],
    answer: 2,
    explanation: "문맥 속에서도 동사만 정확히 찾으면 전치사 문제는 1초 만에 풀 수 있다. buy, make = for / give = to / ask = of."
  },
  {
    id: "e1-1-019",
    unitId: "e1-1",
    type: "choice",
    question: "다음 밑줄 친 부분 중, 문장 성분이 '직접목적어(DO)'인 것은?",
    options: [
      { text: "He gave **me** a present.", rationale: "me는 '~에게'로 해석되는 간접목적어(IO)이다." },
      { text: "She made her son **a cake**.", rationale: "정답! a cake는 '~을/를'로 해석되는 직접목적어(DO)이다." },
      { text: "I bought a book **for him**.", rationale: "for him은 전치사구이므로 수식어(M)이다. 3형식 문장이다." },
      { text: "They call him **a genius**.", rationale: "a genius는 him(목적어)을 설명하는 목적격 보어(OC)이다. 5형식이다." },
      { text: "My uncle is **a doctor**.", rationale: "a doctor는 주어를 설명하는 주격 보어(C)이다." }
    ],
    answer: 2,
    explanation: "4형식 구조는 '주어 + 동사 + 간접목적어(사람:~에게) + 직접목적어(사물:~을)'. 간목과 직목의 순서와 해석을 정확히 알아야 한다."
  },
  {
    id: "e1-1-020",
    unitId: "e1-1",
    type: "short",
    passage: "수아는 영어 일기를 쓰다가 4형식 문장의 규칙을 헷갈렸다.\n'나는 그것(it)을 그에게(him) 주었다'라는 문장을 쓰려고 한다.",
    question: "다음 문장에서 어법상 틀린 부분을 찾아 올바른 3형식 문장으로 고쳐 쓸 때, 빈칸에 들어갈 단어를 쓰시오.\n(틀린 문장) I gave him it. -> (올바른 문장) I gave it (      ) him.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "to",
    explanation: "직접목적어가 '대명사(it, them 등)'일 때는 절대로 4형식(사람+대명사)으로 쓸 수 없고, 반드시 3형식(대명사+전치사+사람)으로만 써야 한다는 아주 중요한 예외 규칙이다!"
  },
  {
    id: "e1-1-021",
    unitId: "e1-1",
    type: "choice",
    question: "다음 중 어법상 **틀린** 문장은?",
    options: [
      { text: "She brought me a cup of tea.", rationale: "bring + 사람 + 사물. 올바른 4형식이다." },
      { text: "He introduced me his friend.", rationale: "정답! introduce, explain, suggest 등은 4형식으로 쓸 수 없는 '절대 3형식 동사'이다. He introduced his friend to me. 로 고쳐야 한다." },
      { text: "I told him the truth.", rationale: "tell + 사람 + 사물. 올바른 4형식이다." },
      { text: "Could you pass me the salt?", rationale: "pass + 사람 + 사물. 올바른 4형식이다." },
      { text: "She read us a story.", rationale: "read + 사람 + 사물. 올바른 4형식이다." }
    ],
    answer: 2,
    explanation: "introduce(소개하다), explain(설명하다)은 우리말로는 '~에게 ~을'이 자연스러워서 4형식 같지만, 영어에서는 반드시 '전치사 to'를 써서 3형식으로만 써야 하는 함정 동사들이다."
  },
  {
    id: "e1-1-022",
    unitId: "e1-1",
    type: "short",
    passage: "Mr. Smith is a nice teacher. Yesterday, he taught us English history. After class, I asked a difficult question of him. Then, he showed some interesting pictures to us.",
    question: "위 지문의 'he taught us English history'를 3형식 문장으로 바꿀 때, 빈칸에 들어갈 알맞은 전치사를 쓰시오.\n-> he taught English history (      ) us.\n(단, 알파벳 소문자 1단어로만 입력하시오.)",
    answer: "to",
    explanation: "지문 속에서 동사 teach의 과거형인 taught가 쓰였다. teach는 지식이나 방향을 전달하는 동사이므로 3형식 전환 시 전치사 to를 쓴다."
  },
  {
    id: "e1-1-023",
    unitId: "e1-1",
    type: "choice",
    question: "다음 문장들의 형식이 올바르게 짝지어진 것은?\n(A) I got him a ticket.\n(B) The ticket got expensive.",
    options: [
      { text: "(A) 3형식 - (B) 2형식", rationale: "(A)에서 전치사 없이 사람+사물이 나란히 왔으므로 4형식이다." },
      { text: "(A) 4형식 - (B) 2형식", rationale: "정답! (A)는 get이 '~에게 ~을 구해주다/사주다'라는 뜻의 수여동사(4형식)로 쓰였다. (B)는 get 뒤에 형용사가 와서 '~해지다'라는 뜻의 2형식 동사로 쓰였다." },
      { text: "(A) 4형식 - (B) 3형식", rationale: "expensive는 목적어가 아니라 보어이다." },
      { text: "(A) 5형식 - (B) 2형식", rationale: "(A)에서 him과 ticket은 서로 다른 대상이므로 5형식이 될 수 없다." },
      { text: "(A) 3형식 - (B) 1형식", rationale: "동사의 성질을 모두 잘못 파악했다." }
    ],
    answer: 2,
    explanation: "get처럼 같은 동사라도 뒤에 어떤 형태의 단어들이 오느냐에 따라 문장의 형식이 완전히 달라진다. 형식을 외우는 것이 아니라 문장의 구조를 보는 눈을 길러야 한다."
  }
];