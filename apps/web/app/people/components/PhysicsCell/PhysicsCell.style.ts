import styled from '@emotion/styled';

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
