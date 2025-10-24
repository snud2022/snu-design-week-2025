import React from 'react';
import * as S from './HoverStone.style';

export type PartAsset = {
  url: string;
  hoverUrl: string;
  width: number;
  height: number;
};

interface HoverStoneProps {
  asset: PartAsset;
  width?: number;
  height?: number;
  rotateDeg?: number;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * 호버 시 이미지가 변경되는 스톤 컴포넌트
 * - 두 이미지를 같은 좌표에 겹쳐 놓고, hover 시 opacity로 부드럽게 교체
 * - pointerEvents는 래퍼만 활성화, 이미지 자체는 비활성화(중첩 클릭 이슈 방지)
 * - 회전/크기 커스터마이즈 가능
 */
export default function HoverStone({
  asset,
  width = asset.width,
  height = asset.height,
  rotateDeg = 0,
  style,
  className,
}: HoverStoneProps) {
  return (
    <S.HoverableStone
      className={className}
      style={style}
      $w={width}
      $h={height}
      $rotate={rotateDeg}
      role="img"
      aria-label=""
    >
      {/* 기본 상태 이미지 */}
      <S.BaseImg
        src={asset.url}
        alt=""
        width={width}
        height={height}
        draggable={false}
      />

      {/* 호버 상태 이미지 */}
      <S.HoverImg
        src={asset.hoverUrl}
        alt=""
        width={width}
        height={height}
        draggable={false}
      />
    </S.HoverableStone>
  );
}
