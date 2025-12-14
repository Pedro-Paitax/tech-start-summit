import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DB_ID = process.env.NOTION_SPEAKERS_DATABASE_ID!;

export async function getSpeakers() {
  try {
    const response = await notion.databases.query({
      database_id: DB_ID,
      filter: {
        property: "Visible",
        checkbox: { equals: true },
      },
      sorts: [
        { property: "Nome", direction: "ascending" }
      ]
    });

    return response.results.map((page: any) => {
      const p = page.properties;

      return {
        nome: p.Nome?.title?.[0]?.plain_text || "",
        foto: p.Imagem?.rich_text?.[0]?.plain_text || "",
        profissão: p["Profissão"]?.rich_text?.[0]?.plain_text || "",
        entidade: p.Empresa?.rich_text?.[0]?.plain_text || "",
        bio: p.Bio?.rich_text?.[0]?.plain_text || "",
        lkdn: p.linkedin?.url || "",
        visible: p.Visible?.checkbox ?? false
      };
    });

  } catch (error) {
    console.error("Erro ao buscar palestrantes:", error);
    return [];
  }
}

export async function getSpeakerById(id: string) {
  const page = await notion.pages.retrieve({ page_id: id });
const p = (page as any).properties;

  return {
    id,
    nome: p.Nome?.title?.[0]?.plain_text || "",
    foto: p.Imagem?.rich_text?.[0]?.plain_text || "",
    profissão: p["Profissão"]?.rich_text?.[0]?.plain_text || "",
    entidade: p.Empresa?.rich_text?.[0]?.plain_text || "",
    bio: p.Bio?.rich_text?.[0]?.plain_text || "",
    lkdn: p.linkedin?.url || "",
    visible: p.Visible?.checkbox ?? false
  };
}

