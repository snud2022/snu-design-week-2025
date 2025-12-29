"use client";

import * as S from "./Footer.style";
import { footerImages } from "../../constants/footerImages";

export const Footer = () => {
  return (
    <S.StyledFooter role="contentinfo" aria-label="사이트 푸터">
      <S.FooterContent>
        <S.FooterImages role="list" aria-label="파트너 및 후원사 링크">
          {footerImages.map((image) => (
            <a
              key={image.id}
              href={image.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${image.alt} 웹사이트로 이동 (새 탭에서 열림)`}
              role="listitem"
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </a>
          ))}
        </S.FooterImages>
      </S.FooterContent>
    </S.StyledFooter>
  );
};
