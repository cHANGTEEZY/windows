"use client";

import React from "react";
import WindowControl from "./WindowControl";

const Window = ({ children }: { children: React.ReactNode }) => {
  const handleMinimize = () => {
    console.log("Minimize clicked");
  };

  const handleMaximize = () => {
    console.log("Maximize clicked");
  };

  const handleClose = () => {
    console.log("Close clicked");
  };

  return (
    <div className="">
      <header>
        <WindowControl
          onMinusClick={handleMinimize}
          onSquareClick={handleMaximize}
          onXClick={handleClose}
        />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Window;
