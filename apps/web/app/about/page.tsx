import type { Metadata } from "next";
import * as S from "./page.style";
import Image from "next/image";
import {
  EventHeader,
  Description,
  CommitteeSection,
  HelperSection,
} from "./components";
import {
  HELPER_SECTION,
  LEADERSHIP,
  TEAMS,
  ABOUT_CONTENT,
  EVENT_INFO,
  EVENT_TITLE,
  ROPE_FRAME_CONFIG,
} from "./constants";
import JsonLd from "@components/JsonLd";

export const metadata: Metadata = {
  title: "ABOUT",
  description:
    "SNU DESIGN WEEK 2025 전시 소개. 2025년 12월 4일부터 9일까지 서울대학교 49동 & 파워플랜트에서 개최됩니다.",
  openGraph: {
    title: "ABOUT | SNU DESIGN WEEK 2025",
    description:
      "SNU DESIGN WEEK 2025 전시 소개. 2025년 12월 4일부터 9일까지 서울대학교 49동 & 파워플랜트에서 개최됩니다.",
    images: ["/meta/og-image.png"],
  },
  twitter: {
    title: "ABOUT | SNU DESIGN WEEK 2025",
    description:
      "SNU DESIGN WEEK 2025 전시 소개. 2025년 12월 4일부터 9일까지 서울대학교 49동 & 파워플랜트에서 개최됩니다.",
    images: ["/meta/og-image.png"],
  },
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://2025.snudesignweek.com";

const exhibitionJsonLd = {
  "@context": "https://schema.org",
  "@type": "ExhibitionEvent",
  name: "SNU DESIGN WEEK 2025 | WRAP UP",
  description: "서울대학교 디자인학부 졸업전시 2025",
  startDate: "2025-12-04",
  endDate: "2025-12-09",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "서울대학교 49동 & 파워플랜트",
    address: {
      "@type": "PostalAddress",
      addressLocality: "서울",
      addressCountry: "KR",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "서울대학교 디자인학부",
    url: siteUrl,
  },
  image: `${siteUrl}/meta/og-image.png`,
  url: `${siteUrl}/about`,
};

export default function About() {
  return (
    <S.Wrapper>
      <JsonLd data={exhibitionJsonLd} />
      <aside aria-label="전시 포스터">
        <S.PosterContainer>
          <Image
            src="/about/poster.png"
            alt="SNU DESIGN WEEK 2025 전시 포스터"
            width={580}
            height={896}
            fetchPriority="high"
          />
        </S.PosterContainer>
      </aside>
      <S.ContentContainer>
        <section aria-labelledby="event-header">
          <EventHeader
            title={EVENT_TITLE}
            eventInfo={EVENT_INFO}
            ropeFrameConfig={ROPE_FRAME_CONFIG}
          />
        </section>
        <S.DescriptionSection>
          <section aria-labelledby="about-description">
            <Description content={ABOUT_CONTENT} />
          </section>
          <section aria-labelledby="committee-section">
            <CommitteeSection leadership={LEADERSHIP} teams={TEAMS} />
          </section>
          <section aria-labelledby="helper-section">
            <HelperSection data={HELPER_SECTION} />
          </section>
        </S.DescriptionSection>
      </S.ContentContainer>
    </S.Wrapper>
  );
}
