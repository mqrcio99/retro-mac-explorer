export const AboutContent = () => {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="text-center mb-6">
        <div className="text-6xl mb-2">🖥️</div>
        <div className="text-lg font-bold">Macintosh 128K</div>
        <div className="text-xs text-muted-foreground">O Original</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="text-xs text-muted-foreground mb-1">PROCESSADOR</div>
          <div className="font-bold">Motorola 68000</div>
          <div className="text-xs">8 MHz</div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="text-xs text-muted-foreground mb-1">MEMÓRIA</div>
          <div className="font-bold">128 KB RAM</div>
          <div className="text-xs">64 KB ROM</div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="text-xs text-muted-foreground mb-1">TELA</div>
          <div className="font-bold">9" Monocromático</div>
          <div className="text-xs">512 × 342 pixels</div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="text-xs text-muted-foreground mb-1">ARMAZENAMENTO</div>
          <div className="font-bold">400 KB</div>
          <div className="text-xs">Drive de Disquete 3.5"</div>
        </div>
      </div>

      <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background mt-4">
        <div className="text-xs text-muted-foreground mb-2">INOVAÇÕES PRINCIPAIS</div>
        <div className="space-y-1 text-xs">
          <div>• Primeiro computador de mercado com GUI</div>
          <div>• Mouse incluído como entrada padrão</div>
          <div>• Display e fontes bitmap</div>
          <div>• Design integrado (tudo-em-um)</div>
          <div>• Interface com metáfora de desktop</div>
        </div>
      </div>

      <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
        <div className="text-xs text-muted-foreground mb-2">PREÇO ORIGINAL</div>
        <div className="font-bold text-lg">$2.495 USD</div>
        <div className="text-xs text-muted-foreground">
          (~$7.300 em dólares de 2024)
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground pt-4 border-t border-[hsl(var(--mac-border-dark))]">
        Sistema 1.0 • Janeiro 1984 • © Apple Computer, Inc.
      </div>
    </div>
  );
};
