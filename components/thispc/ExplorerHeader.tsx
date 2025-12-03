import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Search,
  RefreshCw,
} from "lucide-react";
import React from "react";

interface ExplorerHeaderProps {
  currentPath?: string;
}

const ExplorerHeader = ({ currentPath = "computer" }: ExplorerHeaderProps) => {
  // Simple mapping for display labels
  const getPathLabel = (path: string) => {
    const labels: Record<string, string> = {
      computer: "Computer",
      desktop: "Desktop",
      downloads: "Downloads",
      documents: "Documents",
      pictures: "Pictures",
      videos: "Videos",
      music: "Music",
      recent: "Recent Places",
      "c-drive": "Local Disk (C:)",
      "d-drive": "Local Disk (D:)",
      network: "Network",
    };
    return labels[path.toLowerCase()] || "Computer";
  };

  return (
    <div className="flex items-center gap-2 p-1 bg-[#D9EBF9] border-b border-[#A0A0A0]">
      {/* Navigation Buttons */}
      <div className="flex items-center gap-1">
        <button
          className="p-1 rounded-full hover:bg-white/50 disabled:opacity-50"
          disabled
        >
          <ArrowLeft size={16} className="text-[#1E395B]" />
        </button>
        <button
          className="p-1 rounded-full hover:bg-white/50 disabled:opacity-50"
          disabled
        >
          <ArrowRight size={16} className="text-[#1E395B]" />
        </button>
        <button className="p-1 rounded-full hover:bg-white/50">
          <ChevronRight size={12} className="text-[#1E395B] rotate-90" />
        </button>
      </div>

      {/* Address Bar */}
      <div className="flex-1 flex items-center bg-white border border-[#7F9DB9] rounded-[2px] h-[24px] px-1 shadow-inner">
        <div className="flex items-center gap-1 px-1 hover:bg-[#E5F3FB] cursor-pointer flex-1">
          <img
            src="/icons/computer.png"
            alt=""
            className="w-4 h-4"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span className="text-xs text-[#1E395B]">
            {getPathLabel(currentPath)}
          </span>
          <ChevronRight size={10} className="text-[#1E395B]" />
        </div>
        <div className="px-1 border-l border-gray-300">
          <RefreshCw size={12} className="text-[#1E395B]" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-64 flex items-center bg-white border border-[#7F9DB9] rounded-[2px] h-[24px] px-1 shadow-inner">
        <input
          type="text"
          placeholder="Search Computer"
          className="w-full text-xs outline-none text-gray-600 placeholder-gray-400 italic"
        />
        <Search size={12} className="text-gray-400" />
      </div>
    </div>
  );
};

export default ExplorerHeader;
