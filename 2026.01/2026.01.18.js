// 프로그래머스 - 추억 점수
function solution(name, yearning, photo) {
  const obj = {};

  name.forEach((n, i) => {
    obj[n] = yearning[i];
  });
  return photo.map((arr) => {
    let hap = 0;

    arr.forEach((a) => {
      if (obj[a] !== undefined) {
        hap += obj[a];
      }
    });

    return hap;
  });
}

// 프로그래머스 - 멀리 뛰기
function solution(n) {
  const arr = [0, 1]; // 피보나치 수열 n = (n-1) + (n-2);

  for (let i = 2; i <= n + 1; i++) {
    let v = (arr[i - 1] + arr[i - 2]) % 1234567;

    arr.push(v);
  }

  return arr[n + 1];
}

/* 
    처음에 문제에 접근할 때 아예 풀이 방법을 몰라서 검색을 통해 피보나치 수열로 접근해야 한다는 것을 알게 되었음
    피보나치 수열은 n번째 값이 n-1 + n-2 번째 값의 합이 되는 수열임
*/
