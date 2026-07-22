const Solution = () => {
  const data = [
    {
      id: "1",
      title: "ITL APPROACH",
      description:
        "Evidence-based methodology combining research, training, and consulting to build trusted leaders.",
    },
    {
      id: "2",
      title: "OUR ECOSYSTEM",
      description:
        "Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation.",
    },
    {
      id: "3",
      title: "GLOBAL IMPACT",
      description:
        "UN SDG-aligned programs ensuring every initiative creates measurable social value.",
    },
  ];

  return (
    <section className="relative hero-gradient-reverse overflow-hidden py-16 sm:py-20 lg:py-24 text-white">

      <div className="absolute inset-0">
        <div className="flex  justify-center items-center gap-1 text-2xl text-gray-500">
          <h1>01</h1> <h1>::::::::::::::::::::::::::::::::::::::::::::</h1> <h1>02</h1> <h1>::::::::::::::::::::::::::::::::::::::::::::</h1> <h1>03</h1>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2 uppercase tracking-widest text-xs sm:text-sm font-medium ">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white" />
            THE SOLUTION
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight "
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="mr-2 sm:mr-3 italic text-gray-700">This is</span>
            Why We Exist
          </h2>

          <p className="mx-auto mt-6 sm:mt-8 max-w-4xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600">
            Trust transforms everything engagement, innovation, performance,
            &amp; culture. The Institute of Trusted Leadership scales this impact
            through research-backed methods, turning trusted leadership into
            the global standard.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-20 lg:mt-28">
          {/* Bottom dotted line (Desktop only) */}
          <div
            className="hidden md:block absolute bottom-0 left-0 w-full text-4xl text-gray-400 overflow-hidden whitespace-nowrap opacity-80"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, white 35%, white 65%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, white 35%, white 65%, transparent 100%)"
            }}
          >
            ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`relative ${index === 1
                  ? "md:-mt-28"
                  : index === 2
                    ? "md:mt-8"
                    : "md:mt-8"
                  }`}
              >
                {/* Number + Content */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <span
                    className="text-[70px] sm:text-[90px] lg:text-[120px]  leading-none "
                    style={{
                      fontFamily: "Georgia, serif",
                      background:
                        "linear-gradient(to bottom,#070707,#2b2b2b)",
                      WebkitBackgroundClip: "text",
                      // WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.id}
                  </span>

                  <div className="pt-6 sm:pt-8 lg:pt-12">
                    <h3
                      className="text-2xl sm:text-3xl lg:text-4xl "
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 max-w-xs text-gray-500 sm:text-lg leading-relaxed ">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="mx-auto mt-8 sm:mt-1 h-24 sm:h-32 lg:h-36 w-1 bg-linear-to-b from-gray-600 via-white to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;