import { useState } from "react";

const YourComponent = () => {
  const [state, setState] = useState(true);

  return <>{state ? "選択済み" : "無選択"}</>;
};

export default YourComponent;
