import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";
import { PEOPLE_RESPONSIVE_SCALES } from "@constants/peopleGraphic";

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

  /* 스케일은 CSS 변수로 관리 */
  --scale: ${PEOPLE_RESPONSIVE_SCALES.mobile};

  /*  모션 최소화  */
  @media (prefers-reduced-motion: reduce) {
    & * {
      transition: none !important;
      animation: none !important;
    }
  }

  ${mq.tablet} {
    --scale: ${PEOPLE_RESPONSIVE_SCALES.tablet};
  }
  ${mq.desktop} {
    --scale: ${PEOPLE_RESPONSIVE_SCALES.desktop};
  }

  /* 전체 컨테이너 크기 조정 */
  width: calc(100% / var(--scale));
  height: calc(100% / var(--scale));

  /* 스케일 적용 */
  transform: scale(var(--scale));
  transform-origin: 0 0;
`;

export const StoneWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: center center;
  will-change: transform;
`;
