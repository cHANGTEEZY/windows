"use client";

import React, { useState, useEffect, useRef } from "react";
import WindowControl from "./WindowControl";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface WindowProps {
  children: React.ReactNode;
  onMinimizeCLick: () => void;
  onMaximizeClick: () => void;
  onCloseClick: () => void;
  windowId: string;
  title?: string;
  isMaximized?: boolean;
  zIndex?: number;
  onFocus?: () => void;
}

const WindowContent = ({
  children,
  onMinimizeCLick,
  onMaximizeClick,
  onCloseClick,
  windowId,
  title,
  isMaximized,
  zIndex,
  onFocus,
}: WindowProps) => {
  const { setNodeRef, listeners, attributes, transform, isDragging } =
    useDraggable({
      id: windowId,
      disabled: isMaximized,
    });

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const lastTransformRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (transform) {
      lastTransformRef.current = { x: transform.x, y: transform.y };
    }

    if (!isDragging && lastTransformRef.current && !isMaximized) {
      // Only update position if not maximized (to avoid saving 0,0 if we were to drag while maximized, though disabled prevents that)
      // Actually, if disabled, transform is null.
      // But if we just finished dragging, we update.
      if (
        lastTransformRef.current.x !== 0 ||
        lastTransformRef.current.y !== 0
      ) {
        setPosition((prev) => ({
          x: prev.x + lastTransformRef.current.x,
          y: prev.y + lastTransformRef.current.y,
        }));
        lastTransformRef.current = { x: 0, y: 0 };
      }
    }
  }, [isDragging, transform, isMaximized]);

  const style: React.CSSProperties = isMaximized
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "calc(100vh - 40px)", // Adjust for taskbar
        zIndex: zIndex,
        transform: "none",
        borderRadius: 0,
      }
    : {
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: zIndex,
        transform: transform ? CSS.Translate.toString(transform) : undefined,
        width: "800px",
        height: "600px",
      };

  return (
    <div
      ref={setNodeRef}
      className={`bg-[#1e1e1e] rounded-lg shadow-lg shadow-black border border-[#333333] flex flex-col overflow-hidden`}
      style={style}
      onMouseDown={onFocus}
    >
      <header
        {...listeners}
        {...attributes}
        className="flex justify-between items-center bg-[#2d2d2d] p-2 select-none cursor-default"
      >
        <div className="text-white text-sm ml-2">{title || "Window"}</div>

        <div
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <WindowControl
            onMinusClick={onMinimizeCLick}
            onSquareClick={onMaximizeClick}
            onXClick={onCloseClick}
          />
        </div>
      </header>
      <main className="flex-1 overflow-auto bg-[#1e1e1e]">{children}</main>
    </div>
  );
};

const Window = (props: WindowProps) => {
  return (
    <DndContext>
      <WindowContent {...props} />
    </DndContext>
  );
};

export default Window;
