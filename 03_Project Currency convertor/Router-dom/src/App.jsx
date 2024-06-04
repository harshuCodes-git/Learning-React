import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import {Link, NavLink} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
    </>
  );
}

export default App;
