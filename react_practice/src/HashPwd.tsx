import React, { useState } from "react";

import { SHA256 } from "crypto-js";

export default function HashPwd() {
  const [pwd, setPwd] = useState("");
  const password = pwd;
  const hashedPassword = SHA256(password).toString();

  const handleSubmit = () => {
    console.log(hashedPassword);
  };
  return (
    <>
      <input type="password" onChange={(e) => setPwd(e.target.value)} />
      <button type="submit" onClick={() => handleSubmit()}>
        제출
      </button>
    </>
  );
}
