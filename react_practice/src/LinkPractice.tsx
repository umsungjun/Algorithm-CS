import React from "react";
import { Link } from "react-router-dom";

export default function LinkPractice() {
  return (
    <>
      <Link to={"/https://www.naver.com/"}>LinkPractice</Link>
      <Link to={"https://www.naver.com/"}>LinkPractice</Link>
    </>
  );
}

/* link앞에 /가 붙으면 앞에 기본주소를 포함한다는 의미 */
