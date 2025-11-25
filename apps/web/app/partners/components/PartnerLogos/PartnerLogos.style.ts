"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const LogosWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "1200px",
  gap: "100px",
  margin: "0 auto",
  minHeight: "92px",
  [mq.tablet]: {
    gap: "32px",
  },
  [mq.mobile]: {
    gap: "24px",
  },
});
