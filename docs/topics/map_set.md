<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet)" />

<p class="importance">重要度: <span class="star">★★</span></p>

## コレクション型(`Map`/`Set`/`WeakMap`/`WeakSet`)

>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > Map" />

### Map

`Map`オブジェクトは、key/valueのセット（連想配列）を管理するためのオブジェクトです。<br>
従来のJSではオブジェクトリテラルで連想配列を管理していましたが、ES6で専用のオブジェクトが追加されました。<br>
詳しくは[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map)を参照ください。

#### 構文

```js
new Map([iterable])
```

- **iterable**

要素がキー・値の対である配列、または他の反復処理可能なオブジェクト<br>`null`は`undefined`として扱われます。

>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > Map > メンバ（抜粋）" />

#### メンバ（抜粋）

- **値のセット**

`set('key', 'value')`

- **値の取得**

`get('key')`

- **要素数**

`size`


- **指定したキーの要素が存在するか**

`has('key')`

```js
const m = new Map();

m.set('hoge', 1);
console.log(m.get('hoge')); // 1

m.set('hoge', 100);
console.log(m.get('hoge')); // 100

console.log(m.size); // 1
console.log(m.has('hoge')); // true
```

>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > Map > 繰り返し" />

#### 繰り返し

`for of`や`for each`を使用して繰り返し処理が可能です。

```js
const m = new Map([["key1", "value1"], ["key2", "value2"]]);

// .keys(): 挿入順にkeysを含む新しい Iteratorオブジェクトを返却
for (const key of m.keys()) {
  console.log(key); // key1
                    // key2
}

for (const [key, value] of m) {
  console.log(`${key}:${value}`); // key1:value1
                                  // key2:value2
}

m.forEach((value, key) => {
  console.log(`${key}:${value}`); // key1:value1
                                  // key2:value2
});
```

>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > Map > オブジェクトリテラルとの違い" />

#### オブジェクトリテラルとの違い

- **(1)任意の型でキーを設定できる**

オブジェクトリテラルではプロパティ名をキーとして代替していたので、文字列しか使用できませんでした。<br>
`Map`オブジェクトでは、任意の型をキーとして利用できます。

```js
const m = new Map();
const objKey = {};
m.set(objKey, 'objKeyのValue')
console.log(m.get(objKey));
```

- **(2)`Map`のサイズを取得できる**

オブジェクトリテラルでは、登録されたキー/値の数を`for in`を使用して走査し手動でカウントする必要がありました。<br>
`Map`では、`size`プロパティを使用して取得できます。

- **(3)クリーンなマップを作成できる**

オブジェクトリテラルは、実態が`Object`オブジェクトであるため、配下には`Object`オブジェクトが標準で用意しているプロパティ（キー）が存在します。<br>一方、`Map`オブジェクトはそれ専用のオブジェクトのため、完全に空の連想配列を作成できます。


>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > Map > キーに関わる注意点" />

#### キーに関わる注意点

- **(1)キーは「`===`」演算子で比較される**

`Map`オブジェクトでキーを比較する際、<span class="marker">「`===`」演算子が利用されます。</span><br>
以下のコードでは意図した結果は得られません。

```js
let m = new Map();
m.set('1', 'hoge');
console.log(m.get(1)); // undefined
```

キーをオブジェクトにした場合も同様です。<br>オブジェクトは参照（アドレス）で比較されるため、以下のコードでは意図した結果は得られません。

```js
let m = new Map();
m.set({}, 'hoge');
console.log(m.get({})); // undefined
```

>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > Map > キーに関わる注意点" />

#### キーに関わる注意点

- **(2)特殊な`NaN`は特別ではなくなる**

`NaN`は自分自身とも等しくない特別な値ですが、<span class="marker">`Map`の中では例外として`NaN === NaN`とみなされます。</span>

```js
let m = new Map();
m.set(NaN, 'hoge');
console.log(m.get(NaN)); // hoge
```

>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > Set" />

### Set

`Set`オブジェクトは重複しない値の集合を管理するためのオブジェクトです。<br>
プリミティブの値でもオブジェクト参照でも、どんな型でも一意の値を格納できます。<br>
重複した値が追加された場合は無視されます。<br>また、配列と違って要素は順序をもたず、インデックスによるアクセスはできません。<br>詳しくは[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)を参照ください。

#### 構文

```js
new Set([iterable])
```

- **iterable**

`iterable`なオブジェクトが渡された場合、その要素すべてが新しい`Set`オブジェクトに追加されます。<br>`null`は`undefined`として扱われます。

>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > Set > メンバ（抜粋）" />

#### メンバ（抜粋）

- **値のセット**

`add('value')`

- **全ての値を取得**

`values()`

※`keys()`も使用可能。`values()`と同じ関数。

- **要素数**

`size`


- **指定した値が存在するか**

`has('key')`

```js
let s = new Set();
s.add(10);
s.add(20);
s.add(10); // 無視される
console.log(s.has(20)); // true
console.log(s.size); // 2
console.log(s.values()); // {10, 20}
```

>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > Set > 繰り返し" />

#### 繰り返し

`for of`て繰り返し処理が可能です。

```js
const set = new Set();
set.add("a");
set.add("b");

for (const value of set) {
    console.log(value); // a
                        // b
}
```

#### `NaN`オブジェクトの比較

`Map`オブジェクトと同様、`Set`オブジェクトでも<span class="marker">`NaN`は自分自身と等しくなります。</span><br>
オブジェクトの追加も`Map`オブジェクトと同様、参照による比較に気をつける必要があります。

```js
const s = new Set();
s.add(NaN);
s.add(NaN);
console.log(s.size); // 1

s.add({});
s.add({});
console.log(s.size); // 3 異なるオブジェクトとして追加される
```

>>>
<div data-breadcrumb="主な変更点 > コレクション型(Map/Set/WeakMap/WeakSet) > `WeakMap`と`WeakSet`" />

### `WeakMap`と`WeakSet`

`Map`, `Set`には、それぞれよく似たオブジェクトの`WeakMap`、`WeakSet`があります。<br>
`WeakMap`と`WeakSet`が`Map`, `Set`と大きく違う点は、キーにオブジェクト（参照）のみを指定できることです。<br>また、キーが他に参照されていない場合、ガベージコレクションの対象になり、メモリリーク対策になります。<br><br>
利用例としては、`DOM`とデータを紐づけ、DOMが削除された場合に関連するデータもガベージコレクションの対象とする方法があります。<br>詳しくは下記を参照してください。<br><br>
[WeakMap](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)<br>
[WeakSet](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
