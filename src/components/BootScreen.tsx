import { useEffect, useState } from "react";

interface BootScreenProps {
  onBootComplete: () => void;
}

export const BootScreen = ({ onBootComplete }: BootScreenProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 500);
    const textTimer = setTimeout(() => setShowText(true), 1500);
    const completeTimer = setTimeout(onBootComplete, 4000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onBootComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center crt-effect">
      <div className="text-center space-y-8">
        {showLogo && (
          <div className="animate-boot-fade">
            <div className="text-8xl mb-4">🍎</div>
            <div className="text-2xl font-mono tracking-wider">
              MACINTOSH
            </div>
          </div>
        )}
        {showText && (
          <div className="animate-boot-fade text-xl font-mono space-y-2">
            <div>Welcome to Macintosh</div>
            <div className="text-muted-foreground text-lg">(1984)</div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="animate-blink">▐</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
