"use client";

import HoverStone from "@components/HoverStone/HoverStone";
import type { PeopleGraphicConfig } from "@constants/peopleGraphic";
import * as S from "./FilterStone.style";

type FilterStoneProps = {
  asset: PeopleGraphicConfig;
  active?: boolean;
  onToggle?: () => void;
  tabletRotate?: number;
  desktopRotate?: number;
  ariaLabel?: string;
};

export function FilterStone({
  asset,
  active = false,
  onToggle,
  tabletRotate = 0,
  desktopRotate = 0,
  ariaLabel,
}: FilterStoneProps) {
  return (
    <S.FilterButton
      type="button"
      aria-pressed={active}
      aria-label={ariaLabel || "필터 토글"}
      onClick={onToggle}
      $tabletRotate={tabletRotate}
      $desktopRotate={desktopRotate}
      $width={asset.width}
      $height={asset.height}
    >
      <S.StoneContainer>
        <HoverStone asset={asset} active={active} />
      </S.StoneContainer>
    </S.FilterButton>
  );
}
