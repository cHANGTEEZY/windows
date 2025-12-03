import React from "react";
import FolderView from "./FolderView";
import { Music } from "lucide-react";

const MusicView = () => {
  const items = [
    { label: "Song.mp3", icon: <Music size={48} className="text-green-500" /> },
  ];
  return <FolderView title="Music" items={items} />;
};

export default MusicView;
