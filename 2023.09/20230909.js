// qr code
// 문제 설명
// 두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 0 ≤ r < q ≤ 20
// r < code의 길이 ≤ 1,000
// code는 영소문자로만 이루어져 있습니다.
// 입출력 예
// q	r	code	result
// 3	1	"qjnwezgrpirldywt"	"jerry"
// 1	0	"programmers"	"programmers"

function solution(q, r, code) {
  let answer = "";

  code.split("").forEach((str, i) => {
    if (i % q === r) {
      answer += str;
    }
  });
  return answer;
}

// 문제 설명

// 팀의 막내인 철수는 아메리카노와 카페 라테만 판매하는 카페에서 팀원들의 커피를 사려고 합니다. 아메리카노와 카페 라테의 가격은 차가운 것과 뜨거운 것 상관없이 각각 4500, 5000원입니다. 각 팀원에게 마실 메뉴를 적어달라고 하였고, 그 중에서 메뉴만 적은 팀원의 것은 차가운 것으로 통일하고 "아무거나"를 적은 팀원의 것은 차가운 아메리카노로 통일하기로 하였습니다.

// 각 직원이 적은 메뉴가 문자열 배열 order로 주어질 때, 카페에서 결제하게 될 금액을 return 하는 solution 함수를 작성해주세요. order의 원소는 아래의 것들만 들어오고, 각각의 의미는 다음과 같습니다.

// order의 원소의미
// "iceamericano", "americanoice"	차가운 아메리카노
// "hotamericano", "americanohot"	따뜻한 아메리카노
// "icecafelatte", "cafelatteice"	차가운 카페 라테
// "hotcafelatte", "cafelattehot"	따뜻한 카페 라테
// "americano"	아메리카노
// "cafelatte"	카페 라테
// "anything"	아무거나제한사항
// 1 ≤ order의 길이 ≤ 1,000

// 입출력 예
// order	result
// ["cafelatte", "americanoice", "hotcafelatte", "anything"]	19000
// ["americanoice", "americano", "iceamericano"]	13500

// 나의 풀이

function solution(order) {
  let answer = 0;

  order.forEach((item) => {
    if (item.includes("americano")) {
      answer += 4500;
    } else if (item.includes("cafelatte")) {
      answer += 5000;
    } else {
      answer += 4500;
    }
  });
  return answer;
}
