// 7월 27일 목요일 es5 버그수정 문제입니다.

var arr = [10, 32, 65, 2];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("The index of this number is: " + i);
  }, 3000);
}
console.log(i);

// var=> let으로 수정해야 코드가 정상 작동 함
// var로 선언했을 때 i는 전역 스코프에서 유효한 변수로 취급되지만 let으로 선언하면
// 지역 스코프로 변경 됨
