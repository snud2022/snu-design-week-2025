"use client";

import styled from "@emotion/styled";
import { mq, colors } from "@snud2025/ui";

export const DetailSection = styled.div`
  width: 384px;
  flex-shrink: 0;

  ${mq.mobile} {
    width: 100%;
    max-width: 384px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .whiteLabel,
  .advisor {
    color: white;
  }

  .krTitle {
    color: ${colors.primaryGreen};
    margin-bottom: 20px;

    ${mq.desktop} {
      margin-bottom: 40px;
    }
  }
`;

export const TabletContainer = styled.div`
  ${mq.mobile} {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: none;
  ${mq.mobile} {
    display: inline;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 20px;

  ${mq.desktop} {
    margin-top: 80px;
    gap: 40px;
  }

  .koDescription,
  .enDescription {
    color: ${colors.secondaryGray};
  }

  .enDescription {
    ${mq.mobile} {
      display: none;
    }
  }
`;
