"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FeaturedVehicles() {
  const [cars, setCars] = useState<any[]>([]);

  useEffect(() => {
  const load = async () => {
    try {
      const res = await fetch("/api/vehicle");

      if (!res.ok) {
        console.log("API failed:", res.status);
        setCars([]);
        return;
      }

      const data = await res.json();
      setCars(data);
    } catch (err) {
      console.log("Fetch error:", err);
      setCars([]);
    }
  };

  load();
}, []);
  return (
    <section className="py-20 px-6 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Featured Vehicles
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Link key={car._id} href={`/vehicle/${car._id}`}>
            <div className="bg-[#0d1323] border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-indigo-500 transition">

              <img
                src={car.images?.[0] || "/placeholder.jpg"}
                className="h-48 w-full object-cover"
                alt={car.title}
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {car.title}
                </h3>

                <p className="text-gray-400">
                  {car.brand} • {car.model} • {car.year}
                </p>

                <p className="text-indigo-400 mt-2 font-bold">
                  ${car.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}