// 완주하지 못한 선수
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// function solution(participant, completion) {
//     var answer = '';

//     for(let i=0; i<participant.length; i++){
//         if(!completion.includes(participant[i])){
//             answer=participant[i]
//         }
//     }
//     return answer;
// }

// 위의 풀이 대로 했을 때 문제점 : 만약 참가자가 두명인데 완주자가 한명이면 둘다 제거되는 오류가 발생 함

// function solution(participant, completion) {

//     for(let i=0; i<completion.length; i++){
//         for(let j=0; j<participant.length; j++){
//             if(completion[i] === participant[j]){
//                 participant.splice(j,1)
//             }
//         }
//     }

//     return participant.join('');
// }

// 위의 처럼 풀었을 때 테스트 2, 5번 불통과 그리고 효율성 측면에서 완전 떨어짐

// completion의 길이는 participant의 길이보다 1 작습니다. 이 문장의 의도를 알게 됨 딱 한명만 잡으면 됨
function solution(participant, completion) {
  participant.sort(); // 문자열이기 때문에 조건 지정 X
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
