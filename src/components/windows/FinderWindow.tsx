export const FinderContent = () => {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="text-lg font-bold mb-4">Informações do Sistema</div>
      
      <div className="space-y-3">
        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="font-bold mb-2">Bem-vindo ao Macintosh</div>
          <div className="text-muted-foreground">
            Você está experienciando uma recriação do revolucionário Macintosh de 1984 - 
            a máquina que mudou a computação pessoal para sempre.
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="font-bold mb-2">Navegação</div>
          <div className="text-muted-foreground space-y-1">
            <div>• Clique duas vezes nos ícones para abrir janelas</div>
            <div>• Arraste janelas pela barra de título</div>
            <div>• Clique no botão × para fechar janelas</div>
            <div>• Explore a história desta máquina icônica</div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="font-bold mb-2">Data do Sistema</div>
          <div className="text-muted-foreground">
            24 de Janeiro de 1984 - O dia em que tudo mudou
          </div>
        </div>
      </div>

      <div className="text-xs text-muted-foreground text-center pt-4 border-t border-[hsl(var(--mac-border-dark))]">
        "O computador para todos nós"
      </div>
    </div>
  );
};
