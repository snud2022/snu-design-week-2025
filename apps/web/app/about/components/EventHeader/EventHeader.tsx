"use client";

import { useEffect, useState } from "react";
import { Title } from "@snud2025/ui";
import EventInfo from "@/about/components/EventInfo/EventInfo";
import type { EventTitle, RopeFrameConfig } from "@/about/types/eventHeader";
import type { EventInfo as EventInfoType } from "@/about/types/eventInfo";
import * as S from "./EventHeader.style";
import RopeFrame from "@components/RopeFrame/RopeFrame";

interface EventHeaderProps {
  title: EventTitle;
  eventInfo: EventInfoType;
  ropeFrameConfig: RopeFrameConfig;
}

const MOBILE_BREAKPOINT = 600;

export default function EventHeader({
  title,
  eventInfo,
  ropeFrameConfig,
}: EventHeaderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const width = isMobile ? 342 : ropeFrameConfig.widthSizePixel;
  const height = isMobile ? 388 : ropeFrameConfig.heightSizePixel;

  return (
    <S.RopeFrameWrapper>
      <RopeFrame
        widthSizePixel={width}
        heightSizePixel={height}
        edges={ropeFrameConfig.edges}
      >
        <S.InfoSection>
          {/* 상단: Title */}
          <S.TitleWrapper>
            <Title level="title1" language="en">
              {title.mainTitle}
            </Title>
            <Title level="title1" language="en">
              {title.subTitle}
            </Title>
          </S.TitleWrapper>

          {/* 하단: 2열 정보 */}
          <EventInfo eventInfo={eventInfo} />
        </S.InfoSection>
      </RopeFrame>
    </S.RopeFrameWrapper>
  );
}
