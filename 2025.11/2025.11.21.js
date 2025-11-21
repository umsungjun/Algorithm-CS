// 프로그래머스 - 크기가 작은 부분 문자열
function solution(t, p) {
  let answer = 0;
  const numP = Number(p);

  for (let i = 0; i <= t.length - p.length; i++) {
    const sliceNum = Number(t.slice(i, i + p.length));

    if (sliceNum <= numP) {
      answer++;
    }
  }

  return answer;
}

// 프로그래머스 - 로그인 성공?
function solution(id_pw, db) {
  const [id, pw] = id_pw;

  const objDb = {};
  db.forEach(([key, pw]) => (objDb[key] = pw));

  if (objDb[id]) {
    if (objDb[id] === pw) {
      return "login";
    } else {
      return "wrong pw";
    }
  } else {
    return "fail";
  }
}
