import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const YourComponent = () => {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </>
  );
};

export default YourComponent;
