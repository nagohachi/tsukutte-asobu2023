import Paper from "@mui/material/Paper";
import { PlaySoundForFreeTime, PlaySoundMusic } from "./PlaySound";
import { TextToMorse } from "./TextToMorse";

type FooterProps = {
  mode: string;
  frequency: number;
};

const Footer = ({ mode, frequency }: FooterProps) => {
  const buttonText =
    mode === "manual-communication" || mode === "translation-to-morse-code"
      ? "押してる間発信"
      : "妨害音声を再生";
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
      }}
      elevation={0}
      style={{ backgroundColor: "#114B3D", borderRadius: 0 }}
    >
      {mode === "manual-communication" && (
        <PlaySoundForFreeTime value={buttonText} frequency={frequency} />
      )}
      {mode === "translation-to-morse-code" && (
        <TextToMorse text={"sos"} value={buttonText} />
      )}
      {mode === "abrasive-mosquitone" && <PlaySoundMusic value={buttonText} />}
      {mode === "fake-listening-problems" && (
        <PlaySoundMusic value={buttonText} />
      )}
    </Paper>
  );
};

export default Footer;
