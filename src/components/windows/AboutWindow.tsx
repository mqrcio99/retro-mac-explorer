export const AboutContent = () => {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="text-center mb-6">
        <div className="text-6xl mb-2">🖥️</div>
        <div className="text-lg font-bold">Macintosh 128K</div>
        <div className="text-xs text-muted-foreground">The Original</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="text-xs text-muted-foreground mb-1">PROCESSOR</div>
          <div className="font-bold">Motorola 68000</div>
          <div className="text-xs">8 MHz</div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="text-xs text-muted-foreground mb-1">MEMORY</div>
          <div className="font-bold">128 KB RAM</div>
          <div className="text-xs">64 KB ROM</div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="text-xs text-muted-foreground mb-1">DISPLAY</div>
          <div className="font-bold">9" Monochrome</div>
          <div className="text-xs">512 × 342 pixels</div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="text-xs text-muted-foreground mb-1">STORAGE</div>
          <div className="font-bold">400 KB</div>
          <div className="text-xs">3.5" Floppy Drive</div>
        </div>
      </div>

      <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background mt-4">
        <div className="text-xs text-muted-foreground mb-2">KEY INNOVATIONS</div>
        <div className="space-y-1 text-xs">
          <div>• First mass-market computer with GUI</div>
          <div>• Included mouse as standard input</div>
          <div>• Bitmap display and fonts</div>
          <div>• Integrated design (all-in-one)</div>
          <div>• Desktop metaphor interface</div>
        </div>
      </div>

      <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
        <div className="text-xs text-muted-foreground mb-2">ORIGINAL PRICE</div>
        <div className="font-bold text-lg">$2,495 USD</div>
        <div className="text-xs text-muted-foreground">
          (~$7,300 in 2024 dollars)
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground pt-4 border-t border-[hsl(var(--mac-border-dark))]">
        System 1.0 • January 1984 • © Apple Computer, Inc.
      </div>
    </div>
  );
};
