"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

// 포커스 가능한 요소 찾기 유틸리티
const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
};

export const MobileMenu = ({ navItems, isDark }: MobileMenuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    // 포커스를 이전 요소로 복원
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, []);

  // 키보드 이벤트 핸들러 (ESC 키 + 포커스 트랩)
  useEffect(() => {
    if (!isMobileMenuOpen || !menuRef.current) return;

    // 현재 포커스된 요소 저장
    previousFocusRef.current = (document.activeElement as HTMLElement) || null;

    // 첫 번째 포커스 가능한 요소로 포커스 이동
    const focusableElements = getFocusableElements(menuRef.current);
    const firstFocusable = focusableElements[0];
    firstFocusable?.focus();

    // 키보드 이벤트 핸들러
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC 키: 메뉴 닫기
      if (e.key === "Escape") {
        closeMobileMenu();
        return;
      }

      // Tab 키: 포커스 트랩
      if (e.key !== "Tab" || !menuRef.current) return;

      const elements = getFocusableElements(menuRef.current);
      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;

      if (e.shiftKey) {
        // Shift + Tab: 첫 번째에서 마지막으로
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab: 마지막에서 첫 번째로
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <>
      {/* 모바일 햄버거 메뉴 버튼 */}
      {isMobileMenuOpen ? (
        <S.ActiveMobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="메뉴 닫기"
          aria-expanded="true"
          aria-controls="mobile-menu"
        >
          <S.MobileHamburgerLine $dark={isDark} />
          <S.MobileHamburgerLine $dark={isDark} />
          <S.MobileHamburgerLine $dark={isDark} />
        </S.ActiveMobileMenuButton>
      ) : (
        <S.MobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <S.MobileHamburgerLine $dark={isDark} />
          <S.MobileHamburgerLine $dark={isDark} />
          <S.MobileHamburgerLine $dark={isDark} />
        </S.MobileMenuButton>
      )}

      {/* 모바일 오버레이 메뉴 */}
      {isMobileMenuOpen && (
        <S.MobileMenu
          ref={menuRef}
          id="mobile-menu"
          $dark={isDark}
          role="dialog"
          aria-modal="true"
          aria-label="모바일 네비게이션 메뉴"
        >
          <S.MobileMenuHeader>
            <S.LogoArea>
              <Link href="/" aria-label="SNU DESIGN WEEK 2025 홈으로 이동">
                <Logo
                  style={{ width: "100%", height: "100%" }}
                  color={isDark ? "white" : colors.blackDefault}
                  aria-hidden="true"
                />
              </Link>
            </S.LogoArea>
            <S.CloseButton
              onClick={closeMobileMenu}
              aria-label="메뉴 닫기"
              $dark={isDark}
            >
              <CloseIcon
                width={32}
                height={32}
                color={isDark ? "white" : colors.blackDefault}
                aria-hidden="true"
              />
            </S.CloseButton>
          </S.MobileMenuHeader>
          <S.MobileNav aria-label="모바일 메인 네비게이션">
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
