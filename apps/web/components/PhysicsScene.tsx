"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { addSprites } from "../utils/matter-helpers";
import {
  getResponsiveConfigs,
  RESPONSIVE_SCALES,
} from "../constants/mainGraphic";

const PhysicsScene = () => {
  const sceneRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // window 객체가 사용 가능한지 확인
    if (!isClient || typeof window === "undefined") return;

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
    engine.world.gravity.y = 0.8; // 중력 설정 (조금 약하게)
    engine.world.gravity.scale = 0.001; // 중력 스케일 조정

    // 반응형 캔버스 크기 결정
    const getCanvasSize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        return { width: 340, height: 240, scale: RESPONSIVE_SCALES.mobile };
      } else if (width < 1280) {
        return { width: 540, height: 360, scale: RESPONSIVE_SCALES.tablet };
      } else {
        return { width: 1200, height: 800, scale: RESPONSIVE_SCALES.desktop };
      }
    };

    const { width: canvasWidth, height: canvasHeight, scale } = getCanvasSize();

    // 렌더러 생성
    const render = Render.create({
      element: sceneRef.current, // document.body 대신 ref 사용
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false, // 와이어프레임 끄기
        background: "#f0f0f0",
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
    const responsiveConfigs = getResponsiveConfigs(scale);
    addSprites(responsiveConfigs, world);

    // 벽(테두리) 생성
    const offset = 10;
    const options = {
      isStatic: true,
      density: 1,
      friction: 0.8,
      restitution: 0.1,
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
  }, [isClient]); // isClient가 변경될 때 실행

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

  return <div ref={sceneRef} suppressHydrationWarning />;
};

export default PhysicsScene;
