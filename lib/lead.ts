import { notion } from "./notion";

const LEADS_DB = process.env.NOTION_DATABASE_ID!;

export async function saveLead({
  email,
  origem = "site",
  ip,
}: {
  email: string;
  origem?: string;
  ip: string;
}) {
  return await notion.pages.create({
    parent: {
      database_id: LEADS_DB,
    },
    properties: {
      Email: {
        email,
      },
      "Origem do Lead": {
        select: { name: origem },
      },
      IP: {
        rich_text: [{ text: { content: ip } }],
      },
    },
  });
}
