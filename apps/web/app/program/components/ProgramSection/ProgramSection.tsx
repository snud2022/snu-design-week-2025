import { Body, Title } from "@snud2025/ui";
import ProgramCard from "@/program/components/ProgramCard";
import type { ProgramEvent } from "@/program/types/program";
import * as S from "./ProgramSection.style";
import RopeFrame from "@components/RopeFrame/RopeFrame";

interface ProgramSectionProps {
  programs: ProgramEvent[];
  intro: {
    kr: string;
    en: string;
  };
}

export default function ProgramSection({
  programs,
  intro,
}: ProgramSectionProps) {
  return (
    <S.Wrapper>
      <S.TitleSection>
        <S.Desktop>
          <RopeFrame
            widthSizePixel={240}
            heightSizePixel={70}
            edges={{ top: false, right: false, bottom: true, left: false }}
          >
            <Title level="title1" language="en">
              PROGRAM
            </Title>
          </RopeFrame>
        </S.Desktop>
        <S.TabletMobile>
          <RopeFrame
            widthSizePixel={203}
            heightSizePixel={66}
            edges={{ top: false, right: false, bottom: true, left: false }}
          >
            <Title level="title2" language="en">
              PROGRAM
            </Title>
          </RopeFrame>
        </S.TabletMobile>
      </S.TitleSection>

      <S.IntroSection>
        <Body level="body2" weight="medium">
          {intro.kr}
          <br />
          {intro.en}
        </Body>
      </S.IntroSection>

      <S.ProgramsGrid>
        {programs.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </S.ProgramsGrid>
    </S.Wrapper>
  );
}
