import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

/**
 * GET SINGLE VEHICLE
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const client = await clientPromise;
  const db = client.db("drivex");

  const vehicle = await db
    .collection("vehicles")
    .findOne({ _id: new ObjectId(params.id) });

  if (!vehicle) {
    return NextResponse.json(
      { error: "Vehicle not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(vehicle);
}

/**
 * UPDATE VEHICLE (OWNER ONLY)
 */
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
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

  // Check ownership first
  const vehicle = await db.collection("vehicles").findOne({
    _id: new ObjectId(params.id),
  });

  if (!vehicle) {
    return NextResponse.json(
      { error: "Vehicle not found" },
      { status: 404 }
    );
  }

  if (vehicle.ownerId !== session.user.email) {
    return NextResponse.json(
      { error: "Forbidden - Not your listing" },
      { status: 403 }
    );
  }

  const updatedVehicle = {
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
    updatedAt: new Date(),
  };

  await db.collection("vehicles").updateOne(
    { _id: new ObjectId(params.id) },
    { $set: updatedVehicle }
  );

  return NextResponse.json({
    success: true,
    updatedVehicle,
  });
}

/**
 * DELETE VEHICLE (OWNER ONLY)
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const client = await clientPromise;
  const db = client.db("drivex");

  const vehicle = await db.collection("vehicles").findOne({
    _id: new ObjectId(params.id),
  });

  if (!vehicle) {
    return NextResponse.json(
      { error: "Vehicle not found" },
      { status: 404 }
    );
  }

  if (vehicle.ownerId !== session.user.email) {
    return NextResponse.json(
      { error: "Forbidden - Not your listing" },
      { status: 403 }
    );
  }

  await db.collection("vehicles").deleteOne({
    _id: new ObjectId(params.id),
  });

  return NextResponse.json({ success: true });
}