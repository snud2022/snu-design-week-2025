import styled from "@emotion/styled";

export const LottieContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999, // 최상단에 표시
  pointerEvents: "none",
  // backgroundColor는 style prop으로 동적으로 설정됨
});
