"use client";

import { useEffect, useRef } from "react";
import HoverStone from "@components/HoverStone/HoverStone";
import type { PeopleGraphicConfig } from "@constants/peopleGraphic";
import * as S from "./FilterStone.style";

type FilterStoneProps = {
  asset: PeopleGraphicConfig;
  active?: boolean;
  onToggle?: () => void;
  tabletRotate?: number;
  desktopRotate?: number;
};

export function FilterStone({
  asset,
  active = false,
  onToggle,
  tabletRotate = 0,
  desktopRotate = 0,
}: FilterStoneProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const stoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const stone = stoneRef.current;
    if (!button || !stone || !onToggle) return;

    // SVG path에만 클릭 이벤트 연결
    const paths = stone.querySelectorAll("path");
    const handlePathClick = () => {
      onToggle();
    };

    paths.forEach((path) => {
      path.addEventListener("click", handlePathClick);
    });

    return () => {
      paths.forEach((path) => {
        path.removeEventListener("click", handlePathClick);
      });
    };
  }, [onToggle]);

  return (
    <S.FilterButton
      ref={buttonRef}
      type="button"
      aria-pressed={active}
      $tabletRotate={tabletRotate}
      $desktopRotate={desktopRotate}
      $width={asset.width}
      $height={asset.height}
    >
      <S.StoneContainer ref={stoneRef}>
        <HoverStone asset={asset} active={active} />
      </S.StoneContainer>
    </S.FilterButton>
  );
}
