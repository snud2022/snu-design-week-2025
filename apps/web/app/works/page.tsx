import React from "react";
import { WorksClient } from "./WorksClient";
import { getWorks } from "../../services/works";
import { transformWorks } from "./utils/transformWorks";

export default async function Works() {
  // 서버에서 Notion 데이터 가져오기
  const notionWorks = await getWorks();
  const studentProjects = transformWorks(notionWorks);

  return <WorksClient initialProjects={studentProjects} />;
}
