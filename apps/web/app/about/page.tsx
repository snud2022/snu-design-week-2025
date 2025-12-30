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

export default function About() {
  return (
    <S.Wrapper>
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
