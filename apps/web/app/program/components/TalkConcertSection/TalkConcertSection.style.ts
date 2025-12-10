"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  marginTop: "60px",
  [mq.tablet]: {
    flexDirection: "column",
    gap: "24px",
    maxWidth: "430px",
  },
  [mq.mobile]: {
    flexDirection: "column",
    gap: "20px",
    maxWidth: "342px",
  },
});

export const LeftColumn = styled.div({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  [mq.tablet]: {
    width: "100%",
  },
  [mq.mobile]: {
    width: "100%",
  },
});

export const DesktopRopeWrapper = styled.div({
  display: "block",
  [mq.tablet]: {
    display: "none",
  },
  [mq.mobile]: {
    display: "none",
  },
});

export const TabletRopeWrapper = styled.div({
  display: "none",
  [mq.tablet]: {
    display: "block",
  },
  [mq.mobile]: {
    display: "none",
  },
});

export const MobileRopeWrapper = styled.div({
  display: "none",
  [mq.tablet]: {
    display: "none",
  },
  [mq.mobile]: {
    display: "block",
  },
});

export const RightColumn = styled.div({
  flex: 1,
  display: "flex",
  padding: "12px",
  flexDirection: "column",
  gap: "40px",
  [mq.tablet]: {
    width: "100%",
  },
  [mq.mobile]: {
    width: "100%",
  },
});

export const InfoContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "12px",
});

export const InfoItem = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const TitleSection = styled.div({
  display: "flex",
  alignItems: "flex-start",
});

export const SessionsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "40px",

  width: "100%",
  [mq.tablet]: {
    flexDirection: "column",
    gap: "40px",
  },
  [mq.mobile]: {
    flexDirection: "column",
    gap: "32px",
  },
});

export const SessionWrapper = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  [mq.tablet]: {
    width: "100%",
  },
  [mq.mobile]: {
    width: "100%",
  },
});

export const SessionTitleContainer = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "start",
});

export const SpeakersList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const SpeakerCard = styled.div({
  display: "flex",
  justifyContent: "center",
});

export const SpeakerContent = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const SpeakerHeader = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  [mq.mobile]: {
    flexDirection: "column",
    gap: "8px",
  },
});

export const SpeakerTime = styled.div({
  flexShrink: 0,
});

export const SpeakerSubtitle = styled.div({
  paddingTop: "8px",
});
