"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Harthi",
    role: "BMW Owner",
    review:
      "DriveX made buying my dream car incredibly easy. The entire process was fast, secure, and transparent.",
  },
  {
    name: "Sarah Williams",
    role: "Car Dealer",
    review:
      "As a dealer, DriveX has helped me reach thousands of serious buyers with a premium listing experience.",
  },
  {
    name: "Mohammed Khan",
    role: "Tesla Owner",
    review:
      "The search filters and verified listings gave me confidence when buying my first electric vehicle.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-gray-400">
            Thousands of buyers and sellers trust DriveX.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-[#0d1323] border border-white/10 rounded-3xl p-8 hover:border-indigo-500 transition"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-white font-semibold">
                  {item.name}
                </h3>

                <p className="text-indigo-400 text-sm">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}