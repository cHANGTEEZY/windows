"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type CustomInputProps = {
  inputType: string;
  inputPlaceholder: string;
  htmlFor?: string;
  labelBgColor?: string;
  textColor?: string;
  error?: string;
};

const CustomInput = ({
  inputType,
  inputPlaceholder,
  htmlFor,
  labelBgColor = "#ffffff",
  textColor = "text-slate-700",
  error,
}: CustomInputProps) => {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <>
      <div
        className={cn(
          "relative flex w-full border border-slate-400 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5  after:transition-all after:duration-300 after:ease-out",
          inputFocus
            ? "after:w-full after:-translate-x-1/2"
            : "after:w-0 after:translate-x-0",
          error
            ? "border-red-500 after:bg-red-500"
            : "border-slate-400  after:bg-blue-500"
        )}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      >
        <label
          htmlFor={htmlFor}
          className={cn(
            "absolute transition-all duration-200 ease-in-out left-3 top-2 pointer-events-none",
            textColor,
            inputFocus && `text-[11px] -top-2 bg-[${labelBgColor}] px-2`
          )}
        >
          {inputPlaceholder}
        </label>
        <input
          id={htmlFor}
          type={inputType}
          className={cn(
            "transition-all duration-150 ease-in bg-transparent w-full indent-5 py-2 outline-none focus:outline-none",
            textColor
          )}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </>
  );
};

export default CustomInput;
