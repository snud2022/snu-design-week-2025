"use client";

import { useState } from "react";
import Image from "next/image";
import * as S from "./Header.style";
import Link from "next/link";
import { Title } from "../../typo";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "WORKS", href: "/works" },
    { label: "PEOPLE", href: "/people" },
    { label: "PROGRAM", href: "/program" },
    { label: "PARTNERS", href: "/partners" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <S.StyledHeader>
      <S.HeaderContent>
        {/* 로고 영역 */}
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

        {/* 데스크톱/태블릿 네비게이션 */}
        <S.NavArea>
          {navItems.map((item) => (
            <S.NavLink key={item.href} href={item.href}>
              {item.label}
            </S.NavLink>
          ))}
        </S.NavArea>

        {/* 모바일 햄버거 메뉴 버튼 */}
        {isMobileMenuOpen ? (
          <S.ActiveMobileMenuButton
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기/닫기"
          >
            <S.HamburgerLine />
            <S.HamburgerLine />
            <S.HamburgerLine />
          </S.ActiveMobileMenuButton>
        ) : (
          <S.MobileMenuButton
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기/닫기"
          >
            <S.HamburgerLine />
            <S.HamburgerLine />
            <S.HamburgerLine />
          </S.MobileMenuButton>
        )}
      </S.HeaderContent>

      {/* 모바일 오버레이 메뉴 */}
      <S.MobileMenu isActive={isMobileMenuOpen}>
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
    </S.StyledHeader>
  );
};
