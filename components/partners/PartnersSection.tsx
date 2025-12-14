// components/partners/PartnersSection.tsx
import { getPartners } from "@/lib/partners/getPartners";
import { PartnersGrid } from "./PartnerGrid";

export const revalidate = 3600;

export async function PartnersSection() {
  const partners = await getPartners();
  console.log(partners)

  return (
    <section id="parceiros" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Parceiros
              </span>
              <div className="h-px w-full bg-primary/30 mt-2" />
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Rede Unificada: <span className="text-primary">Nossas Entidades</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atléticas, Centros Acadêmicos e universidades unidos pela missão de fortalecer o ecossistema tech do Paraná.
            </p>
          </div>

          <PartnersGrid partners={partners} />

        </div>
      </div>
    </section>
  );
}
