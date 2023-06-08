// const arr1 = new Array();
// const arr2 = [];
// const arr3 = [1, 2, 3, 4, 5];
// const arr4 = new Array(5);
// const arr5 = new Array(10).fill(0);
// const arr6 = Array.from(Array(5), (v, k) => k + 1);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr2 = [9, 10];
// console.log(arr.length);
// arr.length = 3;
// console.log(arr);
// arr.length = 10;
// console.log(arr);

// console.log(arr.join(" ,"));
// console.log(arr.reverse());

// console.log(arr1.concat(arr2));

// arr2.push(11);
// console.log(arr2);
// arr2.pop();
// arr2.pop();
// arr2.pop();
// console.log(arr2);

// arr1.shift();
// console.log(arr1);
// arr1.unshift(1);
// console.log(arr1);

// console.log(arr1.slice(0, 5));
// console.log(arr1);
// console.log(arr1.splice(4, 1, "del"));
// console.log(arr1);

// for (let item of arr1) {
//   console.log(item);
// }

const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "엄성준", age: 25 };

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

obj3["email"] = "umseongjun@naver.com";
obj3.job = "coder";

delete obj3.name;

// console.log("name" in obj3);
// console.log("age" in obj3);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.hasOwnProperty("name"));
