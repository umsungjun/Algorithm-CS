const student = {
  민지: {
    ko: 80,
    en: 75,
    ma: 100,
  },
  보니: {
    ko: 30,
    en: 55,
    ma: 75,
  },
  하니: {
    ko: 100,
    en: 80,
    ma: 75,
  },
};

let koHap = 0,
  enHap = 0,
  maHap = 0;

Object.keys(student).forEach(
  (name) => (
    (koHap += student[name].ko),
    (enHap += student[name].en),
    (maHap += student[name].ma)
  )
);
const studentCount = Object.keys(student).length; // 총 학생 수

// 학생 목록 및 학생 점수 로직
const studentBox = document.querySelector(".studentBox");
Object.keys(student).forEach((name) => {
  const studentItem = document.createElement("p");
  studentItem.innerText = `${name}: 국어:(${student[name].ko}) 영어:(${student[name].en}) 수학:(${student[name].ma})`;

  studentBox.appendChild(studentItem);
});

// 3 과목 평균 로직
const avgBox = document.querySelector(".avgBox");
avgBox.innerHTML = `<p>국어: ${Math.floor(koHap / 3)}</p>
                    <p>수학: ${Math.floor(enHap / 3)}</p>
                    <p>영어: ${Math.floor(maHap / 3)}</p>`;

// 석차 로직
const studentAvg = {};
Object.keys(student).forEach((name) => {
  let hap = 0;
  hap = student[name].ko + student[name].en + student[name].ma;
  studentAvg[name] = Math.floor(hap / 3);
});

const sortedStudents = Object.keys(studentAvg).sort(
  (a, b) => studentAvg[b] - studentAvg[a]
);

let score = 1;
let currentScore = null;

const scoreBox = document.querySelector(".scoreBox");

sortedStudents.forEach((name) => {
  const scoreItem = document.createElement("p");
  if (!currentScore) {
    currentScore = studentAvg[name];
    scoreItem.innerText = `${score}. ${name} 3과목 평균 점수 ${studentAvg[name]}`;
    scoreBox.appendChild(scoreItem);
  } else if (currentScore === studentAvg[name]) {
    scoreItem.innerText = `${score}. ${name} 3과목 평균 점수 ${studentAvg[name]}`;
    scoreBox.appendChild(scoreItem);
  } else if (currentScore > studentAvg[name]) {
    currentScore = studentAvg[name];
    scoreItem.innerText = `${++score}. ${name} 3과목 평균 점수 ${
      studentAvg[name]
    }`;
    scoreBox.appendChild(scoreItem);
  }
});
