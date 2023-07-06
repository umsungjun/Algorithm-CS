import { useCountStore } from "./store/countStore";

function App() {
  const { count, countUp, countDown } = useCountStore(); // 선언한 useCountStore를 불러와야 함
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => countUp()}>+</button>
      <button onClick={() => countDown()}>-</button>
    </>
  );
}

export default App;
