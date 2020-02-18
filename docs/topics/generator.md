<div data-breadcrumb="主な変更点 > ジェネレータ" />

<p class="importance">重要度: <span class="star">★★</span></p>

## ジェネレータ

>>>
<div data-breadcrumb="主な変更点 > Proxy > ジェネレータ > 概要" />

### 概要

ジェネレータはイテレータと同じ構造をサポートしています。<br>
ジェネレータの特徴は、関数実行時（`.next()`）に`yield`キーワードまでを処理して呼び出し元に値を返却し、そこで処理を一時停止する点です。<br>
詳しくは[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator)を参照ください。

### 構文

`function`キーワードの直後に`*`を付与します。
<br>アロー関数を宣言時に使用できません。

```js
function* generator() { ... }
const generator = function*() { ... }
```



ジェネレータ関数に関数呼び出しを行うと、関数本体のコードは実行されず、ジェネレータを返します（イテレータのようなもの）。

```js
const g = gen(); // この時点ではジェネレータを返却したのみ。
```

>>>
<div data-breadcrumb="主な変更点 > Proxy > ジェネレータ > yield" />

#### yield

`yield`は`return`とよく似ていて、関数の値を呼び出し元に返却します。<br>`return`はその場で関数を終了しますが、`yield`命令は処理を一時停止するだけです。次に呼び出された場合、その時点から処理を再開します。

```js
function* gen() {
  let count = 0;
  yield count++;
  yield count++;
  yield count++;
}

const g = gen();

console.log(g.next()); // {value: 0, done: false}
console.log(g.next()); // {value: 1, done: false}
console.log(g.next()); // {value: 2, done: false}
console.log(g.next()); // {value: undefined, done: true}

for (let v of g) {
  console.log(v); // 既にdoneはtrueなので実行されない
}
```

>>>
<div data-breadcrumb="主な変更点 > Proxy > ジェネレータ > yield > yield*" />

##### yield*

ジェネレータ内にジェネレータを含めるには、`yield*`を使用します。<br>
`yield*`にはイテラブルなオブジェクトを指定します。<br>
指定されたオブジェクトの値にそれぞれ`yield`を行います。<br>

```js
function* gen() {
  yield* [1, 2, 3];
  yield* gen2();
}

function* gen2() {
  yield 4;
  yield 5;
}

const g = gen();

console.log(g.next()); // {value: 1, done: false}
console.log(g.next()); // {value: 2, done: false}
console.log(g.next()); // {value: 3, done: false}
console.log(g.next()); // {value: 4, done: false}
console.log(g.next()); // {value: 5, done: false}
console.log(g.next()); // {value: undefined, done: true}
```

>>>
<div data-breadcrumb="主な変更点 > Proxy > ジェネレータ > ジェネレータに値を渡す" />

##### ジェネレータに値を渡す

`next()`メソッドに引数を指定することで、直前に停止した`yield`式の結果として置き換えられます。<br>
下記プログラムでは、引数に`true`を指定されるとカウンターをリセットしています。

```js
function* gen() {
  let counter = 0;

  while (true) {
    let tmp = yield counter++;

    if (tmp === true) {
      counter = 0;
    }
  }
}

const g = gen();

console.log(g.next()); // {value: 0, done: false}
console.log(g.next()); // {value: 1, done: false}
console.log(g.next()); // {value: 2, done: false}
console.log(g.next(true)); // {value: 0, done: false}
console.log(g.next()); // {value: 1, done: false}
console.log(g.next()); // {value: 2, done: false}
console.log(g.next()); // {value: 3, done: false}
```

>>>
<div data-breadcrumb="主な変更点 > Proxy > ジェネレータ > 例外処理" />

##### 例外処理

ジェネレータ内で例外を発生させると、`catch`ブロックで補足できます。<br>`catch`ブロックが見つからない場合、プログラムは停止します。

```js
function* gen() {
  throw new Error('エラー');
}

const g = gen();

try {
  console.log(g.next());
} catch (e) {
  console.log(e.message);
}
```

>>>
<div data-breadcrumb="主な変更点 > Proxy > ジェネレータ > 例外処理 > ジェネレータ内で例外を発生させる" />

###### ジェネレータ内で例外を発生させる

ジェネレータの`throw`メソッドを使用すると、ジェネレータに例外を発生させることができます。<br>`catch`ブロックで補足されない場合、呼び出し元へ伝播していき、`next`メソッドで呼び出した場合の`done`プロパティは`true`になります。

```js
function* gen() {
	try {
    let counter = 0;
    yield counter++;
    yield counter++;
    yield counter++;
  } catch(e) {
    console.log(e.message);
  }
}

const g = gen();

console.log(g.next()); // {value: 0, done: false}
g.throw(new Error('エラー')); // エラー
console.log(g.next()); // {value: undefined, done: true}
```

>>>
<div data-breadcrumb="主な変更点 > Proxy > ジェネレータ > ジェネレータを終了する" />

##### ジェネレータを終了する

ジェネレータの`return`メソッドを使用し、ジェネレータを終了できます。<br>
`return`メソッドの引数が`value`プロパティの値となって返却され、`done`プロパティは`true`になります。

```js
function* gen() {
  let counter = 0;
  yield counter++;
  yield counter++;
  yield counter++;
}

const g = gen();

console.log(g.next()); // {value: 0, done: false}
console.log(g.return('end')); // {value: "end", done: true}
console.log(g.next()); // {value: undefined, done: true}
```

>>>
<div data-breadcrumb="主な変更点 > Proxy > ジェネレータ > 主な利用例" />

##### 主な利用例

ジェネレーターの主な利用例として、「***大量のファイルを1件ずつ読み込む。***」などが挙げられます。<br>非同期に大量のファイルを読み込みとメモリの負荷が大きくなりますが、ジェネレータを利用して1件ずつ読み込むことで、メモリの負荷を抑えることができます。