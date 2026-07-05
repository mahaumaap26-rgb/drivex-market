"use client";

import {
  Car,
  Truck,
  Zap,
  Shield,
  Crown,
  Bike,
} from "lucide-react";

const categories = [
  {
    title: "SUV",
    icon: Car,
    count: "250+ Vehicles",
  },
  {
    title: "Sedan",
    icon: Crown,
    count: "180+ Vehicles",
  },
  {
    title: "Electric",
    icon: Zap,
    count: "90+ Vehicles",
  },
  {
    title: "Pickup",
    icon: Truck,
    count: "70+ Vehicles",
  },
  {
    title: "Luxury",
    icon: Shield,
    count: "120+ Vehicles",
  },
  {
    title: "Motorcycles",
    icon: Bike,
    count: "60+ Vehicles",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-[#070b17]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Browse by Category
          </h2>

          <p className="mt-4 text-gray-400">
            Find the perfect vehicle for every lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0d1323] hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300 p-8 text-center cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto mb-6">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.count}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}