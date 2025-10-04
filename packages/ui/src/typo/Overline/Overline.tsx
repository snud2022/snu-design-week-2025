"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { typography } from "../styles";

interface OverlineProps {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

const StyledOverline = styled.p`
  ${typography.overline}
  margin: 0;
  padding: 0;
`;

export const Overline = ({ children, className, as = "p" }: OverlineProps) => {
  return (
    <StyledOverline as={as} className={className}>
      {children}
    </StyledOverline>
  );
};
