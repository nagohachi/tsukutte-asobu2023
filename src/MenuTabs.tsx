import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from "./Footer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const NormalMode = () => {
  return (
    <>
      <FormControl>
        <FormLabel id="normal-mode-radio-buttons-group-label">
          通信モード
        </FormLabel>
        <RadioGroup
          aria-labelledby="normal-mode-radio-buttons-group-label"
          defaultValue="manual-communication"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="manual-communication"
            control={<Radio />}
            label="Manual Communication"
          />
          手動でモースル信号を発します。
          <FormControlLabel
            value="translation-to-morse-code"
            control={<Radio />}
            label="Translation to Morse Code"
          />
          入力したメッセージをモールス信号に変換して再生します。
          <br />
          注意：メッセージにはひらがな、カタカナ、アルファベットのみを使用してください。
        </RadioGroup>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </>
  );
};

const SabotageMode = () => {
  return (
    <FormControl>
      <FormLabel id="sabotage-mode-radio-buttons-group-label">
        妨害モード
      </FormLabel>
      <RadioGroup
        aria-labelledby="sabotage-mode-radio-buttons-group-label"
        defaultValue="abrasive-mosquitone"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="abrasive-mosquitone"
          control={<Radio />}
          label="Abrasive Mosquitone"
        />
        不快感を与える高音を継続的に再生し、集中力を削ります。
        <FormControlLabel
          value="fake-listening-problems"
          control={<Radio />}
          label="Fake Listening Problems"
        />
        ダミーのリスニング音声を再生し、リスニングテストをかく乱します。
        <br />
        注意：周波数の設定に関わらず、誰にでも聞こえる音声が再生されます。
      </RadioGroup>
    </FormControl>
  );
};

const MenuTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const mode = value == 0 ? "normal" : "sabotage";

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="menu tabs"
        variant="fullWidth"
      >
        <Tab label="通信" />
        <Tab label="妨害" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <NormalMode />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SabotageMode />
      </CustomTabPanel>
      <Footer mode={mode} />
    </>
  );
};

export default MenuTabs;
