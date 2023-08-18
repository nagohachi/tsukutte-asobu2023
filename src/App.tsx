import "./App.css";
import FrequencyBar from "./ FrequencyBar";
import MenuTabs from "./MenuTabs";
// import { PlaySoundForFreeTime, PlaySoundMusic } from "./PlaySound";
// import { frequency } from "./Params";
// import { TextToMorse } from "./TextToMorse";
import { DoubleTouchThenSwipe } from "./Swipes";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeOptions } from "./ThemeOptions";
import Grid from "@mui/material/Grid";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function App() {
  const theme = createTheme(themeOptions);
  const [isCamouflage, setIsCamouflage] = useState(false);
  const [frequency, setFrequency] = useState(15000);

  return (
    <>
      <DoubleTouchThenSwipe
        isCamouflage={isCamouflage}
        setIsCamouflage={setIsCamouflage}
      />
      {!isCamouflage && (
        <ThemeProvider theme={theme}>
          <FrequencyBar frequency={frequency} setFrequency={setFrequency} />
          <Grid container spacing={1} padding={2}>
            <Grid item>
              <InfoOutlinedIcon />
            </Grid>
            <Grid item>ダブルタップして上にスワイプで電源偽装</Grid>
          </Grid>
          <MenuTabs frequency={frequency} />
        </ThemeProvider>
      )}
      {isCamouflage && <h2>カモフラージュモード</h2>}
    </>
  );
}

export default App;
