function solution(arr, query) {
  query.forEach((num, i) => {
    if (i % 2 === 0) {
      arr.splice(num + 1, arr.length - (num + 1));
    } else {
      arr.splice(0, num);
    }
  });

  return arr;
}
