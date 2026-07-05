import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get("chatId");

  if (!chatId) {
    return NextResponse.json([]);
  }

  const client = await clientPromise;
  const db = client.db("drivex");

  const messages = await db
    .collection("messages")
    .find({ chatId })
    .sort({ createdAt: 1 })
    .toArray();

  return NextResponse.json(messages);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { chatId, senderId, text } = body;

  if (!chatId || !senderId || !text) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("drivex");

  const message = {
    chatId,
    senderId,
    text,
    createdAt: new Date(),
  };

  const result = await db.collection("messages").insertOne(message);

  return NextResponse.json({
    ...message,
    _id: result.insertedId,
  });
}