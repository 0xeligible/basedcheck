import { NextResponse } from "next/server";
import { store } from "../link/route";

export async function POST(req: Request) {
  const body = await req.json();
  const { address } = body;

  const user = store[address];
  if (!user) {
    return NextResponse.json({ error: "not linked" }, { status: 400 });
  }

  const today = new Date().toDateString();
  if (user.lastCheckin === today) {
    return NextResponse.json({ message: "already checked in" });
  }

  user.lastCheckin = today;
  user.points += 10;

  return NextResponse.json({
    message: "check-in success",
    points: user.points,
  });
}
