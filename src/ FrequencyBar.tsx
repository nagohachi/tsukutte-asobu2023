import { Slider } from "@mui/material";

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

function FrequencyBar() {
  return (
    <>
      <div>周波数(Hz) 10,000 Hz</div>
      <Slider
        aria-label="frequency bar"
        min={10000}
        max={20000}
        defaultValue={100000}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        marks={marks}
        valueLabelDisplay="on"
      />
      <div>目安年齢(歳)</div>
    </>
  );
}

export default FrequencyBar;
