import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

interface DoubleTouchThenSwipeProps {
  isCamouflage: boolean;
  setIsCamouflage: (isCamouflage: boolean) => void;
  className?: string;
}

/**
 * 2回タップしてから上にスワイプすると偽装モードにするかどうかを切り替えるコンポーネント
 * @param {boolean} isCamouflage 偽装モードかどうか
 * @param {function} setIsCamouflage 偽装モードかどうかを変更する関数
 * @param {string} className　スタイルを当てるためのクラス名
 */
export function DoubleTouchThenSwipe({
  isCamouflage,
  setIsCamouflage,
  className
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
    trackMouse: false
  });

  const camouflageStyle = isCamouflage
    ? {
        backgroundColor: "gray",
        width: "100%",
        height: "100vh"
      }
    : {
        zIndex: 1000
      };

  return (
    <div
      {...handlers}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`swipe-component ${className}`}
      style={camouflageStyle}
    ></div>
  );
}
