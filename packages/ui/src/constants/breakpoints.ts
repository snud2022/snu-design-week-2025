/**
 * 반응형 브레이크포인트 상수 정의
 * apps/web/styles/theme.ts 와 동일하게 유지함.
 * 의존성 단방향 원칙 때문에 여기서 한 번 더 정의 함.
 */
export const mq = {
  /** 모바일 (최대 599px) */
  mobile: "@media (max-width: 599px)",

  /** 태블릿 (600px ~ 1279px) */
  tablet: "@media (min-width: 600px) and (max-width: 1279px)",

  /** 데스크톱 (1280px 이상) */
  desktop: "@media (min-width: 1280px)",
};

/**
 * 브레이크포인트 픽셀 값
 * apps/web/styles/theme.ts 와 동일하게 유지함.
 * 의존성 단방향 원칙 때문에 여기서 한 번 더 정의 함.
 */
export const breakpoints = {
  /** 모바일 시작점 (값: 0) */
  mobile: 0,

  /** 태블릿 시작점 (값: 600) */
  tablet: 600,

  /** 데스크톱 시작점 (값: 1280) */
  desktop: 1280,
};
