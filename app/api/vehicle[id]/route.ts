import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  req: NextRequest,
  context: any
) {
  try {
    const { id } = context.params;

    const client = await clientPromise;
    const db = client.db("drivex");

    const vehicle = await db
      .collection("vehicles")
      .findOne({ _id: new ObjectId(id) });

    if (!vehicle) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(vehicle);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
