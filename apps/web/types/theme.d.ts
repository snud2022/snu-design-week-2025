import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
    mq: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
