import { styled } from "@mui/system";
import { PlaySoundForFreeTimeWithSimpleButton } from "./PlaySound";

const CamouflagedPlaySoundForFreeTime = styled(
  PlaySoundForFreeTimeWithSimpleButton
)`
  background-color: black;
  width: 100%;
  height: 33vh;
  &:active {
    background-color: black;
  }
  &:hover {
    background-color: black;
  }
`;

export function CamouflageMode() {
  return (
    <>
      <CamouflagedPlaySoundForFreeTime value="" frequency={12000} />
      <div
        style={{
          backgroundColor: "gray",
          width: "100%",
          height: "33vh",
          textAlign: "center",
        }}
      >
        ここに妨害モードのコンポーネント
      </div>
    </>
  );
}
