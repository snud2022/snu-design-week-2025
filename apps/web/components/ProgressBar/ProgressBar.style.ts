import styled from "@emotion/styled";

export const VerticalContainer = styled.div<{ L: number }>`
  position: relative;
  width: 0;
  height: ${({ L }) => L}px;
`;

export const BaseKnot = styled.img`
  position: absolute;
  z-index: 1000;
  transform: translate(-50%, -50%); // 공통 anchor
`;

export const VerticalTopKnot = styled(BaseKnot)`
  margin-top: -12px;
`;

export const VerticalBarContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalBottomKnot = styled(BaseKnot)`
  bottom: 0;
  margin-bottom: -12px;
`;

export const HorizontalContainer = styled.div<{ L: number }>`
  position: relative;
  width: ${({ L }) => L}px;
  height: 0;
`;

export const HorizontalLeftKnot = styled(BaseKnot)`
  left: 0;
  margin-left: -12px;
`;

export const HorizontalBarContainer = styled.div`
  position: absolute;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalRightKnot = styled(BaseKnot)`
  right: 0;
  margin-right: -12px;
`;

export const ProgressSvg = styled.svg<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  fill: none;
`;
