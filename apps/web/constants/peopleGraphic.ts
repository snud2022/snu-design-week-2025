export type PeopleGraphicConfig = {
  url: string;
  hoverUrl: string;
  width: number;
  height: number;
};

// 반응형 스케일 팩터
export const RESPONSIVE_SCALES = {
  mobile: 1,
  tablet: 0.8,
  desktop: 1,
} as const;

// 기본 크기
const baseConfigs: PeopleGraphicConfig[] = [
  {
    url: "/subGraphic/TiedBrand.png",
    hoverUrl: "/subGraphic/InsideBrand.png",
    width: 107,
    height: 151,
  },
  {
    url: "/subGraphic/TiedGraphic.png",
    hoverUrl: "/subGraphic/InsideGraphic.png",
    width: 126,
    height: 150,
  },
  {
    url: "/subGraphic/TiedLiving.png",
    hoverUrl: "/subGraphic/InsideLiving.png",
    width: 118,
    height: 151,
  },
  {
    url: "/subGraphic/TiedMedia.png",
    hoverUrl: "/subGraphic/InsideMedia.png",
    width: 245,
    height: 148,
  },
  {
    url: "/subGraphic/TiedMobility.png",
    hoverUrl: "/subGraphic/InsideMobility.png",
    width: 261,
    height: 150,
  },

  {
    url: "/subGraphic/TiedProduct.png",
    hoverUrl: "/subGraphic/InsideProduct.png",
    width: 104,
    height: 152,
  },
  {
    url: "/subGraphic/TiedSpace.png",
    hoverUrl: "/subGraphic/InsideSpace.png",
    width: 120,
    height: 151,
  },
  {
    url: "/subGraphic/TiedUIUX.png",
    hoverUrl: "/subGraphic/InsideUIUX.png",
    width: 120,
    height: 151,
  },
];

// 반응형 설정을 적용한 함수
export const getResponsiveConfigs = (scale: number): PeopleGraphicConfig[] => {
  return baseConfigs.map((config) => ({
    ...config,
    width: config.width * scale,
    height: config.height * scale,
  }));
};

// 기본 export (데스크톱용)
export const peopleGraphicConfigs = getResponsiveConfigs(
  RESPONSIVE_SCALES.desktop
);
