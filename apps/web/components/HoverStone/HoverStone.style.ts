import styled from "@emotion/styled";

export const Stone = styled.div<{
  $w: number;
  $h: number;
  $rotate: number;
}>`
  position: relative;
  width: ${({ $w }) => $w}px;
  height: ${({ $h }) => $h}px;
  transform: rotate(${({ $rotate }) => $rotate}deg);
  pointer-events: auto;

  /* 모션 최소화 설정 존중 */
  @media (prefers-reduced-motion: reduce) {
    & * {
      transition: none !important;
      animation: none !important;
    }
  }
`;

export const BaseImg = styled.img`
  position: absolute;
  inset: 0;
  display: block;
  object-fit: contain;
  pointer-events: none; /* hover 타깃은 래퍼 */
  transition: opacity 0.3s ease;
  opacity: 1;
  z-index: 1;
`;

export const HoverImg = styled.img`
  position: absolute;
  inset: 0;
  display: block;
  object-fit: contain;
  pointer-events: none;
  transition: opacity 0.25s ease;
  opacity: 0;
  z-index: 0;
`;

/* hover 시 자식 이미지의 opacity 전환 */
export const HoverableStone = styled(Stone)`
  &:hover ${BaseImg} {
    opacity: 0;
  }
  &:hover ${HoverImg} {
    opacity: 1;
  }
`;
