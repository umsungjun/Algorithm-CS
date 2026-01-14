// 프로그래머스 - 최소공배수
function solution(arr) {
  arr.sort((a, b) => a - b); // 오름차순 정렬

  const lastNum = arr[arr.length - 1]; // 배열의 가장 큰 수
  let answer = lastNum; // 초기 나눠질 수

  while (true) {
    const isAllTrue = arr.every((num) => answer % num === 0);

    if (isAllTrue) {
      break;
    } else {
      answer += lastNum;
    }
  }

  return answer;
}

/* 
    최소 공배수를 구하기 위해서 주어진 arr 배열을 오름차순 정렬한 뒤 가장 큰 수를 먼저 answer에 할당
    이후 answer가 arr 배열의 모든 수로 나눠지는지 확인
    만약 모든 수로 나눠지면 answer를 반환
    아니라면 가장 큰 수를 answer에 계속 더해가며 다시 확인하여 최소 공배수를 구함
*/
