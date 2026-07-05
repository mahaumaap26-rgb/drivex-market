"use client";

import { useState, useEffect } from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Brands from "../components/brands/Brands";
import FeaturedVehicles from "../components/featured/FeaturedVehicles";
import Categories from "../components/categories/Categories";
import WhyChoose from "../components/features/WhyChoose";
import Stats from "../components/stats/Stats";
import Testimonials from "../components/testimonials/Testimonials";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

import SearchBar from "@/components/search/SearchBar";

export default function Home() {
  const [cars, setCars] = useState([]);

  const fetchCars = async (filters = {}) => {
  try {
    const query = new URLSearchParams(filters as any).toString();

    const res = await fetch(`/api/vehicle?${query}`);

    if (!res.ok) {
      console.log("API error:", res.status);
      setCars([]);
      return;
    }

    const data = await res.json();
    setCars(data);
  } catch (error) {
    console.log("Fetch failed:", error);
    setCars([]);
  }
};

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <main className="bg-[#050816]">
      <Navbar />
      <Hero />

      {/* 🔍 SEARCH SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <SearchBar onSearch={fetchCars} />
      </div>

      <Brands />
      <FeaturedVehicles />

      <Categories />
      <WhyChoose />
      <Stats />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}