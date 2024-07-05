const data = 36600;

function solution() {
  const answer = parseInt(data / 3300);
  const bonus = parseInt(parseInt(data / 3300) / 10);

  return answer + bonus;
}

solution();
