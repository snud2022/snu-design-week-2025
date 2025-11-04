"use client";
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  addSprites,
  centerizeConfigs,
  createWalls,
  getCanvasSize,
} from "../utils/matter-helpers";
import {
  BREAKPOINTS,
  getResponsiveConfigs,
  MOUSE_CONFIG,
  PHYSICS_CONFIG,
} from "../constants/mainGraphic";

// 타입 정의
type Breakpoint = "mobile" | "tablet" | "desktop";

interface PhysicsSceneProps {
  headerHeight?: number;
  footerHeight?: number;
}

// 브레이크포인트 감지 커스텀 훅
const useBreakpoint = (isClient: boolean): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("mobile");

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return;

    const getBreakpoint = (width: number): Breakpoint => {
      if (width < BREAKPOINTS.tablet) return "mobile";
      if (width < BREAKPOINTS.desktop) return "tablet";
      return "desktop";
    };

    const updateBreakpoint = () => {
      setBreakpoint((prev) => {
        const current = getBreakpoint(window.innerWidth);
        return prev !== current ? current : prev;
      });
    };

    setBreakpoint(getBreakpoint(window.innerWidth));
    window.addEventListener("resize", updateBreakpoint);

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, [isClient]);

  return breakpoint;
};

const PhysicsScene = ({
  headerHeight = 150,
  footerHeight = 92,
}: PhysicsSceneProps = {}) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const breakpoint = useBreakpoint(isClient);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Matter.js 초기화 및 실행
  useEffect(() => {
    if (!isClient || typeof window === "undefined" || !breakpoint) return;

    const { Engine, Render, Runner, Mouse, MouseConstraint } = Matter;

    // 1. 엔진 및 월드 생성
    const engine = Engine.create({
      positionIterations: PHYSICS_CONFIG.positionIterations,
      velocityIterations: PHYSICS_CONFIG.velocityIterations,
    });
    const world = engine.world;
    engine.world.gravity.y = PHYSICS_CONFIG.gravityY;
    engine.world.gravity.scale = PHYSICS_CONFIG.gravityScale;

    // 2. 캔버스 크기 계산
    const {
      width: canvasWidth,
      height: canvasHeight,
      scale,
    } = getCanvasSize(headerHeight, footerHeight);
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    // 3. 렌더러 생성 및 시작
    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: "#ffffff",
      },
    });
    Render.run(render);

    // 4. 러너 생성 및 시작
    const runner = Runner.create({
      isFixed: true,
      fps: PHYSICS_CONFIG.fps,
    });
    Runner.run(runner, engine);

    // 5. 스프라이트 생성 및 배치
    const responsiveConfigs = getResponsiveConfigs(scale);
    const centeredConfigs = centerizeConfigs(
      responsiveConfigs,
      centerX,
      centerY
    );
    addSprites(centeredConfigs, world);

    // 6. 경계 벽 생성
    createWalls(world, canvasWidth, canvasHeight);

    // 7. 마우스 인터랙션 설정
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: MOUSE_CONFIG.stiffness,
        render: { visible: true },
      },
    });
    const { Composite } = Matter;
    Composite.add(world, mouseConstraint);

    // 8. 전역 마우스 이벤트 핸들러
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

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // 9. 클린업
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [isClient, headerHeight, footerHeight, breakpoint]);

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
