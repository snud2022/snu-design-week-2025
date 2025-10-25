import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ROPE_SIZE = {
  desktop: 148,
  tablet: 123,
  mobile: 148,
} as const;

export const Wrapper = styled.div`
  min-height: 100dvh;
  width: ${ROPE_SIZE.mobile * 1 * 2}px;
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 40px;

  ${({ theme }) => css`
    ${theme.mq.tablet} {
      width: ${ROPE_SIZE.tablet * 2 * 2}px;
    }
    ${theme.mq.desktop} {
      width: ${ROPE_SIZE.desktop * 4 * 2}px;
    }
  `}
`;

export const TabsContainer = styled.menu`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;

  ${({ theme }) => css`
    ${theme.mq.desktop} {
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;

export const GridWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(1, calc(${ROPE_SIZE.mobile} * 2px));
  grid-auto-rows: calc(${ROPE_SIZE.mobile} * 2px);
  justify-content: center;

  ${({ theme }) => css`
    ${theme.mq.tablet} {
      grid-template-columns: repeat(2, calc(${ROPE_SIZE.tablet} * 2px));
      grid-auto-rows: calc(${ROPE_SIZE.tablet} * 2px);
    }
    ${theme.mq.desktop} {
      grid-template-columns: repeat(4, calc(${ROPE_SIZE.desktop} * 2px));
      grid-auto-rows: calc(${ROPE_SIZE.desktop} * 2px);
    }
  `}
`;
