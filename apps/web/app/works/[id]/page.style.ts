"use client";

import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding-bottom: 140px;
  ${mq.desktop} {
    padding-bottom: 280px;
  }
`;

export const DesktopVisible = styled.div`
  display: none;
  ${mq.desktop} {
    display: block;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 0;
  pointer-events: none;
  min-height: 0;

  /* 하단 검은색 그라데이션 오버레이 */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 27.13%,
      rgba(0, 0, 0, 1) 86.48%
    );
    pointer-events: none;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 1200px;
  align-items: center;
  padding-top: 400px;
  margin: 0 auto;
  gap: 84px;
  display: flex;
  flex-direction: column;
  align-items: start;

  ${mq.tablet} {
    padding-top: 270px;
    width: 540px;
  }
  ${mq.mobile} {
    padding-top: 128px;
    width: 342px;
    gap: 48px;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  gap: 80px;
  grid-template-columns: 1fr 1fr;

  ${mq.tablet} {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  ${mq.mobile} {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
