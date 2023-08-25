import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import iconSrc from "./assets/img/banner.png";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeOptions } from "./ThemeOptions";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

function Lp() {
  const theme = createTheme(themeOptions);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <img
            style={{ display: "block", margin: "auto", width: "100%" }}
            src={iconSrc}
            alt="Application Name"
          />
          <h3>
            正々堂々じゃ、
            <br />
            立ち行かないこともある。
            <br />
            ちょっぴりズルくて耳聡い、
            <br />
            そんな大人のカンニングアプリ。
          </h3>
          <p style={{ margin: "0" }}>
            蚊ン忍具は、モールス信号とモスキート音を組み合わせた通信機能と、周囲の受験者への妨害機能を備えたカンニングアプリです。
          </p>
          <ul>
            <li>
              通信モード
              <ul>
                <li>周波数を設定してモールス信号を発信する。</li>
                <li>入力したメッセージをモールス信号に変換して発信する。</li>
              </ul>
            </li>
            <li>
              妨害モード
              <ul>
                <li>
                  様々な周波数のモスキート音や、ダミーのリスニング音声を再生する。
                </li>
              </ul>
            </li>
            <li>
              電源偽装モード
              <ul>
                <li>画面が真っ暗になり、最低限の操作で通信と妨害が行える。</li>
                *電源偽装モード使用時は端末をダークモードに設定してください。
              </ul>
            </li>
          </ul>
          <p style={{ margin: "0" }}>
            遷移先のページをホーム画面に追加してご使用ください。
          </p>
          <p style={{ margin: "0", display: "flex", alignItems: "center" }}>
            <div>使い方の詳細は→</div>
            <Link to="https://github.com/yukihira-pot/tsukutte-asobu2023">
              <IconButton color="primary" aria-label="link to github repo">
                <GitHubIcon />
              </IconButton>
            </Link>
          </p>
          <Link to="/tsukutte-asobu2023/">
            <Button variant="contained" href="#contained-buttons" fullWidth>
              カンニングを始める
            </Button>
          </Link>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Lp;
