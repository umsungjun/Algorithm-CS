// 두 개 뽑아서 더하기
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.
// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]

// 나의 풀이

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!answer.includes(numbers[i] + numbers[j])) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

// 가장 가까운 같은 글자

// 문제 설명
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.

// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.

// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

function solution(s) {
  var answer = [];
  let str = ""; // 비교할 문자열
  for (let i = 0; i < s.length; i++) {
    // s 길이 만큼 반복합니다.
    if (str.includes(s[i])) {
      // s[i]문자열을 str에서 포함하고 있다면
      // console.log(str.split('').lastIndexOf(s[i]), i)
      let index = str.split("").lastIndexOf(s[i]);
      // lastIndexOf()메서드를 사용하기 위해 str을 split('')함수를 통해 배열로 만들었습니다.
      answer.push(i - index); // i - index값을 push합니다
    } else {
      // s[i]문자열을 str에서 포함하고 있지 않다면
      answer.push(-1); // -1을 push합니다.
    }
    str += s[i]; // 위에 조건과 관계없이 str문자열에 s[i]를 붙여줍니다.
  }

  return answer;
}
