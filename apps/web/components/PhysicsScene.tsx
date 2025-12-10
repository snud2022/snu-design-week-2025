"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  addSprites,
  centerizeConfigs,
  createWalls,
  getCanvasSize,
} from "../utils/matter-helpers";
import {
  BREAKPOINTS,
  calculateDynamicScale,
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

/**
 * 브레이크포인트를 계산하는 헬퍼 함수
 */
const getBreakpoint = (width: number): Breakpoint => {
  if (width < BREAKPOINTS.tablet) return "mobile";
  if (width < BREAKPOINTS.desktop) return "tablet";
  return "desktop";
};

/**
 * ResizeObserver를 사용하여 브레이크포인트 변경을 감지하는 커스텀 훅
 * 브레이크포인트가 변경될 때만 콜백을 호출
 */
const useBreakpointChange = (
  isClient: boolean,
  containerRef: React.RefObject<HTMLDivElement | null>,
  onBreakpointChange: () => void
) => {
  const previousBreakpointRef = useRef<Breakpoint | null>(null);

  useEffect(() => {
    if (!isClient || typeof window === "undefined" || !containerRef.current)
      return;

    const container = containerRef.current;

    // ResizeObserver를 사용하여 컨테이너 크기 변경 감지
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width || window.innerWidth;
        const currentBreakpoint = getBreakpoint(width);

        // 이전 브레이크포인트와 비교하여 변경 여부 확인
        if (previousBreakpointRef.current !== null) {
          if (previousBreakpointRef.current !== currentBreakpoint) {
            previousBreakpointRef.current = currentBreakpoint;
            onBreakpointChange();
          }
        } else {
          // 초기값 설정
          previousBreakpointRef.current = currentBreakpoint;
        }
      }
    });

    // 초기 브레이크포인트 설정
    const initialBreakpoint = getBreakpoint(window.innerWidth);
    previousBreakpointRef.current = initialBreakpoint;

    // 컨테이너 관찰 시작
    resizeObserver.observe(container);

    // 폴백: window resize 이벤트도 함께 감지 (더 넓은 호환성)
    const handleResize = () => {
      const currentBreakpoint = getBreakpoint(window.innerWidth);
      if (
        previousBreakpointRef.current !== null &&
        previousBreakpointRef.current !== currentBreakpoint
      ) {
        previousBreakpointRef.current = currentBreakpoint;
        onBreakpointChange();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient, containerRef, onBreakpointChange]);
};

const PhysicsScene = ({
  headerHeight = 150,
  footerHeight = 92,
}: PhysicsSceneProps = {}) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [breakpointKey, setBreakpointKey] = useState(0); // 브레이크포인트 변경 시 재초기화를 위한 키
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<Breakpoint>("desktop");

  useEffect(() => {
    setIsClient(true);
    // 초기 브레이크포인트 설정
    setCurrentBreakpoint(getBreakpoint(window.innerWidth));
  }, []);

  // 브레이크포인트 변경 시 재초기화를 트리거하는 콜백
  const handleBreakpointChange = useCallback(() => {
    setBreakpointKey((prev) => prev + 1);
    setCurrentBreakpoint(getBreakpoint(window.innerWidth));
  }, []);

  // 브레이크포인트 변경 감지
  useBreakpointChange(isClient, sceneRef, handleBreakpointChange);

  // Matter.js 초기화 및 실행
  useEffect(() => {
    if (!isClient || typeof window === "undefined") return;

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
    const { width: canvasWidth, height: canvasHeight } = getCanvasSize(
      headerHeight,
      footerHeight
    );
    const centerX = canvasWidth / 2;

    // 3. 현재 브레이크포인트에 따른 동적 스케일 계산
    const breakpoint = getBreakpoint(window.innerWidth);
    const scale = calculateDynamicScale(canvasWidth, canvasHeight, breakpoint);

    // 4. 렌더러 생성 및 시작
    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: "#E5E5E5",
      },
    });
    Render.run(render);

    // 5. 러너 생성 및 시작
    const runner = Runner.create({
      isFixed: true,
      fps: PHYSICS_CONFIG.fps,
    });
    Runner.run(runner, engine);

    // 6. 스프라이트 생성 및 배치 (상단에서 시작)
    const responsiveConfigs = getResponsiveConfigs(scale);
    // 스프라이트 중 가장 큰 높이의 절반을 상단 시작 위치로 사용
    const maxHeight = Math.max(...responsiveConfigs.map((c) => c.height));
    const startY = maxHeight / 2 + 20; // 상단에서 약간의 여유를 두고 시작
    const centeredConfigs = centerizeConfigs(
      responsiveConfigs,
      centerX,
      startY
    );
    addSprites(centeredConfigs, world);

    // 7. 경계 벽 생성
    createWalls(world, canvasWidth, canvasHeight);

    // 8. 마우스 인터랙션 설정
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

    // 9. 전역 마우스 이벤트 핸들러
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

    // 10. 클린업
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [isClient, headerHeight, footerHeight, breakpointKey]);

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

  // 모바일에서는 헤더가 위에 오도록 zIndex를 낮게 설정
  const zIndex = currentBreakpoint === "mobile" ? 1 : 101;

  return (
    <div
      ref={sceneRef}
      suppressHydrationWarning
      style={{
        marginTop: `-${headerHeight / 4}px`,
        position: "relative",
        zIndex,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default PhysicsScene;
