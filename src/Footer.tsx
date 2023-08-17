import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

type FooterProps = {
  mode: "normal" | "sabotage";
};

const Footer = ({ mode }: FooterProps) => {
  const buttonText = mode == "normal" ? "押してる間発信" : "妨害音声を再生";
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Button variant="outlined" startIcon={<PlayArrowIcon />}>
        {buttonText}
      </Button>
    </Paper>
  );
};

export default Footer;
