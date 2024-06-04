import { useState } from "react";
import './App.css'
import Project5 from "./components/Project5";
import InputBox from "./components/InputBox";
import useChangeC from "./hooks/useChangeC";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="Main-Page">
        <img
          src="https://www.wealth-lab.com/api/discussion/download/image/5253-1-png"
          alt="" className="background-img"
        />
      </div> */}
      <button onClick={useChangeC}>Change</button>
      {/* <Project5></Project5> */}
      {/* <InputBox/> */}
    </>
  );
}

export default App;
