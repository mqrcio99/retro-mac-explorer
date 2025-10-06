import { useRef, useState, useEffect } from "react";

export const PaintContent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pencil' | 'eraser'>('pencil');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
      }
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing && e.type !== 'mousedown') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = tool === 'eraser' ? 10 : 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = tool === 'eraser' ? 'white' : 'black';

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <div className="space-y-2 font-mono text-sm">
      {/* Toolbar */}
      <div className="flex gap-2 border-b border-[hsl(var(--mac-border-dark))] pb-2">
        <button
          onClick={() => setTool('pencil')}
          className={`px-3 py-1 border border-[hsl(var(--mac-border-dark))] ${
            tool === 'pencil' ? 'bg-primary text-primary-foreground' : 'bg-background'
          }`}
        >
          ✏️ Lápis
        </button>
        <button
          onClick={() => setTool('eraser')}
          className={`px-3 py-1 border border-[hsl(var(--mac-border-dark))] ${
            tool === 'eraser' ? 'bg-primary text-primary-foreground' : 'bg-background'
          }`}
        >
          🧹 Borracha
        </button>
        <button
          onClick={clearCanvas}
          className="px-3 py-1 border border-[hsl(var(--mac-border-dark))] bg-background ml-auto"
        >
          🗑️ Limpar
        </button>
      </div>

      {/* Canvas */}
      <div className="border-2 border-[hsl(var(--mac-border-dark))] bg-white">
        <canvas
          ref={canvasRef}
          width={520}
          height={380}
          className="cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
        />
      </div>

      <div className="text-xs text-muted-foreground text-center pt-2 border-t border-[hsl(var(--mac-border-dark))]">
        MacPaint 1.0 © 1984 Apple Computer, Inc.
      </div>
    </div>
  );
};
