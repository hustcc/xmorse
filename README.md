# Xmorse

> **Xmorse** is a pure javascript(~1.5kb) library for encoding / decoding morse code messages, **unicode supported**.

[中文说明文档](README_ZH.md) | [Online DEMO 地址](https://atool.vip/morse) 

[![Build Status](https://github.com/hustcc/xmorse/workflows/build/badge.svg)](https://github.com/hustcc/xmorse/actions)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/xmorse/badge.svg?branch=master)](https://coveralls.io/github/hustcc/xmorse?branch=master)
[![npm](https://img.shields.io/npm/v/xmorse.svg)](https://www.npmjs.com/package/xmorse)
[![npm](https://img.shields.io/npm/dm/xmorse.svg)](https://www.npmjs.com/package/xmorse)
[![npm](https://img.shields.io/npm/l/xmorse.svg)](https://www.npmjs.com/package/xmorse)


# 1. Install

> **npm install xmorse**

Or download `dist/xmorse.min.js` source file。

# 2. Import It

 - `Script` tag.

```html
<script type="text/javascript" src="dist/xmorse.min.js"></script>
```

 - `ES6` style.

```ts
import { decode, encode } from 'xmorse';
```


# 3. Usage & API

There is only 2 API named `encode`, `decode`. For `encode(msg, [option])`, example:

```ts
import { decode, encode } from 'xmorse';
// standart morse
encode('Hello, Xmorse!');
  
// unicode
encode('コンニチハ, セカイ!');
encode('越过长城，走向世界');

// option
const option = {
  space: ' ',
  long: '-',
  short: '*'
};
encode('越过长城，走向世界', option);
```

For `decode(morse, [option])`, example:

```ts
import { decode, encode } from 'xmorse';
decode('../.-../---/...-/./-.--/---/..-/-/---/---/--...-....-...-/-..---..-.-----/---..-...--...-/-..----.--.....');

// option
const option = {
  space: ' ',
  long: '-',
  short: '*'
};
decode('*-** --- ***- *', option);
```


# 4. Test

```bash
$npm install

$npm test
```


# 5. LICENSE

MIT@[hustcc](https://github.com/hustcc)
