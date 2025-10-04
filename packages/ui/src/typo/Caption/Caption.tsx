"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { typography } from "../styles";

interface CaptionProps {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "small";
}

const StyledCaption = styled.p`
  ${typography.caption}
  margin: 0;
  padding: 0;
`;

export const Caption = ({ children, className, as = "p" }: CaptionProps) => {
  return (
    <StyledCaption as={as} className={className}>
      {children}
    </StyledCaption>
  );
};
