"use client";

import styled from "@emotion/styled";
import { colors } from "@snud2025/ui";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & > svg,
  & > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .category {
    color: ${colors.blackDefault};
  }
`;

export const SelectedCategoryButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Chevron = styled.span<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
  width: 36px;
  height: 36px;
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const CategoryItem = styled.li<{ $isActive: boolean }>`
  padding: 12px 16px;
  cursor: pointer;
  text-align: center;
  background: ${({ $isActive }) =>
    $isActive ? colors.secondaryGray : "transparent"};
  color: #000;

  &:hover {
    background: ${colors.secondaryGray};
  }
`;
