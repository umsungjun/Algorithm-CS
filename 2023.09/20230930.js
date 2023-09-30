function solution(arr, queries) {
  const answer = [];
  let num = 9999;

  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (arr[j] > queries[i][2] && num > arr[j]) {
        num = arr[j];
      }
    }
    if (num === 9999) {
      answer.push(-1);
    } else {
      answer.push(num);
    }
    num = 9999;
  }

  return answer;
}

function solution(arr, queries) {
  var answer = [];
  for (let [s, e, k] of queries) {
    let temp = arr
      .filter((v, i) => i >= s && i <= e && v > k)
      .sort((a, b) => a - b)[0];
    answer.push(temp ? temp : -1);
  }

  return answer;
}
