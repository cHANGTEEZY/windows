import { ChevronRight, Folder, Monitor, Star } from "lucide-react";
import React, { useState } from "react";

type SidebarItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  isOpen?: boolean;
  children: SidebarItem[];
};

interface ExplorerSidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const ExplorerSidebar = ({ currentPath, onNavigate }: ExplorerSidebarProps) => {
  // Mock data structure for sidebar
  const sidebarItems: SidebarItem[] = [
    {
      id: "favorites",
      label: "Favorites",
      icon: <Star size={14} className="text-[#EAC15E] fill-[#EAC15E]" />,
      isOpen: true,
      children: [
        {
          id: "desktop",
          label: "Desktop",
          icon: <Monitor size={14} className="text-[#428ACA]" />,
          children: [],
        },
        {
          id: "downloads",
          label: "Downloads",
          icon: <Folder size={14} className="text-[#428ACA]" />,
          children: [],
        },
        {
          id: "recent",
          label: "Recent Places",
          icon: <Folder size={14} className="text-[#428ACA]" />,
          children: [],
        },
      ],
    },
    {
      id: "libraries",
      label: "Libraries",
      icon: <Folder size={14} className="text-[#428ACA]" />,
      isOpen: true,
      children: [
        {
          id: "documents",
          label: "Documents",
          icon: <Folder size={14} className="text-[#428ACA]" />,
          children: [],
        },
        {
          id: "music",
          label: "Music",
          icon: <Folder size={14} className="text-[#428ACA]" />,
          children: [],
        },
        {
          id: "pictures",
          label: "Pictures",
          icon: <Folder size={14} className="text-[#428ACA]" />,
          children: [],
        },
        {
          id: "videos",
          label: "Videos",
          icon: <Folder size={14} className="text-[#428ACA]" />,
          children: [],
        },
      ],
    },
    {
      id: "computer",
      label: "Computer",
      icon: <Monitor size={14} className="text-[#1E395B]" />,
      isOpen: true,
      children: [
        {
          id: "c-drive",
          label: "Local Disk (C:)",
          icon: <Folder size={14} className="text-[#428ACA]" />,
          children: [],
        },
        {
          id: "d-drive",
          label: "Local Disk (D:)",
          icon: <Folder size={14} className="text-[#428ACA]" />,
          children: [],
        },
      ],
    },
    {
      id: "network",
      label: "Network",
      icon: <Monitor size={14} className="text-[#1E395B]" />,
      isOpen: false,
      children: [],
    },
  ];

  return (
    <div className="w-[200px] h-full bg-white border-r border-[#D9D9D9] overflow-y-auto pt-2 pb-4">
      {sidebarItems.map((item) => (
        <SidebarGroup
          key={item.id}
          item={item}
          currentPath={currentPath}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
};

const SidebarGroup = ({
  item,
  currentPath,
  onNavigate,
}: {
  item: SidebarItem;
  currentPath: string;
  onNavigate: (path: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(item.isOpen);

  const isActive = currentPath === item.id;

  return (
    <div className="mb-1">
      <div
        className={`flex items-center gap-1 px-2 py-[2px] cursor-pointer group ${
          isActive
            ? "bg-[#D9EBF9] border border-[#7DA2CE]/30"
            : "hover:bg-[#E5F3FB] border border-transparent"
        }`}
        onClick={() => {
          if (item.children.length > 0) {
            setIsOpen(!isOpen);
          }
          onNavigate(item.id);
        }}
      >
        <ChevronRight
          size={10}
          className={`text-[#A0A0A0] transition-transform ${
            isOpen ? "rotate-90" : ""
          } ${
            !item.children.length ? "opacity-0" : "group-hover:text-[#428ACA]"
          }`}
        />
        {item.icon}
        <span className="text-xs text-[#1E395B]">{item.label}</span>
      </div>

      {isOpen && item.children && (
        <div className="ml-4">
          {item.children.map((child) => (
            <div
              key={child.id}
              className={`flex items-center gap-1 px-2 py-[2px] cursor-pointer pl-4 ${
                currentPath === child.id
                  ? "bg-[#D9EBF9] border border-[#7DA2CE]/30"
                  : "hover:bg-[#E5F3FB] border border-transparent"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(child.id);
              }}
            >
              <div className="w-[10px]" /> {/* Indentation spacer */}
              {child.icon}
              <span className="text-xs text-[#1E395B]">{child.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExplorerSidebar;
