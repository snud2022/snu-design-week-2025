"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { typography, TitleLevel, Language } from "../styles";

interface TitleProps {
  children: ReactNode;
  level: TitleLevel;
  language?: Language;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const StyledTitle = styled.h1<{ level: TitleLevel; language: Language }>`
  ${({ level, language }) => typography[level][language]}
  margin: 0;
  padding: 0;
`;

export const Title = ({
  children,
  level,
  language = "kr",
  className,
  as = "h1",
}: TitleProps) => {
  return (
    <StyledTitle
      as={as}
      level={level}
      language={language}
      className={className}
    >
      {children}
    </StyledTitle>
  );
};
