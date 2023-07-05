import { useReducer } from "react";

type UserInfoState = {
  id: string;
  passWord: string;
};

type UserInfoAction =
  | {
      type: "setId";
      payload: string;
    }
  | {
      type: "setPassWord";
      payload: string;
    };

function reducer(state: UserInfoState, action: UserInfoAction) {
  switch (action.type) {
    case "setId":
      return {
        ...state,
        id: action.payload,
      };
    case "setPassWord":
      return {
        ...state,
        passWord: action.payload,
      };
    default:
      return state;
  }
}

function App() {
  const [userInfo, dispatch] = useReducer(reducer, { id: "", passWord: "" });
  return (
    <>
      아이디 :{" "}
      <input
        type="text"
        onChange={(e) => dispatch({ type: "setId", payload: e.target.value })}
      />
      <br />
      비밀번호 :
      <input
        type="password"
        onChange={(e) =>
          dispatch({ type: "setPassWord", payload: e.target.value })
        }
      />
      <br />
      <button onClick={() => console.log(userInfo)}>로그인</button>
    </>
  );
}

export default App;
