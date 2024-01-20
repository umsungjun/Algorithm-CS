function solution(s) {
  let answer = 0;
  const sBox = [];
  const splitS = s.split("");

  for (let i = 0; i < s.length; i++) {
    const firstStr = splitS.shift();
    splitS.push(firstStr);
    sBox.push(splitS.join(""));
  }

  let stack = [];
  for (let i = 0; i < sBox.length; i++) {
    for (let j = 0; j < sBox[i].length; j++) {
      switch (sBox[i][j]) {
        case "[":
          stack.push("[");
          break;
        case "(":
          stack.push("(");
          break;
        case "{":
          stack.push("{");
          break;
        case "]":
          if (stack[stack.length - 1] === "[") {
            stack.pop();
          } else {
            stack.push("[");
          }
          break;
        case ")":
          if (stack[stack.length - 1] === "(") {
            stack.pop();
          } else {
            stack.push("(");
          }
          break;
        case "}":
          if (stack[stack.length - 1] === "{") {
            stack.pop();
          } else {
            stack.push("{");
          }
          break;
      }
    }
    if (stack.length === 0) {
      answer++;
    }
    stack = [];
  }

  return answer;
}
