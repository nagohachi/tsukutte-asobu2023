import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const shortToneSeconds: number = 0.2;
export const longToneSeconds: number = shortToneSeconds * 3;
export const spaceBetweenCharsSeconds: number = shortToneSeconds * 3;

export const shortToneMilliseconds: number = shortToneSeconds * 1000;
export const longToneMilliseconds: number = longToneSeconds * 1000;
export const spaceBetweenCharsMilliseconds: number =
  spaceBetweenCharsSeconds * 1000;

export const frequency: number = 7040;

export const CustomButton = styled(Button)({
  border: "none",
  boxShadow: "none",
  textTransform: "none",
  backgroundColor: "#ffffff",
  "&:hover": {
    backgroundColor: "#ffffff",
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#e2c8d7"
  }
});
