function solution(data) {
  //adr10bb1d9ia10e33b7u88k3j1a3v11v9
  //r1rr2rrr3rrrrr4rrrrrre5
  //12345r12345e90v90r90
  data = data.match(/[rev](10|[0-9])/g);
  let result = 0;
  for (let i of data) {
    result += +i.slice(1, i.length);
  }
  result = result.toString();
  return `${result[0]}월 ${result[1]}일`;
}
