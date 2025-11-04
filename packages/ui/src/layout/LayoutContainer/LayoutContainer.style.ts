import styled from "@emotion/styled";
import { mq } from "../../constants/breakpoints";

export const StyledContainer = styled.div<{ as?: string }>({
  width: "100%",
  margin: "0 auto",
  boxSizing: "border-box",
  maxWidth: "340px",
  [mq.tablet]: {
    maxWidth: "540px",
  },
  [mq.desktop]: {
    maxWidth: "1280px",
  },
});
