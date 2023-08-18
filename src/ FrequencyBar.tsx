import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const marks = [
  {
    value: 10000,
    label: "~70"
  },
  {
    value: 12000,
    label: "~60"
  },
  {
    value: 14000,
    label: "~50"
  },
  {
    value: 15000,
    label: "~40"
  },
  {
    value: 16000,
    label: "~30"
  },
  {
    value: 20000,
    label: "~20"
  }
];

function valuetext(value: number) {
  return `${value}Hz`;
}

function valueLabelFormat(value: number) {
  return value.toLocaleString();
}

interface FrequencyBarProps {
  frequency: number;
  setFrequency: (frequency: number) => void;
}

function FrequencyBar({ frequency, setFrequency }: FrequencyBarProps) {
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    // newValueはnumber | number[]の型を持つので、number型にキャストしています。
    setFrequency(newValue as number);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, p: 2, fontSize: "h5.fontSize" }}>
        <Grid container spacing={0}>
          <Grid item xs={"auto"} sx={{ fontFamily: "Noto Sans JP" }}>
            周波数(Hz)
          </Grid>
          <Grid item xs sx={{ textAlign: "right", fontFamily: "Noto Sans JP" }}>
            <span
              style={{ borderBottom: "solid 2px #e0e0e0", marginRight: "8px" }}
            >
              10,000
            </span>
            Hz
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ p: 3 }}>
        <Box sx={{ textAlign: "center", fontFamily: "Noto Sans JP" }}>
          周波数(Hz)
        </Box>
        <Slider
          aria-label="frequency bar"
          min={10000}
          max={20000}
          defaultValue={12000}
          value={frequency}
          onChange={handleSliderChange}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          marks={marks}
          valueLabelDisplay="on"
          sx={{ mt: 4 }}
        />
        <Box sx={{ textAlign: "center", fontFamily: "Noto Sans JP" }}>
          目安年齢(歳)
        </Box>
      </Box>
    </>
  );
}

export default FrequencyBar;
