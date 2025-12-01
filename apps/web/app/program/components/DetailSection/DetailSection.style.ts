"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  width: "100%",
  marginTop: "60px",
  [mq.tablet]: {
    gap: "40px",
    marginTop: "40px",
  },
  [mq.mobile]: {
    gap: "32px",
    marginTop: "32px",
  },
});
