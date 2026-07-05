"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Vehicle {
  _id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  images: string[];
}

export default function MyListingsPage() {
  const { data: session } = useSession();

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(`/api/vehicle?ownerId=${session.user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      });
  }, [session]);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this vehicle?"
    );

    if (!confirmDelete) return;

    const res = await fetch(`/api/vehicle/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setVehicles((prev) =>
        prev.filter((v) => v._id !== id)
      );
      alert("Vehicle deleted");
    } else {
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050816] text-white p-10">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <h1 className="text-3xl font-bold mb-8">My Listings</h1>

      {vehicles.length === 0 ? (
        <p className="text-gray-400">
          You haven't listed any vehicles yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((car) => (
            <div
              key={car._id}
              className="bg-[#0d1323] rounded-xl overflow-hidden border border-white/10"
            >
              <img
                src={car.images?.[0] || "/placeholder.jpg"}
                className="h-48 w-full object-cover"
                alt={car.title}
              />

              <div className="p-4">
                <h2 className="font-bold text-lg">
                  {car.title}
                </h2>

                <p className="text-gray-400">
                  {car.brand} • {car.model} • {car.year}
                </p>

                <p className="text-indigo-400 font-bold mt-2">
                  ${car.price}
                </p>

                <div className="flex gap-2 mt-4">
                  <Link
                    href={`/vehicle/${car._id}`}
                    className="flex-1 bg-indigo-600 text-center py-2 rounded-lg"
                  >
                    View
                  </Link>

                  <Link
                    href={`/dashboard/edit/${car._id}`}
                    className="flex-1 border border-white/20 text-center py-2 rounded-lg"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(car._id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-center py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}