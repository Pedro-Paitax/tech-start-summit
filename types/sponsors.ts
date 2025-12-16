export type CompanySponsor =
  | "Empresa Parceira"
  | "Orgão Parceiro";

export type CompanySponsorType = {
  id: string;
  nome: string;
  instagram: string;
  logo: string;
  level: string;
  formalized: boolean;
  type: CompanySponsor;
};

export type InstitutionalSponsor =
   "Secretaria"

export type InstitutionalSponsorType = {
  id: string;
  nome: string;
  instagram: string;
  logo: string;
  level: string;
  formalized: boolean;
  type: InstitutionalSponsor;
};