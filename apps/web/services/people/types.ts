/**
 * Notion에서 가져온 People 데이터 타입
 */
export type NotionPerson = {
  id: string;
  properties: {
    name?: {
      id: string;
      type: "title";
      title: Array<{ plain_text: string }>;
    };
    englishName?: {
      id: string;
      type: "rich_text";
      rich_text: Array<{ plain_text: string }>;
    };
    type?: {
      id: string;
      type: "select";
      select: { name: "visual" | "industrial" } | null;
    };
    classes?: Array<{
      index: number;
      workId: string;
    }>;
    [key: string]: unknown;
  };
  url?: string;
};
