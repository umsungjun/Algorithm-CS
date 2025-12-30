// 프로그래머스 - 푸드 파이트 대회
function solution(food) {
  let front = [];

  for (let i = 1; i < food.length; i++) {
    let foodCnt = parseInt(food[i] / 2);

    for (let j = 0; j < foodCnt; j++) {
      front.push(i + "");
    }
  }

  return front.join("") + "0" + front.reverse().join("");
}
