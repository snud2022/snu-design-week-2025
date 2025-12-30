import type { Metadata } from "next";
import { ProgramSection, DetailSection } from "./components";
import {
  PROGRAM_INTRO,
  PROGRAMS,
  HI_DAY_SECTION,
  TALK_CONCERT_SECTION,
} from "./constants";
import * as S from "./page.style";

export const metadata: Metadata = {
  title: "PROGRAM",
  description:
    "SNU DESIGN WEEK 2025 프로그램 일정. 전시 기간 동안 진행되는 다양한 프로그램을 확인하세요.",
  openGraph: {
    title: "PROGRAM | SNU DESIGN WEEK 2025",
    description:
      "SNU DESIGN WEEK 2025 프로그램 일정. 전시 기간 동안 진행되는 다양한 프로그램을 확인하세요.",
    images: ["/meta/og-image.png"],
  },
  twitter: {
    title: "PROGRAM | SNU DESIGN WEEK 2025",
    description:
      "SNU DESIGN WEEK 2025 프로그램 일정. 전시 기간 동안 진행되는 다양한 프로그램을 확인하세요.",
    images: ["/meta/og-image.png"],
  },
};

export default function Program() {
  return (
    <S.Wrapper>
      <section aria-labelledby="program-section">
        <ProgramSection programs={PROGRAMS} intro={PROGRAM_INTRO} />
      </section>
      <section aria-labelledby="program-detail-section">
        <DetailSection
          hiDay={HI_DAY_SECTION}
          talkConcert={TALK_CONCERT_SECTION}
        />
      </section>
    </S.Wrapper>
  );
}
