<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static)" />

<p class="importance">重要度: <span class="star">★★★★★</span></p>

## クラス(`class`/`extends`/`super`/`static`)

クラス構文をサポートします。<br>あくまで糖衣構文であるため、内部的にはプロトタイプベースに変わりありません。

>>>
<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義" />

### クラスの定義

クラスの定義方法は2つあります。

- クラス宣言

<span class="marker">**関数宣言**ではホイスティング（巻き上げ）が発生しますが、**クラス宣言**では発生しません。</span>

```js
class MyClass {
  // クラス本体
}
```

- クラス式

```js
// 名前なし
const MyClass = class { };
console.log(MyClass.name); // "MyClass"

// 名前つき
const MyAnotherClass = class MyClass2 { };
console.log(MyAnotherClass.name); // "MyClass2"
```

>>>

<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義 > コンストラクタの定義" />

#### クラス本体の定義

##### コンストラクタの定義

- **コンストラクタ**

コンストラクタはクラスをインスタンス化したときに実行されれブロックです。<br><span class="marker">クラス本体には1つのコンストラクタを記述</span>できます。

```js
class MyClass {
  constructor() {
    // 最初に実行されるブロック
  }
}
```

>>>

<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義 > コンストラクタの定義 > 既定のコンストラクタ" />

- **既定のコンストラクタ**

`constructor`を指定しなかった場合、既定のコンストラクタが使用されます。

- 基本クラス

```js
constructor() {}
```

- サブクラス

```js
constructor(...args) {
  super(...args);
}
```

>>>

<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義 > インスタンス化" />

- **インスタンス化**

クラスを実体化することを<span class="marker">インスタンス化</span>といいます。<br>インスタンス化するには、`new`キワードを使用します。

```js
const foo = new MyClass(); // fooはMyClassクラスのインスタンス
```

>>>

<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義 > クラス本体の定義 > プロパティの定義" />

##### プロパティの定義


###### インスタンスプロパティ

インスタンスプロパティはメソッド内で宣言します。<br>インスタンス化される際の`this`は、返却される新しいオブジェクトを指しています。
```js
class Human {
  // ここには宣言できない
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

###### クラスに付随するプロパティ
クラスに関わるその他のプロパティは、下記のように宣言できます。

```js
Human.myProp = 'hoge';
Human.prototype.myProtoProp = 'protpHoge';
```

>>>

<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義 > クラス本体の定義 > メソッドの定義" />

##### メソッドの定義

```js
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`こんにちは。私は${this.name}。今年${this.age}歳です。`);
  }
}

const taro = new Human("太郎", 25);
taro.sayHello(); // こんにちは。私は太郎。今年25歳です。
```

>>>

<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義 > クラス本体の定義 > メソッドの定義 > 静的メソッド" />

##### 静的メソッド
`static`キーワードを使用してメソッドを記述すると、静的メソッドになります。<br>静的メソッドは<span class="marker">インスタンス化されていない場合に呼ぶことができます。</span>

- 例）URLパラメータを取得する<br>アクセスURL: `https://www.hoge.com?param1=val&param2=100`

```js
class Utils {
  static getUrlParameters() {
    const result = {};
    const pears = location.search.replace(/^\?/, '').split(/\&/g);

    console.log(pears); // ["param1=val", "param2=100"]

    pears.forEach(pear => {
      const splitted = pear.split('=');
    	result[splitted[0]] = splitted[1];
    });

    return result;
  }
}

console.log(Utils.getUrlParameters()); // {param1: "val", param2: "100"}
```

>>>

<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義 > クラス本体の定義 > 継承" />

##### 継承
`extends`キーワードを使用すると、基本クラスを継承したサブクラスを定義できます。

<br>

###### メソッドのオーバーライド
サブクラスで親クラスのメソッド/コンストラクタをオーバーライドすることができます。<br>
オーバーライドするにはサブクラスの<span class="marker">コンストラクタの先頭で、親クラスを表す`super`キーワードを呼び出します。</span>

>>>

<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義 > クラス本体の定義 > 継承 > メソッドのオーバーライド" />

- **メソッドのオーバーライド**

```js
// 親クラス
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`こんにちは。私は${this.name}。今年${this.age}歳です。`);
  }
}

```

```js
// サブクラス
class Superman extends Human {
  constructor(name, age) {
    super(name, age); // 基底クラスのコンストラクタを呼び出し、パラメータを渡す
  }

  sayHello() {
    super.sayHello();
    console.log(`地球を守ります。`);
  }
}

const superman = new Superman("スーパーマン", 100);
superman.sayHello(); // こんにちは。私はスーパーマン。今年100歳です。
                     // 地球を守ります。
```

>>>
<div data-breadcrumb="主な変更点 > クラス(class/extends/super/static) > クラスの定義 > クラス本体の定義 > 継承 > サブクラスに新規メソッドを定義" />

- **サブクラスに新規メソッドを定義**

```js
class Superman extends Human {
  constructor(name, age) {
    super(name, age);
  }

  sayHello() {
    super.sayHello();
    console.log('地球を守ります。');
  }

  fly() {
    console.log('空を飛びます。');
  }
}

const superman = new Superman("スーパーマン", 100);
superman.sayHello(); // こんにちは。私はスーパーマン。今年100歳です。
                     // 地球を守ります。
superman.fly(); // 空を飛びます。
```