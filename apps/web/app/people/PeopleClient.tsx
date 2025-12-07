"use client";

import React, { useState } from "react";
import RopePeopleGrid from "./components/RopePeopleGrid/RopePeopleGrid";
import * as S from "./page.style";
import Tab from "./components/Tab/Tab";
import { TABS } from "./constants/tabs";
import type { Person } from "./types/people";

interface PeopleClientProps {
  people: Person[];
}

export default function PeopleClient({ people }: PeopleClientProps) {
  const [activeKey, setActiveKey] = useState<"visual" | "industrial">("visual");

  // type에 따라 필터링
  const filteredPeople = people.filter((p) => p.type === activeKey);

  return (
    <S.Wrapper>
      <S.TabsContainer role="tablist">
        {TABS.map((t) => (
          <Tab
            key={t.key}
            krLabel={t.kr}
            enLabel={t.en}
            side={t.side}
            active={activeKey === t.key}
            onSelect={() => setActiveKey(t.key as typeof activeKey)}
          />
        ))}
      </S.TabsContainer>
      <S.GridWrapper>
        {filteredPeople.map((p) => (
          <RopePeopleGrid
            key={p.id}
            nameKo={p.nameKo}
            nameEn={p.nameEn}
            classes={p.classes}
          />
        ))}
      </S.GridWrapper>
    </S.Wrapper>
  );
}
