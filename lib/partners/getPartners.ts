import { getAcademicCenter } from "./academicCenters";
import { getAtletics } from "./atletics";
import { getEntity } from "./entitys";
import { getTeams } from "./teams";
import { AcademicPartner } from "../../types/program";

export async function getPartners(): Promise<AcademicPartner[]> {
  const [
    academicCenters,
    atletics,
    entitys,
    teams,
  ] = await Promise.all([
    getAcademicCenter(),
    getAtletics(),
    getEntity(),
    getTeams(),
  ]);

  return [
    ...academicCenters,
    ...entitys,
    ...atletics,
    ...teams,
  ].filter(partner => partner.visible === true);
}
