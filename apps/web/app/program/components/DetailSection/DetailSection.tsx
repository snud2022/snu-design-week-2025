import HiDaySection from "@/program/components/HiDaySection";
import TalkConcertSection from "@/program/components/TalkConcertSection";
import type {
  HiDaySection as HiDaySectionType,
  TalkConcertSection as TalkConcertSectionType,
} from "@/program/types/detailSection";
import * as S from "./DetailSection.style";

interface DetailSectionProps {
  hiDay: HiDaySectionType;
  talkConcert: TalkConcertSectionType;
}

export default function DetailSection({
  hiDay,
  talkConcert,
}: DetailSectionProps) {
  return (
    <S.Wrapper>
      <HiDaySection data={hiDay} />
      <TalkConcertSection data={talkConcert} />
    </S.Wrapper>
  );
}
