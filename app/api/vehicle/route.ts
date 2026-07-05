import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  const client = await clientPromise;
  const db = client.db("drivex");

  const { searchParams } = new URL(req.url);

  const brand = searchParams.get("brand");
  const model = searchParams.get("model");
  const fuel = searchParams.get("fuel");
  const transmission = searchParams.get("transmission");
  const location = searchParams.get("location");
  const ownerId = searchParams.get("ownerId");

  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const query: Record<string, any> = {};

  if (brand) query.brand = brand;
  if (model) query.model = model;
  if (fuel) query.fuel = fuel;
  if (transmission) query.transmission = transmission;
  if (location) query.location = location;
  if (ownerId) query.ownerId = ownerId;

  if (minPrice || maxPrice) {
    query.price = {};

    if (minPrice) {
      query.price.$gte = Number(minPrice);
    }

    if (maxPrice) {
      query.price.$lte = Number(maxPrice);
    }
  }

  const vehicles = await db
    .collection("vehicles")
    .find(query)
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json(vehicles);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await req.json();

  const client = await clientPromise;
  const db = client.db("drivex");

  const vehicle = {
    title: body.title,
    brand: body.brand,
    model: body.model,
    year: Number(body.year),
    price: Number(body.price),
    mileage: Number(body.mileage),
    fuel: body.fuel,
    transmission: body.transmission,
    location: body.location,
    description: body.description,
    images: body.images || [],

    ownerId: session.user.email,
    ownerEmail: session.user.email,
    ownerName: session.user.name || "Seller",

    createdAt: new Date(),
  };

  const result = await db.collection("vehicles").insertOne(vehicle);

  return NextResponse.json({
    success: true,
    insertedId: result.insertedId,
    vehicle,
  });
}