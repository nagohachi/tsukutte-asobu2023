import "./App.css";
import FrequencyBar from "./ FrequencyBar";
import MenuTabs from "./MenuTabs";
import { PlaySoundForFreeTime, PlaySoundMusic } from "./PlaySound";
import { frequency } from "./Params";
// import { TextToMorse } from "./TextToMorse";
import { DoubleTouchThenSwipe } from "./Swipes";
import { useState } from "react";
import "./App.css";

function App() {
  const [isCamouflage, setIsCamouflage] = useState(false);
  return (
    <>
      <div className="container">
        <section className="swipe-component__container">
          <DoubleTouchThenSwipe
            isCamouflage={isCamouflage}
            setIsCamouflage={setIsCamouflage}
          />
        </section>
        <section className="main-component__container">
          <FrequencyBar />
          <div>2本指でタッチ & 上スワイプして電源偽装モードに切り替え</div>
          <MenuTabs />
          <span>
            <PlaySoundForFreeTime
              value="押下の間ずっと"
              frequency={frequency}
            />
          </span>
          {/* <div>
            <TextToMorse text={"sos"} />
          </div> */}
          <span>
            <PlaySoundMusic value="妨害音声を再生" />
          </span>
        </section>
      </div>
    </>
  );
}

export default App;
