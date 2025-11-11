// 프로그래머스 - 커피 심부름
function solution(order) {
  let answer = 0;

  order.forEach((item) => {
    if (item.includes("cafelatte")) {
      answer += 5000;
    } else {
      answer += 4500;
    }
  });

  return answer;
}

// 프로그래머스 - 배열 만들기
function solution(arr) {
  let i = 0;
  const skt = [];

  while (i < arr.length) {
    const sktLength = skt.length;

    if (sktLength === 0) {
      skt.push(arr[i]);
      i++;
    } else {
      if (skt[sktLength - 1] === arr[i]) {
        skt.pop();
        i++;
      } else {
        skt.push(arr[i]);
        i++;
      }
    }
  }

  return skt.length ? skt : [-1];
}

// 프로그래머스 - 왼쪽 오른쪽
function solution(str_list) {
  if (!str_list.includes("l") && !str_list.includes("r")) {
    return [];
  }

  if (str_list.lenght === 1) {
    return [];
  }

  const fIdxL = str_list.indexOf("l") === -1 ? Infinity : str_list.indexOf("l");
  const fIdxR = str_list.indexOf("r") === -1 ? Infinity : str_list.indexOf("r");

  if (fIdxL < fIdxR) {
    return str_list.slice(0, fIdxL);
  } else {
    return str_list.slice(fIdxR + 1);
  }
}
