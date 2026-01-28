import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const fid = body?.untrustedData?.fid;
  const username = body?.untrustedData?.username;

  console.log("FID:", fid, "USER:", username);

  return NextResponse.json({
    frame: {
      image: "https://placehold.co/600x400/png?text=Hello+BasedCheck",
      buttons: [
        {
          label: "Next",
        },
      ],
    },
  });
}
