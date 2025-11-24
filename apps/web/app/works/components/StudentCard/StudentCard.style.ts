"use client";

import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";
import { colors } from "@snud2025/ui";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 48px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  width: 100%;
  overflow: visible;
  gap: 20px;

  .other-works {
    color: ${colors.primaryGreen};
    text-align: end;
  }

  .mobile {
    display: none;
    ${mq.mobile} {
      display: block;
    }
  }

  .not-mobile {
    display: block;
    ${mq.mobile} {
      display: none;
    }
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 16px;

  ${mq.mobile} {
    padding: 0;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px;

  ${mq.mobile} {
    padding: 0;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const OtherProject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

export const OuterProjectCard = styled.div`
  display: none;

  ${mq.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const InnerProjectCard = styled.div`
  display: none;

  ${mq.tablet} {
    display: flex;
    justify-content: flex-end;
  }
`;
