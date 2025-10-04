import Matter from "matter-js";
import { MainGraphicConfig } from "../constants/mainGraphic";

// Matter.js 모듈 가져오기
const { Bodies, Composite, World } = Matter;

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
