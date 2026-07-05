"use client";

import { useState } from "react";

interface VehicleGalleryProps {
  images: string[];
}

export default function VehicleGallery({
  images,
}: VehicleGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">

      {/* Main Image */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1323]">
        <img
          src={selectedImage}
          alt="Vehicle"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-lg border-2 transition ${
              selectedImage === image
                ? "border-indigo-500"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`Vehicle ${index + 1}`}
              className="h-24 w-full object-cover"
            />
          </button>
        ))}
      </div>

    </div>
  );
}