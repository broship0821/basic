import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (event) => {
    const x = event.pageX;
    const y = event.pageY;
    // setPosition({ x, y }); // 마우스 옮기는 대로 이동
    // 수평으로만 이동
    setPosition((prev) => ({ ...prev, x }));
  };
  return (
    <div className="container" onMouseMove={mouseMove}>
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
