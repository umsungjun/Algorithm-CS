import React from "react";

export default function Test() {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof Number(e.target.value));
  };

  return <input onChange={(e) => handleInput(e)} />;
}
