import * as S from "./Tab.style";
import { useMemo } from "react";
import { Title } from "@snud2025/ui";
import ProgressBar from "../../../../components/ProgressBar/ProgressBar";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useTheme } from "@emotion/react";

export type Side = "left" | "right";

interface TabProps {
  krLabel: string;
  enLabel: string;
  active: boolean;
  side: Side;
  onSelect?: () => void;
}

const TAB_SIZE = {
  desktop: 300,
  tablet: 270,
  mobile: 192,
} as const;

export default function Tab({
  krLabel,
  enLabel,
  active,
  side,
  onSelect,
}: TabProps) {
  const theme = useTheme();

  const qDesktop = useMemo(() => theme.mq.desktop, [theme]);
  const qTablet = useMemo(() => theme.mq.tablet, [theme]);

  const isDesktop = useMediaQuery(qDesktop);
  const isTablet = useMediaQuery(qTablet);

  const barLen = isDesktop
    ? TAB_SIZE.desktop
    : isTablet
      ? TAB_SIZE.tablet
      : TAB_SIZE.mobile;

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
        <S.Underline side={side}>
          <ProgressBar orientation="h" size={barLen} />
        </S.Underline>
      )}
    </S.Wrapper>
  );
}
