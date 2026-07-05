"use client";

import { useRouter } from "next/navigation";

export default function ContactSellerButton({
  buyerId,
  sellerId,
  vehicleId,
}: {
  buyerId: string;
  sellerId: string;
  vehicleId: string;
}) {
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        buyerId,
        sellerId,
        vehicleId,
      }),
    });

    const chat = await res.json();

    router.push(`/chat/${chat._id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg mt-4"
    >
      Contact Seller
    </button>
  );
}