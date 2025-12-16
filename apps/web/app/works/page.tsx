import React from "react";
import type { Metadata } from "next";
import { WorksClient } from "./WorksClient";
import { getWorks } from "../../services/works";
import { transformWorks } from "./utils/transformWorks";

export const metadata: Metadata = {
  title: "WORKS",
  description:
    "SNU DESIGN WEEK 2025 졸업 작품 갤러리. 서울대학교 디자인학부 졸업생들의 작품을 만나보세요.",
  openGraph: {
    title: "WORKS | SNU DESIGN WEEK 2025",
    description:
      "SNU DESIGN WEEK 2025 졸업 작품 갤러리. 서울대학교 디자인학부 졸업생들의 작품을 만나보세요.",
    images: ["/meta/og-image.png"],
  },
  twitter: {
    title: "WORKS | SNU DESIGN WEEK 2025",
    description:
      "SNU DESIGN WEEK 2025 졸업 작품 갤러리. 서울대학교 디자인학부 졸업생들의 작품을 만나보세요.",
    images: ["/meta/og-image.png"],
  },
};

export default async function Works() {
  // 서버에서 Notion 데이터 가져오기
  const notionWorks = await getWorks();
  const studentProjects = transformWorks(notionWorks);

  return <WorksClient initialProjects={studentProjects} />;
}
