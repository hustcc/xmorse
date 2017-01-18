'use strict';
var test = require('tape');
var xmorse = require('..');
var casual = require('casual');

test('xmorse code test', function (t) {
  // unicode
  t.equal(xmorse.encode('I love you, 我爱你。'), '../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.');
  t.equal(xmorse.decode('../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.'), 'ILOVEYOU,我爱你。');

  // for standard morse code
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
  for (var k in standard) {
    t.equal(xmorse.encode(k), standard[k], 'test encode `' + k + '` should be equal.');
    t.equal(xmorse.decode(standard[k]), k, 'test decode `' + k + '` should be equal.');
  }
  // combine
  t.equal(xmorse.encode('I love you.'), '../.-../---/...-/./-.--/---/..-/.-.-.-');
  t.equal(xmorse.decode('../.-../---/...-/./-.--/---/..-/.-.-.-'), 'ILOVEYOU.');

  // random test
  var w;
  for (var i = 10000; i >= 0; i--) {
    w = casual.sentence;
    t.equal(w.replace(/\s+/g, '').toLocaleUpperCase(), xmorse.decode(xmorse.encode(w)), 'random sentence `' + w + '`');
  }
  
  // test options
  var option = {
    space: ' ',
    long: '-',
    short: '*'
  };
  t.equal(xmorse.encode('I love you. 我爱你', option), '** *-** --- ***- * -*-- --- **- *-*-*- --***-****-***- ---**-***--***- -**----*--*****');
  t.equal(xmorse.decode('** *-** --- ***- * -*-- --- **- *-*-*- --***-****-***- ---**-***--***- -**----*--*****', option), 'ILOVEYOU.我爱你');

  t.end();
});