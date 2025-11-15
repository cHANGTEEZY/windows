import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import tabIconData from "@/lib/constants/tab-icons";
import Image from "next/image";

const TabIcons = () => {
  return (
    <div className="h-full flex items-center justify-between gap-2 ">
      {tabIconData.map((icon) => (
        <TabButon key={icon.id} tabIcon={icon.image} tooltip={icon.tootlTip} />
      ))}
    </div>
  );
};

export default TabIcons;

const TabButon = ({ tabIcon, tooltip }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild className="hover:bg-[#1a4cbf] p-2 h-full">
        <Image
          src={tabIcon}
          alt={tooltip}
          height={50}
          width={50}
          className=" object-contain"
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};
