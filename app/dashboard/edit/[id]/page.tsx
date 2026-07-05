"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function EditVehiclePage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = useSession();

  const [form, setForm] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch vehicle
  useEffect(() => {
    fetch(`/api/vehicle/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm(data);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session?.user) {
      alert("Login required");
      return;
    }

    const res = await fetch(`/api/vehicle/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Vehicle updated successfully");
      router.push("/dashboard/listings");
    } else {
      alert("Update failed");
    }
  };

  if (loading) {
    return (
      <div className="text-white p-10">Loading...</div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Edit Vehicle
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="title"
            value={form.title || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            placeholder="Title"
          />

          <input
            name="brand"
            value={form.brand || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            placeholder="Brand"
          />

          <input
            name="model"
            value={form.model || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            placeholder="Model"
          />

          <input
            name="price"
            value={form.price || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            placeholder="Price"
          />

          <input
            name="mileage"
            value={form.mileage || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            placeholder="Mileage"
          />

          <input
            name="location"
            value={form.location || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            placeholder="Location"
          />

          <textarea
            name="description"
            value={form.description || ""}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded bg-[#0d1323] border border-white/10"
            placeholder="Description"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg"
          >
            Save Changes
          </button>

        </form>
      </div>
    </main>
  );
}