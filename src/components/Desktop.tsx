import { useState } from "react";
import { MenuBar } from "./MenuBar";
import { DesktopIcon } from "./DesktopIcon";
import { Window } from "./Window";
import { FinderContent } from "./windows/FinderWindow";
import { HistoryContent } from "./windows/HistoryWindow";
import { AboutContent } from "./windows/AboutWindow";
import { TeamContent } from "./windows/TeamWindow";
import { PaintContent } from "./windows/PaintWindow";

type WindowType = "finder" | "history" | "about" | "team" | "paint" | null;

export const Desktop = () => {
  const [openWindow, setOpenWindow] = useState<WindowType>(null);

  const icons = [
    { id: "finder", icon: "📁", label: "Finder", window: "finder" as WindowType },
    { id: "history", icon: "📜", label: "História", window: "history" as WindowType },
    { id: "team", icon: "👥", label: "A Equipe", window: "team" as WindowType },
    { id: "about", icon: "ℹ️", label: "Sobre o Mac", window: "about" as WindowType },
    { id: "paint", icon: "💾", label: "MacPaint", window: "paint" as WindowType },
  ];

  return (
    <div className="h-full flex flex-col bg-[hsl(var(--mac-desktop))] crt-effect">
      <MenuBar />
      
      <div className="flex-1 p-2 md:p-4 relative overflow-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
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
            title="Disco de História"
            onClose={() => setOpenWindow(null)}
            width="w-[650px]"
            height="h-[600px]"
          >
            <HistoryContent />
          </Window>
        )}

        {openWindow === "about" && (
          <Window
            title="Sobre Este Macintosh"
            onClose={() => setOpenWindow(null)}
            width="w-[500px]"
            height="h-[600px]"
          >
            <AboutContent />
          </Window>
        )}

        {openWindow === "team" && (
          <Window
            title="A Equipe"
            onClose={() => setOpenWindow(null)}
            width="w-[600px]"
            height="h-[650px]"
          >
            <TeamContent />
          </Window>
        )}

        {openWindow === "paint" && (
          <Window
            title="MacPaint"
            onClose={() => setOpenWindow(null)}
            width="w-[580px]"
            height="h-[550px]"
          >
            <PaintContent />
          </Window>
        )}
      </div>

      {/* Footer Credits */}
      <div className="h-5 md:h-6 bg-[hsl(var(--mac-menu-bar))] border-t border-[hsl(var(--mac-border-dark))] flex items-center justify-center text-[10px] md:text-xs font-mono text-muted-foreground px-2">
        <span className="hidden sm:inline">Recriação do Macintosh System 1.0 © 2024 • Feito com ❤️ para computação vintage</span>
        <span className="sm:hidden">Macintosh 1984 • Recriação</span>
      </div>
    </div>
  );
};
