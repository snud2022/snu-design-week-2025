export type MainGraphicConfig = {
  url: string;
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
};

// 블록들이 차지할 캔버스 비율 (여백을 위해 100%보다 작게)
export const CANVAS_FILL_RATIO = {
  mobile: 0.85, // 모바일: 캔버스의 85%
  tablet: 0.75, // 태블릿: 캔버스의 75%
  desktop: 0.7, // 데스크톱: 캔버스의 70%
} as const;

/**
 * 블록들의 바운딩 박스 계산 (중심점 기준)
 */
export const getBlocksBoundingBox = () => {
  let minX = Infinity,
    maxX = -Infinity;
  let minY = Infinity,
    maxY = -Infinity;

  for (const config of BASE_MAIN_GRAPHIC_CONFIGS) {
    const left = config.xPosition - config.width / 2;
    const right = config.xPosition + config.width / 2;
    const top = config.yPosition - config.height / 2;
    const bottom = config.yPosition + config.height / 2;

    minX = Math.min(minX, left);
    maxX = Math.max(maxX, right);
    minY = Math.min(minY, top);
    maxY = Math.max(maxY, bottom);
  }

  return {
    width: maxX - minX,
    height: maxY - minY,
    minX,
    maxX,
    minY,
    maxY,
  };
};

/**
 * 캔버스 크기와 브레이크포인트에 따른 동적 스케일 계산
 * - 모바일: 너비 기준
 * - 태블릿/데스크톱: 높이 기준
 */
export const calculateDynamicScale = (
  canvasWidth: number,
  canvasHeight: number,
  breakpoint: "mobile" | "tablet" | "desktop"
): number => {
  const boundingBox = getBlocksBoundingBox();
  const fillRatio = CANVAS_FILL_RATIO[breakpoint];

  if (breakpoint === "mobile") {
    // 모바일: 너비 기준으로 스케일 계산
    return (canvasWidth * fillRatio) / boundingBox.width;
  } else if (breakpoint === "tablet") {
    // 태블릿: 너비 기준으로 스케일 계산
    return (canvasWidth * fillRatio) / boundingBox.width;
  } else {
    // 데스크톱: 높이 기준으로 스케일 계산
    return (canvasHeight * fillRatio) / boundingBox.height;
  }
};

// 기본 크기 (데스크톱 기준)
export const BASE_MAIN_GRAPHIC_CONFIGS: MainGraphicConfig[] = [
  {
    url: "/mainGraphic/mainGraphic-W.png",
    xPosition: 154,
    yPosition: 92,
    width: 210,
    height: 182,
  },
  {
    url: "/mainGraphic/mainGraphic-RA.png",
    xPosition: 470,
    yPosition: 92,
    width: 328,
    height: 208,
  },
  {
    url: "/mainGraphic/mainGraphic-P1.png",
    xPosition: 590,
    yPosition: 92,
    width: 134,
    height: 187,
  },
  {
    url: "/mainGraphic/mainGraphic-U.png",
    xPosition: 270,
    yPosition: 366,
    width: 399,
    height: 435,
  },
  {
    url: "/mainGraphic/mainGraphic-P2.png",
    xPosition: 600,
    yPosition: 376,
    width: 300,
    height: 428,
  },
];

// 상수 정의
export const BREAKPOINTS = {
  tablet: 600,
  desktop: 1280,
} as const;

export const PHYSICS_CONFIG = {
  positionIterations: 20,
  velocityIterations: 15,
  gravityY: 1,
  gravityScale: 0.005,
  fps: 60,
  wallThickness: 20,
  wallOffset: 10,
} as const;

export const MOUSE_CONFIG = {
  stiffness: 0.01,
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
