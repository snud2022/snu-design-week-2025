"use client";
import * as S from "./RopeLine.style";
import { colors } from "@snud2025/ui";

type Orientation = "h" | "v";

interface RopeLineProps {
  size: number; // 선의 전체 길이 (픽셀)
  leftKnot?: boolean; // 왼쪽/위쪽 매듭 표시 여부
  rightKnot?: boolean; // 오른쪽/아래쪽 매듭 표시 여부
  orientation?: Orientation;
}

/**
 * 매듭이 있는 밧줄 라인 컴포넌트
 * - 가로/세로 방향 지원
 * - 양쪽 끝에 매듭 이미지 표시
 * - 내부 바는 매듭 공간을 제외한 길이로 계산
 */
export default function RopeLine({
  size,
  leftKnot = true,
  rightKnot = true,
  orientation = "h",
}: RopeLineProps) {
  // 전체 선 길이 (최소 7px 보장)
  const L = Math.max(Number.isFinite(size) ? size : 0, 7);
  // 내부 길이 (Line의 양쪽 strokeWidth 3.5px * 2 제외)
  const inner = Math.max(L - 7, 0);

  if (orientation === "v") {
    return (
      <S.VerticalContainer L={L}>
        {leftKnot && (
          <S.VerticalTopKnot
            src="/Knot.svg"
            width={24}
            height={24}
            alt="Knot"
          />
        )}

        {/* Line + 상하 Knot */}
        <S.VerticalLineContainer>
          <S.RopeLineSvg width={12} height={L}>
            <rect
              x="1.75"
              y="1.75"
              width="8.5"
              height={inner}
              rx="3.25"
              fill={colors.secondaryGray}
            />
            <rect
              x="1.75"
              y="1.75"
              width="8.5"
              height={inner}
              rx="3.25"
              stroke={colors.blackDefault}
              strokeWidth="3.5"
            />
          </S.RopeLineSvg>
        </S.VerticalLineContainer>
        {rightKnot && (
          <S.VerticalBottomKnot
            src="/Knot.svg"
            width={24}
            height={24}
            alt="Knot"
          />
        )}
      </S.VerticalContainer>
    );
  }

  return (
    <S.HorizontalContainer L={L}>
      {leftKnot && (
        <S.HorizontalLeftKnot
          src="/Knot.svg"
          width={24}
          height={24}
          alt="Knot"
        />
      )}
      {/* Line + 좌우 Knot  */}
      <S.HorizontalLineContainer>
        <S.RopeLineSvg width={L} height={12}>
          <rect
            x="1.75"
            y="1.75"
            width={inner}
            height="8.5"
            rx="3.25"
            fill={colors.secondaryGray}
          />
          <rect
            x="1.75"
            y="1.75"
            width={inner}
            height="8.5"
            rx="3.25"
            stroke={colors.blackDefault}
            strokeWidth="3.5"
          />
        </S.RopeLineSvg>
      </S.HorizontalLineContainer>
      {rightKnot && (
        <S.HorizontalRightKnot
          src="/Knot.svg"
          width={24}
          height={24}
          alt="Knot"
        />
      )}
    </S.HorizontalContainer>
  );
}
