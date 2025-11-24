import React from "react";
import { studentProjects } from "../../mocks/projects";
import { getCategoryByIndex } from "../../utils/categories";
import ProjectCard from "../ProjectCard/ProjectCard";
import * as S from "./AllWorksGrid.style";

interface AllWorksGridProps {
  selectedFilterIndex: number | null;
}

export default function AllWorksGrid({
  selectedFilterIndex,
}: AllWorksGridProps) {
  // selectedFilterIndex가 null이면 모든 프로젝트, 숫자면 해당 filterIndex만 필터링
  const filteredProjects =
    selectedFilterIndex === null
      ? studentProjects
      : studentProjects.filter(
          (project) => project.filterIndex === selectedFilterIndex
        );

  return (
    <S.GridContainer>
      {filteredProjects.map((project) => {
        const category = getCategoryByIndex(project.filterIndex);
        if (!category) return null;

        return <ProjectCard key={project.id} project={project} />;
      })}
    </S.GridContainer>
  );
}
