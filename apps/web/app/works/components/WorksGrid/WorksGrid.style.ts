"use client";

import styled from "@emotion/styled";
import { colors, mq } from "@snud2025/ui";

export const AllWorksGridSection = styled.div`
  width: 100%;
  padding: 100px 80px 280px 80px;
  background-color: ${colors.blackDefault};

  .titleLabel {
    color: white;
    margin-bottom: 80px;
  }

  .mobile {
    display: none;
    ${mq.mobile} {
      width: 342px;
      display: block;
      text-align: left;
      margin: 0 auto;
    }
  }

  .notMobile {
    display: block;
    text-align: center;
    ${mq.mobile} {
      display: none;
    }
  }

  ${mq.tablet} {
    padding: 80px 30px 280px 30px;

    .titleLabel {
      margin-bottom: 60px;
    }
  }

  ${mq.mobile} {
    padding: 40px 0px 180px 0px;

    .titleLabel {
      margin-bottom: 20px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: fit-content;
  flex-direction: column;
  margin: 0 auto;
  gap: 60px;

  ${mq.desktop} {
    flex-direction: row;
    gap: 24px;
  }
`;

export const DetailWrapper = styled.div`
  ${mq.tablet} {
    order: -1;
    width: 100%;
  }
`;

export const GridWrapper = styled.div<{ $hasDetail: boolean }>`
  display: grid;
  gap: 24px;
  grid-template-columns: 384px;
  width: 100%;

  margin: 0 auto;

  ${mq.desktop} {
    grid-template-columns: ${({ $hasDetail }) =>
      $hasDetail ? "repeat(2, 384px)" : "repeat(3, 384px)"};
    width: fit-content;
    margin: 0 auto;
  }

  ${mq.mobile} {
    grid-template-columns: 342px;
  }
`;
