import "./App.css";
import FrequencyBar from "./ FrequencyBar";
import MenuTabs from "./MenuTabs";
// import { PlaySoundForFreeTime, PlaySoundMusic } from "./PlaySound";
// import { frequency } from "./Params";
// import { TextToMorse } from "./TextToMorse";
// import { DoubleTouchThenSwipe } from "./Swipes";
// import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeOptions } from "./ThemeOptions";
import Grid from "@mui/material/Grid";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function App() {
  const theme = createTheme(themeOptions);
  // const [isCamouflage, setIsCamouflage] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <FrequencyBar />
      <Grid
        container
        spacing={1}
        padding={2}
        sx={{ typography: "caption" }}
        alignItems="center"
      >
        <Grid item>
          <InfoOutlinedIcon sx={{ display: "flex" }} />
        </Grid>
        <Grid item>ダブルタップして上にスワイプで電源偽装</Grid>
      </Grid>
      <MenuTabs />
      {/* <div className="container">
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
          <span>
            <PlaySoundMusic value="妨害音声を再生" />
          </span>
        </section>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
