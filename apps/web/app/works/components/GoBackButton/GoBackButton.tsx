"use client";

import { useRouter } from "next/navigation";
import { Title } from "@snud2025/ui";
import * as S from "./GoBackButton.style";
import ArrowBack from "../../../../public/common/arrow_back.svg";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <S.Container onClick={handleGoBack}>
      <ArrowBack fill="#fff" width={48} height={48} />
      <Title language="en" level="title3">
        BACK
      </Title>
    </S.Container>
  );
}
