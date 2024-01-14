import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  // for test commit;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMove = (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    setX(mouseX);
    setY(mouseY);
  };
  return (
    <div className="container" onMouseMove={mouseMove}>
      <div
        className="pointer"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      ></div>
    </div>
  );
}
