"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Calendar, User, Phone } from "lucide-react";

interface NavbarProps {
  onBookTourClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookTourClick }) => {
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
      <div className="mx-auto l flex items-center justify-between px-4 py-3 w-full">
        <div className="flex justify-center items-center space-x-3">
          {/* Left: Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Image
              src="/logo-black.jpg"
              alt="Logo"
              className="h-10 w-auto"
              width={160}
              height={40}
              unoptimized
            />
          </Link>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-black">
            <Link href="/offerings" className="hover:underline">
              Offerings
            </Link>

            {/* Info Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setInfoOpen(true)}
              onMouseLeave={() => setInfoOpen(false)}
              ref={infoRef}
            >
              <span className="hover:underline cursor-pointer">Info</span>

              {infoOpen && (
                <div className="absolute left-0 top-7 mt-2 w-44 bg-black text-white rounded-sm z-20">
                  <div className="absolute top-0 left-1 -translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-black"></div>

                  <div className="grid grid-cols-2 px-4 py-3 space-y-1">
                    <Link href="/news" className="hover:underline">
                      News
                    </Link>
                    <Link href="/awards" className="hover:underline">
                      Awards
                    </Link>
                    <Link href="/team" className="hover:underline">
                      Team
                    </Link>
                    <Link href="/careers" className="hover:underline">
                      Careers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>


        {/* Right: Actions */}
        <div className="flex items-center space-x-6 text-sm font-medium text-black">
          <button onClick={onBookTourClick} className="flex items-center gap-1 hover:underline">
            <Calendar className="w-4 h-4" />
            Book a Tour
          </button>
          <Link href="/account" className="flex items-center gap-1 hover:underline">
            <User className="w-4 h-4" />
            My Account
          </Link>
          <a href="tel:+917022274000" className="flex items-center gap-1 hover:underline">
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;