import { LayoutContainer, Header, Title, Subtitle, Body } from "@snud2025/ui";
import PhysicsScene from "../components/PhysicsScene";

export default function Home() {
  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "WORKS", href: "/works" },
    { label: "PEOPLE", href: "/people" },
    { label: "PROGRAM", href: "/program" },
    { label: "PARTNERS", href: "/partners" },
  ];

  return (
    <>
      <Header navItems={navItems} />
      <LayoutContainer as="div">
        <main>
          <Title level="title1" language="kr">
            SNU DESIGN WEEK 2025
          </Title>
          <Title level="title1" language="en">
            WRAP UP
          </Title>

          <Subtitle language="kr">서울대학교 디자인학과 디자인 위크</Subtitle>

          <Body level="body1" weight="medium">
            디자인과 기술이 만나는 특별한 경험을 선사합니다.
          </Body>

          <Body level="body2" weight="semibold">
            다양한 작품과 프로그램을 통해 디자인의 미래를 만나보세요.
          </Body>

          {/* 물리 엔진 데모 섹션 */}
          <div style={{ marginTop: "60px", marginBottom: "40px" }}>
            <Title level="title3" language="kr">
              물리 엔진 데모
            </Title>
            <Body
              level="body2"
              weight="medium"
              style={{ marginTop: "16px", marginBottom: "24px" }}
            >
              SVG 그래픽들이 물리 법칙에 따라 움직입니다. 마우스로
              드래그해보세요!
            </Body>
            <PhysicsScene />
          </div>
        </main>
      </LayoutContainer>
    </>
  );
}
