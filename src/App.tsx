import "./App.css";
import FrequencyBar from "./ FrequencyBar";
import MenuTabs from "./MenuTabs";
import { PlaySoundForFreeTime, PlaySoundMusic } from "./PlaySound";
import { frequency } from "./Params";
import { TextToMorse } from "./TextToMorse";
import { DoubleTouchThenSwipe } from "./Swipes";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <section className="swipe-component__container">
          <DoubleTouchThenSwipe />
        </section>
        <section className="main-component__container">
          <FrequencyBar />
          <div>2本指でタッチ & 上スワイプして電源偽装モードに切り替え</div>
          <MenuTabs />
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
