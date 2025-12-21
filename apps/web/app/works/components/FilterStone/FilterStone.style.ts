"use client";

import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";
import { WORKS_RESPONSIVE_SCALES } from "@constants/peopleGraphic";

export const FilterButton = styled.button<{
  $tabletRotate: number;
  $desktopRotate: number;
  $width: number;
  $height: number;
}>`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  /* 스케일은 CSS 변수로 관리 */
  --scale: ${WORKS_RESPONSIVE_SCALES.mobile};

  ${mq.tablet} {
    --scale: ${WORKS_RESPONSIVE_SCALES.tablet};
  }
  ${mq.desktop} {
    --scale: ${WORKS_RESPONSIVE_SCALES.desktop};
  }

  /* 클릭 영역을 스케일된 크기로 제한 */
  width: calc(${({ $width }) => $width}px * var(--scale));
  height: calc(${({ $height }) => $height}px * var(--scale));

  overflow: hidden;

  /* transform-origin을 center로 설정 */
  transform-origin: center center;

  /* 기본 rotate는 태블릿 값 */
  transform: rotate(${({ $tabletRotate }) => -$tabletRotate}deg);

  /* 호버 시 위로 올라가는 효과 */
  &:hover {
    transform: translateY(-10px)
      rotate(${({ $tabletRotate }) => -$tabletRotate}deg);
  }

  /* active 상태일 때는 항상 위로 이동 - 수직으로 올라가도록 translate를 먼저 적용 */
  &[aria-pressed="true"] {
    transform: translateY(-10px)
      rotate(${({ $tabletRotate }) => -$tabletRotate}deg);
  }

  /* 모션 최소화 존중 */
  @media (prefers-reduced-motion: reduce) {
    &,
    &:hover {
      transition: none !important;
    }
  }

  /* 포커스 시 접근성 개선 */
  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
    border-radius: 4px;
  }

  /* 데스크톱에서는 데스크톱 rotate 사용 */
  ${mq.desktop} {
    transform: rotate(${({ $desktopRotate }) => -$desktopRotate}deg);

    &:hover {
      transform: translateY(-10px)
        rotate(${({ $desktopRotate }) => -$desktopRotate}deg);
    }

    &[aria-pressed="true"] {
      transform: translateY(-10px)
        rotate(${({ $desktopRotate }) => -$desktopRotate}deg);
    }
  }
`;

export const StoneContainer = styled.div`
  position: relative;
  width: calc(100% / var(--scale));
  height: calc(100% / var(--scale));
  pointer-events: auto;

  /* 스케일 적용 */
  transform: scale(var(--scale));
  transform-origin: 0 0;
`;
