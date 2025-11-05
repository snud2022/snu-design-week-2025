import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { RESPONSIVE_SCALES } from "../../../../constants/peopleGraphic";
import { theme } from "../../../../styles/theme";

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
  --scale: ${RESPONSIVE_SCALES.mobile};

  /*  모션 최소화  */
  @media (prefers-reduced-motion: reduce) {
    & * {
      transition: none !important;
      animation: none !important;
    }
  }

  // createRoot로 랜더링 시 ThemeProvider context 접근 불가능
  // 따라서 theme을 직접 import 하여 사용
  ${css`
    ${theme.mq.tablet} {
      --scale: ${RESPONSIVE_SCALES.tablet};
    }
    ${theme.mq.desktop} {
      --scale: ${RESPONSIVE_SCALES.desktop};
    }
  `}

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
  pointer-events: none;
`;
