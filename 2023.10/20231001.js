function solution(arr, k) {
  var answer = [];

  const set = new Set(arr);
  const newArr = [...set];

  for (let i = 0; i < k; i++) {
    if (newArr[i] === undefined) {
      answer.push(-1);
    } else {
      answer.push(newArr[i]);
    }
  }

  return answer;
}
