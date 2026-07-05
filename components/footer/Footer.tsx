"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Drive<span className="text-indigo-400">X</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Premium vehicle marketplace for buying and selling cars with confidence.
          </p>
        </div>

        {/* Marketplace Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Marketplace</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Buy Cars</li>
            <li>Sell Car</li>
            <li>Dealers</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Safety</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-5 text-gray-400 text-xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} DriveX. All rights reserved.
      </div>
    </footer>
  );
}