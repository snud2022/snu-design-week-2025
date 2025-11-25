import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const Container = styled.div`
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

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${mq.mobile} {
    gap: 12px;
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

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${mq.mobile} {
    gap: 24px;
  }
`;

export const NameRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  gap: 8px;

  ${mq.mobile} {
    padding-top: 12px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
