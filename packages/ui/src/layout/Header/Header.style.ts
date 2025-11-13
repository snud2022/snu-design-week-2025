import styled from "@emotion/styled";
import { colors } from "../../colors";
import { mq } from "../../constants/breakpoints";
import { fonts, fontSizes } from "../../typo/fonts";

export const StyledHeader = styled.header({
  width: "100%",
  position: "sticky",
  top: 0,
  zIndex: 100,
  boxSizing: "border-box",
  alignItems: "center",
  backgroundColor: "transparent",
});

export const HeaderContent = styled.div({
  width: "100%",
  margin: "0 auto",
  padding: "40px",

  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  [mq.tablet]: {
    padding: "40px 20px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "36px",
  },
  [mq.mobile]: {
    padding: "20px",
  },
});

export const LogoArea = styled.div({
  position: "relative",
  zIndex: 10,
  width: "187px",
  height: "50px",
  [mq.desktop]: {
    width: "290px",
    height: "72px",
  },
});

export const NavArea = styled.nav({
  display: "flex",
  gap: "auto",
  color: colors.blackDefault,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "880px",
  marginLeft: "120px",
  [mq.mobile]: {
    display: "none",
  },
  [mq.tablet]: {
    width: "100%",
    marginLeft: "0",
    maxWidth: "800px",
  },
  [mq.desktop]: {
    width: "auto",
    gap: "40px",
  },
});

export const NavLink = styled.a({
  fontFamily: fonts.english.title,
  fontSize: fontSizes["2xl"],
  fontWeight: 700,
  lineHeight: "130%",
  letterSpacing: "-0.24px",
  textTransform: "uppercase",
  textDecoration: "none",
  color: colors.blackDefault,
  transition: "opacity 0.2s ease, transform 0.2s ease",
  "&:hover": {
    opacity: 0.8,
    transform: "rotate(7deg)",
  },
  [mq.tablet]: {
    fontSize: fontSizes["lg"],
  },
  [mq.desktop]: {
    gap: "15px",
    fontSize: fontSizes["2xl"],
  },
});

export const HamburgerLine = styled.div({
  width: "20px",
  height: "2px",
  backgroundColor: colors.blackDefault,
  transition: "all 0.3s ease",
});

export const MobileMenuButton = styled.button({
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  zIndex: 10,
  [mq.mobile]: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
});

export const ActiveMobileMenuButton = styled(MobileMenuButton)({
  [`& > ${HamburgerLine}:nth-of-type(1)`]: {
    transform: "rotate(45deg) translate(5px, 5px)",
  },
  [`& > ${HamburgerLine}:nth-of-type(2)`]: {
    opacity: 0,
  },
  [`& > ${HamburgerLine}:nth-of-type(3)`]: {
    transform: "rotate(-45deg) translate(7px, -6px)",
  },
});

export const MobileMenu = styled.div<{ isActive: boolean }>((props) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 5,
  display: props.isActive ? "flex" : "none",
  justifyContent: "center",
  alignItems: "center",
}));

export const MobileNav = styled.nav({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  textAlign: "center",
  "& a": {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "24px",
    fontWeight: 500,
    transition: "opacity 0.2s ease",
    "&:hover": {
      color: colors.primaryGreen,
      opacity: 0.8,
    },
  },
});
