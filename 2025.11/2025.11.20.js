// 프로그래머스 - 외계어 사전
function solution(spell, dic) {
  const soltedSpell = spell.sort().join(""); // 정렬된 문자

  const soltedDic = dic.map((str) => str.split("").sort().join("")); // 정렬된 문자 map

  return soltedDic.includes(soltedSpell) ? 1 : 2;
}

// 프로그래머스 - 전국 대회 선발 고사
// 왜 이런 문제를 만들까?
// 정렬 된 Rank의 index를 구하는 문제
function solution(rank, attendance) {
  const posibleRankList = [];

  attendance.forEach((bool, i) => {
    if (bool === true) {
      posibleRankList.push(rank[i]);
    }
  });
  posibleRankList.sort((a, b) => a - b);

  const indexOfRank = posibleRankList.map((n) => rank.indexOf(n));

  return 10000 * indexOfRank[0] + 100 * indexOfRank[1] + indexOfRank[2];
}
