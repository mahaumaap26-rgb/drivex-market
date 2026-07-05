import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

/**
 * ADD TO WISHLIST
 */
export async function POST(req: Request) {
  const body = await req.json();
  const { userId, vehicleId } = body;

  if (!userId || !vehicleId) {
    return NextResponse.json(
      { error: "Missing userId or vehicleId" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("drivex");

  await db.collection("wishlist").insertOne({
    userId,
    vehicleId: new ObjectId(vehicleId), // ✅ FIXED
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}

/**
 * GET USER WISHLIST
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { error: "Missing userId" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("drivex");

  const wishlist = await db
    .collection("wishlist")
    .find({ userId })
    .toArray();

  return NextResponse.json(wishlist);
}

/**
 * REMOVE FROM WISHLIST
 */
export async function DELETE(req: Request) {
  const body = await req.json();
  const { userId, vehicleId } = body;

  if (!userId || !vehicleId) {
    return NextResponse.json(
      { error: "Missing userId or vehicleId" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("drivex");

  await db.collection("wishlist").deleteOne({
    userId,
    vehicleId: new ObjectId(vehicleId), // ✅ FIXED
  });

  return NextResponse.json({ success: true });
}