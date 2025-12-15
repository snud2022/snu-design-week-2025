"use client";

import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const VectorBannerSection = styled.div`
  position: relative;
  width: 1200px;
  height: 396px;
  margin: 0 auto;
  overflow: visible;

  ${mq.tablet} {
    width: 540px;
    height: 410px;
  }
  ${mq.mobile} {
    display: none;
  }
`;

export const FilterStoneWrapper = styled.div<{
  $tabletX: number;
  $tabletY: number;
  $tabletRotate: number;
  $desktopX: number;
  $desktopY: number;
  $desktopRotate: number;
}>`
  position: absolute;

  ${mq.tablet} {
    left: ${({ $tabletX }) => $tabletX}px;
    top: ${({ $tabletY }) => $tabletY}px;
  }

  ${mq.desktop} {
    left: ${({ $desktopX }) => $desktopX}px;
    top: ${({ $desktopY }) => $desktopY}px;
  }

  ${mq.mobile} {
    display: none;
  }
`;

export const MobileFilterSection = styled.div`
  display: none;

  ${mq.mobile} {
    display: block;
  }
`;
