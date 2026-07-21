const Hero = () => {
  return (
    <section className="text-[#070707]">
      <div className="max-w-[1180px] mx-auto px-8 lg:px-0 py-8">

        {/* Top Border */}
        <div className="border-t border-black/10"></div>

        {/* Hero */}
        <div className="pt-32 pb-24">

          {/* Small Label */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#070707]"></div>

            <span className="uppercase tracking-[2px] text-[13px] font-semibold text-[#070707]/90">
              Built on Solid Ground
            </span>
          </div>

          {/* Heading + Description */}
          <div className="mt-10 grid lg:grid-cols-2 gap-20 items-end">

            {/* Left */}
            <div>
              <h1
                className="text-[60px] leading-[1.03] font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Building Leaders - <br />

                <span className="italic text-[#070707]/30">
                  the 
                </span>
                 World Can Trust.
              </h1>
            </div>

            {/* Right */}
            <div className="flex justify-end">
              <p className="max-w-[470px] text-right text-[18px] leading-[1.6] text-[#070707]/85">
                Where purpose meets people. Where organizations
                transform through trusted leadership, continuous
                learning, &amp; human responsibility.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Border */}
        <div className="border-b border-black/10"></div>

      </div>
    </section>
  );
};

export default Hero;