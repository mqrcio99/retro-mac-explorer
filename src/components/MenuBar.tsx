import { useState } from "react";

export const MenuBar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menus = {
    apple: ["Sobre este Macintosh...", "Painel de Controle", null, "Esvaziar Lixeira"],
    file: ["Novo", "Abrir...", "Fechar", null, "Salvar", "Salvar Como...", null, "Sair"],
    edit: ["Desfazer", null, "Recortar", "Copiar", "Colar", "Limpar"],
    view: ["por Ícone", "por Nome", "por Data", "por Tamanho"],
    special: ["Limpar Disco...", "Ejetar Disco", null, "Reiniciar", "Desligar"]
  };

  const handleMenuClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="h-8 bg-[hsl(var(--mac-menu-bar))] border-b border-[hsl(var(--mac-border-dark))] flex items-center px-2 text-sm font-mono relative">
      <div className="flex items-center gap-4">
        <div 
          className="flex items-center gap-1 hover:bg-muted px-2 py-0.5 cursor-pointer relative"
          onClick={() => handleMenuClick('apple')}
        >
          <span className="text-xl">🍎</span>
          {openMenu === 'apple' && (
            <div className="absolute top-full left-0 mt-0.5 bg-background border-2 border-[hsl(var(--mac-border-dark))] shadow-lg z-50 min-w-[180px]">
              {menus.apple.map((item, i) => (
                item === null ? (
                  <div key={i} className="border-t border-[hsl(var(--mac-border-dark))] my-1" />
                ) : (
                  <div key={i} className="px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer">
                    {item}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
        
        <div 
          className="hover:bg-muted px-2 py-0.5 cursor-pointer relative"
          onClick={() => handleMenuClick('file')}
        >
          Arquivo
          {openMenu === 'file' && (
            <div className="absolute top-full left-0 mt-0.5 bg-background border-2 border-[hsl(var(--mac-border-dark))] shadow-lg z-50 min-w-[180px]">
              {menus.file.map((item, i) => (
                item === null ? (
                  <div key={i} className="border-t border-[hsl(var(--mac-border-dark))] my-1" />
                ) : (
                  <div key={i} className="px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer">
                    {item}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
        
        <div 
          className="hover:bg-muted px-2 py-0.5 cursor-pointer relative"
          onClick={() => handleMenuClick('edit')}
        >
          Editar
          {openMenu === 'edit' && (
            <div className="absolute top-full left-0 mt-0.5 bg-background border-2 border-[hsl(var(--mac-border-dark))] shadow-lg z-50 min-w-[180px]">
              {menus.edit.map((item, i) => (
                item === null ? (
                  <div key={i} className="border-t border-[hsl(var(--mac-border-dark))] my-1" />
                ) : (
                  <div key={i} className="px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer">
                    {item}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
        
        <div 
          className="hover:bg-muted px-2 py-0.5 cursor-pointer relative"
          onClick={() => handleMenuClick('view')}
        >
          Ver
          {openMenu === 'view' && (
            <div className="absolute top-full left-0 mt-0.5 bg-background border-2 border-[hsl(var(--mac-border-dark))] shadow-lg z-50 min-w-[180px]">
              {menus.view.map((item, i) => (
                <div key={i} className="px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div 
          className="hover:bg-muted px-2 py-0.5 cursor-pointer relative"
          onClick={() => handleMenuClick('special')}
        >
          Especial
          {openMenu === 'special' && (
            <div className="absolute top-full left-0 mt-0.5 bg-background border-2 border-[hsl(var(--mac-border-dark))] shadow-lg z-50 min-w-[180px]">
              {menus.special.map((item, i) => (
                item === null ? (
                  <div key={i} className="border-t border-[hsl(var(--mac-border-dark))] my-1" />
                ) : (
                  <div key={i} className="px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer">
                    {item}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
      
      {openMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpenMenu(null)}
        />
      )}
    </div>
  );
};
