import React, { useState, useEffect } from "react";

const Load = ({ setLoading }) => {
  const [lo, setLo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLo((prevLo) => {
        if (prevLo >= 50) {
          setLoading(true);
          clearInterval(interval);
          // Correctly updates Home.js state
          return 100;
        }
        return prevLo + 20;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <div className="bg-black">
      <div className="w-screen  h-screen flex justify-center items-center" id="loadbg">
        <div className="container">
          <h1 className="nes-text is-disabled">Loading CTF</h1>
          <progress className="nes-progress is-success " value={lo} max="100"></progress>
        </div>
      </div>
    </div>
  );
};

export default Load;
