"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  GoBackButton,
  StudentCard,
  ProjectPagination,
  WorksDetailHeader,
  ProjectImages,
} from "../components";
import { projectDetails } from "../mocks/projects";
import * as S from "./page.style";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const project = projectDetails.find((p) => p.id === id);

  if (!project) {
    return (
      <S.Wrapper>
        <S.NotFound>Project not found</S.NotFound>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.DesktopVisible>
        <GoBackButton />
      </S.DesktopVisible>
      <S.Container>
        <WorksDetailHeader project={project} />
        <ProjectImages />
        <StudentCard project={project} />
        <ProjectPagination
          currentProjectId={id}
          allProjectIds={projectDetails.map((p) => p.id)}
        />
      </S.Container>
      <S.BackgroundImage>
        <Image
          src="/works/exampleImage.png"
          alt="작품 이미지"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </S.BackgroundImage>
    </S.Wrapper>
  );
}
