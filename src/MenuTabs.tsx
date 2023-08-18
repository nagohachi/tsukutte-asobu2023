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
import { useState } from "react";

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

type ModeProps = {
  subMode: string;
  onClick: any;
};

const NormalMode = ({ subMode, onClick }: ModeProps) => {
  return (
    <>
      <FormControl fullWidth>
        <FormLabel id="normal-mode-radio-buttons-group-label">
          通信モード
        </FormLabel>
        <RadioGroup
          aria-labelledby="normal-mode-radio-buttons-group-label"
          name="radio-buttons-group"
          value={subMode}
          onChange={onClick}
          sx={{ mb: 3 }}
        >
          <FormControlLabel
            value="manual-communication"
            control={<Radio />}
            label="Manual Communication"
          />
          <Box pl={4} sx={{ typography: "caption" }}>
            手動でモールス信号を発します。
          </Box>
          <FormControlLabel
            value={"translation-to-morse-code"}
            control={<Radio />}
            label="Translation to Morse Code"
          />
          <Box pl={4} sx={{ typography: "caption" }}>
            入力したメッセージをモールス信号に変換して再生します。
            <br />
            <span style={{ color: "#B00020" }}>注意：</span>
            メッセージにはひらがな、カタカナ、アルファベットのみを使用してください。
          </Box>
        </RadioGroup>
        <Box pl={4} pr={1}>
          <TextField
            id="outlined-basic"
            label="メッセージ"
            variant="outlined"
            fullWidth
          />
        </Box>
      </FormControl>
    </>
  );
};

const SabotageMode = ({ subMode, onClick }: ModeProps) => {
  return (
    <>
      <FormControl>
        <FormLabel id="sabotage-mode-radio-buttons-group-label">
          妨害モード
        </FormLabel>
        <RadioGroup
          aria-labelledby="sabotage-mode-radio-buttons-group-label"
          name="radio-buttons-group"
          value={subMode}
          onChange={onClick}
        >
          <FormControlLabel
            value="abrasive-mosquitone"
            control={<Radio />}
            label="Abrasive Mosquitone"
          />
          <Box pl={4} sx={{ typography: "caption" }}>
            不快感を与える高音を継続的に再生し、集中力を削ります。
          </Box>
          <FormControlLabel
            value="fake-listening-problems"
            control={<Radio />}
            label="Fake Listening Problems"
          />
          <Box pl={4} sx={{ typography: "caption" }}>
            ダミーのリスニング音声を再生し、リスニングテストをかく乱します。
            <br />
            <span style={{ color: "#B00020" }}>注意：</span>
            周波数の設定に関わらず、誰にでも聞こえる音声が再生されます。
          </Box>
        </RadioGroup>
      </FormControl>
    </>
  );
};

type MenuTabsProps = {
  frequency: number;
};

const MenuTabs = ({ frequency }: MenuTabsProps) => {
  // normal or sabotage
  const [value, setValue] = React.useState(0);
  const handleChangeValue = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    newValue == 0
      ? setSubMode("manual-communication")
      : setSubMode("abrasive-mosquitone");
  };

  // 各モード内のラジオボタン
  const [subMode, setSubMode] = useState("manual-communication");

  const handleChangeSubMode = (_: React.SyntheticEvent, newValue: string) => {
    setSubMode(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChangeValue}
        aria-label="menu tabs"
        variant="fullWidth"
      >
        <Tab label="通信" />
        <Tab label="妨害" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <NormalMode subMode={subMode} onClick={handleChangeSubMode} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SabotageMode subMode={subMode} onClick={handleChangeSubMode} />
      </CustomTabPanel>
      <Box pb={10}></Box>
      <Footer mode={subMode} frequency={frequency} />
    </>
  );
};

export default MenuTabs;
