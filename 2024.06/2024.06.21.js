const data = "a10b9r1ce33uab8wc918v2cv11v9";

/* match()를 사용하면 정규표현식을 사용할 수 있음 */

function solution() {
  let result = 0;
  // data.match(/[0-9]/g); // ['1', '0', '9', '1', '3', '3', '8', '9', '1', '8', '2', '1', '1', '9']
  // data.match(/['rev'][0-9]/g); // [ 'r1', 'e3', 'v2', 'v1', 'v9' ]
  // console.log(data.match(/([rev])(10|[0-9])/g)); // match()를 이용해서 정규식을 활용하는데 [rev]각각의 문자 r, e, v뒤에 10 or 0-9까지의 숫자를 찾음 10을 먼저 적은 이유는 [0-9]가 먼저 매핑되면 10은 나올일이 없기 때문
  const sortData = data.match(/([rev])(10|[0-9])/g);

  for (let i of sortData) {
    // console.log(i.slice(1)); // 첫 번째 문자를 제외한 숫자들
    result += Number(i.slice(1));
  }

  result = result.toString(); // 문자열로 변환

  return `${result[0]}월 ${result[1]}일`;
}
solution();
