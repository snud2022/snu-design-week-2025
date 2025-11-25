import styled from "@emotion/styled";
import { colors } from "../../colors";
import { mq } from "../../constants/breakpoints";
import { fonts, fontSizes, fontWeights } from "../../typo/fonts";

export const StyledHeader = styled.header<{ $isWorksDetail?: boolean }>(
  (props) => ({
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxSizing: "border-box",
    alignItems: "center",
    backgroundColor: "transparent",
    ...(props.$isWorksDetail && {
      background:
        "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, transparent 100%)",
    }),
  })
);

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

export const NavArea = styled.nav<{ $isWorksDetail?: boolean }>((props) => ({
  display: "flex",
  gap: "auto",
  color: props.$isWorksDetail ? "white" : colors.blackDefault,
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
}));

export const NavLink = styled.a<{ $isWorksDetail?: boolean }>((props) => ({
  fontFamily: fonts.english.title,
  fontSize: fontSizes["2xl"],
  fontWeight: 700,
  lineHeight: "130%",
  letterSpacing: "-0.24px",
  textTransform: "uppercase",
  textDecoration: "none",
  color: props.$isWorksDetail ? "white" : colors.blackDefault,
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
}));

export const HamburgerLine = styled.div<{ $isWorksDetail?: boolean }>(
  (props) => ({
    width: "20px",
    height: "2px",
    backgroundColor: props.$isWorksDetail ? "white" : colors.blackDefault,
    transition: "all 0.3s ease",
  })
);

export const MobileMenuButton = styled.button<{ $isWorksDetail?: boolean }>({
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

export const MobileMenu = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "white",
  zIndex: 200,
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  boxSizing: "border-box",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
  [mq.desktop]: {
    display: "none",
  },
  [mq.tablet]: {
    display: "none",
  },
});

export const MobileMenuHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  marginBottom: "auto",
});

export const CloseButton = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 0.6,
  },
});

export const CloseIcon = styled.span({
  fontFamily: fonts.english.title,
  fontSize: fontSizes["4xl"],
  fontWeight: fontWeights.regular,
  color: colors.blackDefault,
  lineHeight: 1,
});

export const MobileNav = styled.nav({
  display: "flex",
  flexDirection: "column",
  padding: "20px 0",
  gap: "16px",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

export const MobileNavLink = styled.a({
  fontFamily: fonts.english.title,
  fontSize: fontSizes["2xl"],
  fontWeight: fontWeights.regular,
  color: colors.blackDefault,
  textDecoration: "none",
  textTransform: "uppercase",
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 0.6,
  },
});
