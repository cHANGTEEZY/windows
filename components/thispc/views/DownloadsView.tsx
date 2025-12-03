import React from "react";
import FolderView from "./FolderView";
import { FileArchive } from "lucide-react";

const DownloadsView = () => {
  const items = [
    {
      label: "shady_adobe_installer.exe",
      icon: <FileArchive size={48} className="text-orange-500" />,
    },
    {
      label: "archive.zip",
      icon: <FileArchive size={48} className="text-yellow-600" />,
    },
  ];
  return <FolderView title="Downloads" items={items} />;
};

export default DownloadsView;
