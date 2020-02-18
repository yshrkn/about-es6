<div data-breadcrumb="主な変更点 > コレクションの繰り返し(for-of)" />

<p class="importance">重要度: <span class="star">★★★</span></p>

## コレクションの繰り返し(`for-of`)

`iterable`オブジェクトに対して反復的な処理をするループを作成します。<br>（`iterable`オブジェクトとは、`String`, `Array`, `arguments`や`NodeList`オブジェクト、`TypedArray`, `Map`, `Set`, ユーザー定義の`iterable`など）

### 構文

```js
for (variable of iterable) {
  statement
}
```

- `variable`
それぞれの反復処理において、別々のプロパティの値が`variable`に代入されます。

- `iterable`
列挙可能なプロパティに対して、反復処理を行うオブジェクトです。

>>>

<div data-breadcrumb="主な変更点 > コレクションの繰り返し(for-of) > 利用例）抜粋" />

### 利用例）抜粋
詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of)。


#### `Array`で反復

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

#### `Map`で反復

```js
const iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]
```

>>>

<div data-breadcrumb="主な変更点 > コレクションの繰り返し(for-of) > 利用例）抜粋" />

`for-of`で列挙された値が`[key, value]`のようなオブジェクトの場合、`const [key, value]`のように記述すると、左辺にキー、右辺に値が代入されます。

```js
const iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```