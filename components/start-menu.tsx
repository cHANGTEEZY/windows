import Image from "next/image";
import windowsImage from "@/public/assets/windows-start.png";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/8bit/popover";
import windowsUserAvatar from "@/public/assets/windows-user.ico";
import { menuItems } from "@/lib/constants/start-menu";
import { Button } from "./ui/8bit/button";
import { signOutAction } from "@/app/actions/auth";
import { requireAuth } from "@/lib/session";

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
      <PopoverContent className="p-0 border-blue-500 shadow-none w-[90vw] sm:w-[600px] md:w-[700px] max-h-[70vh]">
        <PopOverBox />
      </PopoverContent>
    </Popover>
  );
};

export default StartMenu;

const PopOverBox = async () => {
  const session = await requireAuth();

  return (
    <section className="flex flex-col max-h-[clamp(60vh,70vh,80vh)]">
      <header className="flex items-center gap-[clamp(6px,1vw,12px)] px-4 py-6 bg-linear-to-b from-[#2778dd] via-[#335f9d] to-[#0f4c9c] text-white">
        <Image
          src={windowsUserAvatar}
          alt="windows avatar logo"
          height={30}
          width={30}
          className="border-white border h-[clamp(2rem,6vw,3rem)] w-[clamp(2rem,6vw,3rem)]"
        />
        <h1 className="text-[clamp(12px,2vw,20px)]">{session.user.name}</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className="border-r border-[#95bdee] flex flex-col overflow-y-auto w-1/2">
          <ul className="p-[clamp(8px,2vw,20px)]">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button className="flex items-center hover:text-white gap-[clamp(6px,1.8vw,16px)] w-full p-[clamp(6px,1vw,12px)] rounded hover:bg-[#1665cb] cursor-pointer text-[clamp(10px,1.6vw,14px)]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    height={45}
                    width={45}
                    className="h-[clamp(30px,5vw,30px)] w-[clamp(30px,5vw,30px)]"
                  />
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <Button className="flex mx-auto mb-[clamp(12px,2vw,24px)] px-[clamp(16px,4vw,40px)] py-[clamp(6px,1.2vw,14px)] rounded-none bg-[#316ac5] border-[#315ac5] hover:bg-[#1665cb] cursor-pointer text-[clamp(10px,1.6vw,14px)]">
            All Programs
          </Button>
        </div>

        <div className="bg-[#cce1f9] overflow-y-auto w-1/2">
          <ul className="p-[clamp(8px,2vw,20px)]">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button className="flex items-center hover:text-white gap-[clamp(6px,1.8vw,10px)] w-full p-[clamp(6px,1vw,12px)] rounded hover:bg-[#1665cb] cursor-pointer text-[clamp(10px,1.6vw,14px)]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    height={30}
                    width={30}
                    className="h-[clamp(30px,5vw,30px)] w-[clamp(30px,5vw,30px)]"
                  />
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form action={signOutAction}>
        <footer className="flex items-baseline bg-[#315ac5] w-full gap-[clamp(8px,2vw,24px)] justify-end px-3 sm:pr-5 py-3">
          <Button className="rounded-none bg-[#f31404] hover:bg-[#d11303] border-[#315ac5] cursor-pointer text-[clamp(10px,1.6vw,14px)] px-[clamp(10px,2.5vw,20px)] py-[clamp(6px,1.2vw,12px)]">
            Shut Down
          </Button>

          <Button className="rounded-none bg-[#ca8012] hover:bg-[#b3770f] border-[#315ac5] cursor-pointer text-[clamp(10px,1.6vw,14px)] px-[clamp(10px,2.5vw,20px)] py-[clamp(6px,1.2vw,12px)]">
            Log Out
          </Button>
        </footer>
      </form>
    </section>
  );
};
