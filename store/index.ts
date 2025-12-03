import { create } from "zustand";

export interface WindowState {
  id: string;
  title: string;
  type: "browser" | "folder" | "notepad" | "this-pc";
  content?: any;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface WindowStore {
  windows: WindowState[];
  activeWindowId: string | null;
  maxZIndex: number;

  openWindow: (
    window: Omit<WindowState, "isMinimized" | "isMaximized" | "zIndex">
  ) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],
  activeWindowId: null,
  maxZIndex: 100,

  openWindow: (newWindow) =>
    set((state) => {
      const existingWindow = state.windows.find((w) => w.id === newWindow.id);
      if (existingWindow) {
        // If window exists, just focus it and un-minimize
        return {
          activeWindowId: newWindow.id,
          windows: state.windows.map((w) =>
            w.id === newWindow.id
              ? { ...w, isMinimized: false, zIndex: state.maxZIndex + 1 }
              : w
          ),
          maxZIndex: state.maxZIndex + 1,
        };
      }

      // Add new window
      return {
        windows: [
          ...state.windows,
          {
            ...newWindow,
            isMinimized: false,
            isMaximized: false,
            zIndex: state.maxZIndex + 1,
          },
        ],
        activeWindowId: newWindow.id,
        maxZIndex: state.maxZIndex + 1,
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
      ),
    })),

  maximizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    })),

  focusWindow: (id) =>
    set((state) => {
      if (state.activeWindowId === id) return state;
      return {
        activeWindowId: id,
        maxZIndex: state.maxZIndex + 1,
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, zIndex: state.maxZIndex + 1 } : w
        ),
      };
    }),
}));
