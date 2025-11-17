import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(req: Request) {
  try {

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const { email, origem } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email obrigatório" },
        { status: 400 }
      );
    }

    const res = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Email: {
          email,
        },
        "Origem do Lead": {
          select: { name: origem || "site" },
        },
        IP: {
          rich_text: [{ text: { content: ip } }],
        },
      },
    });

    return NextResponse.json({ ok: true, data: res });
  } catch (error: any) {
    console.error("Erro ao salvar lead no Notion:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
