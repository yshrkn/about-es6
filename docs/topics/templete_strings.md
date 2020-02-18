<div data-breadcrumb="主な変更点 > テンプレート文字列(${})" />

<p class="importance">重要度: <span class="star">★★★★★</span></p>

## テンプレート文字列(`${}`)

文字列中に変数や式を埋め込み、その内容を展開できます。<br>テンプレート文字列は`` ` ``（グレイヴ・アクセント）で囲み、展開する変数や式は`${ }`で囲みます。

### 構文

```js
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`
```

>>>
<div data-breadcrumb="主な変更点 > テンプレート文字列(${}) > 利用例" />

### 利用例

- **変数展開**

```js
const foo = 'foo'
const bar = 'bar'
const baz = () => {
  return 'baz'
}

const foobar = `${foo}, ${bar}`
console.log(foobar); // 'foo, bar'
```

- **式の評価**

```js
const some = `${baz()}`
console.log(some); // 'baz'
```

- **コード上で見栄えを整えた文字列に使用**

```js
const str = `テキスト1
            テキスト2
            テキスト3`;
console.log(str); // テキスト1\n             テキスト2\n            テキスト3
```
