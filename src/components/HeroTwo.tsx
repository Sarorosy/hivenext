import React from "react";

const HeroTwo = () => {
  return (
    <section className="relative min-h-screen font-sans bg-[#fdf8ee] overflow-hidden">
      {/* Right side - full background image */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
        <img
          src="/im2.jpg"
          alt="Workspace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left side */}
      <div className="relative z-10 max-w-5xl px-6 lg:px-12 pt-32 lg:pt-40">
        <h1 className="font-extrabold leading-none text-[#2b0c00] space-y-2">
          <span
            className="inline-block bg-[#fdf8ee] py-4 px-6 shadow-lg text-[clamp(3rem,7vw,11rem)]"
            style={{ width: "74%" }}
          >
            DISCOVER
          </span>
          <span
            className="inline-block bg-[#f5e7d6] py-4 px-6 shadow-lg relative left-4 text-[clamp(2rem,5vw,11rem)]"
            style={{ width: "78%" }}
          >
            YOUR IDEAL
          </span>
          <span
            className="inline-block bg-[#ecd4b5] py-4 px-6 shadow-lg relative left-8 text-[clamp(3rem,7vw,11rem)]"
            style={{ width: "80%" }}
          >
            WORKSPACE
          </span>
        </h1>

        <div className="flex items-center justify-end gap-4 mt-8 group ">
          <span className="text-lg font-medium tracking-wider text-[#2b0c00] ">
            BOOK A TOUR
          </span>
          <button className="bg-[#ff9431] w-14 h-14 flex items-center justify-center rounded shadow-md text-[#2b0c00] text-2xl">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
