"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const InfoRow = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  justifyContent: "center",
  [mq.mobile]: {
    flexDirection: "column",
  },
});

export const InfoColumn = styled.div({
  display: "flex",
  justifyContent: "center",
});

export const InfoContent = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
