import { Monitor } from "lucide-react";

const ExplorerFooter = () => {
  return (
    <div className="h-8 bg-[#F0F0F0] border-t border-[#D9D9D9] flex items-center px-4 gap-4 text-[#1E395B]">
      <div className="flex items-center gap-2">
        <Monitor size={16} className="text-[#1E395B]" />
        <span className="text-xs">Computer</span>
      </div>
    </div>
  );
};

export default ExplorerFooter;
