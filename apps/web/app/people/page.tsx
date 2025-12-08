import React from "react";
import PeopleClient from "./PeopleClient";
import { getPeople } from "../../services/people";
import { transformPeople } from "./utils/transformPeople";

export default async function People() {
  // 서버에서 Notion 데이터 가져오기
  const notionPeople = await getPeople();
  const people = transformPeople(notionPeople);

  return <PeopleClient people={people} />;
}
