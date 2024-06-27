const data = [
  "10 - A. 20 - B. 30 - A." /* 훈련 수치 */,
  "1 - A. 1 - A. 1 - A. 1 - A. 2 - B. 1 - A. 1 - B." /* 고민 수치 */,
];

function solution() {
  // console.log(data[0].split(".")); /* [ '10 - A', ' 20 - B', ' 30 - A', '' ] */
  //console.log(data[0].match(/[a-zA-Z]/g)); /* [ 'A', 'B', 'A' ] */
  /* console.log(
    data[0].match(/\d+/g)
  );  [ '10', '20', '30' ] \d는 숫자를 의미 +는 한자리가 아닌 여러자릿수의 숫자라는 의미 */
  let zip = (a, b) =>
    a.map((v, i) => [
      v,
      b[i],
    ]); /* 배열 a, b를 받고 a배열의 v(value)를 순회할 때 b의 i(index)의 해당하는 값을 배열로 return */

  /* console.log(
    zip(data[0].match(/[a-zA-z]/g), data[0].match(/\d+/g))
  );  [ [ 'A', '10' ], [ 'B', '20' ], [ 'A', '30' ] ] */

  const map = new Map();

  map.set("num1", 1);
  map.set("num2", 2);
  map.set("num3", 3);

  console.log(Math.min(...map.values()));

  return data;
}

solution();
