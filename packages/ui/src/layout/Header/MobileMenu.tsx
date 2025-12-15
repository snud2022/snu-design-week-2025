"use client";

import { useState } from "react";
import Link from "next/link";
import { Title } from "../../typo";
import CloseIcon from "../../assets/common/close.svg";
import Logo from "../../assets/logo.svg";
import { colors } from "../../colors";
import * as S from "./Header.style";

interface MobileMenuProps {
  navItems: { label: string; href: string }[];
  isDark: boolean;
}

export const MobileMenu = ({ navItems, isDark }: MobileMenuProps) => {
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
          <S.MobileHamburgerLine $dark={isDark} />
          <S.MobileHamburgerLine $dark={isDark} />
          <S.MobileHamburgerLine $dark={isDark} />
        </S.ActiveMobileMenuButton>
      ) : (
        <S.MobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기/닫기"
        >
          <S.MobileHamburgerLine $dark={isDark} />
          <S.MobileHamburgerLine $dark={isDark} />
          <S.MobileHamburgerLine $dark={isDark} />
        </S.MobileMenuButton>
      )}

      {/* 모바일 오버레이 메뉴 */}
      {isMobileMenuOpen && (
        <S.MobileMenu $dark={isDark}>
          <S.MobileMenuHeader>
            <S.LogoArea>
              <Link href="/">
                <Logo
                  style={{ width: "100%", height: "100%" }}
                  color={isDark ? "white" : colors.blackDefault}
                />
              </Link>
            </S.LogoArea>
            <S.CloseButton onClick={closeMobileMenu} aria-label="메뉴 닫기">
              <CloseIcon
                width={32}
                height={32}
                color={isDark ? "white" : colors.blackDefault}
              />
            </S.CloseButton>
          </S.MobileMenuHeader>
          <S.MobileNav>
            {navItems.map((item) => (
              <S.MobileNavLink
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                $dark={isDark}
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
