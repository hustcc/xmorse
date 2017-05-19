// 'use strict';
var assert = require('assert');
var xmorse = require('..');
var casual = require('casual');

describe('xmorse', function() {

  it('test xmorse unicode.', function() {
    // unicode
    assert.equal(xmorse.encode('I love you, 我爱你。'), '../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.');
    assert.equal(xmorse.decode('../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.'), 'ILOVEYOU,我爱你。');
  });

  it('test xmorse standard.', function() {
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
      assert.equal(xmorse.encode(k), standard[k], 'test encode `' + k + '` should be equal.');
      assert.equal(xmorse.decode(standard[k]), k, 'test decode `' + k + '` should be equal.');
    }
    // combine
    assert.equal(xmorse.encode('I love you.'), '../.-../---/...-/./-.--/---/..-/.-.-.-');
    assert.equal(xmorse.decode('../.-../---/...-/./-.--/---/..-/.-.-.-'), 'ILOVEYOU.');
  });
  it('test xmorse random text.', function() {
    // random test
    var w;
    for (var i = 10000; i >= 0; i--) {
      w = casual.sentence;
      assert.equal(w.replace(/\s+/g, '').toLocaleUpperCase(), xmorse.decode(xmorse.encode(w)), 'random sentence `' + w + '`');
    }
  });

  it('test xmorse option.', function() {
    // test options
    var option = {
      space: ' ',
      long: '-',
      short: '*'
    };
    assert.equal(xmorse.encode('I love you. 我爱你', option), '** *-** --- ***- * -*-- --- **- *-*-*- --***-****-***- ---**-***--***- -**----*--*****');
    assert.equal(xmorse.decode('** *-** --- ***- * -*-- --- **- *-*-*- --***-****-***- ---**-***--***- -**----*--*****', option), 'ILOVEYOU.我爱你');

    assert.equal(xmorse.encode('Hello', {space: ' '}), '.... . .-.. .-.. ---');
    assert.equal(xmorse.decode('.... . .-.. .-.. ---', {space: ' '}), 'HELLO');
  });

  it('test some cases.', function() {
    // test some cases
    assert.equal(xmorse.encode(''), '');
    assert.equal(xmorse.decode(''), '');

    assert.equal(xmorse.decode('a'), '');
    assert.equal(xmorse.decode('  '), '');
  });
});