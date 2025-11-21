"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/8bit/context-menu";
import WindowManager from "@/components/window/WindowManager";
import DesktopIcon from "@/components/desktop-icon";
import ThisPcIcon from "@/public/assets/thispc.ico";
import { useState } from "react";
import { useWindowStore } from "@/store";

const HomePage = () => {
  const { openWindow } = useWindowStore();

  const handleOpenThisPc = () => {
    openWindow({
      id: "this-pc",
      title: "This PC",
      type: "browser",
      content: { url: "https://www.sushankgurung.com" },
    });
  };

  const handleOpenThisPc2 = () => {
    openWindow({
      id: "this-pc-2",
      title: "This PC 2",
      type: "browser",
      content: { url: "https://www.sushankgurung.com" },
    });
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="w-screen h-screen z-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 p-4 flex flex-col gap-4">
            <DesktopIcon
              label="This PC"
              icon={ThisPcIcon}
              height={60}
              onDoubleClick={handleOpenThisPc}
            />
            <DesktopIcon
              label="This PC 2"
              icon={ThisPcIcon}
              height={60}
              onDoubleClick={handleOpenThisPc2}
            />
          </div>

          <WindowManager />
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="z-10">
        <ContextMenuSub>
          <ContextMenuSubTrigger>View</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Large Icons</ContextMenuItem>
            <ContextMenuItem>Medium Icons</ContextMenuItem>
            <ContextMenuItem>Small Icons</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>
          Refresh
          <ContextMenuShortcut className="ml-10">Ctrl + R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>New</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Folder</ContextMenuItem>
            <ContextMenuItem>Text Document</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>Screen resolution</ContextMenuItem>
        <ContextMenuItem>Gadgets</ContextMenuItem>
        <ContextMenuItem>Personalize</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default HomePage;
