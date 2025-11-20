"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const CardsWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const CardsGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "35px 38px",
  [mq.tablet]: {
    gridTemplateColumns: "1fr",
    gap: "35px",
  },
  [mq.mobile]: {
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
});
