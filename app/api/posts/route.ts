import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      title: "Første blogpost",
      content: "Dette er mit første blogindlæg.",
    },
    {
      id: 2,
      title: "Andet blogpost",
      content: "Lidt mere tekst her.",
    },
  ]);
}