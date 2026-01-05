// 프로그래머스 - 구명보트
// 정확성 테스트 통과 못함
function solution(people, limit) {
  people.sort((a, b) => a - b); // 무게 오름차순 정렬

  let answer = 0;
  let hap = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i] + people[i + 1] <= limit) {
      answer++;
      i++;
    } else {
      answer++;
    }
  }

  return answer;
}

function solution(people, limit) {
  people.sort((a, b) => a - b); // 무게 오름차순 정렬

  let answer = 0;
  let left = 0; // 첫 번째 인덱스
  let right = people.length - 1; // 마지막 인덱스

  while (right >= left) {
    if (people[left] + people[right] <= limit) {
      left++; // 양쪽을 한칸씩 줄임
    }

    right--;
    answer++;
  }

  return answer;
}
