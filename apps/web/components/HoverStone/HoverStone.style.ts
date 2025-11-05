import styled from "@emotion/styled";
import { zIndex } from "../../constants/zIndex";

export const Stone = styled.div<{
  $w: number;
  $h: number;
  $rotate: number;
}>`
  position: relative;
  transform: rotate(${({ $rotate }) => $rotate}deg);
  transform-origin: center center;
  pointer-events: none; /* 컨테이너 자체는 비활성화 */

  /* width/height는 원본 크기 그대로 사용 (반응형 스케일은 부모에서 적용) */
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;

  /* SVG path에 호버 시 또는 active 상태일 때 레이어 전환 */
  &:has(path:hover) .base,
  &.active .base {
    opacity: 0;
  }
  &:has(path:hover) .hover,
  &.active .hover {
    opacity: 1;
  }
`;

export const SvgLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;

    /* SVG 내부의 실제 벡터 요소에만 hover 활성화 */
    & path,
    & {
      pointer-events: auto;
    }
  }

  &.base {
    opacity: 1;
    z-index: ${zIndex.block};
  }
  &.hover {
    opacity: 1;
    z-index: ${zIndex.base};
  }
`;
