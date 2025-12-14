import { NextResponse } from "next/server";
import { saveLead } from "@/lib/lead";

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

    const result = await saveLead({ email, origem, ip });

    return NextResponse.json({ ok: true, data: result });
  } catch (error: any) {
    console.error("Erro ao salvar lead no Notion:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
