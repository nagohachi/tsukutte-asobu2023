import Paper from "@mui/material/Paper";
import { PlaySoundForFreeTime, PlaySoundMusic } from "./PlaySound";
import { TextToMorse } from "./TextToMorse";

type FooterProps = {
  mode: string;
  frequency: number;
};

const Footer = ({ mode, frequency }: FooterProps) => {
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
      style={{ backgroundColor: "#114B3D", borderRadius: 0 }}
    >
      {mode === "manual-communication" && (
        <PlaySoundForFreeTime value="押してる間発信" frequency={frequency} />
      )}
      {mode === "translation-to-morse-code" && (
        <TextToMorse text={"sos"} value="メッセージを再生" />
      )}
      {mode === "abrasive-mosquitone" && (
        <PlaySoundMusic value="妨害音声を再生" />
      )}
      {mode === "fake-listening-problems" && (
        <PlaySoundMusic value="リスニング音声を再生" />
      )}
    </Paper>
  );
};

export default Footer;
