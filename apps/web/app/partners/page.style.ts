"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const Wrapper = styled.div({
  padding: "40px 0px",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "60px",
  width: "100%",
  [mq.tablet]: {
    padding: "40px 20px",
    gap: "32px",
  },
  [mq.mobile]: {
    padding: "40px 20px",
    gap: "24px",
  },
});

export const IntroSection = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px",

  borderRadius: "8px",
  textAlign: "center",
  [mq.tablet]: {
    gap: "12px",
    padding: "20px",
  },
  [mq.mobile]: {
    gap: "12px",
    padding: "20px",
  },
});

export const TabletBr = styled.br({
  [mq.desktop]: {
    display: "none",
  },
});

export const TitleSection = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const Desktop = styled.div({
  [mq.tablet]: {
    display: "none",
  },
  [mq.mobile]: {
    display: "none",
  },
});

export const TabletMobile = styled.div({
  [mq.desktop]: {
    display: "none",
  },
});

export const LogosSection = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",
});

export const CardsSection = styled.div({
  display: "flex",

  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  gap: "35px 38px",
  flexWrap: "wrap",
});
