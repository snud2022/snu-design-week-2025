import type { BaseCategory } from "../../../types/categories";

export type Person = {
  id: string; // 라우팅에 쓸 고유 ID
  nameKo: string;
  nameEn: string;
  type: "visual" | "industrial";
  classes?: BaseCategory[];
};
