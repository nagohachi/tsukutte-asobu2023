import { useState } from "react";
import { shortToneSeconds, longToneSeconds } from "./Params";

/**
 * seconds 秒間、frequency Hz の音を鳴らす
 * @param {number} seconds 秒数
 * @param {number} frequency 周波数
 */
async function generateTone(seconds: number, frequency: number) {
  const audioCtx = new window.AudioContext();
  const osc = audioCtx.createOscillator();
  osc.type = "square";
  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  osc.connect(audioCtx.destination);
  osc.start();
  await new Promise((resolve) => {
    setTimeout(() => {
      osc.stop();
      osc.disconnect(audioCtx.destination);
      resolve(null);
    }, seconds * 1000);
  });
}

/**
 * 0.2 秒間、frequency Hz の音を鳴らす
 * @param {number} frequency 周波数
 */
export async function generateShortTone(frequency: number) {
  await generateTone(shortToneSeconds, frequency);
}

/**
 * 0.6 秒間、frequency Hz の音を鳴らす
 * @param {number} frequency 周波数
 */
export async function generateLongTone(frequency: number) {
  await generateTone(longToneSeconds, frequency);
}

interface PlaySoundProps {
  value: string;
  seconds?: number;
  frequency: number;
}

interface PlayMusicProps {
  value: string;
}

/**
 * @param {string} value ボタンに表示する文字列
 * @param {number} seconds 鳴らす音の秒数
 * @param {number} frequency 鳴らす音の周波数
 */
export function PlaySoundForFixedTime({
  value,
  seconds,
  frequency,
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

/**
 * @param {string} value ボタンに表示する文字列
 */
export function PlaySoundMusic({ value }: PlayMusicProps) {
  const music = (_: React.MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio("src/assets/musics/example.mp3");
    audio.play();
  };
  return (
    <button className="play__btn" onClick={music}>
      ▶️ {value}
    </button>
  );
}
