"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Title } from "@snud2025/ui";
import * as S from "./GoBackButton.style";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <S.Container
      onClick={handleGoBack}
      aria-label="이전 페이지로 돌아가기"
      type="button"
    >
      <Image
        src="/icons/arrow_back_white.svg"
        alt=""
        width={48}
        height={48}
        aria-hidden="true"
      />
      <Title language="en" level="title3">
        BACK
      </Title>
    </S.Container>
  );
}
