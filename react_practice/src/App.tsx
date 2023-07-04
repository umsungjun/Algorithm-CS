import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  return (
    <>
      아이디 : <input type="text" onChange={(e) => setId(e.target.value)} />
      <br />
      비밀번호 :
      <input type="password" onChange={(e) => setPassWord(e.target.value)} />
      <br />
      <button onClick={() => console.log(id, passWord)}>로그인</button>
    </>
  );
}

export default App;
