<div data-breadcrumb="主な変更点 > イテレータ" />

<p class="importance">重要度: <span class="star">★</span></p>

## イテレータ

>>>
<div data-breadcrumb="主な変更点 > Proxy > イテレータ > 概要" />

### 概要
イテレータはオブジェクトの内容を列挙するための仕組みを備えたオブジェクトです。<br>`Array`, `String`, `Map`, `Set`などの組み込みオブジェクトはデフォルトイテレータを備えているので、`for of`命令で配下の要素を列挙可能になっています。<br>
詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を参照してください。

<br>
**`for of`による列挙**

```js
let array = [10, 20, 30];
let str = 'abc';
let map = new Map([['MON', '月'], ['TUE', '火'], ['WED', '水']]);

for (let val of array) {
  console.log(val); // 10 20 30
}

for (let val of str) {
  console.log(val); // a b c
}

for (let [key, val] of map) {
  console.log(`${key} : ${val}`); // MON : 月　TUE : 火　WED : 水
}
```

>>>

<div data-breadcrumb="主な変更点 > Proxy > イテレータ > 概要" />

イテレータは、「順番に**イテレータリザルト**を取り出すことのできるオブジェクト」です。<br>
下記2点を満たす必要があります。<br>

- `next()`メソッドを持つ
- `next()`を実行するとイテレータリザルトを返す

<br>

#### イテレータリザルト
- `value`

イテレータから取り出した値・アイテム

- `done`

イテレータから値を取り出し終えたかどうかの真偽値

<br>

`for of`は**イテラブルなオブジェクト**に対して有効な命令です。<br>**イテラブルなオブジェクト**とは、`[Symbol.iterator]()`を実行するとイテレータを返すものをいいます。

>>>

<div data-breadcrumb="主な変更点 > Proxy > イテレータ > イテラブルなオブジェクトの定義 > イテレータの定義" />

##### 指定された数値の範囲で任意のギャップを持った数値を取得する例

**イテレータの定義**

```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let count = 0;
  let returned = false;
  const result = {};

  result[Symbol.iterator] = () => {
    const iterator = {};

    iterator.next = () => {
      let iteratorResult;
      if (nextIndex < end) {
          iteratorResult = { value: nextIndex, done: false };
          nextIndex += step;
          count += 1;
      } else if (!returned) {
          iteratorResult = { value: count, done: true };
          returned = true;
      } else {
          iteratorResult = { done: true };
      }
      return iteratorResult;
    };
    return iterator;
  };
  return result;
};
```

>>>

<div data-breadcrumb="主な変更点 > Proxy > イテレータ > イテラブルなオブジェクトの定義 > イテレータの実行" />

**イテレータの実行**

```js
const iterator = makeRangeIterator(1, 10, 2); // 1から10の範囲を2とばしで取得するイテレータ
for (let v of iterator) {
  console.log(v); // 1 3 5 7 9
}
```