/* 
   條件: 題目 2 ~ 7 的操作都不能修改到 題目 1 建立的陣列
*/

// 1. 建立一個長度 50，數值介於 40~100 的陣列 (亂數產生) (Array)
let arr = new Array();
for (let i = 40; i < 100; i++) {
  arr.push(i);
}
arr.sort(function () {
  return Math.random() - 0.5;
});
arr.length = 50;

// 2. 篩選出大於 60 的結果
const aryMap = arr.map(x => x);;
console.log(aryMap);
const aryFilter = new Array();
for (const val of aryMap) {
  if (val > 60) {
    aryFilter.push(val);
  }
}
console.log(aryFilter);

// 3. 找出最大值
let max = aryMap.reduce(function (a, b) {
  return Math.max(a, b);
});
console.log(max);

// 4. 計算全部數值的合計數
const arySum = aryMap.map(x => x);
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arySum.reduce(reducer));

// 5. 找出最小值
let min = arySum.reduce(function (a, b) {
  return Math.min(a, b);
});
console.log(min);

// 6. 全部開根號並乘上 10
let ary = new Array();
for (const val of arySum) {
  ary.push(Math.sqrt(val) * 10)
}
console.log(ary);

// 7. 請依數值大小排序，由大而小
const arySort = arySum.map(x => x);
arySort.sort();
console.log(arySort);