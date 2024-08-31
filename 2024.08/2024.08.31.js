const data = [
  "100만큼 A를 훈련. 201 B. 120보다 이십만큼 더 B를 훈련했다.",
  "30만큼 A를 고민했다. 40만큼 B를 고민. 빙키는 A를 70만큼. C 10. D 10. A 10. z 10.",
];

function solution() {
  const 훈련 = {};
  const 고민 = {};
  const firstStr = data[0].split(".");
  const secondStr = data[1].split(".");

  firstStr.forEach((str) => {
    if (str) {
      const key = str.match(/[a-zA-Z]/g);
      let value = 0;
      if (str.match(/[0-9]/g)) {
        value = Number(str.match(/[0-9]/g).join(""));
      }

      if (!훈련.hasOwnProperty(key)) {
        훈련[key] = value;
      } else {
        훈련[key] = 훈련[key] + value;
      }
    }
  });

  secondStr.forEach((str) => {
    if (str) {
      const key = str.match(/[a-zA-Z]/g);
      let value = 0;
      if (str.match(/[0-9]/g)) {
        value = Number(str.match(/[0-9]/g).join(""));
      }

      if (훈련.hasOwnProperty(key)) {
        if (!고민.hasOwnProperty(key)) {
          고민[key] = value;
        } else {
          고민[key] = 고민[key] + value;
        }
      }
    }
  });

  const 훈련키 = Object.keys(훈련);
  const 고민키 = Object.keys(고민);

  if (훈련키.length !== 고민키.length) return "미래가 보이지 않습니다.";

  console.log(훈련);
  console.log(고민);

  const 원래미래 =
    훈련[훈련키[0]] * 고민[훈련키[0]] + 훈련[훈련키[1]] * 고민[훈련키[1]];

  if (훈련[훈련키[0]] < 고민[훈련키[0]]) {
    고민[훈련키[0]] += 100;
  } else {
    훈련[훈련키[0]] += 100;
  }

  if (훈련[훈련키[1]] < 고민[훈련키[1]]) {
    고민[훈련키[1]] += 100;
  } else {
    훈련[훈련키[1]] += 100;
  }

  const 바뀐미래 =
    훈련[훈련키[0]] * 고민[훈련키[0]] + 훈련[훈련키[1]] * 고민[훈련키[1]];

  return `최종 꿈의 설계는 원래 미래 ${원래미래}, 바뀐 미래 ${바뀐미래}입니다. 이 수치대로 Vision을 만듭니다.`;
}

solution();
