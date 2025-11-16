import Image from "next/image";

const DesktopIcon = ({
  icon,
  label,
  width,
  height,
}: {
  icon: string;
  label: string;
  width: number;
  height: number;
}) => {
  return (
    <div>
      <Image src={icon} alt={label} width={width} height={height} />
      <p>{label}</p>
    </div>
  );
};

export default DesktopIcon;
