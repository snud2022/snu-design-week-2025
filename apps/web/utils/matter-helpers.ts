import Matter from "matter-js";
import {
  BREAKPOINTS,
  MainGraphicConfig,
  PHYSICS_CONFIG,
  RESPONSIVE_SCALES,
  getResponsiveConfigs,
} from "../constants/mainGraphic";

// Matter.js 모듈 가져오기
const { Bodies, Composite, World } = Matter;

// 타입 정의
export interface CanvasSize {
  width: number;
  height: number;
  scale: number;
}

/**
 * 공식 문서 방식으로 이미지 텍스처를 적용하는 함수
 * @param {string} imageUrl - 이미지 파일 경로
 * @param {number} x - 생성할 x 좌표
 * @param {number} y - 생성할 y 좌표
 * @param {number} width - 사각형 너비
 * @param {number} height - 사각형 높이
 * @param {object} [options] - Matter.js Body에 적용할 옵션
 * @returns {Promise<Matter.Body | null>} 생성된 Body 객체 또는 실패 시 null
 */
export const createImageBody = async (
  imageUrl: string,
  x: number,
  y: number,
  width: number,
  height: number,
  options: any = {}
): Promise<typeof Bodies.rectangle | null> => {
  try {
    // 이미지 로드 후 실제 크기 확인하여 스케일 계산
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        // 원본 이미지 크기
        const originalWidth = img.naturalWidth;
        const originalHeight = img.naturalHeight;

        // 목표 크기에 맞는 스케일 계산
        const xScale = width / originalWidth;
        const yScale = height / originalHeight;

        // 공식 문서 방식: render 옵션 안에 sprite 포함
        const body = Bodies.rectangle(x, y, width, height, {
          ...options,
          render: {
            strokeStyle: "#ffffff",
            sprite: {
              texture: imageUrl,
              xScale: xScale,
              yScale: yScale,
            },
            ...options.render,
          },
        });

        resolve(body);
      };

      img.onerror = () => {
        // 이미지 로딩 실패시 기본 사각형
        const body = Bodies.rectangle(x, y, width, height, {
          ...options,
          render: {
            fillStyle: "#009E92",
            strokeStyle: "#000000",
            lineWidth: 2,
            ...options.render,
          },
        });
        resolve(body);
      };

      img.src = imageUrl;
    });
  } catch (_) {
    return null;
  }
};

// --- 이미지 스프라이트 객체들을 비동기적으로 로드하고 월드에 추가 ---
export const addSprites = async (
  graphics: MainGraphicConfig[],
  world: typeof World
) => {
  const newWorld = world;
  for (const config of graphics) {
    const body = await createImageBody(
      config.url,
      config.xPosition,
      config.yPosition,
      config.width,
      config.height,
      {
        density: 0.001, // 물체의 밀도
        frictionAir: 0.01, // 공기 마찰력
        restitution: 0.3, // 반발력
        friction: 0.002, // 마찰력
        angularVelocity: 0, // 각속도
        angularSpeed: 0, // 각속도
      }
    );
    if (body) {
      Composite.add(newWorld, body);
    } else {
      console.error(`Failed to create sprite for: ${config.url}`);
    }
  }
  return newWorld;
};

/**
 * 캔버스 크기 계산 함수
 * @param headerHeight - 헤더 높이
 * @param footerHeight - 푸터 높이
 * @returns 캔버스 크기 및 스케일 정보
 */
export const getCanvasSize = (
  headerHeight: number,
  footerHeight: number
): CanvasSize => {
  const width = window.innerWidth;
  const height = window.innerHeight - headerHeight / 2 - footerHeight;

  const scale =
    width < BREAKPOINTS.tablet
      ? RESPONSIVE_SCALES.mobile
      : width < BREAKPOINTS.desktop
        ? RESPONSIVE_SCALES.tablet
        : RESPONSIVE_SCALES.desktop;

  return { width, height, scale };
};

/**
 * 중앙 배치 계산 함수
 * 모든 요소를 캔버스 중앙에 배치
 * @param configs - 반응형 설정이 적용된 그래픽 설정 배열
 * @param centerX - 캔버스 중앙 X 좌표
 * @param centerY - 캔버스 중앙 Y 좌표
 * @returns 중앙 배치된 그래픽 설정 배열
 */
export const centerizeConfigs = (
  configs: ReturnType<typeof getResponsiveConfigs>,
  centerX: number,
  centerY: number
) => {
  const avgX =
    configs.reduce((sum, c) => sum + c.xPosition, 0) / configs.length;
  const avgY =
    configs.reduce((sum, c) => sum + c.yPosition, 0) / configs.length;

  return configs.map((config) => ({
    ...config,
    xPosition: centerX + (config.xPosition - avgX),
    yPosition: centerY + (config.yPosition - avgY),
  }));
};

/**
 * 벽 생성 함수
 * 캔버스 경계에 보이지 않는 벽을 생성하여 오브젝트가 캔버스를 벗어나지 않도록 함
 * @param world - Matter.js 월드
 * @param canvasWidth - 캔버스 너비
 * @param canvasHeight - 캔버스 높이
 */
export const createWalls = (
  world: typeof World,
  canvasWidth: number,
  canvasHeight: number
) => {
  const { wallThickness, wallOffset } = PHYSICS_CONFIG;

  const wallOptions = {
    isStatic: true,
    density: 1,
    friction: 0.8,
    restitution: 0.1,
    render: { visible: false },
  };

  const walls = [
    // 천장
    Bodies.rectangle(
      canvasWidth / 2,
      -wallOffset,
      canvasWidth + 2 * wallOffset,
      wallThickness,
      wallOptions
    ),
    // 바닥
    Bodies.rectangle(
      canvasWidth / 2,
      canvasHeight + wallOffset,
      canvasWidth + 2 * wallOffset,
      wallThickness,
      wallOptions
    ),
    // 왼쪽 벽
    Bodies.rectangle(
      -wallOffset,
      canvasHeight / 2,
      wallThickness,
      canvasHeight + 2 * wallOffset,
      wallOptions
    ),
    // 오른쪽 벽
    Bodies.rectangle(
      canvasWidth + wallOffset,
      canvasHeight / 2,
      wallThickness,
      canvasHeight + 2 * wallOffset,
      wallOptions
    ),
  ];

  Composite.add(world, walls);
};
