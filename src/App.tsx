import "./App.css";
import FrequencyBar from "./ FrequencyBar";
import MenuTabs from "./MenuTabs";
import { DoubleTouchThenSwipe } from "./Swipes";
import { CamouflageMode } from "./CamouflageMode";
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
          <Grid
            container
            spacing={1}
            px={2}
            py={1}
            sx={{ typography: "caption" }}
            alignItems="center"
          >
            <Grid item>
              <InfoOutlinedIcon sx={{ display: "flex" }} />
            </Grid>
            <Grid item>ダブルタップして上にスワイプで電源偽装</Grid>
          </Grid>
          <MenuTabs frequency={frequency} />
        </ThemeProvider>
      )}
      {isCamouflage && CamouflageMode()}
    </>
  );
}

export default App;
