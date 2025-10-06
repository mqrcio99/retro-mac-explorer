export const HistoryContent = () => {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="text-lg font-bold mb-4">Macintosh History</div>
      
      <div className="space-y-4">
        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">1979 - Project Begins</div>
          <div className="text-muted-foreground text-xs mt-1">
            Jef Raskin initiates the Macintosh project with a vision: 
            an affordable, easy-to-use computer for everyone.
          </div>
        </div>

        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">1981 - Jobs Takes Over</div>
          <div className="text-muted-foreground text-xs mt-1">
            Steve Jobs joins the project after being removed from Lisa team, 
            bringing his vision of an insanely great product.
          </div>
        </div>

        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">1982-1983 - Development</div>
          <div className="text-muted-foreground text-xs mt-1">
            The team works tirelessly on the hardware and software. 
            Bill Atkinson creates QuickDraw. Susan Kare designs iconic interface elements.
          </div>
        </div>

        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">January 22, 1984 - "1984" Ad</div>
          <div className="text-muted-foreground text-xs mt-1">
            Ridley Scott's legendary Super Bowl commercial airs, 
            promising to change computing forever.
          </div>
        </div>

        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">January 24, 1984 - Launch</div>
          <div className="text-muted-foreground text-xs mt-1">
            The Macintosh is unveiled at Apple's annual shareholders meeting. 
            It introduces itself by saying "Hello, I'm Macintosh."
          </div>
        </div>

        <div className="mt-6 p-3 bg-muted border border-[hsl(var(--mac-border-dark))]">
          <div className="text-xs">
            <span className="font-bold">Impact:</span> The Macintosh introduced 
            the graphical user interface to the mass market, making computers 
            accessible to non-technical users and forever changing the industry.
          </div>
        </div>
      </div>
    </div>
  );
};
