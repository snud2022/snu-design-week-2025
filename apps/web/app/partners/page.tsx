import { Body, Subtitle, Title } from "@snud2025/ui";
import { PartnerLogos, PartnerCards } from "./components";
import { PARTNERS } from "./constants";
import * as S from "./page.style";
import RopeFrame from "../../components/RopeFrame/RopeFrame";

export default function Partners() {
  return (
    <S.Wrapper>
      <S.IntroSection>
        <Body level="body1" weight="semibold">
          SNU DESIGN WEEK 2025는
          <br />
          다음과 같은 파트너사/동문의 협력 및 후원을 통해 진행됩니다.
        </Body>
        <S.LogosSection>
          <PartnerLogos partners={PARTNERS} />
        </S.LogosSection>
        <Subtitle language="en">FONT: BVH Anto Plot BY BVH TYPE</Subtitle>
      </S.IntroSection>
      <S.Desktop>
        <RopeFrame
          widthSizePixel={230}
          heightSizePixel={70}
          edges={{ top: false, right: false, bottom: true, left: false }}
        >
          <S.TitleSection>
            <Title level="title1" language="en">
              PARTNERS
            </Title>
          </S.TitleSection>
        </RopeFrame>
      </S.Desktop>

      <S.TabletMobile>
        <RopeFrame
          widthSizePixel={152}
          heightSizePixel={66}
          edges={{ top: false, right: false, bottom: true, left: false }}
        >
          <S.TitleSection>
            <Title level="title2" language="en">
              PARTNERS
            </Title>
          </S.TitleSection>
        </RopeFrame>
      </S.TabletMobile>

      <S.CardsSection>
        <PartnerCards partners={PARTNERS} />
      </S.CardsSection>
    </S.Wrapper>
  );
}
