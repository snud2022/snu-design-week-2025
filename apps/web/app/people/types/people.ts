export type PersonClass = {
  index: number; // peopleGraphicConfigs의 인덱스
  workId: string; // works detail 조회를 위한 work id
};

export type Person = {
  id: string;
  nameKo: string;
  nameEn: string;
  type: "visual" | "industrial";
  classes: PersonClass[];
};
