import { ReactNode } from "react";

interface MacintoshFrameProps {
  children: ReactNode;
}

export const MacintoshFrame = ({ children }: MacintoshFrameProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Macintosh Computer Frame */}
      <div className="relative">
        {/* Monitor bezel */}
        <div className="bg-gradient-to-b from-slate-100 to-slate-300 rounded-lg p-8 shadow-2xl">
          {/* Screen border */}
          <div className="bg-slate-800 p-3 rounded">
            {/* Screen glow effect */}
            <div className="relative bg-black rounded shadow-inner">
              {/* Actual screen content */}
              <div className="w-[900px] h-[600px] bg-[hsl(var(--mac-desktop))] relative overflow-hidden">
                {children}
              </div>
              {/* Screen glare effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded" />
            </div>
          </div>
          
          {/* Apple logo on bezel */}
          <div className="flex justify-center mt-4">
            <div className="text-2xl opacity-60">🍎</div>
          </div>
        </div>
        
        {/* Base stand */}
        <div className="mx-auto w-32 h-8 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-lg shadow-lg" />
      </div>
    </div>
  );
};
