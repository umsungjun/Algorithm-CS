function solution(picture, k) {
  const answer = [];

  picture.forEach((str) => {
    let repeatStr = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < k; j++) {
        repeatStr += str[i];
      }
    }
    for (let j = 0; j < k; j++) {
      answer.push(repeatStr);
    }
  });
  return answer;
}
