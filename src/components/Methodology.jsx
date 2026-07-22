import React from "react";

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
    <section className="relative overflow-hidden bg-[#050914] py-16 sm:py-20 lg:py-28 text-white min-h-screen flex items-center">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 left-0 h-[500px] w-[500px] lg:h-[700px] lg:w-[700px] rounded-full bg-blue-600/30 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 w-full">
        {/* Header Section */}
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-start mb-20 lg:mb-28">
          {/* Left Header */}
          <div>
            <div className="mb-6 flex items-center gap-3 uppercase tracking-widest text-xs sm:text-sm text-gray-300 font-medium">
              <span className="h-2.5 w-2.5 bg-gray-200 inline-block"></span>
              OUR METHODOLOGY
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-white font-serif leading-[1.15]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              How We Transform
              <br />
              Leadership
            </h2>
          </div>

          {/* Right Header */}
          <div className="pt-2 lg:pt-10">
            <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 font-light">
              Trusted leadership isn't built on theory alone. Our integrated
              approach combines rigorous research, practical training to create
              lasting organizational change.
            </p>
          </div>
        </div>

        {/* Descending Bars & Side-by-Side Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-end">
          {methodology.map((item, index) => {
            // Descending heights for the black bars
            const heights = [
              "h-[320px] sm:h-[400px] lg:h-[480px]",
              "h-[220px] sm:h-[280px] lg:h-[340px]",
              "h-[120px] sm:h-[160px] lg:h-[200px]",
            ];

            return (
              <div key={index} className="flex items-start gap-5 lg:gap-6">
                {/* Solid Black Vertical Bar */}
                <div
                  className={`${heights[index]} w-20 sm:w-24 lg:w-32 bg-black shrink-0 rounded-sm shadow-2xl shadow-black/80`}
                />

                {/* Content placed immediately to the right */}
                <div className="pt-2">
                  <h3
                    className="mb-4 text-xl sm:text-2xl lg:text-3xl text-white font-serif leading-snug"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-light">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="select-none">•</span>
                        <span>{point}</span>
                      </li>
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