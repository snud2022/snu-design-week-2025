export type MainGraphicConfig = {
  url: string;
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
};

// 반응형 스케일 팩터
export const RESPONSIVE_SCALES = {
  mobile: 0.3, // 데스크탑의 34% (0.7 * 0.34)
  tablet: 0.45, // 데스크탑의 50% (0.7 * 0.5)
  desktop: 0.9, // 기본 크기 (1280px~)
} as const;

// 기본 크기 (데스크톱 기준)
const baseConfigs: MainGraphicConfig[] = [
  {
    url: "/mainGraphic/mainGraphic-W.png",
    xPosition: 154,
    yPosition: 92,
    width: 300,
    height: 260,
  },
  {
    url: "/mainGraphic/mainGraphic-RA.png",
    xPosition: 470,
    yPosition: 92,
    width: 468,
    height: 297,
  },
  {
    url: "/mainGraphic/mainGraphic-P1.png",
    xPosition: 945,
    yPosition: 92,
    width: 191,
    height: 267,
  },
  {
    url: "/mainGraphic/mainGraphic-U.png",
    xPosition: 140,
    yPosition: 366,
    width: 570,
    height: 621,
  },
  {
    url: "/mainGraphic/mainGraphic-P2.png",
    xPosition: 711,
    yPosition: 376,
    width: 428,
    height: 611,
  },
];

// 반응형 설정을 적용한 함수
export const getResponsiveConfigs = (scale: number): MainGraphicConfig[] => {
  return baseConfigs.map((config) => ({
    ...config,
    xPosition: config.xPosition * scale,
    yPosition: config.yPosition * scale,
    width: config.width * scale,
    height: config.height * scale,
  }));
};

// 기본 export (데스크톱용)
export const mainGraphicConfigs = getResponsiveConfigs(
  RESPONSIVE_SCALES.desktop
);
