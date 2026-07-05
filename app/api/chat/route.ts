import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const body = await req.json();

  const { buyerId, sellerId, vehicleId } = body;

  const client = await clientPromise;
  const db = client.db("drivex");

  // check if chat already exists
  const existing = await db.collection("chats").findOne({
    buyerId,
    sellerId,
    vehicleId,
  });

  if (existing) {
    return NextResponse.json(existing);
  }

  const chat = {
    buyerId,
    sellerId,
    vehicleId,
    createdAt: new Date(),
  };

  const result = await db.collection("chats").insertOne(chat);

  return NextResponse.json({
    ...chat,
    _id: result.insertedId,
  });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const userId = searchParams.get("userId");

  const client = await clientPromise;
  const db = client.db("drivex");

  const chats = await db.collection("chats").find({
    $or: [{ buyerId: userId }, { sellerId: userId }],
  }).toArray();

  return NextResponse.json(chats);
}