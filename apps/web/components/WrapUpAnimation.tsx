"use client";

import { useState } from "react";
import { LottieAnimation } from "@snud2025/ui";
import wrapUpAnimation from "../public/animation/transition_animation.json";

const WrapUpAnimation = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <LottieAnimation
      animationData={wrapUpAnimation}
      autoplay
      loop={false}
      speed={1}
      backgroundColor="white"
      onComplete={() => setVisible(false)}
    />
  );
};

export default WrapUpAnimation;
