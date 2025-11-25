declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  import React from "react";
  const svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
