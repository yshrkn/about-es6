<div data-breadcrumb="主な変更点 > Promise" />

<p class="importance">重要度: <span class="star">★★★★★</span></p>

## Promise

>>>
<div data-breadcrumb="主な変更点 > Promise > 概要" />

### 概要
`Promise`は非同期処理を扱うオブジェクトで、コールバックなどと比べてわかりやすい構文で記述することができます。<br>
詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)を参照してください。


#### 構文

```js
new Promise((resolve, reject) => { ... });
```

- **resolve**

非同期タスクが成功して完了した場合に呼び出してあげる関数。タスクの結果を値として返します。

- **reject**

タスクが失敗した場合に呼び出してあげる関数。失敗した理由（一般的に`error`オブジェクト）を返します。

<br>

`Promise`付きの関数を作成するには、返り値に`Promise`インスタンスを設定します。

```js
function myAsyncFunction() {
  return new Promise((resolve, reject) => {
    // resolve or reject
  });
}
```

>>>

<div data-breadcrumb="主な変更点 > Promise > thenメソッドとcatchメソッド" />

`Promise`インスタンスのプロトタイプには`then()`, `catch()`メソッドがあります。

#### then()
`Promise`が成功/失敗した場合の2つの引数を持ち、`Promise`を返します。

##### 構文

```js
promiseInstance.then(onFulfilled[, onRejected]);
```

- **onFulfilled**

成功したときに呼び出してあげる関数。1つの引数を持ち、`resolve`時に渡される値を受け取ることができます。

- **onRejected**（オプション）

失敗したときに呼び出してあげる関数。1つの引数を持ち、`reject`時に渡される値を受け取ることができます。<br>例外(エラー)が発生した場合にも呼ばれます。

>>>
<div data-breadcrumb="主な変更点 > Promise > thenメソッドとcatchメソッド" />

##### 例

500ミリ秒後に成功/失敗をコンソール出力します。

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
    //reject("失敗");
  }, 500);
});

myPromise.then((value) => {
  console.log(value); // resolveされたときに呼ばれる
},
(error) => {
  console.log(error); // rejectされたときに呼ばれる
});
```

>>>

<div data-breadcrumb="主な変更点 > Promise > thenメソッドとcatchメソッド" />

#### catch()
`Promise`が失敗した場合のみを扱い、`Promise`を返します。

##### 構文

```js
promiseInstance.catch(onRejected);
```

- **onRejected**

失敗したときに呼び出される関数です。1つの引数を持ちます。

##### 例

500ミリ秒後に失敗をコンソール出力します。

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("失敗");
  }, 500);
});

myPromise.catch((error) => {
  console.log(error);
});
```

>>>

<div data-breadcrumb="主な変更点 > Promise > プロミスチェーン" />

#### プロミスチェーン

`then()`メソッド, `catch()`メソッドは`Promise`を返すので、つなげて記述することができます。<br>
また、関数`TaskA`から`TaskB`へ値を渡す場合、`TaskA`で`return`された値を`TaskB`の引数として受け取れます。

```js
function taskA () {
  console.log("TaskA");
  return 100;
}

function taskB (val) {
  console.log("TaskB");
  console.log(val); // 100
}

function onRejected(error) {
  console.log(error);
}

var promise = new Promise((resolve, reject) => {
  resolve();
});

promise
  .then(taskA)
  .then(taskB)
  .catch(onRejected); // TaskA
                      // TaskB
```

>>>
<div data-breadcrumb="主な変更点 > Promise > プロミスチェーン" />

例外の発生や`reject`された場合、`TaskB`は実行されません。<br>また、<span class="marker">エラー時点でプロミスチェーンは止まり、`catch`ハンドラを探します。</span>

```js
function taskA () {
  console.log("TaskA");
  throw new Error('Error');
}

function taskB () {
  console.log("TaskB");
}

function onRejected(error) {
  console.log(error);
}

var promise = new Promise((resolve, reject) => {
  resolve();
});

promise
  .then(taskA)
  .then(taskB)
  .catch(onRejected); // TaskA
                      // Error: Error at taskA ((index):32)
```

>>>

<div data-breadcrumb="主な変更点 > Promise > 非同期処理を並列で行う" />

#### 非同期処理を並列で行う

##### `Promise.all()`

`Promise.all()`メソッドは`Promise`オブジェクトの配列を受け取り、<span class="marker">全ての`Promise`オブジェクトが`resolve`されたタイミング</span>で`then`が呼び出されます。

```js
const taskA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("taskA's value");
  }, 500);
});

const taskB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("taskB's value");
  }, 1000);
});

Promise.all([taskA, taskB]).then((args) => {
  console.log('TaskA and B completed.'); // 1秒後に出力される
  console.log(args); // (2) ["taskA's value", "taskB's value"] 配列として引数を受け取れる。
});
```

>>>

<div data-breadcrumb="主な変更点 > Promise > 非同期処理を並列で行う" />

##### `Promise.race()`

`Promise.race()`メソッドは`Promise`オブジェクトの配列を受け取り、<span class="marker">1つでも`resolve`, `reject`されたタイミング</span>で`then`, `catch`が呼び出されます。

```js
const taskA = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('taskA');
    resolve("taskA's value");
  }, 500);
});

const taskB = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('taskB');
    resolve("taskB's value");
  }, 1000);
});

Promise.race([taskA, taskB]).then((arg) => {
  console.log('One of the Tasks completed.'); // 500ミリ秒後に出力される
  // taskB は実行されたまま、この500ミリ秒後に実行

  console.log(arg); // "taskA's value" 終わった方のタスクが引数として渡される
});
```