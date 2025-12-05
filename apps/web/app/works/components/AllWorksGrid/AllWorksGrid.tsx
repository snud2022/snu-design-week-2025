import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import type { ProjectDetail } from "../../types/projects";
import * as S from "./AllWorksGrid.style";

interface AllWorksGridProps {
  selectedFilterIndex: number | null;
  projects: ProjectDetail[];
}

export default function AllWorksGrid({
  selectedFilterIndex,
  projects,
}: AllWorksGridProps) {
  // selectedFilterIndex가 null이면 모든 프로젝트, 숫자면 해당 filterIndex만 필터링
  const filteredProjects =
    selectedFilterIndex === null
      ? projects
      : projects.filter(
          (project) => project.filterIndex === selectedFilterIndex
        );

  return (
    <S.GridContainer>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </S.GridContainer>
  );
}
