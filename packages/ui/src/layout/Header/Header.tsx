"use client";

import { ReactNode, useState } from "react";
import { StyledHeader } from "./Header.style";

interface HeaderProps {
  logo?: ReactNode;
  navItems?: { label: string; href: string }[];
  className?: string;
}

export const Header = ({ logo, navItems = [], className }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <StyledHeader className={className}>
      <div className="header-content">
        {/* 로고 영역 */}
        <div className="logo-area">
          {logo || <span>SNU DESIGN WEEK 2025</span>}
        </div>

        {/* 데스크톱/태블릿 네비게이션 */}
        <nav className="nav-area">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기/닫기"
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>

      {/* 모바일 오버레이 메뉴 */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMobileMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </StyledHeader>
  );
};
