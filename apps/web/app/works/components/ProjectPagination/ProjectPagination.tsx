import React from "react";
import Link from "next/link";
import { Subtitle, Title } from "@snud2025/ui";
import * as S from "./ProjectPagination.style";
import ProjectCard from "@/works/components/ProjectCard/ProjectCard";
import type { ProjectDetail } from "@/works/types/projects";
import ArrowBack from "@assets/icons/arrow_back.svg";

interface ProjectPaginationProps {
  currentProjectId: string;
  allProjectIds: string[];
  allProjects: ProjectDetail[];
}

/**
 * Works Detail 페이지에서 이전/다음 프로젝트로 네비게이션하는 컴포넌트
 */
export default function ProjectPagination({
  currentProjectId,
  allProjectIds,
  allProjects,
}: ProjectPaginationProps) {
  // 현재 프로젝트의 인덱스 찾기
  const currentIndex = allProjectIds.indexOf(currentProjectId);

  // 이전/다음 프로젝트 존재 여부 확인
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allProjectIds.length - 1;

  // 이전/다음 프로젝트 ID & 상세 정보 가져오기
  const previousProjectId = hasPrevious
    ? allProjectIds[currentIndex - 1]
    : null;
  const nextProjectId = hasNext ? allProjectIds[currentIndex + 1] : null;

  const previousProject = previousProjectId
    ? allProjects.find((p) => p.id === previousProjectId)
    : null;
  const nextProject = nextProjectId
    ? allProjects.find((p) => p.id === nextProjectId)
    : null;

  return (
    <S.Container>
      {/* 이전 프로젝트 네비게이션 섹션 */}
      <S.NavSection $isLeft>
        {hasPrevious && previousProject && (
          <>
            <Link href={`/works/${previousProjectId}`}>
              <S.NavButton $isLeft>
                <S.ArrowWrapper>
                  <ArrowBack
                    style={{ width: "100%", height: "100%" }}
                    fill="#fff"
                  />
                </S.ArrowWrapper>
                <Title language="en" level="title3" className="not-mobile">
                  PREVIOUS
                </Title>
                <Subtitle language="en" className="mobile">
                  PREVIOUS
                </Subtitle>
              </S.NavButton>
            </Link>
            <S.ProjectCardWrapper>
              <ProjectCard project={previousProject} />
            </S.ProjectCardWrapper>
          </>
        )}
      </S.NavSection>

      {/* 다음 프로젝트 네비게이션 섹션 */}
      <S.NavSection $isLeft={false}>
        {hasNext && nextProject && (
          <>
            <Link href={`/works/${nextProjectId}`}>
              <S.NavButton $isLeft={false}>
                <S.ArrowWrapper style={{ transform: "rotate(180deg)" }}>
                  <ArrowBack
                    style={{ width: "100%", height: "100%" }}
                    fill="#fff"
                  />
                </S.ArrowWrapper>
                <Title language="en" level="title3" className="not-mobile">
                  NEXT
                </Title>
                <Subtitle language="en" className="mobile">
                  NEXT
                </Subtitle>
              </S.NavButton>
            </Link>
            <S.ProjectCardWrapper>
              <ProjectCard project={nextProject} />
            </S.ProjectCardWrapper>
          </>
        )}
      </S.NavSection>
    </S.Container>
  );
}
