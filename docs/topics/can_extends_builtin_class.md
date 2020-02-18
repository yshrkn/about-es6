<div data-breadcrumb="主な変更点 > 基本型の継承" />

<p class="importance">重要度: <span class="star">★★</span></p>

## 基本型の継承

ES6から組み込みクラスを継承することができます。

- 年月日から曜日（日本語表記）を取得するサブクラス

```js
class DateEx extends Date {
    getDayJp() {
        const days = ['日', '月', '火', '水', '木', '金', '土'];
        return days[this.getDay()]; // getDayは0~6(日～土)を返却するDateのメソッド
    }
}
const date = new DateEx(2018, 11, 25);
console.log(`今年のクリスマスは${date.getDayJp()}曜日。`);  // 今年のクリスマスは火曜日。
```
