# Xmorse

> **Xmorse** 是一个纯 JavaScript 开发仅仅只有 1.5kb 的摩斯密码库，支持浏览器端和 nodejs，支持 unicode 字符串，支持中文 morse 密码编码。

[English Document](README.md) | [在线 DEMO 地址](https://atool.vip/morse) 

[![Build Status](https://github.com/hustcc/xmorse/workflows/build/badge.svg)](https://github.com/hustcc/xmorse/actions)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/xmorse/badge.svg?branch=master)](https://coveralls.io/github/hustcc/xmorse?branch=master)
[![npm](https://img.shields.io/npm/v/xmorse.svg)](https://www.npmjs.com/package/xmorse)
[![npm](https://img.shields.io/npm/dm/xmorse.svg)](https://www.npmjs.com/package/xmorse)
[![npm](https://img.shields.io/npm/l/xmorse.svg)](https://www.npmjs.com/package/xmorse)



# 1. 下载安装

> **npm install xmorse**

或者直接下载 `dist/xmorse.min.js` 文件。


# 2. 引入库

 - `script` 标签引入.

```html
<script type="text/javascript" src="dist/xmorse.min.js"></script>
```

 - `import` 语法风格.

```ts
import { encode, decode } from 'xmorse';
```


# 3. 使用 & API 接口

这个库仅仅只有两个 API 方法，分别为： `encode`，`decode`。对于 API `encode(msg, [option])`，例子如下：

```ts
import { encode, decode } from 'xmorse';

// 编码标准 摩斯密码
encode('Hello, Xmorse!');
  
// 对于 unicode 编码
encode('越过长城，走向世界');

// option 配置
const option = {
  space: ' ',
  long: '-',
  short: '*'
};
encode('越过长城，走向世界', option);
```

对于 API `decode(morse, [option])`，例子如下：

```ts
import { encode, decode } from 'xmorse';

decode('../.-../---/...-/./-.--/---/..-/-/---/---/--...-....-...-/-..---..-.-----/---..-...--...-/-..----.--.....');

// option 配置
const option = {
  space: ' ',
  long: '-',
  short: '*'
};
decode('*-** --- ***- *', option);
```


# 4. 测试开发

```bash
$npm install

$npm test
```


# 5. 开源协议

MIT@[hustcc](https://github.com/hustcc)
