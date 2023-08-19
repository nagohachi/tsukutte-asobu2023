import { styled } from "@mui/system";
import {
  PlaySoundForFreeTimeWithSimpleButton,
  PlaySoundNoiseWithSimpleButton,
} from "./PlaySound";

const CamouflagedPlaySoundForFreeTime = styled(
  PlaySoundForFreeTimeWithSimpleButton
)`
  background-color: black;
  width: 100%;
  height: 33vh;
`;

const CamouflagedPlaySoundNoise = styled(PlaySoundNoiseWithSimpleButton)`
  background-color: black;
  width: 100%;
  height: 33vh;
`;

export function CamouflageMode() {
  return (
    <>
      <CamouflagedPlaySoundForFreeTime value="" frequency={12000} />
      <CamouflagedPlaySoundNoise value="" frequency={7000} />
    </>
  );
}
