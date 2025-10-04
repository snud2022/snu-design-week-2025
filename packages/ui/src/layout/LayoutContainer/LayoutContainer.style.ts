import styled from "@emotion/styled";

export const StyledContainer = styled.div<{ as?: string }>`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  /* MOBILE (360~599px): contents 영역 340px + 좌우 마진 보장 */
  max-width: 340px;

  /* TABLET (600~1279px): contents 영역 540px + 좌우 마진 보장 */
  @media (min-width: 600px) {
    max-width: 540px;
  }

  /* DESKTOP (1280px~): contents 영역 1200px + 좌우 마진 보장 */
  @media (min-width: 1280px) {
    max-width: 1200px;
  }
`;
