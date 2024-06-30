const data = [
  "10 - A. 20 - B. 30 - A." /* 훈련 수치 */,
  "1 - A. 1 - A. 1 - A. 1 - A. 2 - B. 1 - A. 1 - B." /* 고민 수치 */,
];

function solution() {
  let 훈련수치 = new Map();
  let 고민수치 = new Map();
  let 원래미래 = 0;
  let 바뀐미래 = 0;

  // 훈련 수치
  for (let i of data[0].split(".").slice(0, -1)) {
    // console.log(i); /* 10 - A 20 - B 30 - A */
    let = key = i.match(/[a-zA-Z]/g)[0];
    let = value =
      i.match(/\d+/g)[0]; /* \d는 숫자를 의미 +는 한자리수 이상까지 포함*/

    if (훈련수치.has(key)) {
      // 이미 존재하는 key값이라면
      훈련수치.set(key, 훈련수치.get(key) + parseInt(value));
    } else {
      // 존재하지 않는 key값이라면
      훈련수치.set(key, parseInt(value));
    }
  }

  // 고민 수치
  for (let i of data[1].split(".").slice(0, -1)) {
    let = key = i.match(/[a-zA-Z]/g)[0];
    let = value =
      i.match(/\d+/g)[0]; /* \d는 숫자를 의미 +는 한자리수 이상까지 포함*/

    if (고민수치.has(key)) {
      // 이미 존재하는 key값이라면
      고민수치.set(key, 고민수치.get(key) + parseInt(value));
    } else {
      // 존재하지 않는 key값이라면
      고민수치.set(key, parseInt(value));
    }
  }

  // 원래 미래
  for (let i of 훈련수치.keys()) {
    if (고민수치.has(i)) {
      원래미래 += 훈련수치.get(i) * 고민수치.get(i);
    }
    if (원래미래 === 0) {
      return "미래가 보이지 않습니다.";
    }
  }

  let 훈련수치중가장큰값 = Math.max(...훈련수치.values());
  let 고민수치중가장큰값 = Math.max(...고민수치.values());

  for (let i of 훈련수치) {
    if (i[1] === 훈련수치중가장큰값) {
      // i[1]의미는 ['A', 40] 40을 의미
      훈련수치.set(i[0], i[1] + 100);
    }
  }

  for (let i of 고민수치) {
    if (i[1] === 고민수치중가장큰값) {
      고민수치.set(i[0], i[1] + 100);
    }
  }

  // 바뀐미래
  for (let i of 훈련수치.keys()) {
    if (고민수치.has(i)) {
      바뀐미래 += 훈련수치.get(i) * 고민수치.get(i);
    }
  }

  return `최종 꿈의 설계는 원래 미래 ${원래미래}, 바뀐 미래 ${바뀐미래}입니다. 이 수치대로 Vision을 만듭니다.`;
}

solution();
