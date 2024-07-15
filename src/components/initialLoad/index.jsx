import React from "react";
import webdev from "./webdev.module.css";
const index = () => {
  return (
    <div>
      <div className={webdev.wrapper}>
        <h1 className={webdev.glitch}>PK</h1>
        {/* <h1 className={webdev.webdev}>Web Dev</h1> */}
      </div>
    </div>
  );
};

export default index;
