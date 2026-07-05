"use client";

import { Heart, Fuel, Gauge, MapPin } from "lucide-react";

type VehicleCardProps = {
  image: string;
  name: string;
  price: string;
  fuel: string;
  mileage: string;
  location: string;
};

export default function VehicleCard({
  image,
  name,
  price,
  fuel,
  mileage,
  location,
}: VehicleCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#111827] border border-white/10 hover:border-indigo-500 transition">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover"
        />

        <button className="absolute top-4 right-4 bg-black/50 p-2 rounded-full">
          <Heart size={18} />
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{name}</h3>

        <p className="text-indigo-400 text-2xl font-bold mt-2">{price}</p>

        <div className="mt-5 space-y-2 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Fuel size={16} />
            {fuel}
          </div>

          <div className="flex items-center gap-2">
            <Gauge size={16} />
            {mileage}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}