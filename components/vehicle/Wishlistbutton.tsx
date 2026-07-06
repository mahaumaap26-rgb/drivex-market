"use client";

import { useSession } from "next-auth/react";

export default function WishlistButton({
  vehicleId,
}: {
  vehicleId: string;
}) {
  const { data: session } = useSession();

  const addToWishlist = async () => {
    if (!session?.user) {
      alert("Please login first");
      return;
    }

    await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session.user.email,
        vehicleId,
      }),
    });

    alert("Added to wishlist ❤️");
  };

  return (
    <button
      onClick={addToWishlist}
      className="w-full border border-white/20 py-3 rounded-lg mt-3 hover:bg-white/10"
    >
      ❤️ Save to Wishlist
    </button>
  );
}
