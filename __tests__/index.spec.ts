import { encode, decode } from '../src';
import { STANDARD } from '../src/const';
import casual from 'casual';

describe('XMorse', function() {
  it('test morse unicode.', function() {
    // unicode
    expect(encode('I love you, 我爱你。')).toBe(
      '../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.',
    );
    expect(
      decode('../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.'),
    ).toBe('ILOVEYOU,我爱你。');
  });

  it('test morse STANDARD.', function() {
    for (var k in STANDARD) {
      expect(encode(k)).toBe(STANDARD[k].replace(/0/g, '.').replace(/1/g, '-'));
      expect(decode(STANDARD[k].replace(/0/g, '.').replace(/1/g, '-'))).toBe(k);
    }
    // combine
    expect(encode('I love you.')).toBe('../.-../---/...-/./-.--/---/..-/.-.-.-');
    expect(decode('../.-../---/...-/./-.--/---/..-/.-.-.-')).toBe('ILOVEYOU.');
  });

  it('test xmorse random text.', function() {
    // random test
    var w;
    for (var i = 10000; i >= 0; i--) {
      w = casual.sentence;
      expect(w.replace(/\s+/g, '').toLocaleUpperCase()).toBe(decode(encode(w)));
    }
  });

  it('test xmorse option.', function() {
    // test options
    var option = {
      space: ' ',
      long: '-',
      short: '*',
    };
    expect(encode('I love you. 我爱你', option)).toBe(
      '** *-** --- ***- * -*-- --- **- *-*-*- --***-****-***- ---**-***--***- -**----*--*****',
    );
    expect(
      decode('** *-** --- ***- * -*-- --- **- *-*-*- --***-****-***- ---**-***--***- -**----*--*****', option),
    ).toBe('ILOVEYOU.我爱你');

    expect(encode('Hello', { space: ' ' })).toBe('.... . .-.. .-.. ---');
    expect(decode('.... . .-.. .-.. ---', { space: ' ' })).toBe('HELLO');
  });

  it('test some cases.', function() {
    // test some cases
    expect(encode('')).toBe('');
    expect(decode('')).toBe('');

    expect(decode('a')).toBe('');
    expect(decode('  ')).toBe('');
  });
});
