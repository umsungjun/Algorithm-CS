let arr = [1, 2, 3, 4];
// console.log(arr);

// arr = [1, "아메리카노", { total: 90 }]; // 자바스크립트는 하나의 배열의 여러가지 타입을 넣을 수 있음
// console.log(arr);

for (const [key, value] of arr.entries()) {
  console.log("key:", key, "value:", value);
}
