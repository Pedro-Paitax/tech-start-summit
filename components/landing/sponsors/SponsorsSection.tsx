import {
  getCompanySponsor,
  getInstitutionalSponsor,
} from "@/lib/entitys/getPartners";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { SponsorsGrid } from "./SponsorsGrid";

export const revalidate = 3600;

export async function SponsorsSection() {
  const companySponsors = await getCompanySponsor();
  const institutionalSponsors = await getInstitutionalSponsor();

  return (
    <section id="patrocinadores" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <span className="text-sm font-semibold text-primary uppercase">
              Patrocinadores
            </span>

            <h2 className="text-4xl font-black">
              Empresas que{" "}
              <span className="text-primary">Investem</span> no Futuro de TI
            </h2>
          </div>

          <SponsorsGrid
            companySponsors={companySponsors}
            institutionalSponsors={institutionalSponsors}
          />

          <div className="text-center pt-8">
<Button asChild variant="outline">
  <Link 
    href="https://wa.me/5541996462661?text=Ol%C3%A1%20%F0%9F%96%90!%20Quero%20ser%20patrocinador."
    target="_blank"
  >
    Seja um Patrocinador
  </Link>
</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
