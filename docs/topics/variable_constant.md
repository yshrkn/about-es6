<div data-breadcrumb="主な変更点 > 変数と定数(let/const)" />

<p class="importance">重要度: <span class="star">★★★★★</span></p>

## 変数と定数(`let`/`const`)

変数宣言に`let`, `const`が追加されました。<br>

### 構文

```js
const constVariable;
let variable;
```

>>>

<div data-breadcrumb="主な変更点 > 変数と定数(let/const) > 性質" />

### 性質

`let`, `const`にはブロックスコープが適用されるため、`{ }`の<span class="marker">外のスコープに影響を及ぼしません。</span><br>

- **let**

ブロックスコープ、<span class="marker">再宣言不可</span>

```js
let name = 'ken';
let name = 'kenji'; // Uncaught SyntaxError: Identifier 'name' has already been declared
```

```js
for (let i = 0; i < 10; i++) { }
console.log(i); // Uncaught ReferenceError: i is not defined
```

- **const**

ブロックスコープ、<span class="marker">再宣言・再代入不可</span>

```js
const NAME = 'ken';
NAME = 'ken'; // Uncaught TypeError: Assignment to constant variable.
```
