import { useState } from "react";

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
}

export const DesktopIcon = ({ icon, label, onDoubleClick }: DesktopIconProps) => {
  const [selected, setSelected] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setSelected(true);
    setClickCount(prev => prev + 1);
    
    setTimeout(() => {
      if (clickCount === 1) {
        onDoubleClick();
        setClickCount(0);
      }
      setTimeout(() => setClickCount(0), 300);
    }, 250);
  };

  return (
    <div
      onClick={handleClick}
      onBlur={() => setSelected(false)}
      className={`flex flex-col items-center gap-1 p-1 md:p-2 cursor-pointer select-none w-16 md:w-20 ${
        selected ? "bg-[hsl(var(--mac-selected))] text-primary-foreground" : ""
      }`}
    >
      <div className="text-2xl md:text-4xl">{icon}</div>
      <div className="text-[10px] md:text-xs text-center font-mono break-words w-full leading-tight">{label}</div>
    </div>
  );
};
