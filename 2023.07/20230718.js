var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));

//   A: error.message 가 한번 출력
//   B: error.message 가 두번 출력
//   C: UnhandledPromiseRejectionWarning
//   D: 프로세스가 중단됨

// 정답 : B
