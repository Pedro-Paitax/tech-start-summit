import { Client } from "@notionhq/client";
import { getSpeakersMap } from "./speakers";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DB_ID = process.env.NOTION_PROGRAM_DATABASE_ID!;

export async function getProgramacao() {
  try {
    const speakersMap = await getSpeakersMap();

    const response = await notion.databases.query({
      database_id: DB_ID,
      filter: {
        or: [
          { property: "Status", status: { equals: "Aguardando Material" } },
          { property: "Status", status: { equals: "Pronto" } },
        ],
      },
      sorts: [{ property: "Date", direction: "ascending" }],
    });

    const items = response.results.map((page: any) => {
      const p = page.properties;

      const speakerIds =
        p["Palestrante"]?.relation?.map((r: any) => r.id) || [];

      const speakers = speakerIds
        .map((id: string) => speakersMap.find((s: any) => s.id === id))
        .filter(Boolean);

      return {
        id: page.id,
        nome: p.Nome?.title?.[0]?.plain_text || "",

        date: p["Date"]?.date?.start || null,

        dayKey: p["Date"]?.date?.start
          ? new Date(p["Date"].date.start)
            .toISOString()
            .split("T")[0]
          : null,

        dayLabel: p["Date"]?.date?.start
          ? new Date(p["Date"].date.start).toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "long",
          })
          : null,

        time: p["Date"]?.date?.start
          ? new Date(p["Date"].date.start).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })
          : null,

        tags: p["Tags"]?.multi_select?.map((t: any) => t.name) || [],

        speakers,

        speakerNames: speakers.map((s: any) => s.nome),

        publico: p["Público-Alvo"]?.select?.name || "",

        status: p["Status"]?.status?.name || "",

        track: p["Track"]?.select?.name || "",

        area:
          p["Área Foco"]?.multi_select?.map((t: any) => t.name) || [],

        tipoConteudo: p["Tipo de Conteúdo"]?.select?.name || "",

        topics: p["Tópicos Chave"]?.rich_text?.[0]?.plain_text || "",

        description: p["Descrição"]?.rich_text?.[0]?.plain_text || "",

        bigDescription:
          p["Descrição Longa"]?.rich_text?.[0]?.plain_text || "",
      };
    });

    console.log(items)
    return items;
  } catch (error) {
    console.error("ERRO AO BUSCAR PROGRAMAÇÃO:", error);
    return [];
  }
}
