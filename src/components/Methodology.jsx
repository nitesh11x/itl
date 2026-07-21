const Methodology = () => {
  const methodology = [
    {
      title: "Research & Insights",
      points: [
        "Evidence-based leadership models",
        "Continuous innovation",
        "Data-driven understanding",
      ],
    },
    {
      title: "Training & Development",
      points: [
        "Practical skill-building",
        "Certification programs",
        "Organizational transformation",
      ],
    },
    {
      title: "Consulting & Implementation",
      points: [
        "Strategic partnership",
        "Custom solutions",
        "Measurable impact",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 lg:py-28 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-20 lg:-bottom-48 left-0 h-70 w-70 sm:h-[450px] sm:w-[450px] lg:h-[650px] lg:w-[650px] rounded-full bg-blue-700/25 blur-[120px] lg:blur-[180px]" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid gap-10 sm:gap-14 lg:gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 sm:mb-8 flex items-center gap-3 uppercase tracking-widest text-xs sm:text-sm">
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white"></div>
              OUR METHODOLOGY
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              How We Transform
              <br />
              Leadership
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-center">
            <p className="max-w-lg text-lg sm:text-xl leading-relaxed text-gray-300">
              Trusted leadership isn't built on theory alone. Our integrated
              approach combines rigorous research, practical training to create
              lasting organizational change.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 sm:mt-20 lg:mt-24 flex flex-col md:flex-row items-center md:items-end justify-center gap-12 lg:gap-14">
          {methodology.map((item, index) => {
            // Different heights for each card
            const heights = [
              "lg:h-[470px] h-[220px] sm:h-[320px]",
              "lg:h-[320px] h-[170px] sm:h-[220px]",
              "lg:h-[170px] h-[120px] sm:h-[150px]",
            ];

            return (
              <div key={index} className="flex flex-col items-center md:items-start">
                {/* Black Bar */}
                <div
                  className={`${heights[index]} w-24 sm:w-28 lg:w-32 bg-black shadow-[0_0_80px_rgba(0,0,0,0.6)]`}
                />

                {/* Content */}
                <div className="mt-6 sm:mt-8 max-w-[260px] text-center md:text-left">
                  <h3
                    className="mb-4 sm:mb-5 text-2xl sm:text-3xl lg:text-[42px] leading-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </h3>

                  <ul className="space-y-1 text-sm text-gray-300">
                    {item.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;