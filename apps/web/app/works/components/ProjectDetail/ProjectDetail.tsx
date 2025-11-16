import React from "react";
import { Title, Body } from "@snud2025/ui";
import {
  FILTER_INDEX_TO_CATEGORY,
  CATEGORY_INFO,
} from "../../constants/categories";
import * as S from "./ProjectDetail.style";

interface ProjectDetailProps {
  filterIndex: number | null;
}

export default function ProjectDetail({ filterIndex }: ProjectDetailProps) {
  if (filterIndex === null) return null;

  const category = FILTER_INDEX_TO_CATEGORY[filterIndex];
  if (!category) return null;

  const categoryInfo = CATEGORY_INFO[category];

  return (
    <S.DetailSection>
      <S.LeftSection>
        {/* 데스크톱 & 테블릿 용 */}
        <S.TabletContainer>
          <Title level="title2" language="en" className="whiteLabel">
            {categoryInfo.categoryNameEn}
          </Title>
          <Title level="title2" language="kr" className="krTitle">
            {categoryInfo.categoryNameKo}
          </Title>
          <Body level="body1" weight="semibold" className="advisor">
            지도교수 | {categoryInfo.advisorKo}
          </Body>
          <Body level="body1" weight="semibold" className="advisor">
            ADVISOR | {categoryInfo.advisorEn}
          </Body>
        </S.TabletContainer>

        {/* 모바일 용 */}
        <S.MobileContainer>
          <Title level="title3" language="en" className="whiteLabel">
            {categoryInfo.categoryNameEn}
          </Title>
          <Title level="title3" language="kr" className="krTitle">
            {categoryInfo.categoryNameKo}
          </Title>
          <Body level="body1" weight="medium" className="advisor">
            지도교수 | {categoryInfo.advisorKo}
          </Body>
          <Body level="body1" weight="medium" className="advisor">
            ADVISOR | {categoryInfo.advisorEn}
          </Body>
        </S.MobileContainer>

        {categoryInfo.descriptionKo && (
          <S.Description>
            <Body level="body2" weight="medium" className="koDescription">
              {categoryInfo.descriptionKo}
            </Body>
            <Body level="body2" weight="medium" className="enDescription">
              {categoryInfo.descriptionEn}
            </Body>
          </S.Description>
        )}
      </S.LeftSection>
    </S.DetailSection>
  );
}
