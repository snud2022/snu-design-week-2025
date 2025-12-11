import React from "react";
import * as S from "./WorksGrid.style";
import { Title } from "@snud2025/ui";
import AllWorksGrid from "../AllWorksGrid/AllWorksGrid";
import CategoryDetail from "../CategoryDetail/CategoryDetail";
import type { ProjectDetail } from "../../types/projects";

interface WorksGridProps {
  selectedFilterIndex: number | null;
  projects: ProjectDetail[];
}

export default function WorksGrid({
  selectedFilterIndex,
  projects,
}: WorksGridProps) {
  const hasDetail = selectedFilterIndex !== null;

  return (
    <S.AllWorksGridSection>
      {!hasDetail && (
        <>
          <Title language="en" level="title1" className="titleLabel notMobile">
            ALL WORKS
          </Title>
          <Title language="en" level="title3" className="titleLabel mobile">
            ALL WORKS
          </Title>
        </>
      )}
      <S.ContentWrapper>
        {hasDetail && (
          <S.DetailWrapper>
            <CategoryDetail filterIndex={selectedFilterIndex} />
          </S.DetailWrapper>
        )}
        <S.GridWrapper $hasDetail={hasDetail}>
          <AllWorksGrid
            selectedFilterIndex={selectedFilterIndex}
            projects={projects}
          />
        </S.GridWrapper>
      </S.ContentWrapper>
    </S.AllWorksGridSection>
  );
}
