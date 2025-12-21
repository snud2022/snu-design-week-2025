import { Body } from "@snud2025/ui";
import type { AboutContent } from "@/about/types/description";
import { splitLines } from "@/about/utils/lineBreak";
import * as S from "./Description.style";

interface DescriptionProps {
  content: AboutContent;
}

export default function Description({ content }: DescriptionProps) {
  const krLines = splitLines(content.descriptionKr);
  const enLines = splitLines(content.descriptionEn);

  return (
    <S.DescriptionWrapper>
      <Body level="body2" weight="medium">
        {krLines.map((line, index) => (
          <span key={index}>
            {line}
            {index < krLines.length - 1 && <br />}
          </span>
        ))}
      </Body>
      <Body level="body2" weight="medium">
        {enLines.map((line, index) => (
          <span key={index}>
            {line}
            {index < enLines.length - 1 && <br />}
          </span>
        ))}
      </Body>
    </S.DescriptionWrapper>
  );
}
