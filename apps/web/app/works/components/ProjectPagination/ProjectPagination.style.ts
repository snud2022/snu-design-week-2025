"use client";

import styled from "@emotion/styled";
import { mq } from "@snud2025/ui";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 40px;
  ${mq.tablet} {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

export const NavSection = styled.div<{ $isLeft: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isLeft }) => ($isLeft ? "flex-start" : "flex-end")};
  gap: 20px;
  flex: 1;
`;

export const ProjectCardWrapper = styled.div`
  ${mq.mobile} {
    display: none;
  }
`;

export const NavButton = styled.button<{ $isLeft: boolean }>`
  display: flex;
  flex-direction: ${({ $isLeft }) => ($isLeft ? "row" : "row-reverse")};
  align-items: center;
  gap: 12px;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  .mobile {
    display: none;
    ${mq.mobile} {
      display: block;
    }
  }

  .not-mobile {
    display: block;
    ${mq.mobile} {
      display: none;
    }
  }
`;

export const ArrowWrapper = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mq.mobile} {
    width: 24px;
    height: 24px;
  }
`;
