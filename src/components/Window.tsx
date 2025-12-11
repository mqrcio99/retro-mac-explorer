import { ReactNode, useState, useEffect } from "react";
import { X } from "lucide-react";

interface WindowProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  width?: string;
  height?: string;
}

export const Window = ({ 
  title, 
  children, 
  onClose, 
  width = "w-[600px]", 
  height = "h-[400px]" 
}: WindowProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  // Mobile: full screen modal style
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-[hsl(var(--mac-window))]">
        {/* Title Bar */}
        <div className="h-10 bg-[hsl(var(--mac-window))] border-b-2 border-[hsl(var(--mac-border-dark))] flex items-center justify-between px-3">
          <div className="flex items-center gap-2 window-controls">
            <button
              onClick={onClose}
              className="w-6 h-6 border border-[hsl(var(--mac-border-dark))] bg-background hover:bg-muted flex items-center justify-center"
              aria-label="Fechar janela"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="text-sm font-mono font-bold truncate max-w-[200px]">
            {title}
          </div>
          <div className="w-6" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto mac-scrollbar p-3 bg-[hsl(var(--mac-window))]">
          {children}
        </div>
      </div>
    );
  }

  // Desktop: draggable window
  return (
    <div
      className={`fixed ${width} ${height} max-w-[90vw] max-h-[80vh] bg-[hsl(var(--mac-window))] mac-window-3d animate-window-pop flex flex-col select-none z-10`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'default'
      }}
    >
      {/* Title Bar */}
      <div
        className="h-8 bg-[hsl(var(--mac-window))] border-b-2 border-[hsl(var(--mac-border-dark))] flex items-center justify-between px-2 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2 window-controls">
          <button
            onClick={onClose}
            className="w-4 h-4 border border-[hsl(var(--mac-border-dark))] bg-background hover:bg-muted flex items-center justify-center"
            aria-label="Fechar janela"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-mono font-bold">
          {title}
        </div>
        <div className="w-4" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto mac-scrollbar p-4 bg-[hsl(var(--mac-window))]">
        {children}
      </div>
    </div>
  );
};
