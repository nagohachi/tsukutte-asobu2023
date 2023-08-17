// 0:短音, 1:長音
const morse: { [key: string]: string } = {
  a: "01"
};

export function CharToMorse(char: string) {
  if (!(char in morse)) return;
  for (var i = 0; i < morse[char].length; i++) {
    if (morse[char].charAt(i) == "0") {
      // 短音を鳴らす
    }
    if (morse[char].charAt(i) == "1") {
      // 長音を鳴らす
    }
  }
}
