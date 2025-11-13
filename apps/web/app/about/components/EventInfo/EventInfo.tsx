"use client";

import { Subtitle } from "@snud2025/ui";
import type { EventInfo } from "../../types/eventInfo";
import * as S from "./EventInfo.style";

interface EventInfoProps {
  eventInfo: EventInfo;
}

export default function EventInfo({ eventInfo }: EventInfoProps) {
  return (
    <S.InfoRow>
      {/* 첫 번째 열: 날짜/시간 */}
      <S.InfoColumn>
        <S.InfoContent>
          <Subtitle language="en">{eventInfo.date}</Subtitle>
          <Subtitle language="en">{eventInfo.dayOfWeek}</Subtitle>
          <Subtitle language="en">{eventInfo.time}</Subtitle>
        </S.InfoContent>
      </S.InfoColumn>

      {/* 두 번째 열: 장소 */}
      <S.InfoColumn>
        <S.InfoContent>
          <Subtitle language="kr">{eventInfo.locationKr}</Subtitle>
          <Subtitle language="en">{eventInfo.locationEn}</Subtitle>
          <Subtitle language="en">{eventInfo.locationEn2}</Subtitle>
        </S.InfoContent>
      </S.InfoColumn>
    </S.InfoRow>
  );
}
