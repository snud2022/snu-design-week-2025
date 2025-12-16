import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors, mq } from "@snud2025/ui";

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
          align-items: flex-start;
          text-align: left;
        `
      : css`
          align-items: flex-end;
          text-align: right;
        `}

  /* 텍스트 상태 */
  .krLabel {
    color: ${colors.blackDefault};
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

export const Underline = styled.div`
  position: relative;
  margin: 12px 0;

  width: ${TAB_SIZE.mobile}px;

  ${mq.tablet} {
    width: ${TAB_SIZE.tablet}px;
  }
  ${mq.desktop} {
    width: ${TAB_SIZE.desktop}px;
  }
`;

export const SideMove = styled.div<{ side: string }>`
  display: flex;
  /* 좌/우 정렬 */
  ${({ side }) =>
    side === "left"
      ? css`
          justify-content: flex-start;
        `
      : css`
          justify-content: flex-end;
        `}
`;
