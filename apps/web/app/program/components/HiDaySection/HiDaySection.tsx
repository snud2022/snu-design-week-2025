import { Body, Subtitle, Title } from "@snud2025/ui";
import type { HiDaySection as HiDaySectionType } from "../../types/detailSection";
import RopeFrame from "../../../../components/RopeFrame/RopeFrame";
import * as S from "./HiDaySection.style";

interface HiDaySectionProps {
  data: HiDaySectionType;
}

export default function HiDaySection({ data }: HiDaySectionProps) {
  return (
    <S.Wrapper>
      <S.LeftColumn>
        <S.DesktopRopeWrapper>
          <RopeFrame
            widthSizePixel={560}
            heightSizePixel={200}
            edges={{ top: true, right: false, bottom: false, left: false }}
          >
            <S.InfoContainer>
              <S.InfoItem>
                <S.TitleSection>
                  {data.subtitle && (
                    <Title level="title3">{data.subtitle}</Title>
                  )}
                  <Title level="title3">{data.title.kr}</Title>
                </S.TitleSection>
                <S.InfoDetailSection>
                  <Subtitle language="kr">
                    일정 | {data.date}
                  </Subtitle>
                  <Subtitle language="kr">
                    시간 | {data.time}
                  </Subtitle>
                  <Subtitle language="kr">
                   장소 | {data.location.kr}
                  </Subtitle>
                </S.InfoDetailSection>
              </S.InfoItem>
            </S.InfoContainer>
          </RopeFrame>
        </S.DesktopRopeWrapper>

        <S.TabletRopeWrapper>
          <RopeFrame
            widthSizePixel={430}
            heightSizePixel={200}
            edges={{ top: true, right: false, bottom: false, left: false }}
          >
             <S.InfoContainer>
              <S.InfoItem>
                <S.TitleSection>
                  {data.subtitle && (
                    <Title level="title3">{data.subtitle}</Title>
                  )}
                  <Title level="title3">{data.title.kr}</Title>
                </S.TitleSection>
                <S.InfoDetailSection>
                  <Subtitle language="kr">
                    일정 | {data.date}
                  </Subtitle>
                  <Subtitle language="kr">
                    시간 | {data.time}
                  </Subtitle>
                  <Subtitle language="kr">
                   장소 | {data.location.kr}
                  </Subtitle>
                </S.InfoDetailSection>
              </S.InfoItem>
            </S.InfoContainer>
          </RopeFrame>
        </S.TabletRopeWrapper>

        <S.MobileRopeWrapper>
          <RopeFrame
            widthSizePixel={342}
            heightSizePixel={250}
            edges={{ top: true, right: false, bottom: false, left: false }}
          >
          <S.InfoContainer>
              <S.InfoItem>
                <S.TitleSection>
                  {data.subtitle && (
                    <Title level="title3">{data.subtitle}</Title>
                  )}
                  <Title level="title3">{data.title.kr}</Title>
                </S.TitleSection>
                <S.InfoDetailSection>
                  <Subtitle language="kr">
                    일정 | {data.date}
                  </Subtitle>
                  <Subtitle language="kr">
                    시간 | {data.time}
                  </Subtitle>
                  <Subtitle language="kr">
                   장소 | {data.location.kr}
                  </Subtitle>
                </S.InfoDetailSection>
              </S.InfoItem>
            </S.InfoContainer>
          </RopeFrame>
        </S.MobileRopeWrapper>
      </S.LeftColumn>

      <S.RightColumn>
        <S.DescriptionSection>
          <Body level="body2" weight="medium">
            {data.description.kr}
          </Body>
          {data.description.en && (
            <Body level="body2" weight="medium">
              {data.description.en}
            </Body>
          )}
        </S.DescriptionSection>

        <S.ScheduleList>
          {data.schedules.map((schedule, index) => (
            <S.ScheduleItem key={index}>
              <S.ScheduleTime>
                <Body level="body2" weight="medium">
                  {schedule.time}
                </Body>
              </S.ScheduleTime>
              <S.ScheduleEvent>
                <Body level="body2" weight="medium">
                  {schedule.event}
                </Body>
              </S.ScheduleEvent>
            </S.ScheduleItem>
          ))}
        </S.ScheduleList>
      </S.RightColumn>
    </S.Wrapper>
  );
}
