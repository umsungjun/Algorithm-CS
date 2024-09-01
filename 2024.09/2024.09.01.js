const data = [
  "100만큼 A를 훈련. 201 B. 120보다 이십만큼 더 B를 훈련했다.",
  "30만큼 A를 고민했다. 40만큼 B를 고민. 빙키는 A를 70만큼. C 10. D 10. A 10. z 10.",
];

function solution() {
  const 훈련키 = data[0].match(/[a-zA-Z]/g);
  const 훈련값 = data[0].match(/\d+/g); /* \d 숫자만 '+'는 여러자리를 의미 */

  const 고민키 = data[1].match(/[a-zA-Z]/g);
  const 고민값 = data[1].match(/\d+/g); /* \d 숫자만 '+'는 여러자리를 의미 */

  const 훈련모음 = {};
  const 고민모음 = {};

  훈련키.forEach((key, i) => {
    if (고민키.includes(key)) {
      if (훈련모음.hasOwnProperty(key)) {
        훈련모음[key] = 훈련모음[key] + Number(훈련값[i]);
      } else {
        훈련모음[key] = Number(훈련값[i]);
      }
    }
  });

  고민키.forEach((key, i) => {
    if (훈련키.includes(key)) {
      if (고민모음.hasOwnProperty(key)) {
        고민모음[key] = 고민모음[key] + Number(고민값[i]);
      } else {
        고민모음[key] = Number(고민값[i]);
      }
    }
  });

  const isEmpty = (obj) => {
    for (let key in obj) {
      return false;
    }
    return true;
  };

  if (isEmpty(훈련모음)) return "미래가 보이지 않습니다.";
  if (isEmpty(고민모음)) return "미래가 보이지 않습니다.";

  const keys = Object.keys(훈련모음);
  if (keys.length < 2) return "미래가 보이지 않습니다.";

  const 원래미래 =
    훈련모음[훈련키[0]] * 고민모음[훈련키[0]] +
    훈련모음[훈련키[1]] * 고민모음[훈련키[1]];

  if (훈련모음[훈련키[0]] < 훈련모음[훈련키[1]]) {
    훈련모음[훈련키[1]] += 100;
  } else {
    훈련모음[훈련키[0]] += 100;
  }

  if (고민모음[훈련키[0]] < 고민모음[훈련키[1]]) {
    고민모음[훈련키[1]] += 100;
  } else {
    고민모음[훈련키[0]] += 100;
  }

  const 바뀐미래 =
    훈련모음[훈련키[0]] * 고민모음[훈련키[0]] +
    훈련모음[훈련키[1]] * 고민모음[훈련키[1]];

  console.log(원래미래);
  console.log(바뀐미래);

  return `최종 꿈의 설계는 원래 미래 ${원래미래}, 바뀐 미래 ${바뀐미래}입니다. 이 수치대로 Vision을 만듭니다.`;
}

solution();
