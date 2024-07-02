const data = [1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1];

// 샌드위치의 순서는 항상 1, 2, 3, 4, 1

function solution() {
  /* for (let i = 0; i < data.length; i++) {
    console.log(data.slice(i, i + 5)); // sliding window 발생
  } */

  let answer = 0;
  let stack = [];
  for (let i of data) {
    stack.push(i);
    // stack.slice(-5) 배열 끝에 요소 5개
    if (JSON.stringify(stack.slice(-5)) === JSON.stringify([1, 2, 3, 4, 1])) {
      for (let i = 0; i < 5; i++) {
        stack.pop();
      }
      answer += 1;
    }
  }

  return answer;
}

solution();
