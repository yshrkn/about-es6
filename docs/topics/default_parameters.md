<div data-breadcrumb="主な変更点 > デフォルト引数(=/...)" />

<p class="importance">重要度: <span class="star">★★★★★</span></p>

## デフォルト引数(`=`)

引数にデフォルト値を設定できるようになりました。<br>引数が渡されなかった場合の初期値を`=`で設定できます。

### 構文

```js
function add(x, y = 0) {
  return x + y;
}

console.log(add(3)); // 3
console.log(add(4, 5)); // 9
```

>>>

<div data-breadcrumb="主な変更点 > デフォルト引数(=/...) > undefined や null を渡したときの挙動" />


### `undefined`や`null`を渡したときの挙動

```js
function add(x, y = 0) {
  console.log('y', y); // null, 0, false
  return x + y;
}

console.log(add(4, null)); // 4
console.log(add(4, undefined)); // 4
console.log(add(4, false)); // 4
```
