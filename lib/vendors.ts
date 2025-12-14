import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DB_ID = process.env.NOTION_VENDORS_DATABASE_ID!;

export async function getVendors() {
    try {
        const response = await notion.databases.query({
            database_id: DB_ID,
            filter: {
                property: "Status", status: { equals: "Fechada" }
            },
            sorts: [
                { property: "Nível", direction: "ascending" }
            ]
        });

        return response.results.map((page: any) => {
            const p = page.properties;

            return {
                nome: p.Nome?.title?.[0]?.plain_text || "",
                logo: p.Logo?.url || "",
                lkdn: p.Linkedin?.url || "",
                type: p["Tipo de Patrocínio"]?.select?.name || "",
                tier: p["Nível"]?.select?.name?.toLowerCase() || ""
            }
        });

    } catch (error) {
        console.error("Erro ao buscar patrocinadores:", error);
        return [];
    }
}
