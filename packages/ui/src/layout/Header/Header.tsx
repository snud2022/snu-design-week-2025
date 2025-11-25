"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import * as S from "./Header.style";
import Link from "next/link";
import { Title } from "../../typo";
import logoWhite from "../../assets/logo_white.png";
import logo from "../../assets/logo.png";

export const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isWorksDetailPage =
    pathname.startsWith("/works/") && pathname !== "/works";
  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "WORKS", href: "/works" },
    { label: "PEOPLE", href: "/people" },
    { label: "PROGRAM", href: "/program" },
    { label: "PARTNERS", href: "/partners" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <S.StyledHeader $isWorksDetail={isWorksDetailPage}>
      <S.HeaderContent>
        {/* 로고 영역 */}
        <S.LogoArea>
          <Link href="/">
            {isWorksDetailPage ? (
              <Image
                src={logoWhite}
                alt="SNU DESIGN WEEK 2025"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            ) : (
              <Image
                src={logo}
                alt="SNU DESIGN WEEK 2025"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            )}
          </Link>
        </S.LogoArea>

        {/* 데스크톱/태블릿 네비게이션 */}
        <S.NavArea $isWorksDetail={isWorksDetailPage}>
          {navItems.map((item) => (
            <S.NavLink
              key={item.href}
              href={item.href}
              $isWorksDetail={isWorksDetailPage}
            >
              {item.label}
            </S.NavLink>
          ))}
        </S.NavArea>

        {/* 모바일 햄버거 메뉴 버튼 */}
        {isMobileMenuOpen ? (
          <S.ActiveMobileMenuButton
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기/닫기"
            $isWorksDetail={isWorksDetailPage}
          >
            <S.HamburgerLine $isWorksDetail={isWorksDetailPage} />
            <S.HamburgerLine $isWorksDetail={isWorksDetailPage} />
            <S.HamburgerLine $isWorksDetail={isWorksDetailPage} />
          </S.ActiveMobileMenuButton>
        ) : (
          <S.MobileMenuButton
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기/닫기"
            $isWorksDetail={isWorksDetailPage}
          >
            <S.HamburgerLine $isWorksDetail={isWorksDetailPage} />
            <S.HamburgerLine $isWorksDetail={isWorksDetailPage} />
            <S.HamburgerLine $isWorksDetail={isWorksDetailPage} />
          </S.MobileMenuButton>
        )}
      </S.HeaderContent>

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
    </S.StyledHeader>
  );
};
