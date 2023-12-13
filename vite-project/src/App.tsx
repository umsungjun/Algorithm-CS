import React, { useState } from "react";

const YourComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const validInputValue = e.target.value.toString().split('').map((str)=>{
    //   if(!isNaN(str) && str !== '.' && str !=='e'){
    //       return str
    //   }
    // }).join('')

    const validInputValue = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(validInputValue);
  };

  return (
    <>
      <input
        type="text"
        maxLength={5}
        name="test"
        id="test"
        value={inputValue}
        onChange={(e) => handleInputValue(e)}
      />
      <button type="submit">제출</button>
    </>
  );
};

export default YourComponent;
