// 서울에서 김서방 찾기
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

// 잘라서 배열로 저장하기
function solution(my_str, n) {
  const answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    if (i + n > my_str.length) {
      answer.push(my_str.slice(i, my_str.length + 1));
    } else {
      answer.push(my_str.slice(i, i + n));
    }
  }

  return answer;
}

// 문자 개수 세기
const alphabet = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
  O: 0,
  P: 0,
  Q: 0,
  R: 0,
  S: 0,
  T: 0,
  U: 0,
  V: 0,
  W: 0,
  X: 0,
  Y: 0,
  Z: 0,
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

function solution(my_string) {
  for (let i of my_string) {
    alphabet[i] += 1;
  }

  return Object.values(alphabet);
}
