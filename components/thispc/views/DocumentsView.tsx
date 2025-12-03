import React from "react";
import FolderView from "./FolderView";
import { FileText } from "lucide-react";

const DocumentsView = () => {
  const items = [
    {
      label: "Resume.docx",
      icon: <FileText size={48} className="text-blue-600" />,
    },
    {
      label: "Project Plan.pdf",
      icon: <FileText size={48} className="text-red-600" />,
    },
  ];
  return <FolderView title="Documents" items={items} />;
};

export default DocumentsView;
