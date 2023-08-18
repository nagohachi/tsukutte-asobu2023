import "./App.css";
import FrequencyBar from "./ FrequencyBar";
import MenuTabs from "./MenuTabs";
import {
  PlaySoundForFixedTime,
  PlaySoundForFreeTime,
  PlaySoundMusic,
} from "./PlaySound";
import { shortToneSeconds, longToneSeconds, frequency } from "./Params";
import { TextToMorse } from "./TextToMorse";
import { TwoFingerSwipe } from "./Swipes";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <section className="swipe-component__container">
          <TwoFingerSwipe />
        </section>
        <section className="main-component__container">
          <FrequencyBar />
          <div>2本指でスワイプして電源偽装モードに切り替え</div>
          <MenuTabs />
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
            <PlaySoundForFreeTime
              value="押下の間ずっと"
              frequency={frequency}
            />
          </div>
          <div>
            <TextToMorse text={"sos"} />
          </div>
          <div>
            <PlaySoundMusic value="妨害音声を再生" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
