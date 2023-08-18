import "./App.css";
import FrequencyBar from "./ FrequencyBar";
import MenuTabs from "./MenuTabs";
// import {
//   PlaySoundForFixedTime,
//   PlaySoundForFreeTime,
//   PlaySoundMusic
// } from "./PlaySound";
// import { shortToneSeconds, longToneSeconds, frequency } from "./Params";
// import { TextToMorse } from "./TextToMorse";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeOptions } from "./ThemeOptions";
import Grid from "@mui/material/Grid";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function App() {
  const theme = createTheme(themeOptions);
  return (
    <>
      <ThemeProvider theme={theme}>
        <FrequencyBar />
        <Grid container spacing={1} padding={2}>
          <Grid item>
            <InfoOutlinedIcon />
          </Grid>
          <Grid item>ダブルタップして上にスワイプで電源偽装</Grid>
        </Grid>
        <MenuTabs />
      </ThemeProvider>
      {/* <div>
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
      <div>
        <PlaySoundMusic value="妨害音声を再生" />
      </div> */}
    </>
  );
}

export default App;
