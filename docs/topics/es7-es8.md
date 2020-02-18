<div data-breadcrumb="おまけ ES7/ES8" />

## おまけ ES7/ES8

>>>

<div data-breadcrumb="おまけ ES7/ES8 > 追加された機能（抜粋） > ES7" />

### 追加された機能（抜粋）

#### ES7

ES7の変更は2機能の追加のみです。2016年6月にリリースされました。

<br>

- [**Array.prototype.includes()**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

特定の要素が配列に含まれているかどうかを`true`/`false`で返します。

- [**Exponentiation Operator**](https://github.com/rwaldron/exponentiation-operator)

べき乗計算のための新しいオペレータ<br>

>>>

<div data-breadcrumb="おまけ ES7/ES8 > 追加された機能（抜粋） > ES8" />

#### ES8

小規模な変更ですが、非常に便利な機能がいくつも追加されています。2017年6月にリリース。

<br>

- [**String.prototype.padStart()**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [**String.prototype.padEnd()**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

文字列長を揃えるために文字を追加します。

<br>

- [**Object.values()**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

オブジェクト自身が持つ全プロパティの値の配列を返します。

<br>

- [**Object.entries()**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

オブジェクト自身が持つ全プロパティのキーと値のペアの配列を返します。

>>>

<div data-breadcrumb="おまけ ES7/ES8 > 追加された機能（抜粋） > ES8" />

- [**getOwnPropertyDescriptors()**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)

<br>
オブジェクト自身が持つ全プロパティのプロパティディスクリプタを返します。

<div style="font-size: 80%; margin-top: 20px;">
※**プロパティディスクリプタ**<br>
オブジェクトのプロパティのメタ属性。データアクセスに関する取り決めを保持している。
</div>

<br>

- [**Trailing commas**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Trailing_commas)

関数宣言、および関数呼び出しで末尾カンマが使えるようになります。

<br>

- [**Shared Memory and Atomics**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)

`SharedArrayBuffer`を使って`WebWorker`とアプリ開発者でメモリを共有できます。

<br>

- [**Async functions**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function)

`async`, `await`構文で`Promise`をより簡潔にかけるようになりました。<br>ES8の中で最も重要な変更点です。

>>>

<div data-breadcrumb="おまけ ES7/ES8 > 追加された機能（抜粋） > ES8 > async, awaitの解説" />

#### async, awaitの解説

##### async

###### 構文

```js
async function asyncFunctionName() { }
```


`async`を関数の前に付けて宣言すると非同期関数になります。<br>非同期関数内でのみ、`await`を使用できます。

##### await

###### 構文

```js
await expression; // expression: 解決を待つPromiseもしくは値。
```

`await`は非同期関数の実行を一時停止し、`Promise`の解決つため一時停止します。<br>`Promise`解決後に非同期関数の実行は再開され、解決された値を返します。<br>`await`は非同期関数内でのみ使用できます。

>>>

###### サンプルコード

```js
function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('成功'), 2000)
  })
}

async function asyncFunc2() {
  try {
    const message = await asyncFunc();
    console.log(message);
  } catch(e) { console.log('try catchでエラー'); }
}

(async () => {
  console.log('Before');
  await asyncFunc2();
  console.log('After');
})();

/*** resolve('成功') の場合***/
// Before
// 成功 (実行から2秒後)
// After

/*** reject('失敗') の場合***/
// Before
// try catchでエラー (実行から2秒後)
// After
```

>>>

例外は`.catch()`でも書けます。

```js
function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('成功'), 2000)
  })
}

(async () => {
  console.log('Before');
  await asyncFunc().catch((val) => { console.log(val); });;
  console.log('After');
})();
```

