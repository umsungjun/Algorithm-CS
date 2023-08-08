// 클로져

const countFunc = () => {
  let count = 0;
  const up = () => {
    count++;
    console.log(count);
  };
  return up;
};

const countUp = countFunc();
countUp(); // 내부 함수를 통해서 외부 렉시컬환경에 선언 된 count를 조작할 수 있음
