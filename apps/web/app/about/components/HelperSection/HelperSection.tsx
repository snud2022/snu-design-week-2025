import { Body, Title } from "@snud2025/ui";
import type { HelperSectionData } from "@/about/types/helperSection";
import * as S from "./HelperSection.style";

interface HelperSectionProps {
  data: HelperSectionData;
}

export default function HelperSection({ data }: HelperSectionProps) {
  return (
    <S.HelperWrapper>
      <S.TitleContainer>
        <Title level="title2" language="kr">
          {data.titleKr}
        </Title>
        <Title level="title2" language="en">
          {data.titleEn}
        </Title>
      </S.TitleContainer>

      {data.categories.map((category, categoryIndex) => (
        <S.CategoryRow key={categoryIndex}>
          <S.CategoryLabel>
            <Body level="body2" weight="semibold">
              {category.labelKr}
            </Body>
            {category.labelEn && (
              <Body level="body2" weight="semibold">
                {category.labelEn}
              </Body>
            )}
          </S.CategoryLabel>
          <S.CategoryContent>
            <Body level="body2" weight="medium">
              {category.items.join(", ")}
            </Body>
          </S.CategoryContent>
        </S.CategoryRow>
      ))}
    </S.HelperWrapper>
  );
}
