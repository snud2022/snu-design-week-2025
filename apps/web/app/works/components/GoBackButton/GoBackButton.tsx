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
    <S.Container onClick={handleGoBack}>
      <Image src="/icons/arrow_back_white.svg" alt="" width={48} height={48} />
      <Title language="en" level="title3">
        BACK
      </Title>
    </S.Container>
  );
}
