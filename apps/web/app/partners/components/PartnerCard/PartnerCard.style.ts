"use client";
import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const PartnerCard = styled.div({
  position: "relative",
  backgroundImage: "url('/partners/partnerCard.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  border: "none",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "24px",
  borderRadius: "8px",
  width: "540px",
  height: "380px",
  alignItems: "center",
  justifyContent: "flex-start",
  overflow: "visible", // StringImage가 카드 밖으로 나갈 수 있도록
  [mq.mobile]: {
    backgroundImage: "url('/partners/partnerCardSm.png')",
    width: "342px",
    height: "380px",
  },
});

export const CardHeader = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
  width: "100%",
  "& img": {
    objectFit: "cover",
    height: "100%",
  },
});

export const StringImageContainer = styled.div({
  position: "relative", // 일반적인 플로우에 포함되되, 설명 길이에 따라 위치 조정
  marginBottom: "16px", // 설명과의 간격
  width: "calc(100% + 64px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "margin-top 0.3s ease",
  zIndex: 1,
  "& img": {
    objectFit: "contain",
    width: "100%",
    height: "auto",
  },
  [mq.mobile]: {
    width: "calc(100% + 64px)",
  },
});

export const CardDescription = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  lineHeight: "1.6",
  width: "100%",
  flex: 1,
  overflow: "auto",
  "& p": {
    fontWeight: "400",
    fontSize: "18px",
  },
});
