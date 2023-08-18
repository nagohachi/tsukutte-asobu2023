import { useSwipeable } from "react-swipeable";
import { useState, useEffect } from "react";

interface DoubleTouchThenSwipeProps {
  setIsCamouflage: (isCamouflage: boolean) => void;
}

export function DoubleTouchThenSwipe({
  setIsCamouflage,
}: DoubleTouchThenSwipeProps) {
  const [tapCount, setTapCount] = useState(0);
  const [canSwipe, setCanSwipe] = useState(false);
  const [background, setBackground] = useState("white");

  useEffect(() => {
    if (tapCount === 2) {
      setCanSwipe(true);
      // 2秒後にリセット
      const timeout = setTimeout(() => {
        setCanSwipe(false);
        setTapCount(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [tapCount]);

  const handleTouchEnd = () => {
    setTapCount((prev) => prev + 1);
  };

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (canSwipe) {
        setBackground("red");
        setIsCamouflage(true);
        setCanSwipe(false);
        setTapCount(0);
      }
    },
    onSwipedDown: () => {
      if (canSwipe) {
        setBackground("white");
        setIsCamouflage(false);
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
      onTouchEnd={handleTouchEnd}
      className="swipe-component"
      style={{ backgroundColor: background }}
    ></div>
  );
}
