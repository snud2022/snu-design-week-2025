"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const RopeFrameWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const InfoSection = styled.div({
  display: "flex",
  gap: "16px",
  padding: "16px 0px",
  flexDirection: "column",
  width: "100%",
  [mq.mobile]: {
    padding: "16px 0px",
  },
});

export const TitleWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "8px",
});
