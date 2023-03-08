export type QuestionCategory = 'button-2' | 'color' | 'button-4' | 'sub';
export interface QuestionType {
  id: number;
  type: QuestionCategory;
  question: string[];
  answer?: string[];
  character: string;
}

interface SubQuestionType extends QuestionType {}

export const subQuestion2: SubQuestionType[] = [
  {
    id: 2,
    type: 'button-4',
    question: ['일기에 어떤 내용을 기록하나요?'],
    answer: ['일상', '다짐', '행복한 기억', '중요한 약속'],
    character: 'yellow_lanny',
  },
  {
    id: 2,
    type: 'button-4',
    question: ['어떤 장르의 책을 가져가고 싶나요?'],
    answer: ['소설', '과학책', '전공책', '미술책'],
    character: 'purple_lanny',
  },
  {
    id: 2,
    type: 'button-4',
    question: ['그 꽃은 어떤 꽃인가요?'],
    answer: ['장미', '허브', '프리지아', '이름모를 꽃'],
    character: 'green_lanny',
  },
  {
    id: 2,
    type: 'button-2',
    question: ['카메라로 어떤 것 찍고 싶으세요?'],
    answer: ['인물', '풍경', '정물', '꽃'],
    character: 'yellow_lanny',
  },
];

export const QUESTION_DATA: QuestionType[] = [
  {
    id: 1,
    type: 'button-4',
    question: [
      '고향별로 가는 우주선에 탑승하기 위해서는 ',
      '지구별의 물건 중 단 하나만 가져갈 수 있어요! ',
      '어떤 것을 가져가시겠어요?',
    ],
    answer: ['일기장', '좋아하는 책', '꽃이 담긴 화분', '카메라'],
    character: 'green_lanny',
  },
  {
    id: 2,
    type: 'sub',
    question: [''],
    character: 'green_lanny',
  },
  {
    id: 3,
    type: 'color',
    question: [
      '우주선 밖으로 행성이 보이네요! ',
      '무슨 색인가요?',
      '(별을 슬라이드하여 색을 선택할 수 있습니다.)',
    ],
    character: 'lumy', // 필요없음
  },
  {
    id: 4,
    type: 'button-2',
    question: [
      '우주인님은 우주에 인간을 제외한 ',
      '지적 생명체가 있다고 생각하시나요?',
    ],
    character: 'yellow_lanny',
  },
  {
    id: 5,
    type: 'button-4',
    question: ['그 지적 생명체는 어떤 모습일까요?'],
    answer: [
      '인간의 모습',
      '동물의 모습',
      '본적 없는 외형',
      '무섭게 생겼을지도!',
    ],
    character: 'dake',
  },

  {
    id: 6,
    type: 'button-4',
    question: ['우주인님이 제일 좋아하는 것을 알려주세요!'],
    answer: ['음악감상', '사진촬영', '운동하기', '게임하기'],
    character: 'green_lumy',
  },
  {
    id: 7,
    type: 'button-4',
    question: [
      '지구별에서 애완 동물을 기르시나요?',
      '혹은 길렀던/기르고 싶은 동물이 있나요?',
    ],
    answer: ['고양이', '강아지', '새', '없음'],
    character: 'cheese_dake',
  },

  {
    id: 8,
    type: 'button-4',
    question: ['지구별에서 이루고 싶은 목표를 알려주세요! '],
    answer: [
      '지구별 정복',
      '지구별 대스타',
      '지구별 자선사업가',
      '지구별의 비밀 밝히기',
    ],
    character: 'yellow_lumy',
  },
  {
    id: 9,
    type: 'button-4',
    question: ['당신이 가장 좋아하는 음악 장르는 무엇인가요?'],
    answer: ['K-POP', 'POP', '힙합', '락'],
    character: 'purple_lumy',
  },
  {
    id: 10,
    type: 'button-4',
    question: ['고향별에 도착하면 가장 먼저 무엇을 하고 싶으신가요?'],
    answer: ['사진찍기', '산책', '친구에게 편지쓰기', '그리운 사람 찾기'],
    character: 'green_lumy',
  },
];
