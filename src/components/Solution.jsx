const Solution = () => {
  const data = [
    {
      id: "01",
      title: "ITL APPROACH",
      description:
        "Evidence-based methodology combining research, training, and consulting to build trusted leaders.",
    },
    {
      id: "02",
      title: "OUR ECOSYSTEM",
      description:
        "Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation.",
    },
    {
      id: "03",
      title: "GLOBAL IMPACT",
      description:
        "UN SDG-aligned programs ensuring every initiative creates measurable social value.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 text-[#070707]">
      {/* Background - Removed */}
      <div className="absolute inset-0">
        {/* Removed all background gradient divs */}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2 uppercase tracking-widest text-xs sm:text-sm font-medium text-[#070707]">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#070707]" />
            THE SOLUTION
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#070707]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="mr-2 sm:mr-3 italic text-[#070707]/50">This is</span>
            Why We Exist
          </h2>

          <p className="mx-auto mt-6 sm:mt-8 max-w-4xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-[#070707]/60">
            Trust transforms everything engagement, innovation, performance,
            &amp; culture. The Institute of Trusted Leadership scales this impact
            through research-backed methods, turning trusted leadership into
            the global standard.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-20 lg:mt-28">
          {/* Bottom dotted line (Desktop only) */}
          <div className="hidden md:block absolute bottom-0 left-0 h-[2px] w-full border-b-2 border-dotted border-[#070707]/20"></div>

          <div className="grid gap-12 md:grid-cols-3">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`relative ${
                  index === 1
                    ? "md:-mt-28"
                    : index === 2
                    ? "md:mt-8"
                    : "md:mt-8"
                }`}
              >
                {/* Number + Content */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <span
                    className="text-[70px] sm:text-[90px] lg:text-[120px] leading-none text-[#070707]/90"
                    style={{
                      fontFamily: "Georgia, serif",
                      background:
                        "linear-gradient(to bottom,#070707,#2b2b2b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.id}
                  </span>

                  <div className="pt-6 sm:pt-8 lg:pt-12">
                    <h3
                      className="text-2xl sm:text-3xl lg:text-4xl text-[#070707]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 max-w-xs text-base sm:text-lg leading-relaxed text-[#070707]/50">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="mx-auto mt-8 sm:mt-10 h-24 sm:h-32 lg:h-44 w-[2px] bg-gradient-to-b from-[#070707] via-[#070707]/70 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;