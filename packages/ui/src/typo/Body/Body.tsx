"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { typography, BodyLevel, BodyWeight } from "../styles";

interface BodyProps {
  children: ReactNode;
  level: BodyLevel;
  weight: BodyWeight;
  className?: string;
  as?: "p" | "span" | "div";
  style?: React.CSSProperties;
}

const StyledBody = styled.p<{ level: BodyLevel; weight: BodyWeight }>`
  ${({ level, weight }) => typography[level][weight]}
  margin: 0;
  padding: 0;
  word-break: keep-all;
`;

export const Body = ({
  children,
  level,
  weight,
  className,
  as = "p",
  style,
}: BodyProps) => {
  return (
    <StyledBody
      as={as}
      level={level}
      weight={weight}
      className={className}
      style={style}
    >
      {children}
    </StyledBody>
  );
};
