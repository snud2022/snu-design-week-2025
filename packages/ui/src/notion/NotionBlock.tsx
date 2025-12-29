"use client";

import { NotionRenderer } from "react-notion-x";
import { Collection } from "react-notion-x/build/third-party/collection";
import type { ExtendedRecordMap } from "notion-types";
import type { Block } from "notion-types";
import "react-notion-x/src/styles.css";
import * as S from "./NotionBlock.style";
import { getImageUrl } from "../utils/getImageUrl";

interface NotionBlockProps {
  recordMap: ExtendedRecordMap;
  "aria-label"?: string;
}

/**
 * react-notion-x를 사용하여 Notion 페이지를 렌더링하는 컴포넌트
 */
export const NotionBlock = ({
  recordMap,
  "aria-label": ariaLabel,
}: NotionBlockProps) => {
  return (
    <S.Container role="region" aria-label={ariaLabel || "작품 상세 내용"}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        previewImages={true}
        mapImageUrl={(
          url: string | undefined,
          block: Block
        ): string | undefined => {
          if (!url) {
            return undefined;
          }
          // getImageUrl 함수를 사용하여 이미지 URL 변환
          return getImageUrl(url, block?.id);
        }}
        components={{
          Collection,
          // 페이지 링크 클릭 비활성화
          PageLink: ({ children, ...props }: any) => {
            return (
              <span
                {...props}
                style={{ cursor: "default", ...props.style }}
                onClick={(e) => e.preventDefault()}
              >
                {children}
              </span>
            );
          },
        }}
      />
    </S.Container>
  );
};
