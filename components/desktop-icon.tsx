import Image, { StaticImageData } from "next/image";

const DesktopIcon = ({
  icon,
  label,
  width,
  height,
  onDoubleClick,
}: {
  icon: string | StaticImageData;
  label: string;
  width?: number;
  height?: number;
  onDoubleClick: () => void;
}) => {
  return (
    <button
      className="hover:bg-blue-500 px-4 cursor-pointer hover:text-white"
      onDoubleClick={onDoubleClick}
    >
      <Image src={icon} alt={label} width={width} height={height} />
      <p>{label}</p>
    </button>
  );
};

export default DesktopIcon;
