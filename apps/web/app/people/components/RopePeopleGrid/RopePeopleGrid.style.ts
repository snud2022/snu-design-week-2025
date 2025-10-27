import styled from "@emotion/styled";

export const LinkContainer = styled.div`
  display: contents;
`;

export const MainContainer = styled.div`
  position: relative;
`;

export const GridContainer = styled.div<{
  cols: number;
  rows: number;
  ready: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  pointer-events: none;
  opacity: ${({ ready }) => (ready ? 1 : 0)};
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre-line;
  background: #fff;
`;
