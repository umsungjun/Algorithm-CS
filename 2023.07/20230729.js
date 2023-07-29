// 7월 27일 목요일 es5 버그수정 문제입니다.

var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("The index of this number is: " + i);
  }, 3000);
}
