import Image from "next/image";
import windowsImage from "@/public/assets/windows-start.png";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/8bit/popover";
import windowsUserAvatar from "@/public/assets/windows-user.ico";
import { menuItems } from "@/lib/constants/start-menu";
import { Button } from "./ui/8bit/button";
import { signOutAction } from "@/app/actions/auth";

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
      <PopoverContent className="p-0 border-blue-500 shadow-none">
        <PopOverBox />
      </PopoverContent>
    </Popover>
  );
};

export default StartMenu;

const PopOverBox = () => {
  return (
    <section>
      <header className="flex items-center gap-2  bg-linear-to-b from-[#2778dd] via-[#335f9d] to-[#0f4c9c] text-white ">
        <Image
          src={windowsUserAvatar}
          alt="windows avatar logo"
          height={80}
          width={80}
          className="border-white border"
        />
        <h1>Administrator</h1>
      </header>
      <div className="flex">
        <div className="border-r border-[#95bdee]">
          <ul className="p-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button className="flex items-center gap-4 w-full p-2 rounded hover:bg-[#1665cb] cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.label}
                    height={45}
                    width={45}
                  />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <Button className="flex mx-auto mb-5 px-10 py-3.5 rounded-none bg-[#316ac5] border-[#315ac5] hover:bg-[#1665cb] cursor-pointer">
            All Programs
          </Button>
        </div>
        <div className="bg-[#cce1f9]">
          <ul className="p-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button className="flex items-center gap-4 w-full p-2 rounded hover:bg-[#1665cb] cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.label}
                    height={45}
                    width={45}
                  />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <form action={signOutAction}>
        <footer className="flex items-baseline w-full gap-6 justify-end pr-5">
          <Button className="rounded-none bg-[#f31404] hover:bg-[#d11303] border-[#315ac5]  cursor-pointer">
            Shut Down
          </Button>
          <Button className="rounded-none  bg-[#ca8012] hover:bg-[#b3770f] border-[#315ac5]  cursor-pointer">
            Log Off
          </Button>
        </footer>
      </form>
    </section>
  );
};
