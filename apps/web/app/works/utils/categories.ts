import { peopleGraphicConfigs } from "../../../constants/peopleGraphic";
import { CATEGORY_CONFIGS } from "../constants/categories";
import type {
  BaseCategory,
  Category,
  CategoryGraphic,
} from "../../../types/categories";

// 인덱스로 카테고리 찾기
export const getCategoryByIndex = (index: number): BaseCategory | undefined => {
  return CATEGORY_CONFIGS.find((c) => c.index === index)?.id;
};

// 카테고리로 인덱스 찾기
export const getIndexByCategory = (category: Category): number | null => {
  if (category === "ALL") return null;
  return CATEGORY_CONFIGS.find((c) => c.id === category)?.index ?? null;
};

// 카테고리별 그래픽 가져오기 함수
export const getCategoryGraphic = (category: Category): CategoryGraphic => {
  if (category === "ALL") {
    return {
      type: "image",
      svg: null,
      imageUrl: "/mainGraphic/mainGraphic-W.png",
      width: 166.74,
      height: 145,
    };
  }

  const filterIndex = getIndexByCategory(category);
  if (filterIndex === null || !peopleGraphicConfigs[filterIndex]) {
    return {
      type: "svg",
      svg: null,
      width: 0,
      height: 0,
    };
  }

  const config = peopleGraphicConfigs[filterIndex];
  return {
    type: "svg",
    svg: config.Svg,
    width: config.width,
    height: config.height,
  };
};
