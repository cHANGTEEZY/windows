"use client";

import { Minus, Square, X } from "lucide-react";

const WindowControl = ({
  onMinusClick,
  onSquareClick,
  onXClick,
}: {
  onMinusClick: () => void;
  onSquareClick: () => void;
  onXClick: () => void;
}) => {
  return (
    <div className="flex items-center">
      <button className="cursor-pointer" onClick={onMinusClick}>
        <Minus className="hover:text-[rgba(255,255,255,0.7)] text-white" />
      </button>
      <button className="cursor-pointer" onClick={onSquareClick}>
        <Square className="hover:text-[rgba(255,255,255,0.7)] text-white" />
      </button>
      <button className="cursor-pointer" onClick={onXClick}>
        <X className="hover:text-[rgba(255,255,255,0.7)] text-white" />
      </button>
    </div>
  );
};

export default WindowControl;
