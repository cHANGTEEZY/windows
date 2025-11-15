import StartMenu from "./start-menu";
import TabIcons from "./tab-icons";

const Footer = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  // Pad with leading zeros
  const paddedMinute = String(minute).padStart(2, "0");
  const paddedHour = String(hour).padStart(2, "0");

  // AM/PM
  const period = hour >= 12 ? "PM" : "AM";

  return (
    <footer className="w-full absolute bottom-0 bg-[#2661dd] flex items-center justify-between h-14">
      <div className="flex items-center justify-center h-full gap-4">
        <StartMenu />
        <TabIcons />
      </div>
      <div className="bg-[#1194ea] h-full flex items-center justify-center px-5">
        <p className="text-white text-2xl">
          {paddedHour}:{paddedMinute} {period}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
