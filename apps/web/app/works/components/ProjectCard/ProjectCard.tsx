import React from "react";
import Link from "next/link";
import type { StudentProject } from "../../types/projects";
import * as S from "./ProjectCard.style";
import { getCategoryByIndex } from "../../utils/categories";
import { Title, Body } from "@snud2025/ui";

interface ProjectCardProps {
  project: StudentProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/works/${project.id}`}>
      <S.ProjectCard $thumbnailUrl={project.thumbnailUrl}>
        <Body level="body2" weight="semibold" className="category">
          {getCategoryByIndex(project.filterIndex)} DESIGN PROJECT
        </Body>
        <Title language="kr" level="title3">
          {project.nameKo}
        </Title>
        <Body level="body2" weight="medium">
          {project.studentNameKo} {project.studentNameEn}
        </Body>
      </S.ProjectCard>
    </Link>
  );
}
