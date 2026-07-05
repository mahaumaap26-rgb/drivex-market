"use client";

import { Car, Users, Building2, Star } from "lucide-react";

const stats = [
  {
    icon: Car,
    number: "50K+",
    label: "Vehicles Listed",
  },
  {
    icon: Users,
    number: "120K+",
    label: "Happy Customers",
  },
  {
    icon: Building2,
    number: "3,500+",
    label: "Verified Dealers",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Customer Rating",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#070b17]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Trusted by Thousands
          </h2>

          <p className="text-gray-400 mt-5">
            One of the fastest growing premium vehicle marketplaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="bg-[#0d1323] rounded-3xl border border-white/10 p-10 text-center hover:border-indigo-500 transition"
              >
                <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-6">
                  <Icon size={34} className="text-white" />
                </div>

                <h3 className="text-5xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="text-gray-400 mt-4">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}