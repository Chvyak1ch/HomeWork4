import React, { useEffect, useState } from "react";

const WindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  

    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div>
        <h2>Задание 3</h2>
        <p>Ширина окна: {windowSize.width}px</p>
        <p>Высота окна: {windowSize.height}px</p>
      </div>
    );
  }
  

export default WindowSize;