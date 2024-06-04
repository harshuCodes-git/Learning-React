import React from 'react'
import { useState } from 'react';

const BgChanger = () => {

    const [color, setColor] = useState("#000");
  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <button
        className="bg-White"
        onClick={() => setColor("#fff")}
        style={{ backgroundColor: color }}
      >
        White
      </button>
      <button
        className="bg-red"
        onClick={() => setColor("green")}
        style={{ backgroundColor: color }}
      >
        Green
      </button>
      <button
        className="bg-red"
        onClick={() => setColor("green")}
        style={{ backgroundColor: color }}
      >
        Green
      </button>
      <button
        className="bg-red"
        onClick={() => setColor("red")}
        style={{ backgroundColor: color }}
      >
        RED
      </button>
      <button
        className="bg-red "
        onClick={() => setColor("black")}
        style={{ backgroundColor: color }}
      >
        Black
      </button>
    </div>
  );
}

export default BgChanger