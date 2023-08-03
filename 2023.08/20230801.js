// ; 문제 설명
// ; 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

// ; 제한사항
// ; 5 ≤ names의 길이 ≤ 30
// ; 1 ≤ names의 원소의 길이 ≤ 10
// ; names의 원소는 영어 알파벳 소문자로만 이루어져 있습니다.
// ; 입출력 예
// ; names	result
// ; ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]	["nami", "vex"]

function solution(names) {
  const answer = names.filter((name, i) => i % 5 == 0);
  return answer;
}

// ; 배열의 원소 삭제하기
// ; 문제 설명
// ; 정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.

// ; 제한사항
// ; 1 ≤ arr의 길이 ≤ 100
// ; 1 ≤ arr의 원소 ≤ 1,000
// ; arr의 원소는 모두 서로 다릅니다.
// ; 1 ≤ delete_list의 길이 ≤ 100
// ; 1 ≤ delete_list의 원소 ≤ 1,000
// ; delete_list의 원소는 모두 서로 다릅니다.
// ; 입출력 예
// ; arr	delete_list	result
// ; [293, 1000, 395, 678, 94]	[94, 777, 104, 1000, 1, 12]	[293, 395, 678]
// ; [110, 66, 439, 785, 1]	[377, 823, 119, 43]	[110, 66, 439, 785, 1]

function solution(arr, delete_list) {
  return arr.filter((num) => !delete_list.includes(num));
}

// ; 할 일 목록
// ; 문제 설명
// ; 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// ; 제한사항
// ; 1 ≤ todo_list의 길이 1 ≤ 100
// ; 2 ≤ todo_list의 원소의 길이 ≤ 20
// ; todo_list의 원소는 영소문자로만 이루어져 있습니다.
// ; todo_list의 원소는 모두 서로 다릅니다.
// ; finished[i]는 true 또는 false이고 true는 todo_list[i]를 마쳤음을, false는 아직 마치지 못했음을 나타냅니다.
// ; 아직 마치지 못한 일이 적어도 하나 있습니다.
// ; 입출력 예
// ; todo_list	finished	result
// ; ["problemsolving", "practiceguitar", "swim", "studygraph"]	[true, false, true, false]	["practiceguitar", "studygraph"]

function solution(todo_list, finished) {
  return todo_list.filter((todo, i) => finished[i] === false);
}
