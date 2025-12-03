import React from "react";
import { HardDrive } from "lucide-react";
import DesktopView from "./views/DesktopView";
import DownloadsView from "./views/DownloadsView";
import DocumentsView from "./views/DocumentsView";
import PicturesView from "./views/PicturesView";
import VideosView from "./views/VideosView";
import MusicView from "./views/MusicView";
import RecentPlacesView from "./views/RecentPlacesView";
import LocalDiskCView from "./views/LocalDiskCView";
import LocalDiskDView from "./views/LocalDiskDView";
import NetworkView from "./views/NetworkView";

interface ExplorerContentProps {
  currentPath: string;
}

const ExplorerContent = ({ currentPath }: ExplorerContentProps) => {
  const renderContent = () => {
    switch (currentPath) {
      case "desktop":
        return <DesktopView />;
      case "downloads":
        return <DownloadsView />;
      case "documents":
        return <DocumentsView />;
      case "pictures":
        return <PicturesView />;
      case "videos":
        return <VideosView />;
      case "music":
        return <MusicView />;
      case "recent":
        return <RecentPlacesView />;
      case "c-drive":
        return <LocalDiskCView />;
      case "d-drive":
        return <LocalDiskDView />;
      case "network":
        return <NetworkView />;
      case "computer":
      default:
        return <ComputerContent />;
    }
  };

  return (
    <div className="flex-1 bg-white p-4 overflow-y-auto h-full">
      {renderContent()}
    </div>
  );
};

const ComputerContent = () => {
  return (
    <>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2 border-b border-[#D9D9D9] pb-1">
          <ChevronDownIcon className="text-[#1E395B]" />
          <h3 className="text-xs font-bold text-[#1E395B] uppercase">
            Hard Disk Drives (3)
          </h3>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
          <DriveItem
            label="Local Disk (C:)"
            used="50.5 GB"
            total="100 GB"
            percent={50}
          />
          <DriveItem
            label="Local Disk (D:)"
            used="10.2 GB"
            total="500 GB"
            percent={2}
          />
          <DriveItem
            label="Local Disk (E:)"
            used="400 GB"
            total="1 TB"
            percent={40}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2 border-b border-[#D9D9D9] pb-1">
          <ChevronDownIcon className="text-[#1E395B]" />
          <h3 className="text-xs font-bold text-[#1E395B] uppercase">
            Devices with Removable Storage (1)
          </h3>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
          <div className="flex items-center gap-3 p-2 hover:bg-[#E5F3FB] border border-transparent hover:border-[#7DA2CE] rounded-[2px] cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center">
              <div className="relative">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center border border-gray-400">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xs font-medium text-[#1E395B]">
                DVD RW Drive (F:)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DriveItem = ({
  label,
  used,
  total,
  percent,
}: {
  label: string;
  used: string;
  total: string;
  percent: number;
}) => {
  return (
    <div className="flex items-start gap-3 p-2 hover:bg-[#E5F3FB] border border-transparent hover:border-[#7DA2CE] rounded-[2px] cursor-pointer group">
      <HardDrive size={32} className="text-gray-500 mt-1" />
      <div className="flex-1">
        <div className="text-xs font-medium text-[#1E395B] mb-1">{label}</div>
        <div className="w-full h-[14px] bg-[#E6E6E6] border border-[#BCBCBC] rounded-[2px] relative overflow-hidden mb-1">
          <div
            className={`h-full ${
              percent > 90 ? "bg-red-500" : "bg-blue-400"
            } absolute top-0 left-0`}
            style={{ width: `${percent}%` }}
          />
          <div className="absolute top-0 left-0 w-full h-[50%] bg-white/30"></div>
        </div>
        <div className="text-[10px] text-gray-500">
          {used} free of {total}
        </div>
      </div>
    </div>
  );
};

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default ExplorerContent;
