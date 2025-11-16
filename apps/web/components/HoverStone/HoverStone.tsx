"use client";
import React from "react";
import * as S from "./HoverStone.style";
import type { PeopleGraphicConfig } from "../../constants/peopleGraphic";

interface HoverStoneProps {
  asset: PeopleGraphicConfig;
  width?: number;
  height?: number;
  rotateDeg?: number;
  active?: boolean; // 선택된 상태를 항상 보여줄지 여부
  style?: React.CSSProperties;
  className?: string;
}

/**
 * 호버 시 이미지가 변경되는 스톤 컴포넌트
 * - 두 이미지를 같은 좌표에 겹쳐 놓고, hover 시 opacity로 부드럽게 교체
 * - pointerEvents는 래퍼만 활성화, 이미지 자체는 비활성화(중첩 클릭 이슈 방지)
 * - 회전/크기 커스터마이즈 가능
 */
export default function HoverStone({
  asset,
  width = asset.width,
  height = asset.height,
  rotateDeg = 0,
  active = false,
  style,
  className,
}: HoverStoneProps) {
  return (
    <S.Stone
      className={`stone ${active ? "active" : ""} ${className || ""}`}
      style={style}
      $h={height}
      $w={width}
      $rotate={rotateDeg}
      role="img"
      aria-label=""
    >
      {/* 기본 상태 이미지 */}
      <S.SvgLayer className="base">
        <asset.Svg
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
        />
      </S.SvgLayer>

      {/* 호버 상태 이미지 */}
      <S.SvgLayer className="hover">
        <asset.HoverSvg
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
        />
      </S.SvgLayer>
    </S.Stone>
  );
}
