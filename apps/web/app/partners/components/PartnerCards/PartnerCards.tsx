import type { Partner } from "@/partners/types/partner";
import { PartnerCard } from "@/partners/components/PartnerCard";
import * as S from "./PartnerCards.style";

interface PartnerCardsProps {
  partners: Partner[];
}

export default function PartnerCards({ partners }: PartnerCardsProps) {
  return (
    <S.CardsWrapper>
      <S.CardsGrid>
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </S.CardsGrid>
    </S.CardsWrapper>
  );
}
