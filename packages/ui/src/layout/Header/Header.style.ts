import styled from "@emotion/styled";
import { colors } from "../../colors";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #ffffff;
  padding: 20px 0;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.secondaryGray};

  .header-content {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* MOBILE (360~599px): contents 영역 340px + 좌우 마진 보장 */
    max-width: 340px;

    /* TABLET (600~1279px): contents 영역 540px + 좌우 마진 보장 */
    @media (min-width: 600px) {
      max-width: 540px;
    }

    /* DESKTOP (1280px~): contents 영역 1200px + 좌우 마진 보장 */
    @media (min-width: 1280px) {
      max-width: 1200px;
    }
  }

  .logo-area {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.blackDefault};
    z-index: 10;

    /* MOBILE: 작은 로고 */
    @media (max-width: 599px) {
      font-size: 16px;
    }

    /* TABLET: 중간 로고 */
    @media (min-width: 600px) and (max-width: 1279px) {
      font-size: 18px;
    }

    /* DESKTOP: 큰 로고 */
    @media (min-width: 1280px) {
      font-size: 20px;
    }
  }

  .nav-area {
    display: flex;
    gap: 20px;
    align-items: center;

    a {
      color: ${colors.blackDefault};
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: opacity 0.2s ease;

      &:hover {
        color: ${colors.primaryGreen};
        opacity: 0.8;
      }
    }

    /* MOBILE: 네비게이션 숨김 (햄버거 메뉴로 대체) */
    @media (max-width: 599px) {
      display: none;
    }

    /* TABLET: 간소화된 네비게이션 */
    @media (min-width: 600px) and (max-width: 1279px) {
      gap: 15px;

      a {
        font-size: 13px;
      }
    }

    /* DESKTOP: 전체 네비게이션 */
    @media (min-width: 1280px) {
      gap: 30px;

      a {
        font-size: 16px;
      }
    }
  }

  .mobile-menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    z-index: 10;

    /* MOBILE: 햄버거 메뉴 표시 */
    @media (max-width: 599px) {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .hamburger-line {
      width: 20px;
      height: 2px;
      background-color: ${colors.blackDefault};
      transition: all 0.3s ease;
    }

    &.active {
      .hamburger-line:nth-of-type(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      .hamburger-line:nth-of-type(2) {
        opacity: 0;
      }
      .hamburger-line:nth-of-type(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 5;
    display: none;
    justify-content: center;
    align-items: center;

    &.active {
      display: flex;
    }

    .mobile-nav {
      display: flex;
      flex-direction: column;
      gap: 30px;
      text-align: center;

      a {
        color: #ffffff;
        text-decoration: none;
        font-size: 24px;
        font-weight: 500;
        transition: opacity 0.2s ease;

        &:hover {
          color: ${colors.primaryGreen};
          opacity: 0.8;
        }
      }
    }
  }
`;
