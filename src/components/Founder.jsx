import { ArrowUpRight } from "lucide-react";

const Founder = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient - Removed */}
      <div className="absolute inset-0">
        {/* Removed all background gradient divs */}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Top */}
        <div className="border-b lg:border-r border-[#070707]/10 px-5 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-28">
          <div className="flex items-center gap-3 uppercase tracking-wider text-xs sm:text-sm font-semibold text-[#070707]">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#070707]" />
            Meet Our Founder
          </div>

          <h2
            className="mt-6 sm:mt-8 lg:mt-10 text-4xl sm:text-5xl lg:text-6xl text-[#070707] leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Leslie Martinich
          </h2>
        </div>

        {/* Right Top Image */}
        <div className="border-b border-[#070707]/10">
          <img
            src="/women.png"
            alt="Founder"
            className="w-full h-[300px] sm:h-[420px] lg:h-full object-cover lg:min-h-[420px]"
          />
        </div>

        {/* Left Bottom */}
        <div className="border-b lg:border-b-0 lg:border-r border-[#070707]/10 px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
          <div className="max-w-lg space-y-6 sm:space-y-8 text-[#070707]/80 text-base sm:text-lg lg:text-[20px] leading-relaxed">
            <p>
              Leslie Martinich is a leadership expert with 20+ years of
              experience who founded the Institute of Trusted Leadership to
              address the global crisis of trust in organizations.
            </p>

            <p>
              Through evidence-based, practical approaches, her work develops
              leaders, transforms cultures, and scales trusted leadership
              worldwide.
            </p>
          </div>
        </div>

        {/* Right Bottom */}
        <div className="flex items-center lg:items-start justify-center lg:justify-start px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
          <button
            className="group flex items-center gap-3 text-[#070707] transition"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="text-3xl sm:text-4xl lg:text-6xl">
              Meet Leslie
            </span>

            <ArrowUpRight
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Founder;