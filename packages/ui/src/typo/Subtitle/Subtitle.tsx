"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { typography, Language } from "../styles";

interface SubtitleProps {
  children: ReactNode;
  language?: Language;
  className?: string;
  as?: "h4" | "h5" | "h6" | "p";
}

const StyledSubtitle = styled.h4<{ language: Language }>`
  ${({ language }) => typography.subtitle[language]}
  margin: 0;
  padding: 0;
`;

export const Subtitle = ({
  children,
  language = "kr",
  className,
  as = "h4",
}: SubtitleProps) => {
  return (
    <StyledSubtitle as={as} language={language} className={className}>
      {children}
    </StyledSubtitle>
  );
};
