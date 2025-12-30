import React from "react";
import * as S from "./VectorBanner.style";
import { FilterStone } from "@/works/components/FilterStone/FilterStone";
import { peopleGraphicConfigs } from "@constants/peopleGraphic";
import { STONE_POSITIONS } from "@/works/constants/position";
import MobileFilter from "@/works/components/MobileFilter/MobileFilter";
import { CATEGORY_CONFIGS } from "@constants/categories";

interface VectorBannerProps {
  selectedFilterIndex: number | null;
  onToggle: (index: number | null) => void;
}

export default function VectorBanner({
  selectedFilterIndex,
  onToggle,
}: VectorBannerProps) {
  return (
    <>
      <S.VectorBannerSection>
        {peopleGraphicConfigs.map((config, index) => {
          const pos = STONE_POSITIONS[index];
          if (!pos) return null;
          return (
            <S.FilterStoneWrapper
              key={index}
              $tabletX={pos.tablet.x}
              $tabletY={pos.tablet.y}
              $tabletRotate={pos.tablet.rotate}
              $desktopX={pos.desktop.x}
              $desktopY={pos.desktop.y}
              $desktopRotate={pos.desktop.rotate}
            >
              <FilterStone
                asset={config}
                active={selectedFilterIndex === index}
                onToggle={() => onToggle(index)}
                tabletRotate={pos.tablet.rotate}
                desktopRotate={pos.desktop.rotate}
                ariaLabel={
                  CATEGORY_CONFIGS[index]
                    ? `${CATEGORY_CONFIGS[index].nameKo} 필터 ${selectedFilterIndex === index ? "선택됨" : "선택"}`
                    : undefined
                }
              />
            </S.FilterStoneWrapper>
          );
        })}
      </S.VectorBannerSection>
      <S.MobileFilterSection>
        <MobileFilter
          selectedFilterIndex={selectedFilterIndex}
          onToggle={onToggle}
        />
      </S.MobileFilterSection>
    </>
  );
}
