// 프로그래머스 - 카카오 [1차] 비밀지도
const change2 = (n, num) => {
  return num.toString(2).padStart(n, "0"); // padStart를 활용해 문자가 n자 안될 시 앞에 '0' 추가
};

function solution(n, arr1, arr2) {
  const answer = [];
  const arr1Change2 = arr1.map((num) => change2(n, num));
  const arr2Change2 = arr2.map((num) => change2(n, num));

  for (let i = 0; i < arr1Change2.length; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      let s1 = arr1Change2[i][j];
      let s2 = arr2Change2[i][j];
      if (s1 === "1" || s2 === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }

  return answer;
}

// 프로그래머스 - 연속 부분 수열 합의 개수
function solution(elements) {
  const set = new Set(); // 합 중복 제거

  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let sum = 0;
      for (let k = 0; k < i + 1; k++) {
        let idx = (j + k) % elements.length; // length보다 큰 index는 -length한것과 동일하게 처리
        sum += elements[idx];
      }
      set.add(sum);
    }
  }
  return set.size;
}
