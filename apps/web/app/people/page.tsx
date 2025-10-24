'use client';

import React, { useState } from 'react';
import RopePeopleGrid from './components/RopePeopleGrid/RopePeopleGrid';
import * as S from './people.style';
import { PEOPLE_MOCK } from './mocks/people';
import { personHref } from './types/people';
import Tab from './components/Tab/Tab';
import { TABS } from './constants/tabs';

export default function People() {
  const [activeKey, setActiveKey] = useState<'visual' | 'industrial'>('visual');

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
        {PEOPLE_MOCK.map((p) => (
          <RopePeopleGrid
            key={p.id}
            nameKo={p.nameKo}
            nameEn={p.nameEn}
            href={personHref(p.id)}
          />
        ))}
      </S.GridWrapper>
    </S.Wrapper>
  );
}
