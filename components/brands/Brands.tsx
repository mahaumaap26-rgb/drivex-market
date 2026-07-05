"use client";

const brands = [
  "BMW",
  "Mercedes",
  "Audi",
  "Toyota",
  "Tesla",
  "Honda",
  "Lexus",
  "Ford",
];

export default function Brands() {
  return (
    <section className="py-24 bg-[#070b17]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Browse by Brand
          </h2>

          <p className="text-gray-400 mt-4">
            Discover vehicles from the world's leading manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-white/5 border border-white/10 rounded-2xl h-28 flex items-center justify-center text-white font-semibold hover:bg-indigo-600 transition duration-300 cursor-pointer hover:scale-105"
            >
              {brand}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}