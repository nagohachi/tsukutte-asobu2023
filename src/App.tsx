import { PlaySoundForFixedTime, PlaySoundForFreeTime } from './PlaySound';
import './App.css';

function App() {
  return (
    <>
      <div><PlaySoundForFixedTime value="押下時に短音" seconds={0.3} frequency={7040} /></div>
      <div><PlaySoundForFixedTime value="押下時に長音" seconds={0.6} frequency={7040} /></div>
      <div><PlaySoundForFreeTime value="押下の間ずっと" frequency={7040} /></div>
    </>
  );
}

export default App;
