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
  const [secretKeyCount, setSecretKeyCount] = useState(0);
  const secretCommand = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];

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

  // 隠しコマンド
  const handleSecretCommand = (event: React.KeyboardEvent) => {
    if (event.key === secretCommand[secretKeyCount]) {
      setSecretKeyCount(secretKeyCount + 1);
      if (secretKeyCount + 1 >= secretCommand.length) {
        setSecretKeyCount(0);
        setIsCamouflage(!isCamouflage);
      }
    } else {
      setSecretKeyCount(0);
    }
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
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        zIndex: -1
      }
    : {
        zIndex: 100
      };

  return (
    <div
      {...handlers}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`swipe-component ${className}`}
      style={camouflageStyle}
      tabIndex={-1}
      onKeyDown={handleSecretCommand}
    ></div>
  );
}
