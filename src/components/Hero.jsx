const Hero = () => {
  return (
    <section className="text-white w-[100vw] h-[85vh] hero-gradient">
      <div className="max-w-295 mx-auto px-8 lg:px-0 py-8">

        {/* Top Border */}
        <div className="border-t border-bs-gray-800"></div>

        {/* Hero */}
        <div className="pt-32 pb-24">

          {/* Small Label */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-white"></div>

            <span className="uppercase tracking-[2px] text-[13px] font-semibold text-white">
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

                <span className="italic text-shadow text-gray-600">
                  the
                </span>
                World Can Trust.
              </h1>
            </div>

            {/* Right */}
            <div className="flex justify-end ">
              <p className="max-w-[470px] text-right  text-[18px] leading-[1.6] text-white">
                Where purpose meets people. Where organizations
                transform through trusted leadership, continuous
                learning, &amp; human responsibility.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Border */}
        {/* <div className="border-b border-gray-800"></div> */}

      </div>

    </section>
  );
};

export default Hero;