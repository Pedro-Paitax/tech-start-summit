"use client";

import { Instagram } from "lucide-react";

type Partner = {
  id: string;
  nome: string;
  logo: string;
  instagram: string;
  level: string;
};

export function PartnersGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
      {partners.map((partner) =>
        partner.logo ? (
          <div
            key={partner.id}
            className="group relative bg-card border border-border rounded-lg p-6
              flex flex-col items-center justify-between
              hover:border-primary/50 transition-all duration-300 overflow-hidden"
          >
            {/* LOGO */}
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

            {/* NOME */}
            <div className="mt-4 h-8 flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground text-center leading-tight">
                {partner.nome}
              </span>
            </div>

            {/* OVERLAY INSTAGRAM */}
            {partner.instagram && (
              <a
                href={partner.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-primary/90 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  flex items-center justify-center"
                aria-label={`Instagram ${partner.nome}`}
              >
                <span className="flex items-center gap-2 text-primary-foreground font-semibold">
                  <Instagram size={22} />
                  Instagram
                </span>
              </a>
            )}
          </div>
        ) : null
      )}
    </div>
  );
}
