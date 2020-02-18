<div data-breadcrumb="主な変更点 > Proxy" />

<p class="importance">重要度: <span class="star">★</span></p>

## Proxy

>>>
<div data-breadcrumb="主な変更点 > Proxy > 概要" />

### 概要
`Proxy`は、基本的な操作 (プロパティの検索、代入、列挙、関数の起動など) について独自の動作を定義するために使用します。<br>
詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy)を参照してください。


#### 構文

```js
new Proxy(target, handler);
```

- **target**

`Proxy`でラップする対象となるオブジェクト。

- **handler**

上書く関数をプロパティに持つオブジェクト。<br>各トラップに対して対応する`handler`が用意されている。

##### 用語
- **トラップ**

オブジェクトのプロパティへのアクセスを提供するメソッドのこと。

>>>
<div data-breadcrumb="主な変更点 > Proxy > `handler`オブジェクトのメソッド(抜粋)" />

#### `handler`オブジェクトのメソッド(抜粋)

- **handler.has()**

`in`操作に対するトラップです。プロパティがあれば`true`,なければ`false`を返します。

- **handler.get()**

プロパティ値を取得するためのトラップです。

- **handler.set()**

プロパティ値を設定するためのトラップです。

>>>

##### `handler.set()`を使用した例

`obj`オブジェクトのプロパティを書き換えしようとするとエラーを出力する。

```js
const obj = {
  name: 'Ken',
};

const handler = {
  set: (target, prop, value) => {
    console.error(`${prop}は上書き禁止です`);
  }
};

const proxy = new Proxy(obj, handler); // objをラップしたproxyを生成

proxy.name = '';  // nameは上書き禁止です
console.log(proxy.name); // Ken
```

>>>


#### `Reflect`

`Reflect`は`Proxy.handler`と同じメソッドを持ち、静的な関数を返します。<br>
コンストラクタではないので`new`演算子を使用したり、関数呼び出しするようにできません。<br>
`Reflect`の全てのプロパティ・メソッドは静的です。<br>
主に`Proxy`内で本来の機能を呼び出すときに使用します。

```js
const obj = { key1 : 0, key2: 1 }
const handler = {
  has(target, name){
    // 何か上書きする処理
    return Reflect.has(target, name);
  }
}

const proxy = new Proxy(obj, handler);
console.log('key1' in proxy); // true
```
