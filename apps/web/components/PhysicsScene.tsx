"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { addSprites } from "../utils/matter-helpers";
import {
  getResponsiveConfigs,
  RESPONSIVE_SCALES,
} from "../constants/mainGraphic";

interface PhysicsSceneProps {
  headerHeight?: number;
  footerHeight?: number;
}

const PhysicsScene = ({
  headerHeight = 150,
  footerHeight = 92,
}: PhysicsSceneProps = {}) => {
  const sceneRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [breakpoint, setBreakpoint] = useState<string>("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 브레이크포인트 감지 및 추적
  useEffect(() => {
    if (!isClient || typeof window === "undefined") return;

    const getBreakpoint = (width: number): string => {
      if (width < 600) return "mobile";
      if (width < 1280) return "tablet";
      return "desktop";
    };

    const updateBreakpoint = () => {
      const currentBreakpoint = getBreakpoint(window.innerWidth);
      setBreakpoint((prev) => {
        if (prev !== currentBreakpoint) {
          return currentBreakpoint;
        }
        return prev;
      });
    };

    // 초기 브레이크포인트 설정
    setBreakpoint(getBreakpoint(window.innerWidth));

    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, [isClient]);

  useEffect(() => {
    // window 객체가 사용 가능한지 확인 및 breakpoint 설정 확인
    if (!isClient || typeof window === "undefined" || !breakpoint) return;

    // Matter.js 모듈 선언
    const {
      Engine,
      Render,
      Runner,
      Composite,
      Bodies,
      Mouse,
      MouseConstraint,
    } = Matter;

    // 엔진 및 월드 생성
    const engine = Engine.create({
      positionIterations: 10,
      velocityIterations: 8,
    });
    const world = engine.world;
    engine.world.gravity.y = 0.6; // 중력 설정 (조금 약하게)
    engine.world.gravity.scale = 0.001; // 중력 스케일 조정

    // 반응형 캔버스 크기 결정
    const getCanvasSize = () => {
      const width = window.innerWidth;
      // 헤더와 푸터 높이를 고려한 높이 계산
      const height = window.innerHeight - headerHeight / 2 - footerHeight;

      const scale =
        width < 600
          ? RESPONSIVE_SCALES.mobile
          : width < 1280
            ? RESPONSIVE_SCALES.tablet
            : RESPONSIVE_SCALES.desktop;

      return { width, height, scale };
    };

    const { width: canvasWidth, height: canvasHeight, scale } = getCanvasSize();

    // 캔버스 중앙 좌표 계산
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    // 렌더러 생성
    const render = Render.create({
      element: sceneRef.current, // document.body 대신 ref 사용
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false, // 와이어프레임 끄기
        background: "#ffffff",
      },
    });

    Render.run(render);

    // 러너 생성
    const runner = Runner.create({
      isFixed: true,
      fps: 60,
    });
    Runner.run(runner, engine);

    // 반응형 설정으로 이미지 스프라이트 객체들을 로드
    let responsiveConfigs = getResponsiveConfigs(scale);

    // 모든 요소를 캔버스 중앙에 배치
    // 원본 위치의 평균을 계산하여 중앙으로 이동
    const avgX =
      responsiveConfigs.reduce((sum, c) => sum + c.xPosition, 0) /
      responsiveConfigs.length;
    const avgY =
      responsiveConfigs.reduce((sum, c) => sum + c.yPosition, 0) /
      responsiveConfigs.length;

    responsiveConfigs = responsiveConfigs.map((config) => ({
      ...config,
      xPosition: centerX + (config.xPosition - avgX),
      yPosition: centerY + (config.yPosition - avgY),
    }));

    addSprites(responsiveConfigs, world);

    // 벽(테두리) 생성
    const offset = 10;
    const options = {
      isStatic: true,
      density: 1,
      friction: 0.8,
      restitution: 0.1,
      render: {
        visible: false, // 벽을 보이지 않게 설정
      },
    };
    Composite.add(world, [
      Bodies.rectangle(canvasWidth / 2, -offset, canvasWidth + 2 * offset, 50, {
        ...options,
      }), // 천장
      Bodies.rectangle(
        canvasWidth / 2,
        canvasHeight + offset,
        canvasWidth + 2 * offset,
        50,
        {
          ...options,
        }
      ), // 바닥
      Bodies.rectangle(
        -offset,
        canvasHeight / 2,
        50,
        canvasHeight + 2 * offset,
        {
          ...options,
        }
      ), // 왼쪽 벽
      Bodies.rectangle(
        canvasWidth + offset,
        canvasHeight / 2,
        50,
        canvasHeight + 2 * offset,
        {
          ...options,
        }
      ), // 오른쪽 벽
    ]);

    // 마우스 컨트롤 추가
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: true },
      },
    });
    Composite.add(world, mouseConstraint);

    // 마우스가 캔버스를 벗어나도 드래그 유지
    const handleMouseMove = (event: MouseEvent) => {
      if (mouseConstraint.body) {
        const rect = render.canvas.getBoundingClientRect();
        mouse.position.x = event.clientX - rect.left;
        mouse.position.y = event.clientY - rect.top;
      }
    };

    const handleMouseUp = () => {
      if (mouseConstraint.body) {
        mouseConstraint.body = null;
      }
    };

    // 전역 마우스 이벤트 리스너 추가
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // --- 🧹 클린업 함수: 컴포넌트가 사라질 때 Matter.js 인스턴스 정리 ---
    return () => {
      // 이벤트 리스너 제거
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [isClient, headerHeight, footerHeight, breakpoint]); // 브레이크포인트 변경 시 재렌더링

  if (!isClient) {
    return (
      <div
        style={{
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        Loading physics engine...
      </div>
    );
  }

  return (
    <div
      ref={sceneRef}
      suppressHydrationWarning
      style={{
        marginTop: `-${headerHeight / 2}px`,
        position: "relative",
        zIndex: 1,
      }}
    />
  );
};

export default PhysicsScene;
