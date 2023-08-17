import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [audioCtx] = useState(new window.AudioContext());
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playButton = document.getElementById("oscPlayer");
    if (!playButton) return;

    const handleMousedown = (event: MouseEvent) => {
      if (!isPlaying) {
        playButton.innerHTML = "⏸ Stop";
        const osc = audioCtx.createOscillator();
        if (!osc) return;
        osc.type = 'square';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.connect(audioCtx.destination);
        osc.start();
        setOscillator(osc);
        setIsPlaying(true);
      } else {
        playButton.innerHTML = "▶️ Play";
        if (oscillator) {
          oscillator.stop();
          oscillator.disconnect(audioCtx.destination);
        }
        setOscillator(null);
        setIsPlaying(false);
      }
    };

    playButton.addEventListener("mousedown", handleMousedown, false);

    return () => {
      playButton.removeEventListener("mousedown", handleMousedown);
    };
  }, [audioCtx, oscillator, isPlaying]);


  return (
    <>
      <button id="oscPlayer">▶️ Play</button>
    </>
  );
}

export default App;
