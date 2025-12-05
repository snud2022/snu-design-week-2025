import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { NotionBlock } from "@snud2025/ui";
import {
  GoBackButton,
  StudentCard,
  ProjectPagination,
  WorksDetailHeader,
} from "../components";
import { getWorkRecordMap } from "../../../services/works";
import {
  transformProjectDetail,
  transformWorks,
} from "../utils/transformWorks";
import { extractCoverUrl } from "../../../utils/notionExtract";
import { getWorks } from "../../../services/works";
import * as S from "./page.style";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;

  // 모든 작품 목록 가져오기 (메타데이터 및 페이지네이션용)
  const allNotionWorks = await getWorks();
  const allProjects = transformWorks(allNotionWorks);
  const allProjectIds = allProjects.map((p) => p.id);

  // 현재 작품 찾기
  const notionWork = allNotionWorks.find((work) => work.id === id);

  if (!notionWork) {
    notFound();
  }

  // rrecordMap 가져오기
  const recordMap = await getWorkRecordMap(id).catch(() => null);

  // ProjectDetail로 변환
  const project = transformProjectDetail(notionWork);

  // 썸네일 URL 추출
  const thumbnailUrl = extractCoverUrl(notionWork);

  return (
    <S.Wrapper>
      <S.DesktopVisible>
        <GoBackButton />
      </S.DesktopVisible>
      <S.Container>
        <WorksDetailHeader project={project} />
        {/* Notion 블록 컨텐츠 렌더링 */}
        {recordMap && <NotionBlock recordMap={recordMap} />}
        <StudentCard project={project} allProjects={allProjects} />
        <ProjectPagination
          currentProjectId={id}
          allProjectIds={allProjectIds}
          allProjects={allProjects}
        />
      </S.Container>
      {thumbnailUrl && (
        <S.BackgroundImage>
          <Image
            src={thumbnailUrl}
            alt="작품 이미지"
            width={1920}
            height={1080}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            unoptimized
            priority
          />
        </S.BackgroundImage>
      )}
    </S.Wrapper>
  );
}
