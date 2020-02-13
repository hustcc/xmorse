import { Option } from './types';
import { DEFAULT_OPTION, STANDARD } from './const';

// to hex
function unicodeHexMorse(ch: string): string {
  const r = [];
  for (var i = 0; i < ch.length; i++) {
    r[i] = ('00' + ch.charCodeAt(i).toString(16)).slice(-4);
  }

  let s = r.join(''); // unicode 值
  s = parseInt(s, 16).toString(2); // 转二进制
  return s;
}

/**
 * encode: encode string to morse code.
 * - msg: strings need to be encode.
 * - option: encode option.
 *
 * Return the morse code.
 *
 * Usage
 * var option = {
 *  space: ' ',
 *  long: '-',
 *  short: '*'
 * };
 * encode('I love you.', option);
 * Will get return with `** *-** --- ***- * -*-- --- **- *-*-*-`.
 *
 **/
export function encode(msg: string, option?: Option): string {
  const { space, short, long } = {
    ...DEFAULT_OPTION,
    ...option,
  };

  // 删除空格，转大写，分割为数组
  const text = msg
    .replace(/\s+/g, '')
    .toLocaleUpperCase()
    .split('');

  return text
    .map((ch: string) => {
      let r = STANDARD[ch];
      if (!r) {
        r = unicodeHexMorse(ch); // 找不到，说明是非标准的字符，使用 unicode。
      }

      return r.replace(/0/g, short).replace(/1/g, long);
    })
    .join(space);
}
