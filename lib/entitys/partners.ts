import { Client } from "@notionhq/client";
import { PartnerType } from "../../types/partners";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export async function getEntity(): Promise<PartnerType[]> {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_ENTITYS_DATABASE_ID!,
        filter: {
            property: "Acordo Formalizado",
            checkbox: {
                equals: true,
            },
            
        },
    });

    return response.results.map((page: any) => ({
        id: page.id,
        nome: page.properties.Nome?.title?.[0]?.plain_text ?? "",
        instagram: page.properties.Instagram?.url ?? "",
        logo: page.properties.Logo?.url ?? "",
        level: page.properties["Nível"]?.select?.name ?? "Silver",
        formalized: page.properties["Acordo Formalizado"]?.checkbox ?? false,
        type: page.properties.Tipo?.select?.name ?? "",
    }));

}
