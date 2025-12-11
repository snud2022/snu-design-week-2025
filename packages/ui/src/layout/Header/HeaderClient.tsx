"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as S from "./Header.style";
import Logo from "../../assets/logo.svg";
import { MobileMenu } from "./MobileMenu";

interface HeaderClientProps {
  navItems: { label: string; href: string }[];
}

export const HeaderClient = ({ navItems }: HeaderClientProps) => {
  const pathname = usePathname();
  const isWorksDetailPage =
    pathname.startsWith("/works/") && pathname !== "/works";

  return (
    <S.StyledHeader $dark={isWorksDetailPage}>
      <S.HeaderContent>
        {/* 로고 영역 */}
        <S.LogoArea>
          <Link href="/">
            <Logo
              style={{ width: "100%", height: "100%" }}
              color={isWorksDetailPage ? "#fff" : "#000"}
            />
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

        {/* 모바일 메뉴 */}
        <MobileMenu navItems={navItems} />
      </S.HeaderContent>
    </S.StyledHeader>
  );
};
