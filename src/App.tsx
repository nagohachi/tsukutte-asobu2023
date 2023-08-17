import { useState } from 'react';
import './App.css';

interface PlaySoundProps {
  value: string;
  seconds: number;
  frequency: number;
}

// 引数にある秒数だけ音を鳴らす
export function PlaySound({ value, seconds, frequency }: PlaySoundProps) {
  const [audioCtx] = useState(new window.AudioContext());
  const [_, setOscillator] = useState<OscillatorNode | null>(null);


  const handleMousedown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const osc = audioCtx.createOscillator();
    if (!osc) return;
    osc.type = 'square';
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    osc.connect(audioCtx.destination);
    osc.start();
    setOscillator(osc);
    setTimeout(() => {
      osc.stop();
      osc.disconnect(audioCtx.destination);
    }, seconds * 1000);
  }
  const playButton = <button className="play__btn" onClick={handleMousedown}>▶️ {value}</button>;
  return playButton;
}

function App() {
  return (
    <>
      <div><PlaySound value="短音" seconds={0.3} frequency={7040} /></div>
      <div><PlaySound value="長音" seconds={0.6} frequency={7040} /></div>
    </>
  );
}

export default App;
