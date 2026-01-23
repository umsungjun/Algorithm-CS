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
