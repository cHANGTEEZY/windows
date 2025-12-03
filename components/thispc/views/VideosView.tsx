import React from "react";
import FolderView from "./FolderView";
import { Film } from "lucide-react";

const VideosView = () => {
  const items = [
    { label: "Movie.mp4", icon: <Film size={48} className="text-pink-500" /> },
  ];
  return <FolderView title="Videos" items={items} />;
};

export default VideosView;
