// components/sponsors/SponsorsSection.tsx
import { getVendors } from "@/lib/vendors";
import { Button } from "@/components/ui/button";
import { SponsorsGrid } from "./SponsorsGrid";

export const revalidate = 3600;

export async function SponsorsSection() {
  const vendors = await getVendors();
  console.log(vendors)

  return (
    <section id="patrocinadores" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">

          <div className="text-center space-y-6">
            <span className="text-sm font-semibold text-primary uppercase">
              Patrocinadores
            </span>

            <h2 className="text-4xl font-black">
              Empresas que <span className="text-primary">Investem</span> no Futuro de TI
            </h2>
          </div>

          <SponsorsGrid vendors={vendors} />

          <div className="text-center pt-8">
            <Button variant="outline">Seja um Patrocinador</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
