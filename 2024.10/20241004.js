function solution(A) {
  const set = new Set();

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      set.add(A[i]);
    }
  }

  let answer = 1;

  while (set.has(answer)) {
    answer++;
  }

  return answer;
}
