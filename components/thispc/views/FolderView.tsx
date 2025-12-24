import { Folder } from "lucide-react";
import React from "react";

interface FolderViewProps {
  title: string;
  items?: { label: string; icon?: React.ReactNode; onClick?: () => void }[];
}

const FolderView = ({ title, items = [] }: FolderViewProps) => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4 border-b border-[#D9D9D9] pb-2">
        <h2 className="text-sm font-bold text-[#1E395B]">{title}</h2>
      </div>

      {items.length === 0 ? (
        <div className="text-gray-500 text-xs italic">This Disk is empty.</div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1 p-2 hover:bg-[#E5F3FB] border border-transparent hover:border-[#7DA2CE] rounded-[2px] cursor-pointer group"
              onClick={item.onClick}
            >
              {item.icon || (
                <Folder size={48} className="text-[#F8D775] fill-[#F8D775]" />
              )}
              <span className="text-xs text-[#1E395B] text-center break-words w-full">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderView;
