export type PeopleGraphicConfig = {
  src: string;
  hoverSrc: string;
  width: number;
  height: number;
};

// People 페이지 반응형 스케일 팩터
export const PEOPLE_RESPONSIVE_SCALES = {
  mobile: 0.9,
  tablet: 0.9 * 0.85,
  desktop: 0.9,
} as const;

// Works 페이지 반응형 스케일 팩터
export const WORKS_RESPONSIVE_SCALES = {
  mobile: 1,
  tablet: 0.75,
  desktop: 1,
} as const;

// 기본 크기
export const peopleGraphicConfigs: PeopleGraphicConfig[] = [
  {
    src: "/subGraphic/TiedBrand.svg",
    hoverSrc: "/subGraphic/InsideBrand.svg",
    width: 107,
    height: 151,
  },
  {
    src: "/subGraphic/TiedGraphic.svg",
    hoverSrc: "/subGraphic/InsideGraphic.svg",
    width: 126,
    height: 150,
  },
  {
    src: "/subGraphic/TiedMedia.svg",
    hoverSrc: "/subGraphic/InsideMedia.svg",
    width: 245,
    height: 148,
  },
  {
    src: "/subGraphic/TiedUIUX.svg",
    hoverSrc: "/subGraphic/InsideUIUX.svg",
    width: 135,
    height: 150,
  },
  {
    src: "/subGraphic/TiedLiving.svg",
    hoverSrc: "/subGraphic/InsideLiving.svg",
    width: 118,
    height: 151,
  },
  {
    src: "/subGraphic/TiedProduct.svg",
    hoverSrc: "/subGraphic/InsideProduct.svg",
    width: 104,
    height: 152,
  },
  {
    src: "/subGraphic/TiedSpace.svg",
    hoverSrc: "/subGraphic/InsideSpace.svg",
    width: 120,
    height: 151,
  },
  {
    src: "/subGraphic/TiedMobility.svg",
    hoverSrc: "/subGraphic/InsideMobility.svg",
    width: 261,
    height: 150,
  },
];

// 반응형 설정을 적용한 함수
export const getResponsiveConfigs = (scale: number): PeopleGraphicConfig[] => {
  return peopleGraphicConfigs.map((config) => ({
    ...config,
    width: config.width * scale,
    height: config.height * scale,
  }));
};
