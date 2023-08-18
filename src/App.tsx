import { PlaySoundForFixedTime, PlaySoundForFreeTime } from "./PlaySound";
import { shortToneSeconds, longToneSeconds, frequency } from "./Params";
import { TextToMorse } from "./TextToMorse";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <PlaySoundForFixedTime
          value="押下時に短音"
          seconds={shortToneSeconds}
          frequency={frequency}
        />
      </div>
      <div>
        <PlaySoundForFixedTime
          value="押下時に長音"
          seconds={longToneSeconds}
          frequency={frequency}
        />
      </div>
      <div>
        <PlaySoundForFreeTime value="押下の間ずっと" frequency={frequency} />
      </div>
      <div>
        <TextToMorse text={"sos"} />
      </div>
    </>
  );
}

export default App;
