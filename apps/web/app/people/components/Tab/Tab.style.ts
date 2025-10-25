import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "@snud2025/ui";

export const Wrapper = styled.button<{ active: boolean; side: string }>`
  /* 공통 레이아웃 */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: 0;
  cursor: pointer;
  width: 100%;

  /* 좌/우 정렬 */
  ${({ side }) =>
    side === "left"
      ? css`
          justify-items: start;
          text-align: left;
        `
      : css`
          justify-items: end;
          text-align: right;
        `}

  /* 텍스트 상태 */
  .krLabel {
    opacity: ${({ active }) => (active ? 1 : 0.5)};
  }
  .enLabel {
    color: ${colors.primaryGreen};
    opacity: ${({ active }) => (active ? 1 : 0.5)};
  }
`;

const TAB_SIZE = {
  desktop: 300,
  tablet: 270,
  mobile: 192,
} as const;

export const Underline = styled.div<{ side: string }>`
  position: relative;
  margin: 12px 0;

  width: ${TAB_SIZE.mobile}px;

  ${({ theme }) => css`
    ${theme.mq.tablet} {
      width: ${TAB_SIZE.tablet}px;
    }
    ${theme.mq.desktop} {
      width: ${TAB_SIZE.desktop}px;
    }
  `}

  /* 좌/우 정렬 */
  ${({ side }) =>
    side === "left"
      ? css`
          justify-items: start;
        `
      : css`
          justify-items: end;
        `}
`;
