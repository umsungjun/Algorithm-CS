function solution(name, yearning, photo) {
  const numberObject = {};

  for (let i = 0; i < name.length; i++) {
    numberObject[name[i]] = yearning[i]; // [] 대괄호법을 통해 key에 접근!
  }

  return photo.map((arr) => {
    let hap = 0;
    arr.forEach(($name) => {
      if (name.includes($name)) {
        hap += numberObject[$name];
      }
    });
    return hap;
  });
}
