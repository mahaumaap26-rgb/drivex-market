"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816]">
      <div className="bg-[#0d1323] p-10 rounded-2xl w-96 border border-white/10">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          className="w-full p-3 mb-4 rounded bg-[#111827] text-white"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-6 rounded bg-[#111827] text-white"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() =>
            signIn("credentials", {
              email,
              password,
              callbackUrl: "/",
            })
          }
          className="w-full bg-indigo-600 py-3 rounded text-white hover:bg-indigo-500"
        >
          Login
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Demo: admin@drivex.com / 123456
        </p>
      </div>
    </div>
  );
}