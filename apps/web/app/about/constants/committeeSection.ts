import type { Leadership, Team } from "../types/committeeSection";

export const LEADERSHIP: Leadership[] = [
  { role: "졸업주간 준비위원장", name: "정예원" },
  { role: "산업디자인 부위원장", name: "유용준" },
  { role: "시각디자인 부위원장", name: "탁로현" },
];

export const TEAMS: Team[] = [
  {
    name: "기획팀",
    leader: "정예원",
    members: ["유용준", "탁로현", "전아련", "정선영", "김소민"],
  },
  {
    name: "브랜딩팀",
    leader: "정선영",
    members: ["김선형", "마랄마", "배정안", "유서연"],
  },
  {
    name: "영상팀",
    leader: "이윤지",
    members: ["박은빈", "한태희", "신지호"],
  },
  {
    name: "도록팀",
    leader: "윤희경",
    members: ["박세정", "장수연", "조하연"],
  },
  {
    name: "웹팀",
    leader: "신혜원",
    members: ["유채원", "이세영", "이우성", "신지윤", "정유정"],
  },
  {
    name: "대외협력팀",
    leader: "홍지윤",
    members: ["이병훈"],
  },
  {
    name: "프로그램팀",
    leader: "박수민",
    members: ["두소진", "서효리"],
  },
  {
    name: "공간팀",
    leader: "한의헌",
    members: [
      "탁로현",
      "김정민",
      "조수민",
      "박진아",
      "심은비",
      "남지강",
      "신주민",
    ],
  },
  {
    name: "홍보팀",
    leader: "전아련",
    members: ["김수은"],
  },
  {
    name: "텀블벅팀",
    leader: "정예원",
    members: ["윤희경", "정선영"],
  },
];
