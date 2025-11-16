import React from "react";
import type { StudentProject } from "../../mocks/projects";
import * as S from "./ProjectCard.style";
import { Title, Body } from "@snud2025/ui";

interface ProjectCardProps {
  project: StudentProject;
  categoryNameEn: string;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  categoryNameEn,
  onClick,
}: ProjectCardProps) {
  return (
    <S.ProjectCard onClick={onClick} $thumbnailUrl={project.thumbnailUrl}>
      <Body level="body2" weight="semibold" className="category">
        {categoryNameEn}
      </Body>
      <Title language="kr" level="title3">
        {project.nameKo}
      </Title>
      <Body level="body2" weight="medium">
        {project.studentNameKo} {project.studentNameEn}
      </Body>
    </S.ProjectCard>
  );
}
