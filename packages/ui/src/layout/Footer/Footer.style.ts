import styled from "@emotion/styled";
import { mq } from "../../constants/breakpoints";

export const StyledFooter = styled.footer({
  width: "100%",
  position: "sticky",
  bottom: 0,
  zIndex: 100,
  boxSizing: "border-box",
  alignItems: "center",
  backgroundColor: "transparent",
  padding: "0 100px 36px",
  [mq.mobile]: {
    padding: "12px 32px 36px 32px",
  },
  [mq.tablet]: {
    padding: "0 40px 36px",
  },
});

export const FooterContent = styled.div({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const FooterImages = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  width: "100%",
  "& img": {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    cursor: "pointer",
    transition: "opacity 0.2s ease, transform 0.2s ease",
    "&:hover": {
      opacity: 0.8,
      transform: "scale(1.05)",
    },
  },

  [mq.mobile]: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px 16px",
    justifyItems: "center",
    "& a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});
