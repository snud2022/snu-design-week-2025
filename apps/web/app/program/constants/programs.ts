import type { ProgramEvent } from "@/program/types/program";

export const PROGRAM_INTRO = {
  kr: "2025 SNU Design Week WRAP UP은 하이데이와 토크 콘서트가 진행되었습니다.",
  en: "2025 SNU Design Week WRAP UP featured 'Hi-Day' and a 'Talk Concert'.",
};

export const PROGRAMS: ProgramEvent[] = [
  {
    imageUrl: "/program/image.jpg",
    month: "Dec",
    day: "05",
    time: "18:30 - 21:00",
    title: {
      kr: "하이데이",
      en: "Hi-Day",
    },
    description: {
      kr: "2025 SNU DESIGN WEEK의 개최를 축하하는 동시에 49동의 마지막을 기념하는 자리입니다. 재학생과 졸업생이 한데 모여 49동에서의 많은 추억을 WRAP UP하고 한층 더 새로워질 디자인과의 공간과 비전을 함께 그려가는 뜻깊은 시간이 됩니다. 케이터링과 주류, 미니게임 및 이벤트가 준비되어 있으며 공식 식순 전후로 DJ 파티가 진행됩니다.",
    },
  },
  {
    month: "Dec",
    day: "05",
    time: "15:00 - 19:30",
    title: {
      kr: "토크 콘서트: MOVING DESIGN VD TALK",
      en: "Talk Concert: MOVING DESIGN VD TALK",
    },
    speakers: [
      {
        name: "함영훈",
      },
      {
        name: "엄후영",
      },
    ],
    description: {
      kr: "네이버를 거쳐 현재 디자인 에이전시 Orkr를 운영하는 순수 예술가 겸 디자이너 함영훈과, 조셉앤스테이시, 어도어 등에서 디자이너로 일하다 Studio Hooyounghoo를 설립한 엄후영이 참여합니다. 두 연사 모두 그래픽 디자인과 브랜딩을 기반으로 다양한 클라이언트와 작업하며 각자의 영역을 구축해왔습니다. '이사'라는 공통 주제로, 디자이너로서 겪는 다양한 커리어 전환과 독립 과정에 대한 경험을 나눌 예정입니다.",
    },
  },
  {
    month: "Dec",
    day: "06",
    time: "14:00 - 17:00",
    title: {
      kr: "토크 콘서트: MOVING DESIGN ID TALK",
      en: "Talk Concert: MOVING DESIGN ID TALK",
    },
    speakers: [
      {
        name: "송봉규",
      },
      {
        name: "성정기",
      },
    ],
    description: {
      kr: "삼성전자 출신으로 BKID를 설립한 송봉규 디자이너와 LG, IDEO를 거쳐 현재 Daylight에 재직 중인 성정기 디자이너가 산업 디자인에 대한 강연을 진행합니다. 송봉규 디자이너는 '공예에서 하이테크로' 등 디자인 영역 확장에 대해 이야기하고, 성정기 디자이너는 글로벌 기업 경험을 바탕으로 '변화하는 프로세스'와 포트폴리오 노하우를 공유합니다. 강연 사이에 하드웨어 제조사 스가츠네가 자사의 솔루션을 소개하는 협력사 세션이 포함되어 있습니다.",
    },
  },
];
