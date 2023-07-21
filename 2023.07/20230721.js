const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })

  .then((v) => {
    console.log(v);
  })
  .finally((v) => {
    console.log(v);
  });

// 예상 답 2 4 8 16
// 왜 finally는 undefined가 출력될까?
// finally 블록은 보통 Promise 체인의 마지막에 위치하며,
// Promise의 성공 또는 실패 여부에 상관없이 항상 실행되어야 하는 정리(clean-up) 코드를 작성할 때 유용합니다.
// 이런 경우에는 finally 블록에 반환된 값을 사용하지 않고, 단순히 정리 작업을 수행하는 용도로 활용됩니다.
