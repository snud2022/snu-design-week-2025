"use client";

import React, { useState } from "react";
import { WorksGrid, VectorBanner } from "./components";
import type { ProjectDetail } from "./types/projects";
import * as S from "./page.style";

interface WorksClientProps {
  initialProjects: ProjectDetail[];
}

export function WorksClient({ initialProjects }: WorksClientProps) {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState<number | null>(
    null
  );

  const handleToggle = (index: number | null) => {
    if (index === null) {
      setSelectedFilterIndex(null);
      return;
    }
    setSelectedFilterIndex((prev) => {
      // 이미 선택된 항목을 클릭하면 해제
      if (prev === index) {
        return null;
      }
      // 다른 항목을 클릭하면 새로 선택
      return index;
    });
  };

  return (
    <S.Wrapper>
      <VectorBanner
        selectedFilterIndex={selectedFilterIndex}
        onToggle={handleToggle}
      />
      <WorksGrid
        selectedFilterIndex={selectedFilterIndex}
        projects={initialProjects}
      />
    </S.Wrapper>
  );
}
