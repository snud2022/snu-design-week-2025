import { Body, Subtitle, Title } from "@snud2025/ui";
import MailIcon from "../../../../public/common/mail.svg";
import InstagramIcon from "../../../../public/common/instagram.svg";
import * as S from "./WorksDetailHeader.style";
import type { ProjectDetail } from "../../types/projects";

interface WorksDetailHeaderProps {
  project: ProjectDetail;
}

export default function WorksDetailHeader({ project }: WorksDetailHeaderProps) {
  return (
    <S.Container>
      <S.LeftColumn>
        <Body level="body1" weight="medium" className="not-mobile">
          {project.projectType} DESIGN PROJECT
        </Body>
        <Body level="body2" weight="medium" className="mobile">
          {project.projectType} DESIGN PROJECT
        </Body>
        <Title language="kr" level="title1" className="not-mobile">
          {project.nameKo}
        </Title>
        <Title language="kr" level="title3" className="mobile">
          {project.nameKo}
        </Title>
        <S.NameRow>
          <Subtitle language="kr" className="not-mobile">
            {project.studentNameKo}
          </Subtitle>
          <Subtitle language="en" className="not-mobile">
            {project.studentNameEn}
          </Subtitle>
          <Body weight="medium" level="body2" className="mobile">
            {project.studentNameKo}
          </Body>
          <Body weight="medium" level="body2" className="mobile">
            {project.studentNameEn}
          </Body>
        </S.NameRow>
        <S.ContactInfo>
          <S.ContactItem>
            <MailIcon width={24} height={24} />
            <Body level="body1" weight="medium" className="not-mobile">
              {project.email}
            </Body>
            <Body level="body2" weight="medium" className="mobile">
              {project.email}
            </Body>
          </S.ContactItem>
          <S.ContactItem>
            <InstagramIcon width={24} height={24} />
            <Body level="body1" weight="medium" className="not-mobile">
              {project.instagram}
            </Body>
            <Body level="body2" weight="medium" className="mobile">
              {project.instagram}
            </Body>
          </S.ContactItem>
        </S.ContactInfo>
      </S.LeftColumn>
      <S.RightColumn>
        <Body level="body2" weight="medium">
          {project.descriptionKo}
        </Body>
        <Body level="body2" weight="medium">
          {project.descriptionEn}
        </Body>
      </S.RightColumn>
    </S.Container>
  );
}
