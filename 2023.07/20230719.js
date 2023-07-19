async function f() {
  let result = "first!";
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  result = await promise;

  console.log(result);
}

f();

// A: first!
// B: done!
// C: JavaScript error
// D: Something else

// 정답 : B

// result는 let으로 선언했기 때문에 재할당이 가능 함
