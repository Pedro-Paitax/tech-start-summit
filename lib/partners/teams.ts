import { Client } from "@notionhq/client";
import { AcademicPartner } from "../../types/program";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getTeams(): Promise<AcademicPartner[]> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_TEAMS_DATABASE_ID!,
  });

  return response.results.map((page: any) => ({
    id: page.id,
nome: page.properties["Nome do Time"]?.title?.[0]?.plain_text ?? "",
    logo:
      page.properties.Logo?.url ??
      page.properties.Logo?.files?.[0]?.file?.url ??
      "",
    visible: page.properties.Visible?.checkbox ?? false,
    category: "equipe",
  }));
}
