import styled from "@emotion/styled";
import { lenToCss } from "../../utils/styleUtils";

export const VerticalContainer = styled.div<{ L: number | string }>`
  position: relative;
  width: 0;
  height: ${({ L }) => lenToCss(L)};
`;

export const BaseKnot = styled.img`
  position: absolute;
  z-index: 4;
  pointer-events: none;
`;

export const VerticalTopKnot = styled(BaseKnot)`
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const VerticalLineContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalBottomKnot = styled(BaseKnot)`
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const HorizontalContainer = styled.div<{ L: number | string }>`
  position: relative;
  width: ${({ L }) => lenToCss(L)};
  height: 0;
`;

export const HorizontalLeftKnot = styled(BaseKnot)`
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const HorizontalLineContainer = styled.div`
  position: absolute;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalRightKnot = styled(BaseKnot)`
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
`;

export const RopeLineSvg = styled.svg<{
  width: number | string;
  height: number | string;
}>`
  width: ${({ width }) => lenToCss(width)};
  height: ${({ height }) => lenToCss(height)};
  fill: none;
`;
