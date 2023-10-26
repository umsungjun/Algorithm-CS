function solution(rank, attendance) {
  var answer = 0;

  const rankBox = rank.filter((num, i) => {
    console.log(num);
    if (num === i + 1) {
      console.log(num);
      if (attendance[i] == true) {
        return num;
      }
    }
  });
  console.log(rankBox);
  return answer;
}
