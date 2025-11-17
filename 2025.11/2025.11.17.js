// 프로그래머스 - 최댓값과 최솟값
function solution(s) {
  const numSarr = s.split(" ").map(Number);

  return `${Math.min(...numSarr)} ${Math.max(...numSarr)}`;
}

// 프로그래머스 - 직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let answer = "";

  for (let i = 0; i < b; i++) {
    let line = "";
    for (let j = 0; j < a; j++) {
      line += "*";
    }
    line += "\n";
    answer += line;
  }

  console.log(answer);
});

// 프로그래머스 - 그림 확대
function solution(picture, k) {
  const answer = [];

  picture.forEach((item) => {
    let sizeUpItem = "";

    for (let s of item) {
      for (let i = 0; i < k; i++) {
        sizeUpItem += s;
      }
    }
    for (let i = 0; i < k; i++) {
      answer.push(sizeUpItem);
    }
  });

  return answer;
}
