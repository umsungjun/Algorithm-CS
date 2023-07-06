import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async () => {
      const test = await axios.get("/cmn/auth/user");
      console.log(test);
    };
  }, []);
  return <></>;
}

export default App;
