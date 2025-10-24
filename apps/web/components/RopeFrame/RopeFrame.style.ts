import styled from '@emotion/styled';

export const RopeFrameContainer = styled.div<{ widthSizePixel: number; heightSizePixel: number }>`
  position: relative;
  width: ${({ widthSizePixel }) => widthSizePixel}px;
  height: ${({ heightSizePixel }) => heightSizePixel}px;
`;

export const TopSide = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const BottomSide = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const LeftSide = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const RightSide = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;
