import React from "react";
import { useState } from "react";

function App() {
  // const  value = 4;
  const [value, newvalue] = useState(4);
  const ChangeValue = () => {
    // value = 5;
    newvalue(5);
  };

  return (
    <>
      <form
        action="
    "
      >
        <input type="text" placeholder={value} />
        <input type="text" className="number" />
        <button className="" onClick={ChangeValue()}>
          Click ME
        </button>
      </form>
    </>
  );
}

export default App;
