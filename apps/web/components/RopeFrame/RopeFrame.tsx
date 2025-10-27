import React from "react";
import RopeLine from "../RopeLine/RopeLine";
import * as S from "./RopeFrame.style";

type EdgeFlags = {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
};

interface RopeFrameProps {
  /** 프레임 가로/세로 길이 */
  widthSizePixel: number;
  heightSizePixel: number;
  /** 각 변을 그릴지 여부 */
  edges?: EdgeFlags; // 기본: 모두 true
  className?: string;
  children?: React.ReactNode;
}

/**
 * RopeLine(가로/세로)를 4개 조합해 사각 프레임을 구성
 * - 모서리 매듭은 인접한 변이 있을 때만 보이도록 RopeLine의 leftKnot/rightKnot를 매핑
 */
export default function RopeFrame({
  widthSizePixel,
  heightSizePixel,
  edges = { top: true, right: true, bottom: true, left: true },
  className,
  children,
}: RopeFrameProps) {
  const show = {
    top: edges.top ?? true,
    right: edges.right ?? true,
    bottom: edges.bottom ?? true,
    left: edges.left ?? true,
  };

  const wLen = widthSizePixel;
  const hLen = heightSizePixel;

  return (
    <S.RopeFrameContainer
      className={className}
      widthSizePixel={wLen}
      heightSizePixel={hLen}
    >
      {/* Top (가로) */}
      <S.TopSide show={show.top}>
        <RopeLine orientation="h" size={wLen} />
      </S.TopSide>

      {/* Bottom (가로) */}
      <S.BottomSide show={show.bottom}>
        <RopeLine orientation="h" size={wLen} />
      </S.BottomSide>

      {/* Left (세로) */}
      <S.LeftSide show={show.left}>
        <RopeLine orientation="v" size={hLen} />
      </S.LeftSide>

      {/* Right (세로) */}
      <S.RightSide show={show.right}>
        <RopeLine orientation="v" size={hLen} />
      </S.RightSide>

      {children}
    </S.RopeFrameContainer>
  );
}
