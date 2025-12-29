"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // type에 따라 필터링
  const filteredPeople = people.filter((p) => p.type === activeKey);

  // 화살표 키 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!tabsContainerRef.current) return;

      const tabs = Array.from(
        tabsContainerRef.current.querySelectorAll<HTMLElement>('[role="tab"]')
      );
      const currentIndex = tabs.findIndex(
        (tab) => tab.getAttribute("aria-selected") === "true"
      );

      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
      } else if (e.key === "Home") {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      const nextTab = tabs[nextIndex];
      if (nextTab) {
        const nextKey = TABS[nextIndex]?.key;
        if (nextKey) {
          setActiveKey(nextKey as typeof activeKey);
          nextTab.focus();
        }
      }
    };

    const container = tabsContainerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKeyDown);
      return () => container.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.TabsContainer
        ref={tabsContainerRef}
        role="tablist"
        aria-label="전공 선택"
      >
        {TABS.map((t, index) => (
          <Tab
            key={t.key}
            krLabel={t.kr}
            enLabel={t.en}
            side={t.side}
            active={activeKey === t.key}
            onSelect={() => setActiveKey(t.key as typeof activeKey)}
            tabIndex={activeKey === t.key ? 0 : -1}
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
