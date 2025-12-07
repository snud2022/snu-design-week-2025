import { peopleClient, PEOPLE_DATABASE_ID } from "../instance";
import { getNotionDatabase } from "../common";
import { getWorks } from "../works";
import { getIndexFromClassName } from "../../utils/categories";
import { extractText } from "../../utils/notionExtract";
import type { NotionPerson } from "../../types/notion";

/**
 * Works의 학생이름 문자열에 Person의 이름이 포함되어 있는지 문자열 포함 여부로 확인
 * Works에서는 여러 명의 이름이 쉼표 등으로 구분되어 있을 수 있습니다.
 */
function isNameInWorks(personName: string, worksStudentNames: string): boolean {
  return worksStudentNames.includes(personName);
}

/**
 * Notion에서 People 데이터를 가져오는 함수
 * Works 데이터를 조회하여 각 사람의 classes를 학생 이름으로 매칭합니다
 */
export const getPeople = async (
  revalidateSeconds: number = 3600
): Promise<NotionPerson[]> => {
  if (!PEOPLE_DATABASE_ID) {
    return [];
  }

  // People과 Works를 병렬로 조회
  const [notionPeople, notionWorks] = await Promise.all([
    getNotionDatabase<NotionPerson>(
      peopleClient,
      PEOPLE_DATABASE_ID,
      "notion-people",
      revalidateSeconds
    ),
    getWorks(revalidateSeconds),
  ]);

  // 각 person의 이름으로 매칭하여 classes와 works ID 추출
  const peopleWithClasses = notionPeople.map((person) => {
    // person의 이름 추출
    const personNameKo = extractText(person.properties.name) || "";
    const personNameEn = extractText(person.properties.englishName) || "";

    // 각 작품의 classes와 work ID를 수집
    const indexToWorkMap = new Map<number, string>();
    notionWorks.forEach((work) => {
      const workStudentNameKo = extractText(work.properties.학생이름) || "";
      const workStudentNameEn =
        extractText(work.properties.학생이름_영문) || "";

      // 이름이 일치하는지 확인
      // Person의 이름 전체가 Works의 학생이름 목록에 포함되어 있는지 확인
      const isMatch =
        (personNameKo &&
          workStudentNameKo &&
          isNameInWorks(personNameKo, workStudentNameKo)) ||
        (personNameEn &&
          workStudentNameEn &&
          isNameInWorks(personNameEn, workStudentNameEn));

      if (isMatch && work.properties.수업?.multi_select) {
        work.properties.수업.multi_select.forEach((classItem) => {
          const index = getIndexFromClassName(classItem.name);
          if (!indexToWorkMap.has(index)) {
            indexToWorkMap.set(index, work.id);
          }
        });
      }
    });

    // index와 works를 배열로 변환하여 classes에 저장
    const classes = Array.from(indexToWorkMap.entries()).map(
      ([index, workId]) => ({
        index,
        workId,
      })
    );

    return {
      ...person,
      properties: {
        ...person.properties,
        classes: classes.length > 0 ? classes : undefined,
      },
    };
  });

  return peopleWithClasses;
};
