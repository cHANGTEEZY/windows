import { useDraggable } from "@dnd-kit/core";
import React from "react";
import { CSS } from "@dnd-kit/utilities";

const DraggableItem = ({
  id = "draggable",
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { setNodeRef, listeners, attributes, transform, isDragging } =
    useDraggable({
      id: id,
    });
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const lastTransformRef = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    if (transform) {
      lastTransformRef.current = { x: transform.x, y: transform.y };
    }

    if (!isDragging && lastTransformRef.current) {
      setPosition((prev) => ({
        x: prev.x + lastTransformRef.current.x,
        y: prev.y + lastTransformRef.current.y,
      }));
      lastTransformRef.current = { x: 0, y: 0 };
    }
  }, [isDragging, transform]);

  const style = {
    position: "relative" as const,
    left: position.x,
    top: position.y,
    transform: transform ? CSS.Translate.toString(transform) : undefined,
  };

  console.log("Current card postions is ", position);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="w-full h-full"
    >
      {children}
    </div>
  );
};

export default DraggableItem;
