import React from "react";
import FolderView from "./FolderView";
import { Image as ImageIcon } from "lucide-react";

const PicturesView = () => {
  const items = [
    {
      label: "Photo1.jpg",
      icon: <ImageIcon size={48} className="text-purple-500" />,
    },
    {
      label: "Photo2.png",
      icon: <ImageIcon size={48} className="text-purple-500" />,
    },
  ];
  return <FolderView title="Pictures" items={items} />;
};

export default PicturesView;
