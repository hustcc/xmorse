import { DEFAULT_OPTION, REVERSED_STANDARD } from './const';
import { Option } from './types';

function morseHexUnicode(mor) {
  mor = parseInt(mor, 2); // 解析 2 进制数
  if (isNaN(mor)) return ''; // 解析失败，直接返回空字符串跳过
  return String.fromCharCode(mor); // 转 10 进制 -> unicode 转字符串
}
/**
 * decode: encode string to morse code.
 * - morse: morse code need to be decode.
 * - option: encode option.
 *
 * Return the decode string.
 *
 * Usage
 * var option = {
 *  space: ' ',
 *  long: '-',
 *  short: '*'
 * };
 * decode('** *-** --- ***- * -*-- --- **- *-*-*-', option);
 * Will get return with `ILOVEYOU`.
 *
 **/
export function decode(morse: string, option?: Option): string {
  const { space, short, long } = {
    ...DEFAULT_OPTION,
    ...option,
  };

  return morse
    .split(space)
    .map((mor: string) => {
      const m = mor
        .replace(/\s+/g, '') // 去除空格
        .replace(new RegExp('\\' + short, 'g'), '0')
        .replace(new RegExp('\\' + long, 'g'), '1'); // 转二进制;

      let r = REVERSED_STANDARD[m];
      if (!r) r = morseHexUnicode(m); // 找不到，说明是非标准字符的 morse，使用 unicode 解析方式。
      return r;
    })
    .join('');
}
