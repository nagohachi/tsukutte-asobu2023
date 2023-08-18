import { styled } from "@mui/system";
import { PlaySoundForFreeTime } from "./PlaySound";

const CamouflagedPlaySoundForFreeTime = styled(PlaySoundForFreeTime)`
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
      <CamouflagedPlaySoundForFreeTime
        value=""
        frequency={12000}
        showIcon={false}
      />
    </>
  );
}
