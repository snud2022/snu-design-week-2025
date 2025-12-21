import * as S from "./Tab.style";
import { Title } from "@snud2025/ui";
import RopeLine from "@components/RopeLine/RopeLine";

export type Side = "left" | "right";

interface TabProps {
  krLabel: string;
  enLabel: string;
  active: boolean;
  side: Side;
  onSelect?: () => void;
}

export default function Tab({
  krLabel,
  enLabel,
  active,
  side,
  onSelect,
}: TabProps) {
  return (
    <S.Wrapper
      type="button"
      active={active}
      side={side}
      role="tab"
      aria-selected={active}
      onClick={onSelect}
    >
      <Title level="title3" className="krLabel">
        {krLabel}
      </Title>
      <Title level="title3" className="enLabel">
        {enLabel}
      </Title>

      {active && (
        <S.SideMove side={side}>
          <S.Underline>
            <RopeLine orientation="h" size={"100%"} />
          </S.Underline>
        </S.SideMove>
      )}
    </S.Wrapper>
  );
}
