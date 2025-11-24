import { Body, Subtitle, Title, colors } from "@snud2025/ui";
import RopeLine from "../../../../components/RopeLine/RopeLine";
import ProjectCard from "../ProjectCard/ProjectCard";
import { studentProjects } from "../../mocks/projects";
import * as S from "./StudentCard.style";
import type { ProjectDetail } from "../../types/projects";
import MailIcon from "../../../../public/common/mail.svg";
import InstagramIcon from "../../../../public/common/instagram.svg";
import ArrowIcon from "../../../../public/common/arrow_back.svg";
import { getIndexByCategory } from "../../utils/categories";

interface StudentCardProps {
  project: ProjectDetail;
}

export default function StudentCard({ project }: StudentCardProps) {
  const filterIndex = getIndexByCategory(project.projectType);
  // 현재 프로젝트와 같은 id를 가진 studentProject 찾기
  const currentStudentProject = studentProjects.find(
    (sp) => sp.id === project.id
  );
  // 같은 카테고리의 다른 studentProjects 찾기 (현재 프로젝트 제외)
  const relatedStudentProjects = studentProjects.filter(
    (sp) => sp.filterIndex === filterIndex && sp.id !== project.id
  );
  // 표시할 프로젝트: 현재 프로젝트가 있으면 그것을, 없으면 같은 카테고리의 첫 번째 프로젝트
  const displayProject = currentStudentProject || relatedStudentProjects[0];

  return (
    <S.Container>
      <S.LeftSection>
        <RopeLine orientation="h" size={"100%"} />
        <S.MainInfo>
          <Title language="kr" level="title2" className="not-mobile">
            {project.studentNameKo}
          </Title>
          <Title language="kr" level="title3" className="mobile">
            {project.studentNameKo}
          </Title>
          <Subtitle language="en">{project.studentNameEn}</Subtitle>
        </S.MainInfo>
        <S.ContactInfo>
          <S.ContactItem>
            <MailIcon width={20} height={20} />
            <Body level="body2" weight="medium">
              {project.email}
            </Body>
          </S.ContactItem>
          <S.ContactItem>
            <InstagramIcon width={20} height={20} />
            <Body level="body2" weight="medium">
              {project.instagram}
            </Body>
          </S.ContactItem>
        </S.ContactInfo>
        {!project.isIntegratedProject && displayProject && (
          <S.OtherProject>
            <Body
              level="body1"
              weight="medium"
              className="other-works not-mobile"
            >
              {project.studentNameKo}&apos;S OTHER WORKS
            </Body>
            <Subtitle className="other-works mobile" language="kr">
              {project.studentNameKo}&apos;S OTHER WORKS
            </Subtitle>
            <div
              style={{
                transform: "rotate(180deg)",
                width: "24px",
                height: "24px",
              }}
            >
              <ArrowIcon fill={colors.primaryGreen} width={24} height={24} />
            </div>
          </S.OtherProject>
        )}

        {/* 테블릿 용 */}
        {!project.isIntegratedProject && displayProject && (
          <S.InnerProjectCard>
            <ProjectCard project={displayProject} />
          </S.InnerProjectCard>
        )}
        <RopeLine orientation="h" size={"100%"} />
      </S.LeftSection>

      {/* 데스크톱 용 */}
      {!project.isIntegratedProject && displayProject && (
        <S.OuterProjectCard>
          <ProjectCard project={displayProject} />
        </S.OuterProjectCard>
      )}
    </S.Container>
  );
}
