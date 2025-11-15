export interface HelperCategory {
  labelKr: string;
  labelEn?: string;
  items: string[];
}

export interface HelperSectionData {
  titleKr: string;
  titleEn: string;
  categories: HelperCategory[];
}

