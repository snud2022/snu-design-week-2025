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
export const BASE_MAIN_GRAPHIC_CONFIGS: MainGraphicConfig[] = [
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

// 상수 정의
export const BREAKPOINTS = {
  tablet: 600,
  desktop: 1280,
} as const;

export const PHYSICS_CONFIG = {
  positionIterations: 10,
  velocityIterations: 8,
  gravityY: 0.6,
  gravityScale: 0.001,
  fps: 60,
  wallThickness: 50,
  wallOffset: 10,
} as const;

export const MOUSE_CONFIG = {
  stiffness: 0.2,
} as const;

// 반응형 설정을 적용한 함수
export const getResponsiveConfigs = (scale: number): MainGraphicConfig[] => {
  return BASE_MAIN_GRAPHIC_CONFIGS.map((config) => ({
    ...config,
    xPosition: config.xPosition * scale,
    yPosition: config.yPosition * scale,
    width: config.width * scale,
    height: config.height * scale,
  }));
};
