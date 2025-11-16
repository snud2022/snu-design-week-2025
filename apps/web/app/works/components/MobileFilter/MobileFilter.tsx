"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CATEGORIES,
  CATEGORY_TO_FILTER_INDEX,
  FILTER_INDEX_TO_CATEGORY,
  getCategoryGraphic,
} from "../../constants/categories";
import Arrow from "../../../../public/common/arrow_down.svg";
import { Title } from "@snud2025/ui";
import * as S from "./MobileFilter.style";

interface MobileFilterProps {
  selectedFilterIndex: number | null;
  onToggle: (index: number | null) => void;
}

/**
 * Works 페이지의 VectorBannerSection에서 모바일 반응형 뷰로 사용되는 필터 컴포넌트입니다.
 * 데스크톱/태블릿에서는 FilterStone들이 배치된 VectorBannerSection이 표시되지만,
 * 모바일에서는 이 컴포넌트 필터로 대체됩니다.
 */
export default function MobileFilter({
  selectedFilterIndex,
  onToggle,
}: MobileFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedCategory =
    selectedFilterIndex === null
      ? "ALL"
      : FILTER_INDEX_TO_CATEGORY[selectedFilterIndex] || "ALL";

  const graphic = getCategoryGraphic(selectedCategory);

  const handleCategoryClick = (category: string) => {
    const index =
      CATEGORY_TO_FILTER_INDEX[
        category as keyof typeof CATEGORY_TO_FILTER_INDEX
      ];
    onToggle(index);
    setIsOpen(false);
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.IconWrapper>
        {graphic.type === "svg" && graphic.svg && (
          <graphic.svg preserveAspectRatio="xMidYMid meet" />
        )}
        {graphic.type === "image" && graphic.imageUrl && (
          <Image
            src={graphic.imageUrl}
            alt={selectedCategory}
            width={graphic.width}
            height={graphic.height}
          />
        )}
      </S.IconWrapper>
      <S.CategoryWrapper>
        <S.SelectedCategoryButton onClick={handleToggleOpen}>
          <Title level="title2" language="en" className="category">
            {selectedCategory}
          </Title>
          <S.Chevron $isOpen={isOpen}>
            <Arrow />
          </S.Chevron>
        </S.SelectedCategoryButton>
        {isOpen && (
          <S.CategoryList>
            {CATEGORIES.map((category) => (
              <S.CategoryItem
                key={category}
                $isActive={selectedCategory === category}
                onClick={() => handleCategoryClick(category)}
              >
                <Title level="title3" language="en">
                  {category}
                </Title>
              </S.CategoryItem>
            ))}
          </S.CategoryList>
        )}
      </S.CategoryWrapper>
    </S.Container>
  );
}
