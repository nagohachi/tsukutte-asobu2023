import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Lp() {
  return (
    <>
      <div style={{ margin: '0 10%' }}>
        <img style={{ display: 'block', margin: 'auto', width:'40%'}} src="src/assets/img/icon.png" alt="Application Name" />
        <h2 style={{ margin: '16px 10%' }}>正々堂々じゃ、立ち行かないこともある。<br />
          ちょっぴりズルくて耳聡い、そんな大人のカンニングアプリ。</h2>
        <p style={{ margin: '0' }}>「」は、モールス信号とモスキート音を組み合わせた通信機能と、周囲の受験者への妨害機能を備えたカンニングアプリです。</p>
        <p style={{ margin: '0' }}>通信モードでは、周波数を設定してモールス信号を発信できます。手動での発信に加えて、入力したメッセージをモールス信号に変換して発信する機能も備えています。試験監督が年上の場合、適切な周波数を設定することで、協力者には聞こえるが試験監督には聞こえないモールス信号を発信できます。</p>
        <p style={{ margin: '0' }}>妨害モードでは、様々な周波数のモスキート音や、ダミーのリスニング音声を再生する機能を備えています。年下の受験者がいる場合、適切な周波数を設定することで、自分には影響なくライバルの集中力を低下させることができるほか、受験者全員のリスニングテストを台無しにできます。</p>
        <p style={{ margin: '0' }}>スマートフォンの電源を切ることを求められた場合や、スマートフォンを見ずに操作することが必要な場合には、電源偽装モードを使用します。画面が真っ暗になり、最低限の操作で通信と妨害が行えます。</p>
        <p style={{ margin: '0' }}>ホーム画面に追加して素晴らしいカンニングライフを送りましょう！</p>
        <div style={{margin:'16px 40%'}}>
          <Link to="/tsukutte-asobu2023">
            <Button variant="contained" href="#contained-buttons">
              カンニングを始める
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Lp;
