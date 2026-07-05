"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white">
            D
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              Drive<span className="text-indigo-400">X</span>
            </h1>
            <p className="text-xs text-gray-400">
              Vehicle Marketplace
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-gray-300">
          <Link href="/buy" className="hover:text-white transition">
            Buy Cars
          </Link>

          <Link href="/sell" className="hover:text-white transition">
            Sell Car
          </Link>

          <Link href="/dealers" className="hover:text-white transition">
            Dealers
          </Link>

          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-3">

          {!session ? (
            <Link
              href="/login"
              className="px-5 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                href="/dashboard/listings"
                className="px-5 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
              >
                My Listings
              </Link>

              <Link
                href="/dashboard"
                className="px-5 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={() => signOut()}
                className="px-5 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
              >
                Logout
              </button>
            </>
          )}

          <Link
            href="/sell"
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition"
          >
            Sell Your Car
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="lg:hidden text-white">
          <Menu size={28} />
        </button>

      </div>
    </nav>
  );
}