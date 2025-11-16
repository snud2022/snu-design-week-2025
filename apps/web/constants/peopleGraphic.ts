// Tied style Typo SVG Component
import TiedBrand from "../public/subGraphic/TiedBrand.svg";
import TiedGraphic from "../public/subGraphic/TiedGraphic.svg";
import TiedLiving from "../public/subGraphic/TiedLiving.svg";
import TiedMedia from "../public/subGraphic/TiedMedia.svg";
import TiedMobility from "../public/subGraphic/TiedMobility.svg";
import TiedProduct from "../public/subGraphic/TiedProduct.svg";
import TiedSpace from "../public/subGraphic/TiedSpace.svg";
import TiedUIUX from "../public/subGraphic/TiedUIUX.svg";

// Inside style Typo SVG Component
import InsideBrand from "../public/subGraphic/InsideBrand.svg";
import InsideGraphic from "../public/subGraphic/InsideGraphic.svg";
import InsideLiving from "../public/subGraphic/InsideLiving.svg";
import InsideMedia from "../public/subGraphic/InsideMedia.svg";
import InsideMobility from "../public/subGraphic/InsideMobility.svg";
import InsideProduct from "../public/subGraphic/InsideProduct.svg";
import InsideSpace from "../public/subGraphic/InsideSpace.svg";
import InsideUIUX from "../public/subGraphic/InsideUIUX.svg";

export type PeopleGraphicConfig = {
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  HoverSvg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  width: number;
  height: number;
};

// People 페이지 반응형 스케일 팩터
export const PEOPLE_RESPONSIVE_SCALES = {
  mobile: 0.9,
  tablet: 0.9 * 0.85,
  desktop: 0.9,
} as const;

// Works 페이지 반응형 스케일 팩터
export const WORKS_RESPONSIVE_SCALES = {
  mobile: 1,
  tablet: 0.75,
  desktop: 1,
} as const;

// 기본 크기
export const peopleGraphicConfigs: PeopleGraphicConfig[] = [
  {
    Svg: TiedBrand,
    HoverSvg: InsideBrand,
    width: 107,
    height: 151,
  },
  {
    Svg: TiedGraphic,
    HoverSvg: InsideGraphic,
    width: 126,
    height: 150,
  },
  {
    Svg: TiedMedia,
    HoverSvg: InsideMedia,
    width: 245,
    height: 148,
  },
  {
    Svg: TiedUIUX,
    HoverSvg: InsideUIUX,
    width: 135,
    height: 150,
  },
  {
    Svg: TiedLiving,
    HoverSvg: InsideLiving,
    width: 118,
    height: 151,
  },
  {
    Svg: TiedProduct,
    HoverSvg: InsideProduct,
    width: 104,
    height: 152,
  },
  {
    Svg: TiedSpace,
    HoverSvg: InsideSpace,
    width: 120,
    height: 151,
  },
  {
    Svg: TiedMobility,
    HoverSvg: InsideMobility,
    width: 261,
    height: 150,
  },
];

// 반응형 설정을 적용한 함수
export const getResponsiveConfigs = (scale: number): PeopleGraphicConfig[] => {
  return peopleGraphicConfigs.map((config) => ({
    ...config,
    width: config.width * scale,
    height: config.height * scale,
  }));
};
