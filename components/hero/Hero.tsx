"use client";

import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#050816] via-[#0b1120] to-[#050816] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-500/20 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40">

        <div className="text-center">

          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm">
            Premium Vehicle Marketplace
          </p>

          <h1 className="mt-6 text-6xl md:text-7xl font-extrabold leading-tight">
            Find Your
            <br />
            Dream Car
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Browse thousands of verified vehicles from trusted dealers and
            private sellers across the country.
          </p>

        </div>

        {/* Search Box */}

        <div className="mt-16 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <div className="grid md:grid-cols-5 gap-4">

            <input
              placeholder="Brand"
              className="bg-[#111827] rounded-xl p-4 outline-none"
            />

            <input
              placeholder="Model"
              className="bg-[#111827] rounded-xl p-4 outline-none"
            />

            <input
              placeholder="Budget"
              className="bg-[#111827] rounded-xl p-4 outline-none"
            />

            <input
              placeholder="Location"
              className="bg-[#111827] rounded-xl p-4 outline-none"
            />

            <button className="bg-indigo-600 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-500 transition">
              <Search size={20} />
              Search
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
