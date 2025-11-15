export interface EventTitle {
  mainTitle: string;
  subTitle: string;
}

export interface RopeFrameConfig {
  widthSizePixel: number;
  heightSizePixel: number;
  edges: {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
  };
}

