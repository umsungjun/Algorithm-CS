// 프로그래머스 - 다항식 더하기
function solution(polynomial) {
  let x = 0;
  let hap = 0;

  polynomial.split("+").forEach((str) => {
    const s = str.trim();
    if (s.endsWith("x")) {
      x += s === "x" ? 1 : Number(s.slice(0, -1));
    } else {
      hap += Number(s);
    }
  });

  if (x === 0) return String(hap);
  if (hap === 0) return x === 1 ? "x" : `${x}x`;
  return x === 1 ? `x + ${hap}` : `${x}x + ${hap}`;
}
