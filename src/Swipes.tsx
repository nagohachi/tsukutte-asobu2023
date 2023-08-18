import { useSwipeable } from "react-swipeable";
import { useState, useEffect } from "react";

export function DoubleTouchThenSwipe() {
  const [tapCount, setTapCount] = useState(0);
  const [canSwipe, setCanSwipe] = useState(false);
  const [background, setBackground] = useState("white");

  useEffect(() => {
    if (tapCount === 2) {
      setCanSwipe(true);
      // 2秒後にリセット
      const timeout = setTimeout(() => {
        setTapCount(0);
        setCanSwipe(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [tapCount]);

  const handleTouchEnd = () => {
    setTapCount((prev) => prev + 1);
  };

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (canSwipe) {
        console.log("Double tapped and swiped up!");
        setBackground("red");
      }
    },
    onSwipedDown: () => {
      if (canSwipe) {
        console.log("Double tapped and swiped down!");
        setBackground("white");
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
