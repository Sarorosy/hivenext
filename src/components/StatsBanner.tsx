"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Counter = ({ end, duration = 1000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
};

const StatsBanner = () => {
  return (
    <div className="bg-black text-white py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-tl-[45px] rounded-br-[45px] shadow-lg max-w-7xl mx-auto">
      {/* Left CTA */}
      <Link
        href="https://hiveworkspaces.com"
        target="_blank"
        className="bg-gradient-to-r from-gray-900 to-gray-800 border border-white/20 rounded-tl-[25px] rounded-br-[25px] px-6 py-3 flex items-center gap-4 hover:scale-105 transition-transform"
      >
        <span className="bg-white text-black font-semibold px-4 py-2 rounded-tl-[15px] rounded-br-[15px] text-sm">
          JOIN US NOW
        </span>
        <span className="text-sm opacity-80 flex items-center gap-1">
           <ArrowUpRight className="w-4 h-4" />
        </span>
      </Link>

      {/* Right Stats */}
      <div className="flex flex-wrap justify-center gap-6 text-center text-sm md:text-base">
        <div>
          <p className="text-xl md:text-2xl font-bold">
            <Counter end={5} />{" "}
          </p>
          <p className="opacity-80">Prime Locations</p>
        </div>
        <div>
          <p className="text-xl md:text-2xl font-bold">
            <Counter end={100} />{" "}
          </p>
          <p className="opacity-80">Workstations</p>
        </div>
        <div>
          <p className="text-xl md:text-2xl font-bold">
            <Counter end={50} />{" "}
          </p>
          <p className="opacity-80">Meeting Rooms</p>
        </div>
        <div>
          <p className="text-xl md:text-2xl font-bold">
            <Counter end={10} />{" "}
          </p>
          <p className="opacity-80">Event Spaces</p>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
