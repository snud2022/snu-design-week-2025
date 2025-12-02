"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import * as S from "./LottieAnimation.style";

export interface LottieAnimationProps {
  /**
   * Lottie 애니메이션 데이터 (JSON 객체)
   */
  animationData?: object;
  /**
   * 애니메이션 자동 재생 여부
   * @default true
   */
  autoplay?: boolean;
  /**
   * 애니메이션 루프 여부
   * @default true
   */
  loop?: boolean | number;
  /**
   * 애니메이션 재생 속도
   * @default 1
   */
  speed?: number;
  /**
   * 애니메이션 너비
   */
  width?: number | string;
  /**
   * 애니메이션 높이
   */
  height?: number | string;
  /**
   * 배경색
   * @default "transparent"
   */
  backgroundColor?: string;
  /**
   * 애니메이션 준비 완료 콜백
   */
  onReady?: (animation: LottieRefCurrentProps) => void;
  /**
   * 애니메이션 완료 콜백
   */
  onComplete?: () => void;
  /**
   * 애니메이션 루프 완료 콜백
   */
  onLoopComplete?: () => void;
}

export const LottieAnimation = ({
  animationData,
  autoplay = true,
  loop = true,
  speed = 1,
  width,
  height,
  backgroundColor = "transparent",
  onReady,
  onComplete,
  onLoopComplete,
}: LottieAnimationProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedAnimationData, setLoadedAnimationData] = useState<
    object | undefined
  >(animationData);

  // animationData가 변경되면 업데이트
  useEffect(() => {
    setLoadedAnimationData(animationData);
  }, [animationData]);

  useEffect(() => {
    if (lottieRef.current && onReady) {
      const animation = lottieRef.current;
      if (animation) {
        onReady(animation);
      }
    }
  }, [isLoaded, onReady]);

  useEffect(() => {
    if (lottieRef.current) {
      const animation = lottieRef.current;
      if (animation) {
        animation.setSpeed(speed);
      }
    }
  }, [speed]);

  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  const handleLoopComplete = () => {
    if (onLoopComplete) {
      onLoopComplete();
    }
  };

  return (
    <S.LottieContainer
      style={{
        ...(width && { width }),
        ...(height && { height }),
        backgroundColor,
      }}
    >
      {loadedAnimationData && (
        <Lottie
          lottieRef={lottieRef}
          animationData={loadedAnimationData}
          autoplay={autoplay}
          loop={loop}
          onComplete={handleComplete}
          onLoopComplete={handleLoopComplete}
          onLoadedData={() => setIsLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </S.LottieContainer>
  );
};
