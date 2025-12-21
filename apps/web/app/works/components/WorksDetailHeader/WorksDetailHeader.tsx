import { Body, Subtitle, Title } from "@snud2025/ui";
import Link from "next/link";
import MailIcon from "@assets/icons/mail.svg";
import InstagramIcon from "@assets/icons/instagram.svg";
import * as S from "./WorksDetailHeader.style";
import type { ProjectDetail } from "@/works/types/projects";
import { getInstagramUrl } from "@utils/getInstagramUrl";

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
          {project.email && (
            <S.ContactItem>
              <MailIcon width={24} height={24} />
              <Body level="body1" weight="medium" className="not-mobile info">
                {project.email}
              </Body>
              <Body level="body2" weight="medium" className="mobile info">
                {project.email}
              </Body>
            </S.ContactItem>
          )}
          {project.instagram && (
            <Link
              href={getInstagramUrl(project.instagram)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.ContactItem style={{ cursor: "pointer" }}>
                <InstagramIcon width={24} height={24} />
                <Body level="body1" weight="medium" className="not-mobile info">
                  {project.instagram}
                </Body>
                <Body level="body2" weight="medium" className="mobile info">
                  {project.instagram}
                </Body>
              </S.ContactItem>
            </Link>
          )}
        </S.ContactInfo>
      </S.LeftColumn>
    </S.Container>
  );
}
