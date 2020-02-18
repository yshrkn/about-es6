<div data-breadcrumb="主な変更点 > モジュール(import/export)" />

<p class="importance">重要度: <span class="star">★★★★★</span></p>

## モジュール(`import`/`export`)

ブラウザの標準機能として、ファイル分割/依存関係解決の機能が追加されました。<br>
詳細な構文はMDNの[import](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import), [export](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export)参照。<br><br>全ブラウザでサポートされていないため、使用するにはBabel等のトランスコンパイラを使用します。<br>
サポートされているブラウザでは、`<script>`タグの属性に`type="module"`を記述することで使用可能です。

>>>
<div data-breadcrumb="主な変更点 > モジュール(import/export) > export" />

### export

#### 構文

エクスポートする変数や関数の前に`export`を記述します。<br>エクスポートされたモジュールは`strict mode`で動作します。

```js
export let myVariable = 'my variable.';
export const MY_CONST = 'my const.';
export const myFunc = () => {
  return 'myFunc ran.';
}
```

#### default export
エクスポート対象が1つの場合、`export`の後に`default`を記述できます。

```js
export default function sum(arg1, arg2) {
  return arg1 + arg2;
}
```

##### Classの場合
```js
export default class Calc {
  constructor() { }

  static sum(arg1, arg2) {
    return arg1 + arg2;
  }
}
```

>>>
<div data-breadcrumb="主な変更点 > モジュール(import/export) > import" />

### import
読み込むモジュールを`import`文で記述します。

#### 構文

```js
// 抜粋
import * as name from "module-name";
import { export } from "module-name";
```

>>>

<div data-breadcrumb="主な変更点 > モジュール(import/export) > import > 利用例" />

#### 利用例

- export.js

```js
export let myVariable = 'my variable.';
export const MY_CONST = 'my const.';
export const myFunc = () => {
  return 'myFunc ran.';
}
```

- import.js

```js
// エクスポートされる全てのモジュールをmyModulesとして読み込む
import * as myModules from './export.js';

console.log(myModules.myVariable); // my variable.
console.log(myModules.MY_CONST); // my const.
console.log(myModules.myFunc()); // myFunc ran.
```

>>>
<div data-breadcrumb="主な変更点 > モジュール(import/export) > import" />

- export.js

```js
export let myVariable = 'my variable.';
export const MY_CONST = 'my const.';
export const myFunc = () => {
  return 'myFunc ran.';
}
```

##### インクルードしたいパーツをロードする場合

- import.js

```js
import { MY_CONST, myFunc } from './export.js';
console.log(MY_CONST); // my const.
console.log(myFunc()); // myFunc ran.
```

###### 任意の名前を付ける場合
- import.js

```js
import { MY_CONST as renameConst, myFunc as renameFunc } from './export.js';
console.log(renameConst); // my const.
console.log(renameFunc()); // myFunc ran.
```

>>>
<div data-breadcrumb="主な変更点 > モジュール(import/export) > import" />

##### デフォルトエクスポートされたクラスを使用する例

- Calc.js

```js
export default class Calc {
  constructor() { }

  static sum(arg1, arg2) {
    return arg1 + arg2;
  }
}
```

- import.js

```js
import Calc from './Calc.js';
console.log(Calc.sum(1, 2)); // 3
```