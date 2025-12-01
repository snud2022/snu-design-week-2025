import HiDaySection from "../HiDaySection";
import TalkConcertSection from "../TalkConcertSection";
import type {
  HiDaySection as HiDaySectionType,
  TalkConcertSection as TalkConcertSectionType,
} from "../../types/detailSection";
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
