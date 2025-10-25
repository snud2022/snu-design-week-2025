"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import RopeFrame from "../../../../components/RopeFrame/RopeFrame";
import { Subtitle } from "@snud2025/ui";
import { formatNameEn } from "../../utils/formatNameEn";
import PhysicsCell from "../PhysicsCell/PhysicsCell";
import Link from "next/link";
import * as S from "./RopePeopleGrid.style";
import { peopleGraphicConfigs } from "../../../../constants/peopleGraphic";

interface RopeGridProps {
  className?: string;
  nameKo: string;
  nameEn: string;
  href: string;
}

/**
 * 한 사람을 나타내는 그리드 형태의 프레임
 * RopeFrame을 4개 조합해 2*2 그리드 구성
 */
export default function RopePeopleGrid({
  className,
  nameKo,
  nameEn,
  href,
}: RopeGridProps) {
  const [cell, setCell] = useState(0); // 셀 한 변 크기(px)
  const ref = useRef<HTMLDivElement>(null);
  const [physicsReady, setPhysicsReady] = useState(false);

  const rows = 2;
  const cols = 2;
  const totalCells = rows * cols; // 총 4개 셀
  const emptyCellsCount = totalCells - 1; // 첫 번째 셀 제외한 빈 셀 개수

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 그리드 셀 크기를 컨테이너 크기에 맞게 동적 계산
    const compute = () => {
      // 컨테이너는 정사각: (2 * cell) x (2 * cell)
      // 2로 나누어 셀 크기 결정
      const s = Math.round(el.clientWidth / 2);
      if (s !== cell) setCell(s);
    };

    // 첫 계산(레이아웃 이후)
    compute();

    // 크기 변할 때마다 재계산 (반응형 처리)
    const ro = new ResizeObserver(() => compute());
    ro.observe(el);

    // 폰트/이미지 로딩 등 한 프레임 뒤 변화를 잡기 위해 한 번 더
    requestAnimationFrame(compute);

    return () => ro.disconnect();
  }, [cell]);

  const ready = cell > 0 && physicsReady;

  return (
    <Link href={href}>
      <S.LinkContainer>
        <S.MainContainer>
          <PhysicsCell
            cellSize={cell * 2}
            pool={peopleGraphicConfigs}
            onReady={() => setPhysicsReady(true)}
          />
          <S.GridContainer
            ref={ref}
            className={className}
            cols={cols}
            rows={rows}
            ready={ready}
          >
            {/* 이름이 들어있는 프레임 */}
            <RopeFrame widthSizePixel={cell} heightSizePixel={cell}>
              <S.ContentContainer>
                <Subtitle language="kr">{nameKo}</Subtitle>
                <Subtitle language="en">{formatNameEn(nameEn)}</Subtitle>
              </S.ContentContainer>
            </RopeFrame>

            {/* 나머지 빈 셀들 */}
            {Array.from({ length: emptyCellsCount }, (_, index) => (
              <RopeFrame
                key={index}
                widthSizePixel={cell}
                heightSizePixel={cell}
              />
            ))}
          </S.GridContainer>
        </S.MainContainer>
      </S.LinkContainer>
    </Link>
  );
}
