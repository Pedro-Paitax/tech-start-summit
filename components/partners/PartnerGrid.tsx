"use client";

type Partner = {
  id: string;
  nome: string;
  logo: string;
  category: "atletica" | "equipe" | "centro_academico" | "entidade";
};

export function PartnersGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
      {partners.map((partner) =>
        partner.logo ? (
          <div
            key={partner.id}
            className="bg-card border border-border rounded-lg p-6
              flex flex-col items-center justify-between
              hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center h-20">
              <img
                src={partner.logo}
                alt={partner.nome}
                className="max-w-full h-20 object-contain
                  opacity-70 grayscale
                  group-hover:opacity-100 group-hover:grayscale-0
                  transition-all duration-300"
              />
            </div>

            <div className="mt-4 h-8 flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground text-center leading-tight">
                {partner.nome}
              </span>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
