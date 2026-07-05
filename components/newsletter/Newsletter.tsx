"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-[#070b17]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Get Latest Car Deals
        </h2>

        <p className="mt-5 text-gray-400">
          Subscribe to receive exclusive offers and new vehicle listings.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-xl bg-[#111827] border border-white/10 text-white w-full md:w-96 outline-none"
          />

          <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl flex items-center justify-center gap-2">
            <Mail size={18} />
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}