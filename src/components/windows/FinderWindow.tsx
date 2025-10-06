export const FinderContent = () => {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="text-lg font-bold mb-4">System Information</div>
      
      <div className="space-y-3">
        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="font-bold mb-2">Welcome to Macintosh</div>
          <div className="text-muted-foreground">
            You are experiencing a recreation of the revolutionary 1984 Macintosh computer - 
            the machine that changed personal computing forever.
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="font-bold mb-2">Navigation</div>
          <div className="text-muted-foreground space-y-1">
            <div>• Double-click icons to open windows</div>
            <div>• Drag windows by their title bars</div>
            <div>• Click the × button to close windows</div>
            <div>• Explore the history of this iconic machine</div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="font-bold mb-2">System Date</div>
          <div className="text-muted-foreground">
            January 24, 1984 - The day everything changed
          </div>
        </div>
      </div>

      <div className="text-xs text-muted-foreground text-center pt-4 border-t border-[hsl(var(--mac-border-dark))]">
        "The computer for the rest of us"
      </div>
    </div>
  );
};
