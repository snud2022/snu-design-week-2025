import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NotionBlock } from "@snud2025/ui";
import {
  GoBackButton,
  StudentCard,
  ProjectPagination,
  WorksDetailHeader,
} from "@/works/components";
import { getWorkRecordMap, getWorks } from "@services/works";
import {
  transformProjectDetail,
  transformWorks,
  transformWork,
} from "@/works/utils/transformWorks";
import { extractCoverUrl, extractOgImageUrl } from "@utils/notionExtract";
import JsonLd from "@components/JsonLd";
import * as S from "./page.style";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// 빌드 시 모든 작품 페이지를 정적으로 생성
export async function generateStaticParams() {
  const works = await getWorks();
  return works.map((work) => ({
    id: work.id,
  }));
}

// 동적 메타데이터 생성
export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const allNotionWorks = await getWorks();
  const notionWork = allNotionWorks.find((work) => work.id === id);

  if (!notionWork) {
    return {
      title: "작품을 찾을 수 없습니다",
    };
  }

  const project = transformWork(notionWork);
  // OG 이미지는 크롤러가 접근 가능한 external URL만 사용
  // file 타입(S3 signed URL)은 만료되므로 기본 OG 이미지로 폴백
  const ogImageUrl = extractOgImageUrl(notionWork);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://2025.snudesignweek.com";

  // 동적 값 검증 및 안전한 조합
  const hasStudentName = project.studentNameKo && project.studentNameKo.trim();
  const hasStudentNameEn =
    project.studentNameEn && project.studentNameEn.trim();
  const hasProjectNameEn = project.nameEn && project.nameEn !== "Untitled";

  // title: "학생이름 (영문) - 작품이름" — 작가 이름을 앞에 배치하여 검색 매칭 강화
  const title = hasStudentName
    ? hasStudentNameEn
      ? `${project.studentNameKo} (${project.studentNameEn}) - ${project.nameKo}`
      : `${project.studentNameKo} - ${project.nameKo}`
    : project.nameKo;

  // description 구성
  const studentInfo = hasStudentName
    ? hasStudentNameEn
      ? `${project.studentNameKo} (${project.studentNameEn})의 `
      : `${project.studentNameKo}의 `
    : "";

  const projectInfo = hasProjectNameEn
    ? `"${project.nameKo}" (${project.nameEn})`
    : `"${project.nameKo}"`;

  const description = `${studentInfo}서울대학교 디자인학부 졸업 작품 ${projectInfo}. SNU DESIGN WEEK 2025 | ${project.projectType}`;

  return {
    title,
    description,
    keywords: [
      project.studentNameKo,
      project.studentNameEn,
      project.nameKo,
      project.nameEn,
      project.projectType,
      "서울대학교",
      "디자인학부",
      "졸업전시",
      "SNU DESIGN WEEK 2025",
    ].filter(Boolean),
    alternates: {
      canonical: `${siteUrl}/works/${id}`,
    },
    openGraph: {
      title: `${title} | SNU DESIGN WEEK 2025`,
      description,
      type: "article",
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: project.nameKo,
            },
          ]
        : [
            {
              url: "/meta/og-image.png",
              width: 1200,
              height: 630,
              alt: "SNU DESIGN WEEK 2025",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | SNU DESIGN WEEK 2025`,
      description,
      images: ogImageUrl ? [ogImageUrl] : ["/meta/og-image.png"],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;

  // 병렬로 데이터 가져오기
  const [allNotionWorks, recordMap] = await Promise.all([
    getWorks(), // 페이지네이션을 위해 전체 목록 필요
    getWorkRecordMap(id).catch(() => null), // 상세 내용
  ]);

  // 현재 작품 찾기
  const notionWork = allNotionWorks.find((work) => work.id === id);

  // 현재 작품이 없으면 404
  if (!notionWork) {
    notFound();
  }

  // 페이지네이션용 데이터 변환
  const allProjects = transformWorks(allNotionWorks);
  const allProjectIds = allProjects.map((p) => p.id);

  // ProjectDetail로 변환
  const project = transformProjectDetail(notionWork);

  // 썸네일 URL 추출
  const thumbnailUrl = extractCoverUrl(notionWork);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://2025.snudesignweek.com";

  const jsonLdData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: project.nameKo,
    ...(project.nameEn &&
      project.nameEn !== "Untitled" && { alternateName: project.nameEn }),
    ...(project.studentNameKo && {
      creator: {
        "@type": "Person",
        name: project.studentNameKo,
        ...(project.studentNameEn && {
          alternateName: project.studentNameEn,
        }),
        affiliation: {
          "@type": "Organization",
          name: "서울대학교 디자인학부",
        },
      },
    }),
    genre: project.projectType,
    url: `${siteUrl}/works/${id}`,
    ...(thumbnailUrl && { image: thumbnailUrl }),
    isPartOf: {
      "@type": "ExhibitionEvent",
      name: "SNU DESIGN WEEK 2025",
      startDate: "2025-12-04",
      endDate: "2025-12-09",
    },
  };

  return (
    <S.Wrapper data-page="works-detail">
      <JsonLd data={jsonLdData} />
      <S.DesktopVisible>
        <GoBackButton />
      </S.DesktopVisible>
      <S.Container>
        <article aria-labelledby="project-title">
          <WorksDetailHeader project={project} />
          {/* Notion 블록 컨텐츠 렌더링 */}
          {recordMap && (
            <NotionBlock
              recordMap={recordMap}
              aria-label={`${project.nameKo} 작품 상세 내용`}
            />
          )}
        </article>
        <aside aria-label="작품 정보">
          <StudentCard project={project} allProjects={allProjects} />
        </aside>
        <ProjectPagination
          currentProjectId={id}
          allProjectIds={allProjectIds}
          allProjects={allProjects}
        />
      </S.Container>
      {thumbnailUrl && (
        <S.BackgroundImage aria-hidden="true">
          <Image
            src={thumbnailUrl}
            alt=""
            width={1920}
            height={1080}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            unoptimized
            priority
            aria-hidden="true"
          />
        </S.BackgroundImage>
      )}
    </S.Wrapper>
  );
}
