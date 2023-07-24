import React from "react";

export default function Bubbling() {
  return (
    <form onClick={() => alert("form")}>
      FORM
      <div onClick={() => alert("div")}>
        DIV
        <p
          onClick={(e) => {
            e.stopPropagation();
            alert("p");
          }}
        >
          P
        </p>
      </div>
    </form>
  );
}

/* 이벤트 버블링이 일어날 때 가장 안쪽 요소에 e.stopPropagation을 선언해주면 됨 */
