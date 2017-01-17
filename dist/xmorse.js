/**
 * Copyright (c) 2017 hustcc
 * License: MIT
 * Version: v0.0.2
 * GitHub: https://github.com/hustcc/xmorse
**/
/* jshint expr: true */
!function (root, factory) {
  if (typeof module === 'object' && module.exports)
    module.exports = factory();
  else
    root.xmorse = factory();
}(typeof window !== 'undefined' ? window : this, 
function () {
  // Map of Morse code patterns to supported characters.
  var standard = {
  /* Letters                               */
    'A': '.-',      /* A                   */
    'B': '-...',    /* B                   */
    'C': '-.-.',    /* C                   */
    'D': '-..',     /* D                   */
    'E': '.',       /* E                   */
    'F': '..-.',    /* F                   */
    'G': '--.',     /* G                   */
    'H': '....',    /* H                   */
    'I': '..',      /* I                   */
    'J': '.---',    /* J                   */
    'K': '-.-',     /* K                   */
    'L': '.-..',    /* L                   */
    'M': '--',      /* M                   */
    'N': '-.',      /* N                   */
    'O': '---',     /* O                   */
    'P': '.--.',    /* P                   */
    'Q': '--.-',    /* Q                   */
    'R': '.-.',     /* R                   */
    'S': '...',     /* S                   */
    'T': '-',       /* T                   */
    'U': '..-',     /* U                   */
    'V': '...-',    /* V                   */
    'W': '.--',     /* W                   */
    'X': '-..-',    /* X                   */
    'Y': '-.--',    /* Y                   */
    'Z': '--..',    /* Z                   */
  /* Numbers                               */
    '0': '-----',   /* 0                   */
    '1': '.----',   /* 1                   */
    '2': '..---',   /* 2                   */
    '3': '...--',   /* 3                   */
    '4': '....-',   /* 4                   */
    '5': '.....',   /* 5                   */
    '6': '-....',   /* 6                   */
    '7': '--...',   /* 7                   */
    '8': '---..',   /* 8                   */
    '9': '----.',   /* 9                   */
  /* Punctuation                           */
    '.': '.-.-.-',  /* Full stop           */
    ',': '--..--',  /* Comma               */
    '?': '..--..',  /* Question mark       */
    '\'': '.----.', /* Apostrophe          */
    '!': '-.-.--',  /* Exclamation mark    */
    '/': '-..-.',   /* Slash               */
    '(': '-.--.',   /* Left parenthesis    */
    ')': '-.--.-',  /* Right parenthesis   */
    '&': '.-...',   /* Ampersand           */
    ':': '---...',  /* Colon               */
    ';': '-.-.-.',  /* Semicolon           */
    '=': '-...-',   /* Equal sign          */
    '+': '.-.-.',   /* Plus sign           */
    '-': '-....-',  /* Hyphen-minus        */
    '_': '..--.-',  /* Low line            */
    '"': '.-..-.',  /* Quotation mark      */
    '$': '...-..-', /* Dollar sign         */
    '@': '.--.-.',  /* At sign             */
  };
  // 计算反向的字典
  var standardReverse = {};
  for (var key in standard) {
    standardReverse[standard[key]] = key;
  }

  function unicodeHexMorse(ch) {
    var r = [];
    for(var i = 0; i < ch.length; i ++)
      r[i] = ('00' + ch.charCodeAt(i).toString(16)).slice(-4);
    r = r.join(''); // unicode 值
    r = parseInt(r, 16).toString(2); // 转二进制
    return r.replace(/0/g, '.').replace(/1/g, '-');
  }

  function encode(msg) {
    var morse = []; // 最终的 morse 结果
    // 删除空格，转大写，分割为数组
    msg = msg.replace(/\s+/g,"").toLocaleUpperCase().split('');
    var ch, r;
    for (var i = 0; i < msg.length; i++) {
      ch = msg[i];
      r = standard[ch];
      if (! r) {
        // 找不到，说明是非标准的字符，使用 unicode。
        r = unicodeHexMorse(ch);
      }
      morse.push(r);
    }
    return morse.join('/');
  }

  function morseHexUnicode(mor) {
    mor = mor.replace(/\./g, '0').replace(/\-/g, '1'); // 转二进制
    mor = parseInt(mor, 2); // 解析 2 进制数
    if (isNaN(mor)) return ''; // 解析失败，直接返回空字符串跳过
    return unescape('%u' + mor.toString(16)); // 转 16 进制 -> unicode -> unicode 转字符串
  }

  function decode(morse) {
    var msg = [];
    morse = morse.replace(/\s+/g,"").split('/');

    var mor, r;
    for (var i = 0; i < morse.length; i++) {
      mor = morse[i];
      r = standardReverse[mor];
      if (! r) {
        // 找不到，说明是非标准字符的 morse，使用 unicode 解析方式。
        r = morseHexUnicode(mor);
      }
      msg.push(r);
    }
    return msg.join('');
  }
  return {
    encode: encode,
    decode: decode
  };
});