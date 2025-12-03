import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/8bit/navigation-menu";

const notePadLinks = [
  {
    label: "File",
    children: ["New", "Open", "Save", "Save As", "Page Setup", "Print", "Exit"],
  },
  {
    label: "Edit",
    children: [
      "Undo",
      "Cut",
      "Copy",
      "Paste",
      "Delete",
      "Find",
      "Find Next",
      "Replace",
      "Go To",
      "Select All",
      "Time/Date",
    ],
  },
  {
    label: "Format",
    children: ["Word Wrap", "Font"],
  },
];

const Notepad = () => {
  return (
    <section>
      <NotePadNav />
      <NotePadContent />
    </section>
  );
};

export default Notepad;

const NotePadNav = () => {
  return (
    <ul>
      {notePadLinks.map((menu) => (
        <li key={menu.label} className="inline-block relative group">
          <button className="px-2 py-1 hover:bg-gray-700">{menu.label}</button>
          <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-gray-800 border border-gray-600">
            {menu.children.map((child) => (
              <li key={child}>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                  {child}
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const NotePadContent = () => {
  return (
    <textarea
      className="w-full h-96 bg-transparent text-white p-2  resize-none focus:outline-none"
      defaultValue=""
    />
  );
};
