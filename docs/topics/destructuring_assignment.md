<div data-breadcrumb="主な変更点 > 分割代入" />

<p class="importance">重要度: <span class="star">★★★★</span></p>

## 分割代入

配列やオブジェクトの内容を、復数の変数に(分割して)代入できます。<br>詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。


### 構文

- **配列を分割する**

代入先の変数を`[]`で囲んで配列のように記述します。

```js
const [a, b] = ['a', 'b'];
console.log(a); // a
console.log(b); // b
```

- **オブジェクトを分割する**

代入先の変数を`{}`で囲んでオブジェクトのように記述します。

```js
const obj = {a: 'a', b: 'b'};
let {b, a} = obj; // プロパティ名が同じ変数名に値が代入される

console.log(b); // b
console.log(a); // a
```