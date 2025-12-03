import React from "react";
import FolderView from "./FolderView";
import { FileText, Image as ImageIcon } from "lucide-react";

const DesktopView = () => {
  const items = [
    {
      label: "My Text File.txt",
      icon: <FileText size={48} className="text-gray-500" />,
    },
    {
      label: "Vacation.jpg",
      icon: <ImageIcon size={48} className="text-blue-500" />,
    },
  ];
  return <FolderView title="Desktop" items={items} />;
};

export default DesktopView;
