// 문제 설명

// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.

// (x1 ∨ x2) ∧ (x3 ∨ x4)

// 입출력 예
// x1	x2	x3	x4	result
// false	true	true	true	true
// true	false	false	false	false

function solution(x1, x2, x3, x4) {
  let one = false;
  let two = false;

  if (x1 === true || x2 === true) {
    one = true;
  } else {
    one = false;
  }

  if (x3 === true || x4 === true) {
    two = true;
  } else {
    two = false;
  }

  if (one === true && two === true) {
    return true;
  } else {
    return false;
  }
}
