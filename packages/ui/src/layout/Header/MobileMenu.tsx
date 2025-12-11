"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Title } from "../../typo";
import CloseIcon from "../../assets/common/close.svg";
import Logo from "../../assets/logo.svg";
import * as S from "./Header.style";

interface MobileMenuProps {
  navItems: { label: string; href: string }[];
}

export const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isWorksDetailPage =
    pathname.startsWith("/works/") && pathname !== "/works";

  return (
    <>
      {/* 모바일 햄버거 메뉴 버튼 */}
      {isMobileMenuOpen ? (
        <S.ActiveMobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기/닫기"
        >
          <S.MobileHamburgerLine $dark={isWorksDetailPage} />
          <S.MobileHamburgerLine $dark={isWorksDetailPage} />
          <S.MobileHamburgerLine $dark={isWorksDetailPage} />
        </S.ActiveMobileMenuButton>
      ) : (
        <S.MobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기/닫기"
        >
          <S.MobileHamburgerLine $dark={isWorksDetailPage} />
          <S.MobileHamburgerLine $dark={isWorksDetailPage} />
          <S.MobileHamburgerLine $dark={isWorksDetailPage} />
        </S.MobileMenuButton>
      )}

      {/* 모바일 오버레이 메뉴 */}
      {isMobileMenuOpen && (
        <S.MobileMenu $dark={isWorksDetailPage}>
          <S.MobileMenuHeader>
            <S.LogoArea>
              <Link href="/">
                <Logo
                  style={{ width: "100%", height: "100%" }}
                  color={isWorksDetailPage ? "#ffffff" : "#000000"}
                />
              </Link>
            </S.LogoArea>
            <S.CloseButton onClick={closeMobileMenu} aria-label="메뉴 닫기">
              <CloseIcon
                width={32}
                height={32}
                color={isWorksDetailPage ? "#ffffff" : "#000000"}
              />
            </S.CloseButton>
          </S.MobileMenuHeader>
          <S.MobileNav>
            {navItems.map((item) => (
              <S.MobileNavLink
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                $dark={isWorksDetailPage}
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
