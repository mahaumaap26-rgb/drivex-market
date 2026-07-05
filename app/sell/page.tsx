"use client";

import { useState } from "react";
import ImageUploader from "@/components/upload/ImageUploader";

export default function SellCarPage() {
  const [images, setImages] = useState<string[]>([]);

  const [form, setForm] = useState({
    title: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    fuel: "",
    transmission: "",
    location: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/vehicle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
  ...form,
  images,
})
  });

  if (res.ok) {
    alert("Vehicle Listed Successfully!");
  } else {
    alert("Something went wrong.");
  }
};
  return (
    <main className="min-h-screen bg-[#050816] text-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Sell Your Car</h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="title"
            placeholder="Vehicle Title"
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            onChange={handleChange}
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="brand"
              placeholder="Brand"
              className="p-3 rounded bg-[#0d1323] border border-white/10"
              onChange={handleChange}
            />

            <input
              name="model"
              placeholder="Model"
              className="p-3 rounded bg-[#0d1323] border border-white/10"
              onChange={handleChange}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              name="year"
              placeholder="Year"
              className="p-3 rounded bg-[#0d1323] border border-white/10"
              onChange={handleChange}
            />

            <input
              name="price"
              placeholder="Price"
              className="p-3 rounded bg-[#0d1323] border border-white/10"
              onChange={handleChange}
            />

            <input
              name="mileage"
              placeholder="Mileage"
              className="p-3 rounded bg-[#0d1323] border border-white/10"
              onChange={handleChange}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="fuel"
              className="p-3 rounded bg-[#0d1323] border border-white/10"
              onChange={handleChange}
            >
              <option value="">Fuel Type</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Hybrid</option>
              <option>Electric</option>
            </select>

            <select
              name="transmission"
              className="p-3 rounded bg-[#0d1323] border border-white/10"
              onChange={handleChange}
            >
              <option value="">Transmission</option>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
          </div>

          <input
            name="location"
            placeholder="Location"
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            onChange={handleChange}
          />

          <ImageUploader
           value={images}
           onChange={setImages}
          />

          <textarea
            name="description"
            rows={5}
            placeholder="Vehicle Description"
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg w-full"
          >
            Submit Vehicle
          </button>

        </form>
      </div>
    </main>
  );
}