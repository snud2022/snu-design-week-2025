import { Body, Subtitle, Title } from "@snud2025/ui";
import type { ProgramEvent } from "../../types/program";
import RopeFrame from "../../../../components/RopeFrame/RopeFrame";
import * as S from "./ProgramCard.style";
import Image from "next/image";

interface ProgramCardProps {
  program: ProgramEvent;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <S.ProgramCardWrapper>
      <S.ProgramCard>
        <RopeFrame
          widthSizePixel={340}
          heightSizePixel={134}
          edges={{ top: true, right: true, bottom: true, left: true }}
        >
          <S.CardHeader>
            <Subtitle language="en">{program.month}</Subtitle>
            <Title level="title1" language="kr">
              {program.day}
            </Title>
          </S.CardHeader>
        </RopeFrame>
        <RopeFrame
          widthSizePixel={340}
          heightSizePixel={540}
          edges={{ top: false, right: true, bottom: true, left: true }}
        >
          <S.CardContentWrapper>
            <S.CardContent>
              <S.TitleSection>
                {program.imageUrl && (
                  <Image
                    src={program.imageUrl}
                    alt={program.title.kr}
                    width={286}
                    height={170}
                  />
                )}
                <Subtitle language="en">{program.time}</Subtitle>
                <Subtitle language="kr">{program.title.kr}</Subtitle>
              </S.TitleSection>
              {program.speakers && program.speakers.length > 0 && (
                <S.SpeakersSection>
                  <Body level="body2" weight="semibold">
                    연사 |
                  </Body>
                  <Body level="body2" weight="medium">
                    {program.speakers.map((speaker) => speaker.name).join(", ")}
                  </Body>
                </S.SpeakersSection>
              )}
              <S.DescriptionSection>
                <Body level="body2" weight="medium">
                  {program.description.kr}
                </Body>
              </S.DescriptionSection>
            </S.CardContent>
          </S.CardContentWrapper>
        </RopeFrame>
      </S.ProgramCard>
    </S.ProgramCardWrapper>
  );
}
