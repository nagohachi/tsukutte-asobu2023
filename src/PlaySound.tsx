import { useState } from "react";

/**
 * seconds 秒間、frequency Hz の音を鳴らす 
 * @param {number} seconds 秒数
 * @param {number} frequency 周波数
*/
function generateTone(seconds:number, frequency:number) {
	const audioCtx = new window.AudioContext();
	const osc = audioCtx.createOscillator();
	osc.type = "square";
	osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
	osc.connect(audioCtx.destination);
	osc.start();
	setTimeout(() => {
		osc.stop();
		osc.disconnect(audioCtx.destination);
	}, seconds * 1000);
}

/**
 * 0.3 秒間、frequency Hz の音を鳴らす
 * @param {number} frequency 周波数
 */
export function generateShortTone(frequency:number) {
	generateTone(0.3, frequency);
}

/**
 * 0.6 秒間、frequency Hz の音を鳴らす
 * @param {number} frequency 周波数
*/
export function generateLongTone(frequency:number) {
	generateTone(0.6, frequency);
}

interface PlaySoundProps {
  value: string;
  seconds?: number;
  frequency: number;
}

/**
 * @param {string} value ボタンに表示する文字列
 * @param {number} seconds 鳴らす音の秒数
 * @param {number} frequency 鳴らす音の周波数
 */
export function PlaySoundForFixedTime({
  value,
  seconds,
  frequency
}: PlaySoundProps) {
  if (!seconds) return;

  const handleMousedown = (_: React.MouseEvent<HTMLButtonElement>) => {
    generateTone(seconds, frequency);
  };
  return (
    <button className="play__btn" onClick={handleMousedown}>
      ▶️ {value}
    </button>
  );
}


/**
 * ボタンを押している間だけ音を鳴らす
 * @param {string} value ボタンに表示する文字列
 * @param {number} frequency 鳴らす音の周波数
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
