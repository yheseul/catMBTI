const mbtiType = [
  {name: 'I', value: 0},
  {name: 'E', value: 0},
  {name: 'S', value: 0},
  {name: 'N', value: 0},
  {name: 'T', value: 0},
  {name: 'F', value: 0},
  {name: 'J', value: 0},
  {name: 'P', value: 0}
]

const qnaList = [
  {
    question: '친구와 만날 약속을 정할 때',
    answerList: [
      { answer: '언제 어디서 만날꺼냥? 뭐할꺼냥? 뭐먹을꺼냥?', type: ['J'] },
      { answer: '어떻게 될 지 모르니까 그때가서 정하자냥!', type: ['P'] }
    ]
  },
  {
    question: '책을 읽을 시간이 생겼습니다. 당신이 가장 선호하는 장르는?',
    answerList: [
      { answer: '실용적이고 현실적인 자기계발서나 논문적인 사실이나 정보를 담은 책이 좋다냥!', type: ['T'] },
      { answer: '상상력이 풍부하며 철학적인 내용이 담긴 소설이나 판타지가 좋다냥!', type: ['F'] }
    ]
  },
  {
    question: '새로운 사람을 만났을 때, 당신은?',
    answerList: [
      { answer: '다른 사람이 말을 걸때까지 먼저 말을 걸지 않는다냥...', type: ['I'] },
      { answer: '말을 먼저 걸며 상대방이 어떤 사람인지 파악한다냥!', type: ['E'] }
    ]
  },
  {
    question: '길에서 지갑을 주웠다.',
    answerList: [
      { answer: '주인을 찾을 수 있게 파출소에 가져다줘야한다냥.', type: ['S'] },
      { answer: '내가 찾아 준 주인이 엄청난 부자여서 사례로 츄르 1000개를 받은 건에 대하여...', type: ['N'] }
    ]
  },
  {
    question: '봄날, 밖에서 즐거운 시간을 보내고 싶은데 친구들과의 계획이 너무 복잡해졌습니다. 당산은?',
    answerList: [
      { answer: '미리 정해진 계획대로 진행되도록 조율한다냥.', type: ['J'] },
      { answer: '계획은 계획일뿐이다냥! 즉석에서 새로운 계획을 친구들에게 제안받는다냥.', type: ['P'] }
    ]
  },
  {
    question: '친구가 고민 상담을 하려고 합니다. 당신의 반응은?',
    answerList: [
      { answer: '감정에 최대한 공감해주며 친구가 하는 말에 최대한 맞다고 해준다냥.', type: ['F'] },
      { answer: '친구의 문제가 어떻게 해결되면 좋을지 자세한 조언을 해준다냥.', type: ['T'] }
    ]
  },
  {
    question: '회사란 실내? 실외?',
    answerList: [
      { answer: '일주일 동안 타인들과 함께 일을? 당연히 실외다냥!', type: ['I'] },
      { answer: '일주일 동안 사무실에있었는데! 당연히 실내다냥~', type: ['E'] }
    ]
  },
  {
    question: '노래 들을 때.',
    answerList: [
      { answer: '멜로디 좋으면 일단 저장한다냥.', type: ['S'] },
      { answer: '멜로디 좋아도 가사 매칭안되면 삭제 이해 안가는 부분있으면 곱씹어본다냥.', type: ['N'] }
    ]
  },
  {
    question: '더 선호하는 루틴',
    answerList: [
      { answer: '반복되는 일상과 업무 선호한다냥. 편-안.', type: ['J'] },
      { answer: '쳇바퀴 같은 인생은 질색이다냥! 매일매일 변화가 있어야 한다냥.', type: ['P'] }
    ]
  },
  {
    question: '안좋은 일이 있어서 퇴사했어',
    answerList: [
      { answer: '왜? 결국 상사랑 싸웠냥? 아니면 프로젝트냥?', type: ['F'] },
      { answer: '퇴사했다고했냥? 이직은 했냥?', type: ['T'] }
    ]
  },
  {
    question: '친구들과 놀다 집에 들어가기 전 지금 내 기분은?',
    answerList: [
      { answer: '(빨리 집 가서 쉬어야된다냥...)', type: ['I'] },
      { answer: '벌써 가는거냥?! 더 놀자냥~ㅠㅠ(다른 고양이한테 연락하는 중)', type: ['E'] }
    ]
  },
  {
    question: '당신이 바퀴벌레 VS 쥐 중 하나로 바뀐다면?',
    answerList: [
      { answer: '그런 생각을 왜 한다냥. 그럴 일이 없다냥.', type: ['S'] },
      { answer: '으으... 둘 다 너무 싫지만! 차라리 쥐가 낫겠다냥.', type: ['N'] }
    ]
  },
]

