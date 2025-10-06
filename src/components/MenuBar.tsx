export const MenuBar = () => {
  return (
    <div className="h-8 bg-[hsl(var(--mac-menu-bar))] border-b border-[hsl(var(--mac-border-dark))] flex items-center px-2 text-sm font-mono">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-muted px-2 py-0.5 cursor-pointer">
          <span className="text-xl">🍎</span>
        </div>
        <div className="hover:bg-muted px-2 py-0.5 cursor-pointer">File</div>
        <div className="hover:bg-muted px-2 py-0.5 cursor-pointer">Edit</div>
        <div className="hover:bg-muted px-2 py-0.5 cursor-pointer">View</div>
        <div className="hover:bg-muted px-2 py-0.5 cursor-pointer">Special</div>
      </div>
    </div>
  );
};
