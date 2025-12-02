"use client";
import styled from "@emotion/styled";
import { mq, colors } from "@snud2025/ui";

export const ProgramCardWrapper = styled.div({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  [mq.tablet]: {
    width: "auto",
  },
  [mq.mobile]: {
    width: "auto",
  },
});

export const ProgramCard = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "12px",
  backgroundColor: "transparent",
  width: "100%",
  minHeight: "400px",
  [mq.mobile]: {
    padding: "20px",
    minHeight: "auto",
  },
});

export const CardHeader = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "30px",
});

export const CardContentWrapper = styled.div({
  position: "absolute",
  bottom: 5,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  padding: "4px",
});

export const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
  border: `3px solid black`,
  borderRadius: "12px",
  backgroundColor: colors.primaryGreen,
  width: "calc(100% - 8px)",
});

export const TitleSection = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const SpeakersSection = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "4px",
});

export const DescriptionSection = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  lineHeight: "1.6",
});
