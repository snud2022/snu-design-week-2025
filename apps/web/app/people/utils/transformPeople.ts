import type { NotionPerson } from "@services/people";
import type { Person, PersonClass } from "@/people/types/people";
import { extractText } from "@utils/notionExtract";

/**
 * NotionPerson을 Person으로 변환
 */
export function transformPerson(notionPerson: NotionPerson): Person {
  try {
    const properties = notionPerson.properties;
    const nameKo = extractText(properties.name);
    const nameEn = extractText(properties.englishName);
    const type =
      properties.type?.select?.name === "visual" ||
      properties.type?.select?.name === "industrial"
        ? properties.type.select.name
        : "visual";

    const classes: PersonClass[] = Array.isArray(properties.classes)
      ? (properties.classes as PersonClass[])
      : [];

    return {
      id: notionPerson.id,
      nameKo,
      nameEn,
      type,
      classes,
    };
  } catch (error) {
    console.error("[transformPerson] 변환 실패:", error, {
      id: notionPerson.id,
      properties: notionPerson.properties,
    });
    return {
      id: notionPerson.id,
      nameKo: "",
      nameEn: "",
      type: "visual",
      classes: [],
    };
  }
}

export function transformPeople(notionPeople: NotionPerson[]): Person[] {
  return notionPeople.map(transformPerson);
}
