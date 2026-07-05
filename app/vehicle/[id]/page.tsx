import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

import ContactSellerButton from "@/components/vehicle/ContactSellerButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import VehicleGallery from "@/components/vehicle/VehicleGallery";
import WishlistButton from "@/components/vehicle/WishlistButton";

export default async function VehiclePage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);

  const client = await clientPromise;
  const db = client.db("drivex");

  const car = await db
    .collection("vehicles")
    .findOne({ _id: new ObjectId(params.id) });

  if (!car) {
    return (
      <div className="text-white p-10">
        Vehicle not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* IMAGE GALLERY */}
        <VehicleGallery images={car.images || []} />

        {/* DETAILS SECTION */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT SIDE - DETAILS */}
          <div className="md:col-span-2 space-y-4">

            <h1 className="text-3xl font-bold">
              {car.title}
            </h1>

            <p className="text-gray-400">
              {car.brand} • {car.model} • {car.year}
            </p>

            <p className="text-2xl font-bold text-indigo-400">
              ${car.price}
            </p>

            <p className="text-gray-300">
              {car.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <p>Fuel: {car.fuel}</p>
              <p>Transmission: {car.transmission}</p>
              <p>Mileage: {car.mileage}</p>
              <p>Location: {car.location}</p>
            </div>
          </div>

          {/* RIGHT SIDE - SIDEBAR */}
          <div className="bg-[#0d1323] p-5 rounded-xl border border-white/10 h-fit">

            <h2 className="text-lg font-semibold mb-4">
              Seller Info
            </h2>

            <p className="text-gray-300 mb-2">
              📍 {car.location}
            </p>

            {/* CONTACT SELLER */}
            <div className="mt-4">
              <ContactSellerButton
                buyerId={session?.user?.email || ""}
                sellerId={car.ownerId}
                vehicleId={car._id.toString()}
              />
            </div>

            {/* WISHLIST */}
            <div className="mt-3">
              <WishlistButton vehicleId={car._id.toString()} />
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}