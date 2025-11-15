"use client";
import styled from "@emotion/styled";

export const CommitteeWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const TitleContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "8px",
});

export const LeadershipGrid = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const LeadershipRow = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "24px",
  alignItems: "start",
});

export const LeadershipRole = styled.div({
  display: "flex",
  alignItems: "start",
});

export const LeadershipName = styled.div({
  display: "flex",
  alignItems: "start",
});

export const TeamGrid = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginTop: "24px",
});

export const TeamRow = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "24px",
  alignItems: "start",
});

export const TeamName = styled.div({
  display: "flex",
  alignItems: "start",
});

export const TeamInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
