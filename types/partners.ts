export type PartnerCategory =
  | "Equipe"
  | "Atlética"
  | "C.A"
  | "Iniciatica/Diretório";

export type PartnerType = {
  id: string;
  nome: string;
  instagram: string;
  logo: string;
  level: string;
  formalized: boolean;
  type: PartnerCategory;
};