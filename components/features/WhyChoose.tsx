"use client";

export default function WhyChoose() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white">
          Why Choose DriveX
        </h2>

        <p className="mt-6 text-gray-400">
          Secure • Trusted • Premium Vehicle Marketplace
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
            <h3 className="text-white text-xl font-semibold">
              Verified Sellers
            </h3>
            <p className="text-gray-400 mt-3">
              Every seller is verified before listing vehicles.
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
            <h3 className="text-white text-xl font-semibold">
              Secure Payments
            </h3>
            <p className="text-gray-400 mt-3">
              Safe and transparent payment processing.
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
            <h3 className="text-white text-xl font-semibold">
              24/7 Support
            </h3>
            <p className="text-gray-400 mt-3">
              We're here whenever you need help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}