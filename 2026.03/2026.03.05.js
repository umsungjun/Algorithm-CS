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
