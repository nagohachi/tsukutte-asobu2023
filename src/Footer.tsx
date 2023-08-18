import Paper from "@mui/material/Paper";
import { PlaySoundForFreeTime, PlaySoundMusic } from "./PlaySound";
import { TextToMorse } from "./TextToMorse";

type FooterProps = {
  mode: string;
};

const Footer = ({ mode }: FooterProps) => {
  const buttonText =
    mode === "manual-communication" || mode === "translation-to-morse-code"
      ? "押してる間発信"
      : "妨害音声を再生";
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      {/* <Button variant="outlined" startIcon={<PlayArrowIcon />}>
        {buttonText}
      </Button> */}
      {mode === "manual-communication" && (
        <PlaySoundForFreeTime value={buttonText} frequency={7040} />
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
