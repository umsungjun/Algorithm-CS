paintFilmDataList.forEach((filmData) => {
  const filmBox = document.querySelector("." + filmData.position);

  if (filmBox) {
    filmBox.innerHTML =
      '<div class="paintFilmShame">' +
      filmData.maxThicknessMeasurement.toString() +
      "</div>" +
      '<span class="paintFilmShameBar">' +
      "|" +
      "</span>" +
      '<div class="paintFilmShame">' +
      filmData.minThicknessMeasurement.toString() +
      "</div>" +
      '<span class="paintFilmShameBar">' +
      "|" +
      "</span>" +
      '<div class="paintFilmShame">' +
      filmData.averageThicknessMeasurement.toString() +
      "</div>";
  }

  // jsp 파일에서 ``(템플릿 리터럴)을 사용하기 위해서는 아래와 같이 적용시켜야 함
  // 이렇게 하면 바깥쪽 ${...}은 서버에서 처리하고, 안쪽 ${...}은 자바스크립트가 처리합니다.

  if (filmBox) {
    filmBox.innerHTML = `<div class="paintFilmShame">${"${filmData.maxThicknessMeasurement.toString()}"}</div>
                            <span class="paintFilmShameBar">|</span>
                            <div class="paintFilmShame">${"${filmData.minThicknessMeasurement.toString()}"}</div>
                            <span class="paintFilmShameBar">|</span>
                            <div class="paintFilmShame">${"${filmData.averageThicknessMeasurement.toString()}"}</div>
                            `;
  }
});
