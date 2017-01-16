# Xmorse

> **Xmorse** is a pure JavaScript library for encoding / decoding morse code messages, **unicode supported**.

[![Build Status](https://travis-ci.org/hustcc/xmorse.svg?branch=master)](https://travis-ci.org/hustcc/xmorse) [![npm](https://img.shields.io/npm/v/xmorse.svg?style=flat-square)](https://www.npmjs.com/package/xmorse) [![npm](https://img.shields.io/npm/dt/xmorse.svg?style=flat-square)](https://www.npmjs.com/package/xmorse) [![npm](https://img.shields.io/npm/l/xmorse.svg?style=flat-square)](https://www.npmjs.com/package/xmorse)


# 1. Install

> **npm install xmorse**


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

For `encode(msg)`, example:

```js
// standart morse
xmorse.encode('Hello, Xmorse!');
  
// unicode
xmorse.encode('コンニチハ, セカイ!');
xmorse.encode('越过长城，走向世界');
```

For `decode(morse)`, example:

```js
xmorse.decode('../.-../---/...-/./-.--/---/..-/-/---/---/--...-....-...-/-..---..-.-----/---..-...--...-/-..----.--.....');
```


# 4. Test

> npm install
> 
> npm test


# 5. LICENSE

MIT@[hustcc](https://github.com/hustcc)