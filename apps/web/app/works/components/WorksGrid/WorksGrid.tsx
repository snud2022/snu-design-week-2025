import React from "react";
import * as S from "./WorksGrid.style";
import { Title } from "@snud2025/ui";
import AllWorksGrid from "../AllWorksGrid/AllWorksGrid";
import ProjectDetail from "../CategoryDetail/CategoryDetail";

interface WorksGridProps {
  selectedFilterIndex: number | null;
}

export default function WorksGrid({ selectedFilterIndex }: WorksGridProps) {
  const hasDetail = selectedFilterIndex !== null;

  return (
    <S.AllWorksGridSection>
      {!hasDetail && (
        <Title language="en" level="title1" className="titleLabel">
          ALL WORKS
        </Title>
      )}
      <S.ContentWrapper>
        {hasDetail && (
          <S.DetailWrapper>
            <ProjectDetail filterIndex={selectedFilterIndex} />
          </S.DetailWrapper>
        )}
        <S.GridWrapper $hasDetail={hasDetail}>
          <AllWorksGrid selectedFilterIndex={selectedFilterIndex} />
        </S.GridWrapper>
      </S.ContentWrapper>
    </S.AllWorksGridSection>
  );
}
