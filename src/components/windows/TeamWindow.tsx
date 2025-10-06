export const TeamContent = () => {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="text-lg font-bold mb-4">A Equipe Macintosh</div>
      
      <div className="space-y-4">
        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👨‍💼</div>
            <div className="flex-1">
              <div className="font-bold">Jef Raskin</div>
              <div className="text-xs text-muted-foreground mb-2">Fundador do Projeto</div>
              <div className="text-xs">
                Iniciou o projeto Macintosh em 1979 com a visão de criar 
                um computador acessível e fácil de usar. Nomeou-o em homenagem à sua maçã favorita.
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👨‍💻</div>
            <div className="flex-1">
              <div className="font-bold">Steve Jobs</div>
              <div className="text-xs text-muted-foreground mb-2">Líder do Projeto</div>
              <div className="text-xs">
                Assumiu a liderança em 1981. Pressionou a equipe para criar produtos "insanamente incríveis", 
                exigindo excelência tanto no design de hardware quanto de software.
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👨‍🔬</div>
            <div className="flex-1">
              <div className="font-bold">Bill Atkinson</div>
              <div className="text-xs text-muted-foreground mb-2">Arquiteto de Software</div>
              <div className="text-xs">
                Criou o QuickDraw, o motor gráfico que alimentou a interface revolucionária do Mac. 
                Também desenvolveu o MacPaint, demonstrando as capacidades do sistema.
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👩‍🎨</div>
            <div className="flex-1">
              <div className="font-bold">Susan Kare</div>
              <div className="text-xs text-muted-foreground mb-2">Designer de Interface</div>
              <div className="text-xs">
                Projetou os elementos icônicos da interface, fontes e ícones que deram ao Mac 
                seu caráter amigável e acessível. Sua pixel art se tornou lendária.
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[hsl(var(--mac-border-dark))] p-3 bg-background">
          <div className="flex items-start gap-3">
            <div className="text-3xl">👨‍💼</div>
            <div className="flex-1">
              <div className="font-bold">Andy Hertzfeld</div>
              <div className="text-xs text-muted-foreground mb-2">Software do Sistema</div>
              <div className="text-xs">
                Um dos principais engenheiros de software que escreveu grande parte do software do sistema. 
                Conhecido por sua resolução criativa de problemas e atenção aos detalhes.
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-muted border border-[hsl(var(--mac-border-dark))] mt-4">
          <div className="text-xs">
            <span className="font-bold">Espírito de Equipe:</span> A equipe original do Macintosh 
            consistia em cerca de 30 indivíduos dedicados que trabalhavam em um prédio com uma 
            bandeira pirata, acreditando que "é melhor ser um pirata do que se juntar à marinha."
          </div>
        </div>
      </div>
    </div>
  );
};
