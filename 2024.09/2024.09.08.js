/* DFS BFS - 깊스너큐

   깊이 우선 탐색(DFS)
   - 동작 : Stack
   - 사용 : 길이나 미로찾기
   - 적은 메모리사용

   너비 우선 탐색(DFS)
   - 동작 : Queue
   - 사용 : 주변 시설 찾기, 최단 경로 찾기
   - 많은 메모리 사용
*/

const data = [
  [1, 3, "#"],
  [0, "#", 2],
  [0, 1, 1],
];

function solution() {
  /* x: 행, y: 열 
     N: 행, M: 열 */

  const N = data.length - 1;
  const M = data[0].length - 1;

  const check = (x, y) => {
    if (y < 0 || y > M || x < 0 || x > N) return false;
    if (data[x][y] === "#") return false;

    return true;
  };

  const queue = [];
  queue.push([0, 0]);

  let fish = data[0][0];
  data[0][0] = 0;

  let count = 0;
  let goal = false;

  while (queue) {
    count += 1;

    if (count == (N * M) ** 3) {
      if (goal) {
        console.log(fish);
        return fish;
      }
      return -1;
    }
    let [x, y] = queue.shift();

    if (x === N && y === M) {
      fish += data[x][y];
      data[x][y] = 0;
      goal = true;
    }

    /* 상 */
    if (check(x - 1, y)) {
      queue.push([x - 1, y]);
      fish += data[x - 1][y];
      data[x - 1][y] = 0;
    }
    /* 하 */
    if (check(x + 1, y)) {
      queue.push([x + 1, y]);
      fish += data[x + 1][y];
      data[x + 1][y] = 0;
    }
    /* 좌 */
    if (check(x, y - 1)) {
      queue.push([x, y - 1]);
      fish += data[x][y - 1];
      data[x][y - 1] = 0;
    }
    /* 우 */
    if (check(x, y + 1)) {
      queue.push([x, y + 1]);
      fish += data[x][y + 1];
      data[x][y + 1] = 0;
    }
  }
}

solution();
