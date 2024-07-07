const data = [58000, 58700, 55300, 54200, 53600, 52700, 57700, 61100];

function solution() {
  let answer = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] < data[i - 1]) {
      answer += data[i - 1] - data[i];
    }
  }
  console.log(answer);
}

solution();
