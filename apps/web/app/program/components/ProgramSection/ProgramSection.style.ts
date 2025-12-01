"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const Wrapper = styled.div({
  padding: "24px 0px",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  [mq.tablet]: {
    maxWidth: "430px",
  },
  [mq.mobile]: {
    maxWidth: "342px",
  },
});

export const IntroSection = styled.div({
  textAlign: "center",
  margin: "32px auto",
});

export const TitleSection = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Desktop = styled.div({
  display: "block",
  [mq.tablet]: {
    display: "none",
  },
  [mq.mobile]: {
    display: "none",
  },
});

export const TabletMobile = styled.div({
  display: "none",
  [mq.tablet]: {
    display: "block",
  },
  [mq.mobile]: {
    display: "block",
  },
});

export const ProgramsGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  width: "100%",
  marginTop: "60px",
  justifyItems: "center",
  justifyContent: "center",
  [mq.tablet]: {
    gridTemplateColumns: "1fr",
  },
  [mq.mobile]: {
    gridTemplateColumns: "1fr",
  },
});
