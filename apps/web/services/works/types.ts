/**
 * Notion에서 가져온 Works 데이터 타입
 */
export type NotionWork = {
  id: string;
  cover?: {
    type: "file" | "external";
    file?: {
      url: string;
      expiry_time?: string;
    };
    external?: {
      url: string;
    };
  } | null;
  properties: {
    이름?: {
      id: string;
      type: "title";
      title: Array<{ plain_text: string }>;
    };
    작품이름?: {
      id: string;
      type: "rich_text";
      rich_text: Array<{ plain_text: string }>;
    };
    작품이름_영문?: {
      id: string;
      type: "rich_text";
      rich_text: Array<{ plain_text: string }>;
    };
    학생이름?: {
      id: string;
      type: "rich_text";
      rich_text: Array<{ plain_text: string }>;
    };
    학생이름_영문?: {
      id: string;
      type: "rich_text";
      rich_text: Array<{ plain_text: string }>;
    };
    수업?: {
      id: string;
      type: "multi_select";
      multi_select: Array<{ name: string; color?: string; id?: string }>;
    };
    Email?: {
      id: string;
      type: "email";
      email: string | null;
    };
    "인스타 아이디"?: {
      id: string;
      type: "rich_text";
      rich_text: Array<{ plain_text: string }>;
    };
    다른작품?: {
      id: string;
      type: "relation";
      relation: Array<{ id: string }>;
    };
    filterIndex?: { number: number | null };
    [key: string]: unknown;
  };
  url?: string;
};

/**
 * Notion 블록 타입 정의
 */
export type NotionBlock = {
  id: string;
  type: string;
  object: "block";
  has_children: boolean;
  [key: string]: unknown;
};

/**
 * Work와 블록 컨텐츠를 포함한 타입
 */
export type NotionWorkWithBlocks = NotionWork & {
  blocks?: NotionBlock[];
};
