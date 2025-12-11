"use client";

import styled from "@emotion/styled";
import { typography } from "../typo";
import { colors } from "../colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  /* react-notion-x 기본 스타일 오버라이드 */

  /* 페이지 컨테이너 */
  .notion-page {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  /* 텍스트 블록 */
  .notion-text {
    font: ${typography.body2.medium};
    word-wrap: keep-all;
    max-width: 100%;
    color: ${colors.secondaryGray};
    margin: 0;
    padding: 0;
  }

  /* 텍스트 블록 간 간격 */
  .notion-text + .notion-text {
    margin-top: 0.5rem;
  }

  /* 제목 스타일 */
  .notion-h1 {
    font: ${typography.title2.kr};
    margin: 2rem 0 1rem 0;
    color: ${colors.secondaryGray};
  }

  .notion-h2 {
    font: ${typography.title3.kr};
    margin: 1.5rem 0 0.75rem 0;
    color: ${colors.secondaryGray};
  }

  .notion-h3 {
    font: ${typography.subtitle.kr};
    margin: 1.25rem 0 0.5rem 0;
    color: ${colors.secondaryGray};
  }

  /* 이미지 스타일 */
  .notion-image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  /* 구분선 */
  .notion-hr {
    border: none;
    border-top: 1px solid ${colors.secondaryGray};
    margin: 1rem 0;
  }

  /* 인용구 */
  .notion-quote {
    font: ${typography.body2.medium};
    border-left: 4px solid ${colors.secondaryGray};
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
  }

  /* 페이지 속성(날짜, 태그 등) 숨기기 */
  .notion-collection-page-properties {
    display: none;
  }

  /* 데이터베이스/컬렉션 뷰 */
  .notion-collection-card {
    border-radius: 4px;
    background: none;
  }

  .notion-collection-card-cover {
    border: none;
  }

  .notion-collection-card-body {
    display: none;
  }

  .notion-collection-header-title {
    font: ${typography.title3.kr};
    color: ${colors.secondaryGray};
  }
`;
