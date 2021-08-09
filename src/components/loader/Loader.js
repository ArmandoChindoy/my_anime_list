import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <span>↓</span>
        <span className="arrow" style={{ "--delay": "0.1s" }}>
          ↓
        </span>
        <span className="arrow" style={{ "--delay": "0.3s" }}>
          ↓
        </span>
        <span className="arrow" style={{ "--delay": "0.4s" }}>
          ↓
        </span>
        <span className="arrow" style={{ "--delay": "0.5s" }}>
          ↓
        </span>
      </div>
    </>
  );
};

export default Loader;
