"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [infoOpen, setInfoOpen] = useState(false);
  const infoRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
        setInfoOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header className="bg-white text-[#092e46] relative z-50">
      <div className="mx-auto flex items-center justify-start px-2 py-2">
        {/* Logo */}
        <h1
          className="text-2xl font-bold flex items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src="/logo-black.jpg" alt="Logo" className="h-10 w-auto" width={160} // use the actual image width
            height={40} // or whatever height fits
            unoptimized />
        </h1>

        {/* Navbar Items */}
        <nav className="flex items-center space-x-8 text-sm font-medium relative ml-5 text-black">
          <span className="hover:underline cursor-pointer">Projects</span>

          {/* Info Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setInfoOpen(true)}
            onMouseLeave={() => setInfoOpen(false)}
            ref={infoRef}
          >
            <span className="hover:underline cursor-pointer">Info</span>

            {infoOpen && (
              <div className="absolute left-0 top-7 mt-2 w-44 bg-black text-white rounded-sm shadow-lg">
                {/* Triangle */}
                <div className="absolute top-0 left-1 -translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-black z-10"></div>

                <div className="grid grid-cols-2 px-4 py-3 space-y-1 z-10 relative">
                  <span className="hover:underline cursor-pointer">News</span>
                  <span className="hover:underline cursor-pointer">Awards</span>
                  <span className="hover:underline cursor-pointer">Team</span>
                  <span className="hover:underline cursor-pointer">Careers</span>
                </div>
              </div>
            )}
          </div>

          <span className="hover:underline cursor-pointer">Contact</span>
        </nav>
      </div>
    </header>
  );
}
