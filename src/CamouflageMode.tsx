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

interface CamouflageModeProps {
  frequency: number;
}

export function CamouflageMode({ frequency }: CamouflageModeProps) {
  return (
    <>
      <CamouflagedPlaySoundForFreeTime value="" frequency={frequency} />
      <CamouflagedPlaySoundNoise value="" frequency={7000} />
    </>
  );
}
