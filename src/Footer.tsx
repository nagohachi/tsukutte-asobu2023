import Paper from "@mui/material/Paper";
import {
  PlaySoundForFreeTime,
  PlaySoundMusic,
  PlaySoundNoise
} from "./PlaySound";
import { TextToMorse } from "./TextToMorse";
import { memo } from "react";

type FooterProps = {
  mode: string;
  frequency: number;
  text: string;
};

const Footer = ({ mode, frequency, text }: FooterProps) => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        px: 3,
        pt: 1,
        pb: 4,
        zIndex: 10000
      }}
      elevation={0}
      style={{ backgroundColor: "#8E2A66", borderRadius: 0 }}
    >
      {mode === "manual-communication" && (
        <PlaySoundForFreeTime value="押してる間発信" frequency={frequency} />
      )}
      {mode === "translation-to-morse-code" && (
        <TextToMorse text={text} value="メッセージを再生" />
      )}
      {mode === "abrasive-mosquitone" && (
        <PlaySoundNoise value="妨害音声を再生" frequency={frequency} />
      )}
      {mode === "fake-listening-problems" && (
        <PlaySoundMusic value="リスニング音声を再生" />
      )}
    </Paper>
  );
};

export default memo(Footer);
