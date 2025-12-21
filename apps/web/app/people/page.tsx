import React from "react";
import type { Metadata } from "next";
import PeopleClient from "./PeopleClient";
import { getPeople } from "@services/people";
import { transformPeople } from "./utils/transformPeople";

export const metadata: Metadata = {
  title: "PEOPLE",
  description:
    "SNU DESIGN WEEK 2025 참여 디자이너. 서울대학교 디자인학부 2025 졸업생들을 소개합니다.",
  openGraph: {
    title: "PEOPLE | SNU DESIGN WEEK 2025",
    description:
      "SNU DESIGN WEEK 2025 참여 디자이너. 서울대학교 디자인학부 2025 졸업생들을 소개합니다.",
    images: ["/meta/og-image.png"],
  },
  twitter: {
    title: "PEOPLE | SNU DESIGN WEEK 2025",
    description:
      "SNU DESIGN WEEK 2025 참여 디자이너. 서울대학교 디자인학부 2025 졸업생들을 소개합니다.",
    images: ["/meta/og-image.png"],
  },
};

export default async function People() {
  // 서버에서 Notion 데이터 가져오기
  const notionPeople = await getPeople();
  const people = transformPeople(notionPeople);

  return <PeopleClient people={people} />;
}
