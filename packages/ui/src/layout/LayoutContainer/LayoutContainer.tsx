"use client";

import { ReactNode } from "react";
import * as S from "./LayoutContainer.style";

interface LayoutContainerProps {
  children: ReactNode;
  as?: "div" | "main" | "section" | "article" | "header" | "footer";
}

export const LayoutContainer = ({
  children,
  as: Component = "div",
}: LayoutContainerProps) => {
  return <S.StyledContainer as={Component}>{children}</S.StyledContainer>;
};
