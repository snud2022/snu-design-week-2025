"use client";

import { Body, Title } from "@snud2025/ui";
import type { Leadership, Team } from "../../types/committeeSection";
import * as S from "./CommitteeSection.style";

interface CommitteeSectionProps {
  leadership: Leadership[];
  teams: Team[];
}

export default function CommitteeSection({
  leadership,
  teams,
}: CommitteeSectionProps) {
  return (
    <S.CommitteeWrapper>
      <S.TitleContainer>
        <Title level="title2" language="kr">
          2025 졸업주간준비위원회
        </Title>
        <Title level="title2" language="en">
          Preparation Committee
        </Title>
      </S.TitleContainer>

      {/* 위원회 리더십 - 2열 (좌: 역할, 우: 이름) */}
      <S.LeadershipGrid>
        {leadership.map((item, index) => (
          <S.LeadershipRow key={index}>
            <S.LeadershipRole>
              <Body level="body2" weight="semibold">
                {item.role}
              </Body>
            </S.LeadershipRole>
            <S.LeadershipName>
              <Body level="body2" weight="semibold">
                {item.name}
              </Body>
            </S.LeadershipName>
          </S.LeadershipRow>
        ))}
      </S.LeadershipGrid>

      {/* 팀 목록 - 2열 (좌: 팀명, 우: 팀장/팀원) */}
      <S.TeamGrid>
        {teams.map((team, index) => (
          <S.TeamRow key={index}>
            <S.TeamName>
              <Body level="body2" weight="semibold">
                {team.name}
              </Body>
            </S.TeamName>
            <S.TeamInfo>
              <Body level="body2" weight="semibold">
                팀장 | {team.leader}
              </Body>
              <Body level="body2" weight="semibold">
                팀원 | {team.members.join(" ")}
              </Body>
            </S.TeamInfo>
          </S.TeamRow>
        ))}
      </S.TeamGrid>
    </S.CommitteeWrapper>
  );
}
