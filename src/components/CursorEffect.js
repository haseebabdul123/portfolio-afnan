import React, { useEffect, useState } from "react";
import './style/global.css';

const CursorEffect = () => {
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [cursorPos, setCursorPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const smoothMove = () => {
      setCursorPos(prevPos => ({
        x: prevPos.x + (mousePos.x - prevPos.x) * 0.1, // **Smooth follow speed**
        y: prevPos.y + (mousePos.y - prevPos.y) * 0.1,
      }));

      animationFrameId = requestAnimationFrame(smoothMove);
    };

    animationFrameId = requestAnimationFrame(smoothMove);

    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos.x, mousePos.y]); // **Corrected dependencies**

  return (
    <div
      className="light-effect"
      style={{
        top: `${cursorPos.y}px`,
        left: `${cursorPos.x}px`,
      }}
    ></div>
  );
};

export default CursorEffect;
