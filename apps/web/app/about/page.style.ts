"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const Wrapper = styled.div({
  padding: "40px 0px",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  overflowY: "auto",
  overflowX: "hidden",
  width: "100%",
  [mq.tablet]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "none",
    padding: "40px 20px",
  },
  [mq.mobile]: {
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "none",
  },
});

export const PosterContainer = styled.div({
  position: "sticky",
  top: "0",
  alignSelf: "flex-start",
  flexShrink: "0",
  height: "fit-content",

  "& img": {
    width: "100%",
    height: "auto",
    boxShadow: "-1px 1px 20px 0 rgba(0, 0, 0, 0.25)",
  },
  [mq.tablet]: {
    position: "relative",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
  },
  [mq.mobile]: {
    position: "relative",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",

    "& img": {
      width: "100%",
      height: "auto",
      objectFit: "contain",
      margin: "0 auto",
      padding: "0 20px",
    },
  },
});

export const ContentContainer = styled.div({
  flex: "1",

  [mq.tablet]: {
    width: "100%",
    maxWidth: "580px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  [mq.mobile]: {
    width: "100%",
    maxWidth: "342px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const DescriptionSection = styled.div({
  marginTop: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  justifyContent: "center",
});
