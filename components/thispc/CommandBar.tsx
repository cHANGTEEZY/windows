import { ChevronDown, HelpCircle } from "lucide-react";
import React from "react";

const CommandBar = () => {
  return (
    <div className="flex items-center justify-between px-2 py-1 bg-[#F5F6F7] border-b border-[#D9D9D9] text-xs text-[#1E395B]">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 hover:bg-[#E5F3FB] px-2 py-1 rounded border border-transparent hover:border-[#7DA2CE]">
          Organize <ChevronDown size={10} />
        </button>
        <button className="flex items-center gap-1 hover:bg-[#E5F3FB] px-2 py-1 rounded border border-transparent hover:border-[#7DA2CE]">
          System properties
        </button>
        <button className="flex items-center gap-1 hover:bg-[#E5F3FB] px-2 py-1 rounded border border-transparent hover:border-[#7DA2CE]">
          Uninstall or change a program
        </button>
        <button className="flex items-center gap-1 hover:bg-[#E5F3FB] px-2 py-1 rounded border border-transparent hover:border-[#7DA2CE]">
          Map network drive
        </button>
        <button className="flex items-center gap-1 hover:bg-[#E5F3FB] px-2 py-1 rounded border border-transparent hover:border-[#7DA2CE]">
          Open Control Panel
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-1 hover:bg-[#E5F3FB] rounded">
          <HelpCircle size={14} className="text-[#1E395B]" />
        </button>
      </div>
    </div>
  );
};

export default CommandBar;
