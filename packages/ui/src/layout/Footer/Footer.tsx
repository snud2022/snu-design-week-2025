"use client";

import * as S from "./Footer.style";
import { footerImages } from "../../constants/footerImages";

export const Footer = () => {
  return (
    <S.StyledFooter>
      <S.FooterContent>
        <S.FooterImages>
          {footerImages.map((image) => (
            <a key={image.id} href={image.href}>
              <img src={image.src} alt={image.alt} />
            </a>
          ))}
        </S.FooterImages>
      </S.FooterContent>
    </S.StyledFooter>
  );
};
