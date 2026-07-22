import React from "react";
import { ArrowUpRight } from "lucide-react";

const pathways = [
  {
    title: "MARTINICH CONSULTING",
    subtitle: "Strategic Leadership Partnerships",
    tag: "FOR ORGANIZATIONS",
  },
  {
    title: "MARTINICH INSTITUTE",
    subtitle: "Learning That Transforms",
    tag: "FOR INDIVIDUALS & TEAMS",
  },
  {
    title: "MARTINICH R&D",
    subtitle: "Innovation Meets Insight",
    tag: "FOR RESEARCH & INNOVATION",
  },
];

const Ground = () => {
  return (
    <section className="relative overflow-hidden  py-16 sm:py-20 lg:py-24 text-white min-h-screen flex items-center justify-center">
      {/* Background Lighting/Glows */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-7000 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-600/20 blur-[160px]" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 w-full">
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <div className="mb-4 flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-gray-300 font-medium">
            <span className="h-2 w-2 bg-white inline-block"></span>
            BUILT ON SOLID GROUND
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            One Vision.
            <br />
            Four Pathways to Impact.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 font-light">
            The Institute of Trusted Leadership operates through an integrated
            ecosystem of specialized divisions, each designed to address
            different aspects of leadership development and organizational
            transformation.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-12 items-stretch">

          <div className="lg:col-span-6 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#081525] border border-blue-500/20 shadow-2xl relative p-6 sm:p-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0e3b6e] px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-wider text-blue-100 uppercase mb-6">
                <span className="h-2 w-2 bg-white inline-block"></span>
                OPEN TO ALL
              </div>

              <div className="overflow-hidden rounded-xl border border-blue-400/20 shadow-lg mb-8">
                <img
                  src="/luca.png"
                  alt="LUCA The Leader"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white leading-snug"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    LUCA The Leader
                  </h3>
                  <p className="mt-1 text-base sm:text-lg text-gray-300">
                    Where Leadership Awareness Begins
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-gray-300 shrink-0 mt-1" />
              </div>

              {/* Body Text */}
              <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Our flagship CSR initiative bringing trusted leadership
                awareness to communities, organizations, and emerging leaders.
                Start your journey with free resources, assessments, and
                community connection.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pathways.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[#06121e] border border-blue-500/15 shadow-xl transition-all duration-300 hover:border-blue-400/30"
              >
                {/* Header Tag */}
                <div className="bg-[#0e3b6e] px-4 py-3 min-h-[58px] flex items-center gap-2 text-[10px] font-semibold tracking-wider text-blue-100 uppercase">
                  <span className="h-1.5 w-1.5 bg-white shrink-0 inline-block"></span>
                  <span className="leading-tight">{item.tag}</span>
                </div>

                <div className="flex-1 flex items-end justify-center p-6 sm:py-10">
                  <div className="flex flex-col lg:[writing-mode:vertical-rl] lg:rotate-180 items-start justify-center gap-2 lg:gap-3 text-left">
                    <h3
                      className="text-2xl sm:text-3xl lg:text-[28px] font-serif text-white tracking-wide leading-tight"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base text-white font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ground;