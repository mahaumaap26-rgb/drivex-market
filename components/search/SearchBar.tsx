"use client";

import { useState } from "react";

interface Props {
  onSearch: (filters: any) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    fuel: "",
    location: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0d1323] border border-white/10 p-6 rounded-xl space-y-4"
    >
      <div className="grid md:grid-cols-3 gap-3">

        <input
          name="brand"
          placeholder="Brand (Toyota, BMW)"
          className="p-2 rounded bg-[#050816] border border-white/10"
          onChange={handleChange}
        />

        <input
          name="model"
          placeholder="Model"
          className="p-2 rounded bg-[#050816] border border-white/10"
          onChange={handleChange}
        />

        <select
          name="fuel"
          className="p-2 rounded bg-[#050816] border border-white/10"
          onChange={handleChange}
        >
          <option value="">Fuel</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Electric</option>
        </select>

      </div>

      <div className="grid md:grid-cols-3 gap-3">

        <input
          name="location"
          placeholder="Location"
          className="p-2 rounded bg-[#050816] border border-white/10"
          onChange={handleChange}
        />

        <input
          name="minPrice"
          placeholder="Min Price"
          className="p-2 rounded bg-[#050816] border border-white/10"
          onChange={handleChange}
        />

        <input
          name="maxPrice"
          placeholder="Max Price"
          className="p-2 rounded bg-[#050816] border border-white/10"
          onChange={handleChange}
        />

      </div>

      <button
        type="submit"
        className="bg-indigo-600 px-6 py-2 rounded-lg w-full"
      >
        Search Vehicles
      </button>
    </form>
  );
}