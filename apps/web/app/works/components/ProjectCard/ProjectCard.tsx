import React from "react";
import Link from "next/link";
import type { ProjectDetail } from "@/works/types/projects";
import * as S from "./ProjectCard.style";
import { Title, Body } from "@snud2025/ui";

interface ProjectCardProps {
  project: ProjectDetail;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const ariaLabel = `${project.nameKo} - ${project.studentNameKo}${
    project.studentNameEn ? ` (${project.studentNameEn})` : ""
  } 작품 상세 보기`;

  return (
    <Link href={`/works/${project.id}`} aria-label={ariaLabel}>
      <S.ProjectCard $thumbnailUrl={project.thumbnailUrl}>
        <Body level="body2" weight="semibold" className="category">
          {project.projectType} DESIGN PROJECT
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
