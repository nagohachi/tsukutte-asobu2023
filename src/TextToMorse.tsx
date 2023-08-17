import { generateShortTone, generateLongTone } from "./PlaySound";

interface CharToMorseProps {
  char: string;
}

// 0:短音, 1:長音
const morse: { [key: string]: string } = {
  a: "01",
  b: "1000",
  c: "1010",
  d: "100",
  e: "0",
  f: "0010",
  g: "110",
  h: "0000",
  i: "00",
  j: "0111",
  k: "101",
  l: "0100",
  m: "11",
  n: "10",
  o: "111",
  p: "0110",
  q: "1101",
  r: "010",
  s: "000",
  t: "1",
  u: "001",
  v: "0001",
  w: "011",
  x: "1001",
  y: "1011",
  z: "1100"
};

/**
 * number ミリ秒間待つ
 * @param ms 待つ時間（ミリ秒）
 */
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 1文字をモールス信号に変換して再生する
 * @param {CharToMorseProps} char 変換する文字
 */
export function CharToMorse({ char }: CharToMorseProps) {
  if (!(char in morse)) return;

  const handleMousedown = async (_: React.MouseEvent<HTMLButtonElement>) => {
    for (var i = 0; i < morse[char].length; i++) {
      console.log(morse[char].charAt(i));
      
      if (morse[char].charAt(i) === "0") {
        generateShortTone(7040);
      } else if (morse[char].charAt(i) === "1") {
        generateLongTone(7040);
      }
      // 文字の間は 0.8 秒待つ
      await sleep(800);
    }
  };
  return (
    <button className="play__btn" onClick={handleMousedown}>▶️ 'b' (1000) を再生</button>
  );
}

