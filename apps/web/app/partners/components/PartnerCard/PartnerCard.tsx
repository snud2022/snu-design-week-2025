import Image from "next/image";
import { Body } from "@snud2025/ui";
import type { Partner } from "@/partners/types/partner";
import * as S from "./PartnerCard.style";

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <S.PartnerCard>
      <S.CardHeader>
        <Image
          src={partner.logo}
          alt={partner.name}
          height={45}
          width={180}
          style={{ objectFit: "contain" }}
        />
      </S.CardHeader>
      <S.StringImageContainer>
        <Image
          src="/partners/string.png"
          alt="파트너 사"
          height={24}
          width={492}
          aria-hidden="true"
        />
      </S.StringImageContainer>
      <S.CardDescription>
        <Body level="body2" weight="medium">
          {partner.description}
        </Body>
      </S.CardDescription>
    </S.PartnerCard>
  );
}