const resultList = [
  {
    value: 'ISTJ',
    name: '잇티제냥(세상의 소금형)',
    description: '한국인의 25%. 한 번 시작한 일은 끈기 있게 해내는 사람',
    goodType: 'ENFP, ENTP, ISFP, INFP',
    badType: 'ENTJ, INFJ, ENTJ, ESTP'
  },
  {
    value: 'ISFJ',
    name: '잇프제냥(임금 뒷편의 권력형)',
    description: '한국인의 8%. 성실하고 온화하며 사람들에게 협조적인 사람',
    goodType: 'ENTP, ENFP, INTP, ISTP',
    badType: 'ENTJ, INTJ, ISFP, INFJ'
  },
  {
    value: 'INFJ',
    name: '인프제냥(예언자형)',
    description: '한국인의 2%. 사람에 대한 뛰어한 통찰력을 가진 사람',
    goodType: 'ESTP, ESFP, ISTP, INTP',
    badType: 'ESTJ, ESTJ, INFP, ISFJ'
  },
  {
    value: 'INTJ',
    name: '인티제냥(과학자형)',
    description: '한국인의 4%. 전체를 조합하여 사람들에게 새로운 것들을 제시하는 사람',
    goodType: 'ESFP, ESTP, ISFP, INFP',
    badType: 'ESFJ, ISFJ, ESTJ, INTP'
  },
  {
    value: 'ISTP',
    name: '잇팁냥(백과사전형)',
    description: '한국인의 9%. 논리적이고 뛰어한 상황 적응력을 가진 사람',
    goodType: 'ENFJ, ESFJ, INFJ, ISFJ',
    badType: 'ENFP, INFP, ISFP, ISTJ'
  },
  {
    value: 'ISFP',
    name: '잇프피냥(성인군자형)',
    description: '한국인의 7%. 따뜻한 감성과 겸손함을 갖춘 사람',
    goodType: 'ENTJ, ESTJ, INTJ, ISTJ',
    badType: 'ENTP, INTP, ISFJ, ISTP'
  },
  {
    value: 'INFP',
    name: '인프피냥(잔다르크형)',
    description: '한국인의 3%. 이상적인 세상을 만들어가는 사람',
    goodType: 'ESTJ, ENTJ, INTJ, ISTJ',
    badType: 'ESTP, ISTP, INFJ, ISFP'
  },
  {
    value: 'INTP',
    name: '인팁냥(아이디어형)',
    description: '한국인의 3%, 비판적인 시선을 가진 전략가 같은 사람',
    goodType: 'ESFJ, ENFJ, ISFJ, INFJ',
    badType: 'ESFP, ISFP, ESTP, INFP'
  },
  {
    value: 'ESTJ',
    name: '엣티제냥(사업가형)',
    description: '한국인의 15%. 사무적, 실용적, 현실적인 사람',
    goodType: 'INFP, ISFP, INTP, ENTP',
    badType: 'INFJ, ENFJ, ESTP, ENTJ'
  },
  {
    value: 'ESFJ',
    name: '엣프제냥(친선도모형)',
    description: '한국인의 5%. 친절함과 배려심을 가지고 다른 사람에게 봉사정신을 베푸는 사람',
    goodType: 'INTP, ISTP, ENTP, ENFP',
    badType: 'INTJ, ENTJ, ESFP, ESTJ'
  },
  {
    value: 'ENFJ',
    name: '엔프제냥(언변능숙형)',
    description: '한국인의 1%. 타인의 성장을 도모하고 협동하는 사람',
    goodType: 'ISTP, INTP, ESTP, ESFP',
    badType: 'ISTJ, ESTJ, ISFJ, ENTJ'
  },
  {
    value: 'ENTJ',
    name: '엔티제냥(지도자형)',
    description: '한국인의 2%. 다른 사람이 무언가를 적극적이고 활력 있게 하도록 돕는 사람',
    goodType: 'ISFP, INFP, ESFP, ESTP',
    badType: 'ISFJ, ESFJ, ENTJ, ESTJ'
  },
  {
    value: 'ESTP',
    name: '엣팁냥(활동가형)',
    description: '한국인의 6%. 다양한 친구와 분야를 접하고 싶어하는 사람',
    goodType: 'INFJ, INTJ, ENFJ, ENTJ',
    badType: 'INFP, ENFP, ESTJ, ENTP'
  },
  {
    value: 'ESFP',
    name: '엣프피냥(사교형)',
    description: '한국인의 5%. 사람들 사이에서 분위기를 고조시키는 우호적인 사람',
    goodType: 'INTJ, INFJ, ENTJ, ENFJ',
    badType: 'INTP, ENTP, ENFP, ESFJ'
  },
  {
    value: 'ENFP',
    name: '엔프피냥(스파크형)',
    description: '한국인의 4%. 열정과 창의성으로 새로운 관계를 만드는 사람',
    goodType: 'ISTJ, ISFJ, ESFJ, ESTJ',
    badType: 'ISTP, ESTJ, ISFJ, ENTJ'
  },
  {
    value: 'ENTP',
    name: '엔팁냥(발명가형)',
    description: '한국인의 2%. 상상력이 풍부하여 새로운 것에 꾸준히 도전하는 사람',
    goodType: 'ISFJ, ISTJ, ENTP, ESTJ',
    badType: 'ISFP, ESFP, ENTJ, ESTP'
  },
]