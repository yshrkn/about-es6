<div data-breadcrumb="主な変更点 > スプレッド演算子" />

<p class="importance">重要度: <span class="star">★★★★</span></p>

## スプレッド演算子

スプレッド演算子`...`を使用すると配列などを容易に操作できます。<br>オブジェクト操作はECMAScript 2018に含まれます。

### 構文

```js
let iterableObj = [1, 2, 3];

// 関数呼び出し
myFunction(...iterableObj);

// Array リテラル
[...iterableObj, '4', 'five', 6];

// Object リテラル（ECMAScript 2018 の新機能）
let objClone = { ...obj };
```

>>>

<div data-breadcrumb="主な変更点 > スプレッド演算子 > 配列のコピー" />

### 配列のコピー

```js
let array = [1, 2, 3];
let array2 = [...array];
array === array2; // false
array2.push(4); // array2 は [1, 2, 3, 4]  ※array は変更されない
```

<span class="marker">コピーは1段階の深さで行われる</span>ため、下記コードでは意図した結果を得られません。

```js
let a = [[1], [2], [3]];
let b = [...a];
console.log(a === b); // false
console.log(a[0] === b[0]); // true 浅いコピーなので、同じメモリ上の値を参照している。
b.shift().shift(); // 1
console.log(a); // [[], [2], [3]] ※a は影響を受ける。
```

>>>

<div data-breadcrumb="主な変更点 > スプレッド演算子 > 配列の展開/分割代入" />

### 配列の展開
配列内で展開すると配列を結合できます。

```js
const myArray = [3,4,5];
const anotherArray = [1, 2, ...myArray, 6, 7];
console.log(anotherArray); // [1, 2, 3, 4, 5, 6, 7]
```

### 分割代入時に複数の値を1つの配列にまとめる

```js
const [a, b, ...c] = ['a', 'b', 'c', 'd'];

console.log(a); // a
console.log(b); // b
console.log(c); // ["c", "d"]
```

>>>
<div data-breadcrumb="主な変更点 > スプレッド演算子 > 可変長引数" />

### 可変長引数
最後の引数名の先頭に`...`を付与すると、渡された引数の残りを配列として格納します。<br><span class="marker">最後以外の引数に可変長引数を指定するとエラーになります。</span>

```js
function f(a, b, ...rest){
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [3, 4, 5]
}

f(1, 2, 3, 4, 5)
```

#### 可変長引数の分割
可変長引数は分割することができます。

```js
function f(...[a, b, c]) {
  return a + b + c;
}

console.log(f(1));          // NaN (b, c は undefined)
console.log(f(1, 2, 3));    // 6
console.log(f(1, 2, 3, 4)); // 6 (第4引数はArgumentsオブジェクトにあるだけ）
```