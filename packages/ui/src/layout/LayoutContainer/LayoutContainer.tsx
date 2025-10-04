"use client";

import { ReactNode } from "react";
import { StyledContainer } from "./LayoutContainer.style";

interface LayoutContainerProps {
  children: ReactNode;
  as?: "div" | "main" | "section" | "article" | "header" | "footer";
}

export const LayoutContainer = ({
  children,
  as: Component = "div",
}: LayoutContainerProps) => {
  return <StyledContainer as={Component}>{children}</StyledContainer>;
};
