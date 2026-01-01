"use client";

type CompanySponsor = {
  nome: string;
  logo: string;
  level: string;
};

type InstitutionalSponsor = {
  nome: string;
  logo: string;
};

export function SponsorsGrid({
  companySponsors,
  institutionalSponsors,
}: {
  companySponsors: CompanySponsor[];
  institutionalSponsors: InstitutionalSponsor[];
}) {
  return (
    <>
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-center">
          Apoio Institucional
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          {institutionalSponsors.map((org, i) =>
            org.logo ? (
              <div
                key={i}
                className="bg-card border-2 border-primary/30 rounded-lg
                  h-28 w-56 flex items-center justify-center p-6"
              >
                <img
                  src={org.logo}
                  alt={org.nome}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-center">
          Patrocinadores
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          {companySponsors.map((s, i) =>
            s.logo ? (
              <div
                key={i}
                className={`bg-card border rounded-lg
                  h-24 w-48 flex items-center justify-center p-6 transition-all
                  ${
                    s.level.toLowerCase() === "gold"
                      ? "border-primary/50"
                      : "border-border"
                  }`}
              >
                <img
                  src={s.logo}
                  alt={s.nome}
                  className="max-h-10 max-w-full object-contain
                    opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
}
