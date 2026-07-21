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
    <section className="relative overflow-hidden bg-[#05080f] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 lg:-left-40 bottom-0 h-[280px] w-[280px] sm:h-[420px] sm:w-[420px] lg:h-[600px] lg:w-[600px] rounded-full bg-blue-700/30 blur-[120px] lg:blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[250px] w-[250px] sm:h-[360px] sm:w-[360px] lg:h-[500px] lg:w-[500px] rounded-full bg-green-600/25 blur-[120px] lg:blur-[180px]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex justify-center items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest">
            <div className="h-2 w-2 bg-white"></div>
            BUILT ON SOLID GROUND
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            One Vision.
            <br />
            Four Pathways to Impact.
          </h2>

          <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-gray-300">
            The Institute of Trusted Leadership operates through an integrated
            ecosystem of specialized divisions, each designed to address
            different aspects of leadership development and organizational
            transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 sm:mt-16 lg:mt-20 grid gap-6 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Featured Card */}
          <div className="overflow-hidden rounded-2xl border border-blue-900 bg-[#081521]">
            {/* Top Tag */}
            <div className="bg-[#0d4d90] px-4 py-3 text-xs font-semibold uppercase tracking-wide">
              ■ OPEN TO ALL
            </div>

            {/* Image */}
            <img
              src="/luca.png"
              alt="Luca"
              className="h-52 sm:h-60 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    LUCA The Leader
                  </h3>

                  <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-gray-200">
                    Where Leadership Awareness Begins
                  </p>
                </div>

                <ArrowUpRight className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex-shrink-0" />
              </div>

              <p className="mt-5 sm:mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
                Our flagship CSR initiative bringing trusted leadership
                awareness to communities, organizations, and emerging leaders.
                Start your journey with free resources, assessments, and
                community connection.
              </p>
            </div>
          </div>

          {/* Vertical Cards */}
          {pathways.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl bg-[#061015] border border-white/10"
            >
              {/* Header */}
              <div className="bg-[#0d3f72] px-4 py-5 text-[10px] sm:text-[11px] uppercase tracking-wide leading-relaxed">
                ■ {item.tag}
              </div>

              {/* Vertical on desktop / Horizontal on mobile */}
              <div className="flex h-auto lg:h-[520px] items-center justify-center p-8 lg:p-0">
                <div className="text-center lg:rotate-180 lg:[writing-mode:vertical-rl]">
                  <h3
                    className="text-3xl sm:text-4xl lg:text-[42px]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 lg:mt-6 text-lg lg:text-xl text-gray-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ground;