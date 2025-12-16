import { getEntity } from "./partners";
import { PartnerType } from "../../types/partners";
import { CompanySponsorType, InstitutionalSponsorType } from "@/types/sponsors";

const Partners = [
  "Equipe",
  "Atlética",
  "C.A",
  "Iniciatica/Diretório",
] as const;

const Company = [
  "Empresa Parceira",
  "Orgão Parceiro",
] as const;

const Institutional = [
    "Secretaria"
] as const;

export async function getPartners(): Promise<PartnerType[]> {
  const entities = await getEntity();
  console.log(entities)

  return (
    entities.filter((partner) =>
      Partners.includes(partner.type as any)
    ) as unknown as PartnerType[]
  );
}

export async function getCompanySponsor(): Promise<CompanySponsorType[]> {
  const entities = await getEntity();

  return (
    entities.filter((partner) =>
      Company.includes(partner.type as any)
    ) as unknown as CompanySponsorType[]
  );
}

export async function getInstitutionalSponsor(): Promise<InstitutionalSponsorType[]> {
  const entities = await getEntity();

  return (
    entities.filter((partner) =>
      Institutional.includes(partner.type as any)
    ) as unknown as InstitutionalSponsorType[]
  );
}

