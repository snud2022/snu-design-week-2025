import Image from "next/image";
import type { Partner } from "@/partners/types/partner";
import * as S from "./PartnerLogos.style";

interface PartnerLogosProps {
  partners: Partner[];
}

export default function PartnerLogos({ partners }: PartnerLogosProps) {
  return (
    <S.LogosWrapper>
      {partners.map((partner) => (
        <Image
          key={partner.id}
          src={partner.logo}
          alt={partner.name}
          width={partner.width}
          height={partner.height}
        />
      ))}
    </S.LogosWrapper>
  );
}
