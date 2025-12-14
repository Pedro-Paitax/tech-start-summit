import { Client } from "@notionhq/client";
import { getSpeakerById } from "./speakers";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DB_ID = process.env.NOTION_PROGRAM_DATABASE_ID!;

export async function getProgramacao() {
  try {
    const response = await notion.databases.query({
      database_id: DB_ID,

      filter: {
        or: [
          { property: "Status", status: { equals: "Aguardando Material" } },
          { property: "Status", status: { equals: "Pronto" } }
        ]
      },

      sorts: [
        { property: "Date", direction: "ascending" }
      ]
    });



    const items = await Promise.all(
      response.results.map(async (page: any) => {
        const p = (page as any).properties;

        const speakerIds =
          p["Palestrante"]?.relation?.map((r: any) => r.id) || [];

        const speakersData = await Promise.all(
          speakerIds.map(async (id) => {
            try {
              return await getSpeakerById(id);
            } catch {
              return null;
            }
          })
        );

        const speakerNames = speakersData
          .filter(Boolean)
          .map((s: any) => s.nome);

        return {
          id: page.id,

          nome: p.Nome?.title?.[0]?.plain_text || "",

          date: p["Date"]?.date?.start || null,

          tags: p["Tags"]?.multi_select?.map((t: any) => t.name) || [],

          speakers: speakerNames, 

          publico: p["Público-Alvo"]?.select?.name || "",

          status: p["Status"]?.status?.name || "",

          track: p["Track"]?.select?.name || "",

          areaFoco:
            p["Área Foco"]?.multi_select?.map((t: any) => t.name) || [],

          tipoConteudo: p["Tipo de Conteúdo"]?.select?.name || "",

          topics: p["Tópicos Chave"]?.rich_text?.[0]?.plain_text || "",

          description: p["Descrição"]?.rich_text?.[0]?.plain_text || "",

          bigDescription:
            p["Descrição Longa"]?.rich_text?.[0]?.plain_text || "",
        };
      })
    );

    return items;
  } catch (error) {
    console.error("ERRO AO BUSCAR PROGRAMAÇÃO:", error);
    return [];
  }
}
