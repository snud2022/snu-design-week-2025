"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as S from "./Header.style";
import Logo from "../../assets/logo.svg";
import { MobileMenu } from "./MobileMenu";
import { colors } from "../../colors";

interface HeaderClientProps {
  navItems: { label: string; href: string }[];
}

export const HeaderClient = ({ navItems }: HeaderClientProps) => {
  const pathname = usePathname();
  const isWorksDetailPage =
    pathname.startsWith("/works/") && pathname !== "/works";

  return (
    <S.StyledHeader $dark={isWorksDetailPage} role="banner">
      <S.HeaderContent>
        {/* 로고 영역 */}
        <S.LogoArea>
          <Link href="/" aria-label="SNU DESIGN WEEK 2025 홈으로 이동">
            <Logo
              style={{ width: "100%", height: "100%" }}
              color={isWorksDetailPage ? "white" : colors.blackDefault}
              aria-hidden="true"
            />
          </Link>
        </S.LogoArea>

        {/* 데스크톱/태블릿 네비게이션 */}
        <S.NavArea $dark={isWorksDetailPage} aria-label="메인 네비게이션">
          {navItems.map((item) => (
            <S.NavLink
              key={item.href}
              href={item.href}
              $dark={isWorksDetailPage}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </S.NavLink>
          ))}
        </S.NavArea>

        {/* 모바일 메뉴 */}
        <MobileMenu navItems={navItems} isDark={isWorksDetailPage} />
      </S.HeaderContent>
    </S.StyledHeader>
  );
};
