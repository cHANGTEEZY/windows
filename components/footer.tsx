import StartMenu from "./start-menu";

const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0 bg-[#2661dd] flex items-center justify-between h-14">
      <div className=" h-full">
        <StartMenu />
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
