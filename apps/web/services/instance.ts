import { Client } from "@notionhq/client";

/**
 * Notion DB 조회 시 사용하는 클라이언트
 */
// eslint-disable-next-line turbo/no-undeclared-env-vars
export const NOTION_DB_API_KEY = process.env.NOTION_DB_API_KEY;
// eslint-disable-next-line turbo/no-undeclared-env-vars
export const WORKS_DATABASE_ID = process.env.NOTION_SNU_WORKS_DB;
// eslint-disable-next-line turbo/no-undeclared-env-vars
export const PEOPLE_DATABASE_ID = process.env.NOTION_SNU_PEOPLE_DB;

export const worksClient = new Client({
  auth: NOTION_DB_API_KEY,
});

export const peopleClient = new Client({
  auth: NOTION_DB_API_KEY,
});
