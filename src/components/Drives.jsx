import { Eye, Target, Trophy, ArrowDown } from "lucide-react";

const Drives = () => {
  return (
    <section className="drives-b relative overflow-hidden py-16 sm:py-20 lg:py-24 text-[#070707]">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Line */}
        <div className="flex items-center justify-between border-t border-[#070707]/15 pt-6 sm:pt-8 lg:pt-10">
          <p
            className="text-base sm:text-lg lg:text-xl text-[#070707]/80"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Scroll to Discover
          </p>

          <ArrowDown size={18} className="animate-bounce text-[#070707]/60" />
        </div>

        {/* Main Content */}
        <div className="mt-14 sm:mt-20 lg:mt-24 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="flex justify-center">
            <div className="relative h-[260px] w-[260px] rounded-full border border-dashed border-[#070707]/20 bg-white/5 backdrop-blur-sm sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]">

              {/* Compass */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 sm:scale-90 lg:scale-100">
                <div className="h-0 w-0 border-x-[26px] border-b-[85px] border-x-transparent border-b-[#070707]" />
                <div className="-mt-5 h-0 w-0 rotate-180 border-x-[26px] border-t-[55px] border-x-transparent border-t-[#070707]" />
              </div>

              {/* Eye */}
              <div className="absolute left-1/2 -top-8 lg:-top-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 shadow-lg sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                <Eye className="h-7 w-7 lg:h-9 lg:w-9 text-white" />
              </div>

              {/* Target */}
              <div className="absolute -left-3 bottom-8 flex h-14 w-14 items-center justify-center rounded-full bg-gray-400/80 sm:h-16 sm:w-16 lg:-left-6 lg:bottom-12 lg:h-20 lg:w-20">
                <Target className="h-7 w-7 lg:h-9 lg:w-9 text-white" />
              </div>

              {/* Trophy */}
              <div className="absolute -right-3 bottom-8 flex h-14 w-14 items-center justify-center rounded-full bg-gray-400/80 sm:h-16 sm:w-16 lg:-right-6 lg:bottom-12 lg:h-20 lg:w-20">
                <Trophy className="h-7 w-7 lg:h-9 lg:w-9 text-white" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-3 uppercase tracking-widest lg:justify-start">
              <div className="h-3 w-3 bg-[#070707]" />
              <span className="text-xs sm:text-sm font-semibold text-[#070707]/90">
                WHAT DRIVES US
              </span>
            </div>

            <h2
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-[#070707]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our North Star
            </h2>

            <h3
              className="mt-10 text-2xl italic sm:text-3xl lg:text-4xl text-[#070707]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Vision
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#070707]/70 sm:text-xl lg:mx-0 lg:text-2xl">
              A world in which organizations are led by trust and committed to
              the continuous development of people and purpose.
            </p>

            <div className="mt-10 flex items-center justify-center gap-5 lg:justify-start text-[#070707]">
              <span>1/3</span>

              <div className="h-[2px] w-32 rounded-full bg-[#070707]/10">
                <div className="h-full w-10 rounded-full bg-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drives;