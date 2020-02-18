<div data-breadcrumb="主な変更点 > アロー関数(=>)" />

<p class="importance">重要度: <span class="star">★★★★★</span></p>

## アロー関数(`=>`)

<div data-breadcrumb="主な変更点 > アロー関数(=>)" />
関数定義に`()=>`の省略記法が使用可能になりました。<br>アロー関数式で宣言された関数は、宣言された時点で`this`を確定（＝束縛）します。

>>>
<div data-breadcrumb="主な変更点 > アロー関数(=>) > 構文" />

### 構文


`function`キーワードは不要になり、`()=>`を使用します。

- 従来

```js
let getTriangle = function(base, height) {
  return base * height / 2;
}
```

- アロー関数

```js
let getTriangle = (base, height) => {
  return base * height / 2;
}
```

>>>

<div data-breadcrumb="主な変更点 > アロー関数(=>) > 構文" />

関数本体が一文である場合、ブロックを表す`{ }`を省略できます。<br>その場合、その文が戻り値とみなされるので`return`命令も省略できます。

- 省略なし

```js
let getTriangle = (base, height) => {
  return base * height / 2;
}
```

- 省略あり

```js
let getTriangle = (base, height) => base * height / 2;
```

>>>

<div data-breadcrumb="主な変更点 > アロー関数(=>) > 構文" />

- 引数がひとつの場合、引数をくくるカッコを省略できます。

```js
let getCircle = radius => radius * radius * Math.PI;
```

- 引数がない場合はカッコを省略せずに記述します。

```js
let show = () => console.log('Hello, world!');
```

- 即時関数は実行する`()`は<span class="marker">外側に出して記述しないとエラー</span>になります。

```js
(() => { /* 関数本体 */ })();
(() => { /* 関数本体 */ }()); // アロー関数ではエラー
```

>>>


### `this`の束縛
<div data-breadcrumb="主な変更点 > アロー関数(=>) > thisの束縛" />

アロー関数では、`this`は<span class="marker">アロー関数が宣言された場所</span>によって決まります。<br>つまり定義したコンテキストで`this`を固定します。

>>>
<div data-breadcrumb="主な変更点 > アロー関数(=>) > thisの束縛 > アロー関数を使用しない場合" />

- **アロー関数を使用しない場合**

`bind`を使用して実行先関数内の`this`を紐づける必要があります。<br>`bind`を使用しない場合、`settimeout`内の`this`は`Window`オブジェクトです。

```js
var person = {
  name: 'ken',
  hobby: 'baseball',
  callName: function() {
    console.log("私の名前は" + this.name);

    setTimeout(function(){
      console.log('趣味は' + this.hobby);
    }.bind(this), 1000);  // bindでthisを確定しておかないと、趣味は'undefined'
  },
}

person.callName();
// 私の名前はken
// 趣味はbaseball
```

>>>

<div data-breadcrumb="主な変更点 > アロー関数(=>) > thisの束縛 > アロー関数を使用する場合" />

- **アロー関数を使用する場合**

宣言された位置で`this`が決まるため、`bind`は不要です。<br>この場合の`setTimeout`内の`this`は`person`オブジェクトです。

```js
var person = {
  name: 'ken',
  hobby: 'baseball',
  callName: function() {
    console.log("私の名前は" + this.name);

    setTimeout(() => {
      console.log('趣味は' + this.hobby);
    }, 1000); // 宣言時にthisが確定するため、bind()は不要
  },
}

person.callName();
// 私の名前はken
// 趣味はbaseball
```