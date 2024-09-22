/* add는 함수가 정의 된 메모리 주소를 가리킴 */
function add(num1, num2) {
  return num1 + num2;
}
/* add함수와 동일한 메모리 주소를 가리킴 */
const sum = add;

// console.log(add(1, 2));

function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}

// console.log(fullName("엄", "성준"));
