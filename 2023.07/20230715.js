// 문제 설명
// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
// 1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000
// 0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이
// 입출력 예
// my_string	overwrite_string	s	result
// "He11oWor1d"	"lloWorl"	2	"HelloWorld"
// "Program29b8UYP"	"merS123"	7

function solution(my_string, overwrite_string, s) {
    let answer = '';
    for(let i=0; i<my_string.length; i++){ // my_string.length만큼 진행
        if(s<= i && i<overwrite_string.length+s){ // 두가지 조건을 만족할 때 아래 조건을 실행
            answer += overwrite_string[i-s] // -s를 해준이유는 s문자열의[i]는 -2를 해야 첫 번째 부터 시작 됨
        }else{
            answer+=my_string[i]
        }
        
    }
    return answer;
}