import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import iconSrc from "./assets/img/icon.png";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeOptions } from "./ThemeOptions";

function Lp() {
  const theme = createTheme(themeOptions);
  return (
    <>
      <div style={{ margin: '0 10%' }}>
        <img
          style={{ display: "block", margin: "auto", width: "40%" }}
          src={iconSrc}
          alt="Application Name"
        />        <h3>正々堂々じゃ、<br />立ち行かないこともある。<br />
          ちょっぴりズルくて耳聡い、<br />そんな大人のカンニングアプリ。</h3>
        <p style={{ margin: '0' }}>蚊ン忍具は、モールス信号とモスキート音を組み合わせた通信機能と、周囲の受験者への妨害機能を備えたカンニングアプリです。</p>
        <ul>
          <li>通信モード
            <ul>
              <li>周波数を設定してモールス信号を発信する。</li>
              <li>入力したメッセージをモールス信号に変換して発信する。</li>
            </ul>
          </li>
          <li>妨害モード
            <ul>
              <li>様々な周波数のモスキート音や、ダミーのリスニング音声を再生する。</li>
            </ul>
          </li>
          <li>電源偽装モード
            <ul>
              <li>画面が真っ暗になり、最低限の操作で通信と妨害が行える。</li>
              *電源偽装モード使用時は端末をダークモードに設定してください。
            </ul>
          </li>
        </ul>
        <p style={{ margin: '0' }}>遷移先のページをホーム画面に追加してご使用ください。</p>
        <p style={{ margin: '0' }}>使い方の詳細は→
          <Link to='https://github.com/yukihira-pot/tsukutte-asobu2023'>
            <GitHubIcon></GitHubIcon>
          </Link>
        </p>

        <div style={{ width: '100%', margin: '0 20%' }}>
          <ThemeProvider theme={theme}>
            <Link to="/tsukutte-asobu2023">
              <Button variant="contained" href="#contained-buttons">
                カンニングを始める
              </Button>
            </Link></ThemeProvider>

        </div>
      </div>
    </>
  );
}

export default Lp;
