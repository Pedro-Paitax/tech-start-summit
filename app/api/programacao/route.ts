import { NextResponse } from "next/server";
import { getProgramacao } from "@/lib/program";

export const revalidate = 30;

export async function GET() {
  const items = await getProgramacao();
  return NextResponse.json(items);
}
