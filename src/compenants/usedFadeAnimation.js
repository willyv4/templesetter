import { useState, useCallback } from "react";

export const useFadeAnimation = (options = {}) => {
  const { animationDuration = 1000, animateInitially = false } = options;
  const [showAnimation, setShowAnimation] = useState(animateInitially);
  const animate = useCallback(() => {
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), animationDuration + 100);
  }, [animationDuration]);

  return {
    showAnimation,
    animate,
  };
};
