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
  marginTop: "100px",
  [mq.tablet]: {
    maxWidth: "430px",
    flexDirection: "column",
    gap: "24px",
  },
  [mq.mobile]: {
    maxWidth: "342px",
    flexDirection: "column",
    gap: "20px",
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
  flexDirection: "column",
  padding: "12px",
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
  gap: "20px",
  padding: "12px",
});

export const InfoItem = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const TitleSection = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const InfoDetailSection = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const DescriptionSection = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  lineHeight: "1.6",
});

export const ScheduleList = styled.div({
  display: "flex",
  flexDirection: "column",
  marginTop: "24px",
  gap: "4px",
});

export const ScheduleItem = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "flex-start",
});

export const ScheduleTime = styled.div({
  flexShrink: 0,
  minWidth: "140px",
  [mq.mobile]: {
    minWidth: "auto",
  },
});

export const ScheduleEvent = styled.div({
  flex: 1,
});
