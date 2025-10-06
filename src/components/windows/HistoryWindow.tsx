export const HistoryContent = () => {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="text-lg font-bold mb-4">História do Macintosh</div>
      
      <div className="space-y-4">
        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">1979 - Início do Projeto</div>
          <div className="text-muted-foreground text-xs mt-1">
            Jef Raskin inicia o projeto Macintosh com uma visão: 
            um computador acessível e fácil de usar para todos.
          </div>
        </div>

        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">1981 - Jobs Assume</div>
          <div className="text-muted-foreground text-xs mt-1">
            Steve Jobs entra no projeto após ser removido da equipe Lisa, 
            trazendo sua visão de um produto insanamente incrível.
          </div>
        </div>

        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">1982-1983 - Desenvolvimento</div>
          <div className="text-muted-foreground text-xs mt-1">
            A equipe trabalha incansavelmente no hardware e software. 
            Bill Atkinson cria o QuickDraw. Susan Kare projeta os elementos icônicos da interface.
          </div>
        </div>

        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">22 de Janeiro, 1984 - Comercial "1984"</div>
          <div className="text-muted-foreground text-xs mt-1">
            O lendário comercial de Ridley Scott é exibido no Super Bowl, 
            prometendo mudar a computação para sempre.
          </div>
        </div>

        <div className="border-l-4 border-primary pl-3">
          <div className="font-bold">24 de Janeiro, 1984 - Lançamento</div>
          <div className="text-muted-foreground text-xs mt-1">
            O Macintosh é revelado na reunião anual de acionistas da Apple. 
            Ele se apresenta dizendo "Olá, eu sou o Macintosh."
          </div>
        </div>

        <div className="mt-6 p-3 bg-muted border border-[hsl(var(--mac-border-dark))]">
          <div className="text-xs">
            <span className="font-bold">Impacto:</span> O Macintosh introduziu 
            a interface gráfica do usuário ao mercado de massa, tornando os computadores 
            acessíveis a usuários não-técnicos e mudando a indústria para sempre.
          </div>
        </div>
      </div>
    </div>
  );
};
