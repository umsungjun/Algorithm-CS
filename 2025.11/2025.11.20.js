// 프로그래머스 - 외계어 사전
function solution(spell, dic) {
  const soltedSpell = spell.sort().join(""); // 정렬된 문자

  const soltedDic = dic.map((str) => str.split("").sort().join("")); // 정렬된 문자 map

  return soltedDic.includes(soltedSpell) ? 1 : 2;
}
