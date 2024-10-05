function solution(num, total) {
  // 공식 이용
  // 시작 값 구하는 공식
  // 1. 임의의 수 num을 2로 나눈 뒤 버림(Math.floor)처리
  // 2. total / num으로 나눈다
  // 3. 2에서 1을 뺀 결과를 올림(Math.ceil)처리

  // 시작 값
  const start = Math.ceil(total / num - Math.floor(num / 2));

  return Array.from({ length: num }, (_, i) => start + i);
}
