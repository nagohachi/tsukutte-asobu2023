import { useSwipeable } from "react-swipeable";
import { useState, useEffect } from "react";

interface DoubleTouchThenSwipeProps {
  isCamouflage: boolean;
  setIsCamouflage: (isCamouflage: boolean) => void;
}

export function DoubleTouchThenSwipe({
  isCamouflage,
  setIsCamouflage,
}: DoubleTouchThenSwipeProps) {
  const [tapCount, setTapCount] = useState(0);
  const [canSwipe, setCanSwipe] = useState(false);
  const [touchStartTime, setTouchStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (tapCount === 2) {
      setCanSwipe(true);
      const timeout = setTimeout(() => {
        setCanSwipe(false);
        setTapCount(0);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [tapCount]);

  const handleTouchStart = () => {
    setTouchStartTime(Date.now());
  };

  const handleTouchEnd = () => {
    if (touchStartTime && Date.now() - touchStartTime < 100) {
      setTapCount((prev) => prev + 1);
    }
    setTouchStartTime(null);
  };

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (canSwipe) {
        setIsCamouflage(!isCamouflage);
        setCanSwipe(false);
        setTapCount(0);
      }
    },
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div
      {...handlers}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="swipe-component"
    ></div>
  );
}
