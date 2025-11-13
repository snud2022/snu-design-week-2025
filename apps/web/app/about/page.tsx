"use client";

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

export default function About() {
  return (
    <S.Wrapper>
      <S.PosterContainer>
        <Image src="/about/poster.jpg" alt="about" width={580} height={896} />
      </S.PosterContainer>
      <S.ContentContainer>
        <EventHeader
          title={EVENT_TITLE}
          eventInfo={EVENT_INFO}
          ropeFrameConfig={ROPE_FRAME_CONFIG}
        />
        <S.DescriptionSection>
          <Description content={ABOUT_CONTENT} />
          <CommitteeSection leadership={LEADERSHIP} teams={TEAMS} />
          <HelperSection data={HELPER_SECTION} />
        </S.DescriptionSection>
      </S.ContentContainer>
    </S.Wrapper>
  );
}
