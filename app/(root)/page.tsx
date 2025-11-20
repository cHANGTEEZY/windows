import { requireAuth } from "@/lib/session";
import { redirect } from "next/navigation";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/8bit/context-menu";
import Window from "@/components/window";

const HomePage = async () => {
  const session = await requireAuth();

  if (!session) {
    return redirect("/login");
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="w-screen h-screen z-20">
          <Window>
            <h1 className="text-2xl font-bold">
              Welcome, {session.user.name}!
            </h1>
          </Window>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="z-10">
        <ContextMenuSub>
          <ContextMenuSubTrigger>View</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Large Icons</ContextMenuItem>
            <ContextMenuItem>Medium Icons</ContextMenuItem>
            <ContextMenuItem>Small Icons</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>
          Refresh
          <ContextMenuShortcut className="ml-10">Ctrl + R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>New</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Folder</ContextMenuItem>
            <ContextMenuItem>Text Document</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>Screen resolution</ContextMenuItem>
        <ContextMenuItem>Gadgets</ContextMenuItem>
        <ContextMenuItem>Personalize</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default HomePage;
