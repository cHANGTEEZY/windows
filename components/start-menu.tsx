import Image from "next/image";
import windowsImage from "@/public/assets/windows-start.png";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/8bit/popover";

const StartMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="cursor-pointer flex items-center rounded-tr-2xl rounded-br-xl bg-linear-to-b from-green-800 via-green-500 to-green-800 gap-2 p-4 h-full text-white hover:bg-green-800">
          <Image
            src={windowsImage}
            height={40}
            width={40}
            alt="Windows Start logo"
          />
          Start
        </button>
      </PopoverTrigger>
      <PopoverContent>Pop over content</PopoverContent>
    </Popover>
  );
};

export default StartMenu;
