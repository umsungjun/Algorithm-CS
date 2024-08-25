const data = 'a10b9r1ce33uab8wc918v2cv11v9';

function solution() {
  /* 0-9까지의 숫자를 전역에서 구함 */
  // console.log(data.match(/[0-9]/g));

  /* r,e,v 문자 뒤에 0-9 까지의 숫자를 찾는다 */
  // console.log(data.match(/[rev][0-9]/g));

  /* 0-9까지으 숫자와 이전에 10까지 찾으려면 그룹핑을 해야 함 */
  const numberArr = data.match(/([rev])(10|[0-9])/g);
  // console.log(numberArr[0].slice(1));

  const answer = numberArr
    .reduce((acc, cur) => (acc += Number(cur.slice(1))), 0)
    .toString();

  return `${answer[0]}월 ${answer[1]}일`;
}
solution();
