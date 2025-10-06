import { useState } from "react";
import { MenuBar } from "./MenuBar";
import { DesktopIcon } from "./DesktopIcon";
import { Window } from "./Window";
import { FinderContent } from "./windows/FinderWindow";
import { HistoryContent } from "./windows/HistoryWindow";
import { AboutContent } from "./windows/AboutWindow";
import { TeamContent } from "./windows/TeamWindow";

type WindowType = "finder" | "history" | "about" | "team" | null;

export const Desktop = () => {
  const [openWindow, setOpenWindow] = useState<WindowType>(null);

  const icons = [
    { id: "finder", icon: "📁", label: "Finder", window: "finder" as WindowType },
    { id: "history", icon: "📜", label: "History", window: "history" as WindowType },
    { id: "team", icon: "👥", label: "The Team", window: "team" as WindowType },
    { id: "about", icon: "ℹ️", label: "About Mac", window: "about" as WindowType },
  ];

  return (
    <div className="h-screen flex flex-col bg-[hsl(var(--mac-desktop))] crt-effect">
      <MenuBar />
      
      <div className="flex-1 p-4 relative">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {icons.map((item) => (
            <DesktopIcon
              key={item.id}
              icon={item.icon}
              label={item.label}
              onDoubleClick={() => setOpenWindow(item.window)}
            />
          ))}
        </div>

        {openWindow === "finder" && (
          <Window
            title="Finder"
            onClose={() => setOpenWindow(null)}
            width="w-[600px]"
            height="h-[500px]"
          >
            <FinderContent />
          </Window>
        )}

        {openWindow === "history" && (
          <Window
            title="History Disk"
            onClose={() => setOpenWindow(null)}
            width="w-[650px]"
            height="h-[600px]"
          >
            <HistoryContent />
          </Window>
        )}

        {openWindow === "about" && (
          <Window
            title="About This Macintosh"
            onClose={() => setOpenWindow(null)}
            width="w-[500px]"
            height="h-[600px]"
          >
            <AboutContent />
          </Window>
        )}

        {openWindow === "team" && (
          <Window
            title="The Team"
            onClose={() => setOpenWindow(null)}
            width="w-[600px]"
            height="h-[650px]"
          >
            <TeamContent />
          </Window>
        )}
      </div>

      {/* Footer Credits */}
      <div className="h-6 bg-[hsl(var(--mac-menu-bar))] border-t border-[hsl(var(--mac-border-dark))] flex items-center justify-center text-xs font-mono text-muted-foreground">
        Macintosh System 1.0 Recreation © 2024 • Built with ❤️ for vintage computing
      </div>
    </div>
  );
};
