import { ProgramSection, DetailSection } from "./components";
import {
  PROGRAM_INTRO,
  PROGRAMS,
  HI_DAY_SECTION,
  TALK_CONCERT_SECTION,
} from "./constants";
import * as S from "./page.style";

export default function Program() {
  return (
    <S.Wrapper>
      <ProgramSection programs={PROGRAMS} intro={PROGRAM_INTRO} />
      <DetailSection
        hiDay={HI_DAY_SECTION}
        talkConcert={TALK_CONCERT_SECTION}
      />
    </S.Wrapper>
  );
}
