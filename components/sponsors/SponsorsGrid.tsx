"use client";

type Vendor = {
    nome: string;
    logo: string;
    type: string;
    tier: string;
};

export function SponsorsGrid({ vendors }: { vendors: Vendor[] }) {
    const normalize = (value: string) =>
  value.trim().toLowerCase();
const institutional = vendors.filter(
  v => normalize(v.type) === "apoio institucional"
);

const sponsors = vendors.filter(
  v => normalize(v.type) !== "apoio institucional"
);

    return (
        <>
            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-center">
                    Apoio Institucional
                </h3>

                <div className="flex flex-wrap justify-center gap-6">
                    {institutional.map((org, i) =>
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
                    {sponsors.map((s, i) =>
                        s.logo ? (
                            <div
                                key={i}
                                className={`bg-card border rounded-lg
            h-24 w-48 flex items-center justify-center p-6 transition-all
            ${s.tier === "gold"
                                        ? "border-primary/50"
                                        : "border-border"
                                    }
          `}
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
