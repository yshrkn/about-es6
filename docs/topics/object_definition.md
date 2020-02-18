<div data-breadcrumb="主な変更点 > オブジェクト定義の簡略化" />

<p class="importance">重要度: <span class="star">★★★★</span></p>

## オブジェクト定義の簡略化

オブジェクト定義の構文が強化されました。

>>>
<div data-breadcrumb="主な変更点 > オブジェクト定義の簡略化 > プロパティ定義" />

### プロパティ定義

プロパティ定義を簡略化して記述できます。<br>変数名とプロパティ名が同じところに、値が代入されます。

#### 構文

```js
let a = "foo",
    b = 42,
    c = {};

// ES6でのショートハンド
let obj = { a, b, c }; // { a: "foo", b: 42, c: {} }
```

- 従来

```js
let a = "foo",
    b = 42,
    c = {};

let obj = {
  a: a,
  b: b,
  c: c
}; // {a: "foo", b: 42, c: {…}}
```

>>>
<div data-breadcrumb="主な変更点 > オブジェクト定義の簡略化 > メソッド定義" />

### メソッド定義

ES6ではメソッドを定義するとき、`function`キーワードは省略できます。

#### 構文

```js
let obj = {
  myMethod() { },
  * myGeneratorMethod() { }
};
```

- 従来

```js
let obj = {
  myMethod: function() { },
  myGeneratorMethod: function *() { } // ジェネレーター（後述） ※ES5にジェネレーターはありません。
};
```

>>>

<div data-breadcrumb="主な変更点 > オブジェクト定義の簡略化 > 動的なプロパティ定義" />

### 動的なプロパティ定義

ES6では動的なプロパティ名を定義できます。<br>
`[ ]`内に記述された式の結果が、プロパティ名になります。

#### 構文

```js
let i = 0;
let a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3
```

>>>

#### 利用例

<div data-breadcrumb="主な変更点 > オブジェクト定義の簡略化 > 動的なプロパティ定義 > 利用例" />

```js
let param = 'size';
let config = {
  [param]: 12,
  // 'size'の1文字目を大文字化 + 残り文字連結
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: // 4
};

console.log(config); // { size: 12, mobileSize: 4 }
```