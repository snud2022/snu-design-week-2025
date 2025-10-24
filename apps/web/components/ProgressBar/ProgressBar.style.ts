import styled from '@emotion/styled';

export const VerticalContainer = styled.div<{ L: number }>`
  position: relative;
  width: 0;
  height: ${({ L }) => L}px;
`;

export const VerticalTopKnot = styled.img`
  position: absolute;
  transform: translateX(-50%);
  z-index: 1000;
  margin-top: -12px;
`;

export const VerticalBarContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalBottomKnot = styled.img`
  position: absolute;
  transform: translateX(-50%);
  z-index: 1000;
  bottom: 0;
  margin-bottom: -12px;
`;

export const HorizontalContainer = styled.div<{ L: number }>`
  position: relative;
  width: ${({ L }) => L}px;
  height: 0;
`;

export const HorizontalLeftKnot = styled.img`
  position: absolute;
  z-index: 1000;
  left: 0;
  margin-left: -12px;
  transform: translateY(-50%);
`;

export const HorizontalBarContainer = styled.div`
  position: absolute;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalRightKnot = styled.img`
  position: absolute;
  z-index: 1000;
  right: 0;
  margin-right: -12px;
  transform: translateY(-50%);
`;

export const ProgressSvg = styled.svg<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  fill: none;
`;
