"use client";

import React from "react";
import { useWindowStore } from "@/store";
import Window from "./window";

const WindowManager = () => {
  const { windows, closeWindow, minimizeWindow, maximizeWindow, focusWindow } =
    useWindowStore();

  return (
    <>
      {windows.map((window) => {
        if (window.isMinimized) return null;

        return (
          <Window
            key={window.id}
            windowId={window.id}
            title={window.title}
            isMaximized={window.isMaximized}
            zIndex={window.zIndex}
            onCloseClick={() => closeWindow(window.id)}
            onMinimizeCLick={() => minimizeWindow(window.id)}
            onMaximizeClick={() => maximizeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
          >
            {window.type === "browser" && window.content && (
              <iframe
                src={window.content.url}
                title={window.title}
                className="h-full w-full border-none"
              />
            )}

            {window.type === "folder" && (
              <div className="p-4 text-white">Folder Content Placeholder</div>
            )}
          </Window>
        );
      })}
    </>
  );
};

export default WindowManager;
