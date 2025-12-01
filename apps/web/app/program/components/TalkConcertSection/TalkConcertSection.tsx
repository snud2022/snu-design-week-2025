import { Body, Subtitle, Title } from "@snud2025/ui";
import type { TalkConcertSection as TalkConcertSectionType } from "../../types/detailSection";
import RopeFrame from "../../../../components/RopeFrame/RopeFrame";
import * as S from "./TalkConcertSection.style";

interface TalkConcertSectionProps {
  data: TalkConcertSectionType;
}

export default function TalkConcertSection({ data }: TalkConcertSectionProps) {
  return (
    <S.Wrapper>
      <S.LeftColumn>
        <S.DesktopRopeWrapper>
          <RopeFrame
            widthSizePixel={560}
            heightSizePixel={303}
            edges={{ top: true, right: false, bottom: false, left: false }}
          >
            <S.InfoContainer>
              <S.TitleSection>
                <Title level="title3">
                  {data.title.split("\n").map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < data.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </Title>
              </S.TitleSection>
              <S.InfoItem>
                <Body level="body2" weight="semibold">
                  일정 | {data.dateRange}
                </Body>
                <Body level="body2" weight="semibold">
                  장소 | {data.location.kr}
                </Body>
              </S.InfoItem>
            </S.InfoContainer>
          </RopeFrame>
        </S.DesktopRopeWrapper>

        <S.TabletRopeWrapper>
          <RopeFrame
            widthSizePixel={430}
            heightSizePixel={303}
            edges={{ top: true, right: false, bottom: false, left: false }}
          >
            <S.InfoContainer>
              <S.TitleSection>
                <Body level="body2" weight="medium">
                  {data.title}
                </Body>
              </S.TitleSection>
              <S.InfoItem>
                <Body level="body2" weight="semibold">
                  일정
                </Body>
                <Subtitle language="en">{data.dateRange}</Subtitle>
              </S.InfoItem>
              <S.InfoItem>
                <Body level="body2" weight="semibold">
                  장소
                </Body>
                <Body level="body2" weight="medium">
                  {data.location.kr}
                </Body>
                {data.location.en && (
                  <Body level="body2" weight="medium">
                    {data.location.en}
                  </Body>
                )}
              </S.InfoItem>
            </S.InfoContainer>
          </RopeFrame>
        </S.TabletRopeWrapper>

        <S.MobileRopeWrapper>
          <RopeFrame
            widthSizePixel={342}
            heightSizePixel={303}
            edges={{ top: true, right: false, bottom: false, left: false }}
          >
            <S.InfoContainer>
              <S.TitleSection>
                <Body level="body2" weight="medium">
                  {data.title}
                </Body>
              </S.TitleSection>
              <S.InfoItem>
                <Body level="body2" weight="semibold">
                  일정
                </Body>
                <Subtitle language="en">{data.dateRange}</Subtitle>
              </S.InfoItem>
              <S.InfoItem>
                <Body level="body2" weight="semibold">
                  장소
                </Body>
                <Body level="body2" weight="medium">
                  {data.location.kr}
                </Body>
                {data.location.en && (
                  <Body level="body2" weight="medium">
                    {data.location.en}
                  </Body>
                )}
              </S.InfoItem>
            </S.InfoContainer>
          </RopeFrame>
        </S.MobileRopeWrapper>
      </S.LeftColumn>

      <S.RightColumn>
        <S.SessionsContainer>
          {data.sessions.map((session, sessionIndex) => (
            <S.SessionWrapper key={sessionIndex}>
              <S.SessionTitleContainer>
                <Subtitle language="kr">
                  {session.date} {session.title}
                </Subtitle>
              </S.SessionTitleContainer>

              <S.SpeakersList>
                {session.speakers.map((speaker, speakerIndex) => (
                  <S.SpeakerCard key={speakerIndex}>
                    <S.SpeakerContent>
                      <Body level="body2" weight="semibold">
                        {speaker.name} | {speaker.time}
                      </Body>
                      <Body level="body2" weight="medium">
                        {speaker.subtitle.split("\n").map((line, lineIndex) => (
                          <span key={lineIndex}>
                            {line}
                            {lineIndex <
                              speaker.subtitle.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </Body>
                      <Body level="body2" weight="medium">
                        {speaker.bio}
                      </Body>
                    </S.SpeakerContent>
                  </S.SpeakerCard>
                ))}
              </S.SpeakersList>
            </S.SessionWrapper>
          ))}
        </S.SessionsContainer>
      </S.RightColumn>
    </S.Wrapper>
  );
}
