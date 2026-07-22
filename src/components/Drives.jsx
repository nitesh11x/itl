import React from "react";
import { Eye, Target, Trophy, ArrowDown } from "lucide-react";

const Drives = () => {
  return (
    <section className="hero-gradient-reverse relative overflow-hidden py-16 sm:py-20 lg:py-24 text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Top Line / Divider */}
        <div className="flex items-center justify-between border-t border-white/20 pt-6 sm:pt-8 lg:pt-10">
          <p
            className="text-white/80 text-sm sm:text-base font-serif"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Scroll to Discover
          </p>

          <ArrowDown size={18} className="animate-bounce text-white/80" />
        </div>

        {/* Main Content Grid */}
        <div className="mt-14 sm:mt-20 lg:mt-24 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Left: Star Diagram Graphic */}
          <div className="flex justify-center">
            <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px] rounded-full border border-dashed border-white/20">

              {/* Center 3-Point Star (Exact vector match) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  viewBox="0 0 100 100"
                  fill="white"
                  className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                >
                  <path d="M50 10 L56 42 L88 58 L58 56 L50 88 L42 56 L12 58 L44 42 Z" />
                </svg>
              </div>

              {/* Eye Icon Node (Top) */}
              <div className="absolute left-1/2 -top-6 sm:-top-8 lg:-top-10 flex h-16 w-16 sm:h-18 sm:w-18 lg:h-22 lg:w-22 -translate-x-1/2 items-center justify-center rounded-full bg-[#0284c7] shadow-xl">
                <Eye className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
              </div>

              {/* Target Icon Node (Bottom Left) */}
              <div className="absolute left-0 bottom-4 sm:bottom-6 flex h-16 w-16 sm:h-18 sm:w-18 lg:h-22 lg:w-22 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                <Target className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
              </div>

              {/* Trophy Icon Node (Bottom Right) */}
              <div className="absolute right-0 bottom-4 sm:bottom-6 flex h-16 w-16 sm:h-18 sm:w-18 lg:h-22 lg:w-22 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                <Trophy className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
              </div>

            </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-2.5 uppercase tracking-widest lg:justify-start">
              <div className="h-2 w-2 bg-white" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-white">
                WHAT DRIVES US
              </span>
            </div>

            <h2
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-white font-serif"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our North Star
            </h2>

            <h3
              className="mt-8 text-2xl italic sm:text-3xl lg:text-4xl text-white/90 font-serif"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Vision
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0 lg:text-xl">
              A world in which organizations are led by trust and committed to
              the continuous development of people and purpose.
            </p>

            {/* Pagination Slider */}
            <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start text-white/80 text-sm">
              <span className="font-mono text-xs">1/3</span>
              <div className="h-[2px] w-28 rounded-full bg-white/20">
                <div className="h-full w-10 rounded-full bg-[#0284c7]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Drives;