import { useState } from "react";

const YourComponent = () => {
  const [inputVal, setInputVal] = useState("");
  console.log(inputVal);
  return (
    <>
      <input type='text' onChange={(e) => setInputVal(e.target.value)} />
      {(inputVal.includes("MAEU") || inputVal[0] === "2") && <div>MAERSK</div>}
      {inputVal.includes("EUKO") && <div>EUKO</div>}
      {inputVal.includes("SEL") && <div>CMA</div>}
      {inputVal.includes("SEL") && <div>PIL</div>}
      {inputVal.includes("SEL") && <div>HMM</div>}
    </>
  );
};

export default YourComponent;
