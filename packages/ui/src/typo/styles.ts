import { fonts, fontWeights, fontSizes, lineHeights } from "./fonts";

// 타이포그래피 스타일 정의
export const typography = {
  // Title 스타일
  title1: {
    kr: {
      fontFamily: fonts.korean.title,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes["4xl"], // 40px
      lineHeight: lineHeights.loose, // 150%
    },
    en: {
      fontFamily: fonts.english.title,
      fontWeight: fontWeights.bold,
      fontSize: fontSizes["4xl"], // 40px
      lineHeight: lineHeights.tight, // 120%
    },
  },

  title2: {
    kr: {
      fontFamily: fonts.korean.title,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes["3xl"], // 32px
      lineHeight: lineHeights.loose, // 150%
    },
    en: {
      fontFamily: fonts.english.title,
      fontWeight: fontWeights.bold,
      fontSize: fontSizes["3xl"], // 32px
      lineHeight: lineHeights.tight, // 120%
    },
  },

  title3: {
    kr: {
      fontFamily: fonts.korean.title,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes["2xl"], // 24px
      lineHeight: lineHeights.loose, // 150%
    },
    en: {
      fontFamily: fonts.english.title,
      fontWeight: fontWeights.bold,
      fontSize: fontSizes["2xl"], // 24px
      lineHeight: lineHeights.normal, // 130%
    },
  },

  // Subtitle 스타일
  subtitle: {
    kr: {
      fontFamily: fonts.korean.title,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes.xl, // 20px
      lineHeight: lineHeights.relaxed, // 140%
    },
    en: {
      fontFamily: fonts.english.title,
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.xl, // 20px
      lineHeight: lineHeights.relaxed, // 140%
    },
  },

  // Body 스타일
  body1: {
    semibold: {
      fontFamily: fonts.korean.body,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes.xl, // 20px
      lineHeight: lineHeights.loose, // 150%
    },
    medium: {
      fontFamily: fonts.korean.body,
      fontWeight: fontWeights.medium,
      fontSize: fontSizes.xl, // 20px
      lineHeight: lineHeights.loose, // 150%
    },
  },

  body2: {
    semibold: {
      fontFamily: fonts.korean.body,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes.base, // 16px
      lineHeight: lineHeights.extraLoose, // 170%
    },
    medium: {
      fontFamily: fonts.korean.body,
      fontWeight: fontWeights.medium,
      fontSize: fontSizes.base, // 16px
      lineHeight: lineHeights.extraLoose, // 170%
    },
  },

  // 추가 유틸리티 스타일
  caption: {
    fontFamily: fonts.korean.body,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.sm, // 14px
    lineHeight: lineHeights.normal, // 130%
  },

  overline: {
    fontFamily: fonts.korean.body,
    fontWeight: fontWeights.semibold,
    fontSize: fontSizes.xs, // 12px
    lineHeight: lineHeights.normal, // 130%
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  },
} as const;

// 타이포그래피 타입 정의
export type TypographyKey = keyof typeof typography;
export type TitleLevel = "title1" | "title2" | "title3";
export type Language = "kr" | "en";
export type BodyWeight = "semibold" | "medium";
export type BodyLevel = "body1" | "body2";
