import { useState } from "react";

interface PlaySoundProps {
  value: string;
  seconds?: number;
  frequency: number;
}

/**
 * value ボタンに表示する文字列
 * seconds 鳴らす音の秒数
 * frequency 鳴らす音の周波数
 */
export function PlaySoundForFixedTime({
  value,
  seconds,
  frequency
}: PlaySoundProps) {
  if (!seconds) return;

  const [audioCtx] = useState(new window.AudioContext());
  const [_, setOscillator] = useState<OscillatorNode | null>(null);

  const handleMousedown = (_: React.MouseEvent<HTMLButtonElement>) => {
    const osc = audioCtx.createOscillator();
    if (!osc) return;
    osc.type = "square";
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    osc.connect(audioCtx.destination);
    osc.start();
    setOscillator(osc);
    setTimeout(() => {
      osc.stop();
      osc.disconnect(audioCtx.destination);
      setOscillator(null);
    }, seconds * 1000);
  };
  return (
    <button className="play__btn" onClick={handleMousedown}>
      ▶️ {value}
    </button>
  );
}

/**
 * ボタンを押している間だけ音を鳴らす
 * value ボタンに表示する文字列
 * frequency 鳴らす音の周波数
 */
export function PlaySoundForFreeTime({ value, frequency }: PlaySoundProps) {
  const [audioCtx] = useState(new window.AudioContext());
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);

  const startOscillator = () => {
    const osc = audioCtx.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    osc.connect(audioCtx.destination);
    osc.start();
    setOscillator(osc);
  };

  const stopOscillator = () => {
    if (oscillator) {
      oscillator.stop();
      oscillator.disconnect(audioCtx.destination);
      setOscillator(null);
    }
  };

  return (
    <button
      className="play__btn"
      onMouseDown={startOscillator}
      onMouseUp={stopOscillator}
      onMouseLeave={stopOscillator}
    >
      ▶️ {value}
    </button>
  );
}
