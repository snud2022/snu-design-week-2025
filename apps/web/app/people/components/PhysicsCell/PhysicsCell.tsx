"use client";

import type { PeopleGraphicConfig } from "../../../../constants/peopleGraphic";
import { PEOPLE_RESPONSIVE_SCALES } from "../../../../constants/peopleGraphic";
import React, { useEffect, useMemo, useRef } from "react";
import HoverStone from "../../../../components/HoverStone/HoverStone";
import Matter from "matter-js";
import { createRoot, Root } from "react-dom/client";
import { breakpoints } from "@snud2025/ui";
import * as S from "./PhysicsCell.style";

export type SpriteInput = {
  url: string;
  hoverUrl: string;
  width: number;
  height: number;
};

interface PhysicsCellProps {
  cellSize: number;
  pool: PeopleGraphicConfig[];
  zIndex?: number;
  debugCanvas?: boolean;
  onReady?: () => void;
}

export default function PhysicsCell({
  cellSize,
  pool,
  zIndex = 0,
  debugCanvas = false,
  onReady,
}: PhysicsCellProps) {
  const domLayerRef = useRef<HTMLDivElement | null>(null);

  // 후보에서 2개의 파츠 랜덤 선택
  const picks = useMemo(() => {
    if (!pool?.length) return [] as const;

    // 배열에서 중복되지 않는 2개 요소를 랜덤하게 선택하는 헬퍼 함수
    const pickTwo = <T,>(arr: T[]): [T, T] => {
      if (arr.length < 2) throw new Error("need >= 2 items");
      const a = Math.floor(Math.random() * arr.length);
      let b = Math.floor(Math.random() * (arr.length - 1));
      if (b >= a) b += 1; // 중복 방지
      return [arr[a]!, arr[b]!] as [T, T];
    };

    const [c1, c2] = pickTwo(pool);
    return [c1, c2] as const;
  }, [pool]);

  useEffect(() => {
    const domLayer = domLayerRef.current;
    if (!domLayer || !cellSize || picks.length === 0) return;

    const { Engine, Composite, Bodies, Body } = Matter;

    // 현재 스케일 계산
    const getScale = () => {
      if (typeof window === "undefined") return 1;
      const width = window.innerWidth;
      if (width >= breakpoints.desktop) return PEOPLE_RESPONSIVE_SCALES.desktop;
      if (width >= breakpoints.tablet) return PEOPLE_RESPONSIVE_SCALES.tablet;
      return PEOPLE_RESPONSIVE_SCALES.desktop;
    };

    const currentScale = getScale();
    // 물리 엔진의 실제 작동 크기 (scale된 컨테이너 크기)
    const physicsCellSize = cellSize / currentScale;

    // Matter 엔진
    const engine = Engine.create({
      positionIterations: 10,
      velocityIterations: 8,
    });
    const world = engine.world;
    world.gravity.y = 1;
    world.gravity.scale = 0.002;

    // 벽
    const offset = 6;
    const wall = (x: number, y: number, w: number, h: number) =>
      Bodies.rectangle(x, y, w, h, {
        isStatic: true,
        friction: 0.9,
        restitution: 0.1,
      });

    Composite.add(world, [
      wall(physicsCellSize / 2, -offset, physicsCellSize + 2 * offset, 10),
      wall(
        physicsCellSize / 2,
        physicsCellSize + offset,
        physicsCellSize + 2 * offset,
        10
      ),
      wall(-offset, physicsCellSize / 2, 10, physicsCellSize + 2 * offset),
      wall(
        physicsCellSize + offset,
        physicsCellSize / 2,
        10,
        physicsCellSize + 2 * offset
      ),
    ]);

    // 초기 비겹침 위치 샘플링 (물체들이 겹치지 않도록 배치)
    const bodies: any[] = [];
    const maxTry = 80;

    // 두 사각형이 겹치는지 확인하는 함수
    const overlap = (
      a: { x: number; y: number; w: number; h: number },
      b: { x: number; y: number; w: number; h: number }
    ) => {
      const ax1 = a.x - a.w / 2,
        ay1 = a.y - a.h / 2;
      const ax2 = a.x + a.w / 2,
        ay2 = a.y + a.h / 2;
      const bx1 = b.x - b.w / 2,
        by1 = b.y - b.h / 2;
      const bx2 = b.x + b.w / 2,
        by2 = b.y + b.h / 2;
      return !(ax2 <= bx1 || ax1 >= bx2 || ay2 <= by1 || ay1 >= by2);
    };

    for (let i = 0; i < picks.length; i++) {
      const pick = picks[i];
      if (!pick) continue;
      const w = pick.width;
      const h = pick.height;

      let ok = false,
        x = 0,
        y = 0;
      for (let t = 0; t < maxTry && !ok; t++) {
        x = Math.random() * (physicsCellSize - w) + w / 2;
        y = Math.random() * (physicsCellSize - h) + h / 2;
        ok = bodies.every((b, bi) => {
          const pick = picks[bi];
          if (!pick) return true;
          return !overlap(
            { x, y, w, h },
            {
              x: b.position.x,
              y: b.position.y,
              w: pick.width,
              h: pick.height,
            }
          );
        });
      }

      const b = Bodies.rectangle(x, y, w, h, {
        restitution: 0.15,
        friction: 0.9,
        frictionAir: 0.03,
        angle: (Math.random() - 0.5) * 0.25,
      });
      Body.setVelocity(b, {
        x: (Math.random() - 0.5) * 0.6,
        y: (Math.random() - 0.5) * 0.6,
      });
      Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.02);
      bodies.push(b);
    }
    Composite.add(world, bodies);

    // 단일 root로 HoverStone 렌더
    const mount = document.createElement("div");
    mount.style.position = "absolute";
    mount.style.inset = "0";
    domLayer.appendChild(mount);
    const root: Root = createRoot(mount);

    // HoverStone들을 한 번에 렌더
    root.render(
      <S.MountContainer>
        {picks.map((p, i) => (
          <S.StoneWrapper key={i} data-stone={String(i)}>
            <HoverStone asset={p} />
          </S.StoneWrapper>
        ))}
      </S.MountContainer>
    );

    // RAF: 물리 step + DOM 동기화
    let raf = 0;
    let onReadyFired = false;

    const tick = () => {
      Engine.update(engine, 1000 / 60); // 물리 시뮬레이션 실행 (속도/중력/충돌 계산)

      // 좌표/회전 반영
      const container = mount.firstElementChild as HTMLDivElement | null;
      if (container) {
        for (let i = 0; i < bodies.length; i++) {
          const b = bodies[i];
          const pick = picks[i];
          if (!b || !pick) continue;

          const w = pick.width;
          const h = pick.height;
          const wrapper = container.querySelector<HTMLDivElement>(
            `[data-stone="${i}"]`
          );
          if (wrapper) {
            // StoneWrapper에 위치와 회전 설정 (scale은 CSS에서 처리)
            wrapper.style.left = `${b.position.x - w / 2}px`;
            wrapper.style.top = `${b.position.y - h / 2}px`;
            wrapper.style.transform = `rotate(${b.angle}rad)`;
          }
        }
      }
      if (!onReadyFired) {
        onReadyFired = true;
        onReady?.();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // cleanup: 다음 프레임에 안전하게 unmount
    return () => {
      cancelAnimationFrame(raf);
      Engine.clear(engine);

      requestAnimationFrame(() => {
        try {
          root.unmount();
        } finally {
          mount.remove();
        }
      });
    };
  }, [cellSize, picks, debugCanvas, onReady]);

  return (
    <S.PhysicsContainer cellSize={cellSize} zIndex={zIndex}>
      <S.DomLayer ref={domLayerRef} />
    </S.PhysicsContainer>
  );
}
