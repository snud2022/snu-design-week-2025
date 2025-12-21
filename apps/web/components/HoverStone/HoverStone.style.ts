import styled from "@emotion/styled";
import { zIndex } from "@constants/zIndex";

export const Stone = styled.div<{
  $w: number;
  $h: number;
  $rotate: number;
}>`
  position: relative;
  transform: rotate(${({ $rotate }) => $rotate}deg);
  transform-origin: center center;
  pointer-events: auto;
  cursor: pointer;

  /* width/height는 원본 크기 그대로 사용 (반응형 스케일은 부모에서 적용) */
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;

  /* 호버 시 또는 active 상태일 때 레이어 전환 */
  &:hover .base,
  &.active .base {
    opacity: 0;
  }
  &:hover .hover,
  &.active .hover {
    opacity: 1;
  }
`;

export const ImageLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  &.base {
    opacity: 1;
    z-index: ${zIndex.block};
  }
  &.hover {
    opacity: 0;
    z-index: ${zIndex.base};
  }
`;

// 하위 호환성을 위해 SvgLayer도 export (기존 코드 참조시)
export const SvgLayer = ImageLayer;
