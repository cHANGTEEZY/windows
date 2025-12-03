import React, { useState } from "react";
import ExplorerHeader from "./ExplorerHeader";
import CommandBar from "./CommandBar";
import ExplorerSidebar from "./ExplorerSidebar";
import ExplorerContent from "./ExplorerContent";
import ExplorerFooter from "./ExplorerFooter";

const ThisPc = () => {
  const [currentPath, setCurrentPath] = useState("computer");

  return (
    <div className="flex flex-col h-full bg-white text-sm font-segoe select-none">
      <ExplorerHeader currentPath={currentPath} />
      <CommandBar />

      <div className="flex-1 flex overflow-hidden">
        <ExplorerSidebar
          currentPath={currentPath}
          onNavigate={setCurrentPath}
        />
        <ExplorerContent currentPath={currentPath} />
      </div>

      <ExplorerFooter />
    </div>
  );
};

export default ThisPc;
