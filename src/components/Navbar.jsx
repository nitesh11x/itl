import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-[#0B0B0B] px-5 sm:px-8 lg:px-16 py-5 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
      {/* Logo */}
      <div className="flex items-center gap-3 sm:gap-4">
        <h1
          className="text-white text-3xl sm:text-4xl lg:text-5xl italic font-bold leading-none"
          style={{ fontFamily: "Georgia, serif" }}
        >
          I.T.L
        </h1>

        <div
          className="text-white leading-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <p className="text-xs sm:text-sm">Institute for</p>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Trusted Leadership
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center lg:justify-end items-center gap-5 sm:gap-7 lg:gap-12">
        <a
          href="#"
          className="text-white text-sm sm:text-base lg:text-[17px] font-light transition-colors whitespace-nowrap"
        >
          The Institute
        </a>

        <a
          href="#"
          className="text-gray-500 hover:text-white text-sm sm:text-base lg:text-[17px] transition-colors whitespace-nowrap"
        >
          Our Approach
        </a>

        <a
          href="#"
          className="text-gray-500 hover:text-white text-sm sm:text-base lg:text-[17px] transition-colors whitespace-nowrap"
        >
          Ecosystem
        </a>

        <a
          href="#"
          className="text-gray-500 hover:text-white text-sm sm:text-base lg:text-[17px] transition-colors whitespace-nowrap"
        >
          Insights
        </a>

        <a
          href="#"
          className="text-gray-500 hover:text-white text-sm sm:text-base lg:text-[17px] transition-colors whitespace-nowrap"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Navbar;