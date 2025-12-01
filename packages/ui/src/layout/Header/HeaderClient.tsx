"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as S from "./Header.style";
import logoWhite from "../../assets/logo_white.png";
import logo from "../../assets/logo.png";
import { MobileMenu } from "./MobileMenu";

interface HeaderClientProps {
  navItems: { label: string; href: string }[];
}

export const HeaderClient = ({ navItems }: HeaderClientProps) => {
  const pathname = usePathname();
  const isWorksDetailPage =
    pathname.startsWith("/works/") && pathname !== "/works";

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

        {/* 모바일 메뉴 */}
        <MobileMenu navItems={navItems} />
      </S.HeaderContent>
    </S.StyledHeader>
  );
};
