import { NextRequest, NextResponse } from "next/server";
import getListingDetails from "@/lib/get-property";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const response = await req.json();
    
    if (!response.url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const listingDetails = await getListingDetails(response.url);
    
    return NextResponse.json({ data: listingDetails }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
