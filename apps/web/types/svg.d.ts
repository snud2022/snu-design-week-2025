declare module "*.svg" {
  import React from "react";
  const svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
