"use client";

import { CldUploadWidget } from "next-cloudinary";

interface Props {
  value: string[];
  onChange: (images: string[]) => void;
}

export default function ImageUploader({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-4">
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
        onSuccess={(result: any) => {
          const url = result.info.secure_url;
          onChange([...value, url]);
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="bg-indigo-600 px-6 py-3 rounded-lg"
          >
            Upload Images
          </button>
        )}
      </CldUploadWidget>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {value.map((img, index) => (
    <div
      key={img}
      className="relative rounded-lg overflow-hidden border border-white/10"
    >
      <img
        src={img}
        alt={`Vehicle ${index + 1}`}
        className="h-32 w-full object-cover"
      />

      <button
        type="button"
        onClick={() =>
          onChange(value.filter((_, i) => i !== index))
        }
        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 text-white"
      >
        ✕
      </button>
    </div>
  ))}
    </div>
    </div>
  );
}