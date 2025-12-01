"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Title } from "../../typo";
import * as S from "./Header.style";

interface MobileMenuProps {
  navItems: { label: string; href: string }[];
}

export const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 모바일 햄버거 메뉴 버튼 */}
      {isMobileMenuOpen ? (
        <S.ActiveMobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기/닫기"
        >
          <S.MobileHamburgerLine />
          <S.MobileHamburgerLine />
          <S.MobileHamburgerLine />
        </S.ActiveMobileMenuButton>
      ) : (
        <S.MobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기/닫기"
        >
          <S.MobileHamburgerLine />
          <S.MobileHamburgerLine />
          <S.MobileHamburgerLine />
        </S.MobileMenuButton>
      )}

      {/* 모바일 오버레이 메뉴 */}
      {isMobileMenuOpen && (
        <S.MobileMenu>
          <S.MobileMenuHeader>
            <S.LogoArea>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="SNU DESIGN WEEK 2025"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Link>
            </S.LogoArea>
            <S.CloseButton onClick={closeMobileMenu} aria-label="메뉴 닫기">
              <S.CloseIcon>
                <Image
                  src="/common/close.svg"
                  alt="close"
                  width={32}
                  height={32}
                />
              </S.CloseIcon>
            </S.CloseButton>
          </S.MobileMenuHeader>
          <S.MobileNav>
            {navItems.map((item) => (
              <S.MobileNavLink
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
              >
                <Title level="title3" language="en">
                  {item.label}
                </Title>
              </S.MobileNavLink>
            ))}
          </S.MobileNav>
        </S.MobileMenu>
      )}
    </>
  );
};
