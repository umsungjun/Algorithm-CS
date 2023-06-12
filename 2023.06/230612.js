// // 2018 KAKAO BLIND RECRUITMENT
// // [1차] 비밀지도
// 문제 설명
// 비밀지도
// 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
// secret map

// 네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

function solution(n, arr1, arr2) {
  var answer = [];

  const map1 = arr1.map((num) => num.toString(2)); // arr1 배열의 요소들을 num으로 받으면서 2진수로 변환시킨 num을 map1에 return 하였음
  const map2 = arr2.map((num) => num.toString(2));

  const sortMap1 = map1.map((num) => {
    // 2진수 문자 요소들이 담긴 map1배열을 map함수를 통해서 num으로 요소를 하나씩 순회 함
    const arrNum = num.split(""); // 2진수로 된 요소를 split('')를 통해서 배열로 만든 뒤 arrNum에 할당 함
    while (arrNum.length !== n) {
      // 만약 arrNum의 길이가 n(숫자)과 같지 않다면 계속 반복함
      arrNum.unshift(0); // arrNum제일 앞에 0을 추가 함
    }
    return arrNum.join(""); //while문이 끝나고 나온 arrNum배열을 join('')함수로 연결한 문자열을 return 해줌
  });

  const sortMap2 = map2.map((num) => {
    const arrNum = num.split("");
    while (arrNum.length !== n) {
      arrNum.unshift(0);
    }
    return arrNum.join("");
  });
  // console.log(sortMap1[0][0])

  for (let i = 0; i < sortMap1.length; i++) {
    // 2중 for문을 생성 i는 sortMap의 길이만큼 진행
    let box = []; // 교체될 문자열들이 담길 배열을 생성 및 초기화 해줌
    for (let j = 0; j < n; j++) {
      // 문자열들의 길이는 n이기 때문에 n만큼 반복 함
      if (sortMap1[i][j] == "0" && sortMap2[i][j] == "0") {
        // 만약 두 배열의 요소의 자릿수가 둘다 0일때는 '공백'이기 때문에
        box.push(" "); // box배열에 ' '을 push해줌
      } else {
        // 둘다 0이 아니라면 벽이기 때문에
        box.push("#"); // box배열에 # 을 push해줌
      }
    }
    answer.push(box.join("")); // 만들어진 box배열을 join('')를 통해 결합 한 뒤 answer에 push해 줌
    box = []; // box를 초기화 해 줌 초기화 해주는 이유는 다음 문자열이 box에 담겨야 하기 때문
  }
  return answer;
}
