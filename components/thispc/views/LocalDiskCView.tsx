import React from "react";
import FolderView from "./FolderView";
import { Folder } from "lucide-react";

const LocalDiskCView = () => {
  const items = [
    {
      label: "Program Files",
      icon: <Folder size={48} className="text-[#F8D775] fill-[#F8D775]" />,
    },
    {
      label: "Windows",
      icon: <Folder size={48} className="text-[#F8D775] fill-[#F8D775]" />,
    },
    {
      label: "Users",
      icon: <Folder size={48} className="text-[#F8D775] fill-[#F8D775]" />,
    },
  ];
  return <FolderView title="Local Disk (C:)" items={items} />;
};

export default LocalDiskCView;
