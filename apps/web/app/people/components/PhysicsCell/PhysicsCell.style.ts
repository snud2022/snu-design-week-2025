import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { RESPONSIVE_SCALES } from "../../../../constants/peopleGraphic";

export const PhysicsContainer = styled.div<{
  cellSize: number;
  zIndex: number;
}>`
  position: absolute;

  width: ${({ cellSize }) => cellSize}px;
  height: ${({ cellSize }) => cellSize}px;
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: auto;
  overflow: hidden;
`;

export const DomLayer = styled.div`
  position: absolute;
  inset: 0;
`;

export const MountContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: auto;
`;

export const StoneWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: center center;
`;

/* 반응형 스케일만 담당하는 내부 래퍼 */
export const StoneScale = styled.div(
  ({ theme }) => css`
    transform: scale(${RESPONSIVE_SCALES.mobile});
    transform-origin: center center;
    will-change: transform;

    ${theme?.mq?.tablet &&
    css`
      ${theme.mq.tablet} {
        transform: scale(${RESPONSIVE_SCALES.tablet});
      }
    `}
    ${theme?.mq?.desktop &&
    css`
      ${theme.mq.desktop} {
        transform: scale(${RESPONSIVE_SCALES.desktop});
      }
    `}
  `
);
