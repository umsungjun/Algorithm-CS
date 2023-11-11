function solution(s) {
  const arrS = s.split("");
  let length = arrS.length;
  const del = () => {
    for (let i = 0; i < arrS.length - 1; i++) {
      if (arrS[i] === arrS[i + 1]) {
        arrS.splice(i, 1);
        arrS.splice(i, 1);
      }
      if (length !== arrS.length) {
        length = arrS.length;
        del();
      }
    }
  };
  del();
  return arrS.length === 0 ? 1 : 0;
}

function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let curr = s.charAt(i);

    if (stack[stack.length - 1] === curr) {
      stack.pop();
    } else {
      stack.push(curr);
    }
  }
  return stack.length === 0 ? 1 : 0;
}
