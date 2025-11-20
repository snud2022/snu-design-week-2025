import type { Partner } from "../../types/partner";
import { PartnerCard } from "../PartnerCard";
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
