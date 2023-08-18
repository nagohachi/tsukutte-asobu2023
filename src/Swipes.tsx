import { useSwipeable } from "react-swipeable";
import { useState } from "react";

export function TwoFingerSwipe() {
  const [background, setBackground] = useState("white");
  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      const nativeEvent = eventData.event as TouchEvent;
      if (eventData.dir === "Up") {
        if (nativeEvent.touches.length === 2) {
          console.log("swiped UP with 2 fingers");
          setBackground("yellow");
        } else if (nativeEvent.touches.length === 1) {
          console.log("swiped UP with 1 finger");
          setBackground("blue");
        }
      } else if (eventData.dir === "Down") {
        if (nativeEvent.touches.length === 2) {
          console.log("swiped DOWN with 2 fingers");
          setBackground("green");
        } else if (nativeEvent.touches.length === 1) {
          console.log("swiped DOWN with 1 finger");
          setBackground("red");
        }
      }
    },
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div
      {...handlers}
      className="swipe-component"
      style={{ backgroundColor: background }}
    ></div>
  );
}

export default TwoFingerSwipe;
