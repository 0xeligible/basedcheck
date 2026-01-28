import { NextResponse } from "next/server";

let store: Record<string, any> = {};

export async function POST(req: Request) {
  const body = await req.json();
  const { address } = body;

  // NOTE: nanti fid diambil dari session / DB
  store[address] = {
    address,
    points: 0,
    lastCheckin: null,
  };

  return NextResponse.json({ ok: true });
}

export { store };
