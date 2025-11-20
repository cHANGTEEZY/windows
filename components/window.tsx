"use client";

import React from "react";
import WindowControl from "./WindowControl";
import { DndContext, useDraggable } from "@dnd-kit/core";
import DroppableArea from "./Drag&Drop/DroppableArea";
import DraggableItem from "./Drag&Drop/DraggableItem";

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
    <DndContext>
      <DroppableArea id="desktop-window">
        <DraggableItem id="window-draggable">
          <div className="max-w-3xl w-full h-[80vh] bg-[#1e1e1e] rounded-lg shadow-lg shadow-black border border-[#333333] flex flex-col">
            <header className="flex justify-end ">
              <WindowControl
                onMinusClick={handleMinimize}
                onSquareClick={handleMaximize}
                onXClick={handleClose}
              />
            </header>
            <main>{children}</main>
            <footer></footer>
          </div>
        </DraggableItem>
      </DroppableArea>
    </DndContext>
  );
};

export default Window;
