export const TeamContent = () => {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="text-lg font-bold mb-4">The Macintosh Team</div>
      
      <div className="space-y-4">
        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👨‍💼</div>
            <div className="flex-1">
              <div className="font-bold">Jef Raskin</div>
              <div className="text-xs text-muted-foreground mb-2">Project Founder</div>
              <div className="text-xs">
                Initiated the Macintosh project in 1979 with the vision of creating 
                an affordable, easy-to-use computer. Named it after his favorite apple.
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👨‍💻</div>
            <div className="flex-1">
              <div className="font-bold">Steve Jobs</div>
              <div className="text-xs text-muted-foreground mb-2">Project Leader</div>
              <div className="text-xs">
                Took over leadership in 1981. Pushed the team to create "insanely great" 
                products, demanding excellence in both hardware and software design.
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👨‍🔬</div>
            <div className="flex-1">
              <div className="font-bold">Bill Atkinson</div>
              <div className="text-xs text-muted-foreground mb-2">Software Architect</div>
              <div className="text-xs">
                Created QuickDraw, the graphics engine that powered the Mac's revolutionary 
                interface. Also developed MacPaint, showcasing the system's capabilities.
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👩‍🎨</div>
            <div className="flex-1">
              <div className="font-bold">Susan Kare</div>
              <div className="text-xs text-muted-foreground mb-2">Interface Designer</div>
              <div className="text-xs">
                Designed the iconic interface elements, fonts, and icons that gave the Mac 
                its friendly, approachable character. Her pixel art became legendary.
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👨‍💼</div>
            <div className="flex-1">
              <div className="font-bold">Andy Hertzfeld</div>
              <div className="text-xs text-muted-foreground mb-2">System Software</div>
              <div className="text-xs">
                One of the key software engineers who wrote much of the system software. 
                Known for creative problem-solving and attention to detail.
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-muted border border-[hsl(var(--mac-border-dark))] mt-4">
          <div className="text-xs">
            <span className="font-bold">Team Spirit:</span> The original Macintosh team 
            consisted of about 30 dedicated individuals who worked in a building flying 
            a pirate flag, believing it's "better to be a pirate than join the navy."
          </div>
        </div>
      </div>
    </div>
  );
};
