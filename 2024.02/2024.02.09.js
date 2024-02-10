var chunk = function (arr, size) {
  const chunkArr = [];
  let index = 0;
  while (index < arr.length) {
    chunkArr.push(arr.slice(index, index + size));
    index += size;
  }
  return chunkArr;
};
