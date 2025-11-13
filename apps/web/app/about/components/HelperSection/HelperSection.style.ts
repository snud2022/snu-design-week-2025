"use client";
import styled from "@emotion/styled";

export const HelperWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginTop: "40px",
});

export const TitleContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "8px",
});

export const CategoryRow = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "24px",
  alignItems: "start",
});

export const CategoryLabel = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "4px",
});

export const CategoryContent = styled.div({
  display: "flex",
  alignItems: "start",
  wordBreak: "keep-all",
});
