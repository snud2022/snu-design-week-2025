"use client";

import styled from "@emotion/styled";
import { colors } from "@snud2025/ui";

export const ProjectCard = styled.button<{ $thumbnailUrl?: string }>`
  position: relative;
  width: 384px;
  height: 215px;
  border: none;
  padding: 24px;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 4px;
  color: white;
  overflow: hidden;
  background-color: lightgray;

  /* 배경 이미지 - 이미지가 있을 때만 표시 */
  ${({ $thumbnailUrl }) =>
    $thumbnailUrl &&
    `
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(${$thumbnailUrl});
      background-size: cover;
      z-index: 0;
    }
  `}

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }

  /* 텍스트는 오버레이 위에 표시 */
  > * {
    position: relative;
    z-index: 2;
  }

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: rotate(3deg);
  }

  .category {
    margin-bottom: 8px;
    color: ${colors.secondaryGray};
  }
`;
