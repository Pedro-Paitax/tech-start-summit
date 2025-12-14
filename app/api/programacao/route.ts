import { NextResponse } from "next/server";
import { getProgramacao } from "@/lib/program";

export async function GET() {
  const items = await getProgramacao();
  return NextResponse.json(items);
}
