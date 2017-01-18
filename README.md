# Xmorse

> **Xmorse** is a pure javascript(~1.5kb) library for encoding / decoding morse code messages, **unicode supported**.

[中文说明文档](README_ZH.md) | [Online DEMO 地址](http://git.hust.cc/xmorse/) 

[![Build Status](https://travis-ci.org/hustcc/xmorse.svg?branch=master)](https://travis-ci.org/hustcc/xmorse) [![npm](https://img.shields.io/npm/v/xmorse.svg?style=flat-square)](https://www.npmjs.com/package/xmorse) [![npm](https://img.shields.io/npm/dt/xmorse.svg?style=flat-square)](https://www.npmjs.com/package/xmorse) [![npm](https://img.shields.io/npm/l/xmorse.svg?style=flat-square)](https://www.npmjs.com/package/xmorse)


# 1. Install

> **npm install xmorse**

Or download `dist/xmorse.min.js` source file。

# 2. Import It

 - `Script` tag.

```html
<script type="text/javascript" src="dist/xmorse.min.js"></script>
```

 - `ES6` style.

```js
var xmorse = require('xmorse');

//or

import xmorse from 'xmorse';
```


# 3. Usage & API

There is only 2 API named `encode`, `decode`.

For `encode(msg, [option])`, example:

```js
// standart morse
xmorse.encode('Hello, Xmorse!');
  
// unicode
xmorse.encode('コンニチハ, セカイ!');
xmorse.encode('越过长城，走向世界');

// option
var option = {
  space: ' ',
  long: '-',
  short: '*'
};
xmorse.encode('越过长城，走向世界', option);
```

For `decode(morse, [option])`, example:

```js
xmorse.decode('../.-../---/...-/./-.--/---/..-/-/---/---/--...-....-...-/-..---..-.-----/---..-...--...-/-..----.--.....');

// option
var option = {
  space: ' ',
  long: '-',
  short: '*'
};
xmorse.decode('*-** --- ***- *', option);
```


# 4. Test

> npm install
> 
> npm test


# 5. LICENSE

MIT@[hustcc](https://github.com/hustcc)