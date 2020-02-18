<div data-breadcrumb="主な変更点 > シンボル型(Symbol)" />

<p class="importance">重要度: <span class="star">★★★</span></p>

## シンボル型(`Symbol`)

`Symbol`型が追加されました。<br>`Symbol`型は、生成された自分自身とのみ等価になります。<br>詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。


>>>
<div data-breadcrumb="主な変更点 > シンボル型(Symbol) > パラメータ/性質" />

### 構文

引数に文字列を受け取ります。<br>`new`キーワードで実行するとエラーになります。

```js
Symbol([description])
```

### 性質

シンボルは生成されるたびに新しいオブジェクトを生成します。<br>生成されたオブジェクトは、<span class="marker">自分自身のみと等価になります。</span>

```js
const sym1 = Symbol('hoge');
const sym2 = Symbol('hoge');

console.log(sym1 === sym1); // true
console.log(sym1 === sym2); // false
```

>>>
<div data-breadcrumb="主な変更点 > シンボル型(Symbol) > 利用例 > 定数のように宣言する" />

### 利用例

### 定数のように宣言する

定数のようにンボルで指定する方法があります。<br>
※`Symbol`は数値型に変換できない等の制約があるため、定数の完全な代替手段にはなりません。

- **従来**

定数に便宜上の数値、文字列を与えておく必要がありました。

```js
const MONDAY = 0;
const JANUARY = 0;

console.log(MONDAY === JANUARY); // true
console.log(MONDAY === 0); // true
```

- **ES6**

```js
const MONDAY = Symbol();
const TUESDAY = Symbol();
const today = MONDAY;

console.log(today === MONDAY); // true
console.log(today === TUESDAY); // false
console.log(MONDAY === TUESDAY); // false
```

>>>

<div data-breadcrumb="主な変更点 > シンボル型(Symbol) > 利用例 > オブジェクトのキーに使用する" />

### オブジェクトのキーに使用する

オブジェクトのキーとして定義することができます。

```js
const sym = Symbol();
const obj = {
  [sym]: 'hoge',
  'key1': '',
  'key2': '',
};

console.log(obj[sym]); // hoge
```

しかし、<span class="marker">`for in`や`JSON.stringify`などを利用してシンボルを列挙することはできません。</span><br>
シンボルを列挙するには、`Object.getOwnPropertySymbols()`を使用します。

```js
for (key in obj) {
  console.log(key); // key1 key2
}

// 列挙可能/不可能にかかわらずプロパティを返すメソッド
console.log(Object.getOwnPropertyNames(obj)); // ["key1", "key2"]

// JSONへパース
console.log(JSON.stringify(obj)); // {"key1":"","key2":""}

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol()]
```

>>>

<div data-breadcrumb="主な変更点 > シンボル型(Symbol) > 利用例 > ビルトインオブジェクトを安全に拡張する" />

### ビルトインオブジェクトを安全に拡張する

組み込みオブジェクトの拡張にも使用できます。

- **従来**

組み込みオブジェクトの拡張は、他プログラムとの名前空間の衝突が起こりやすいです。

```js
// ’shuffle’という名前は既に他プログラムで追加されているかもしれない。
Array.prototype.shuffle = () => { };
['hoge','foo'].shuffle();
```

- **ES6**

シンボルを使用して、プロトタイプ汚染を気にせず安全に拡張できます。

```js
const shuffle = Symbol('shuffle');
Array.prototype[shuffle] = () => { };
['hoge','foo'][shuffle]();
```