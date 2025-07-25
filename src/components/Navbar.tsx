"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Calendar, User, Phone, Menu, X } from "lucide-react";

interface NavbarProps {
  onBookTourClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookTourClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
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
    <header className="bg-white text-[#092e46] relative z-50 ">
      <div className=" mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center justify-center space-x-2">
          {/* Left - Logo */}
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
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-black ml-8">
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


        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>



        {/* Right-side Actions */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-black">
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

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t text-black px-4 py-4 space-y-4">
          <Link href="/offerings" className="block hover:underline">
            Offerings
          </Link>

          {/* Info Dropdown in mobile - Click to toggle */}
          <div className="space-y-2">
            <button
              onClick={() => setInfoOpen(!infoOpen)}
              className="block w-full text-left hover:underline"
            >
              Info
            </button>
            {infoOpen && (
              <div className="pl-4 space-y-1 text-sm">
                <Link href="/news" className="block hover:underline">
                  News
                </Link>
                <Link href="/awards" className="block hover:underline">
                  Awards
                </Link>
                <Link href="/team" className="block hover:underline">
                  Team
                </Link>
                <Link href="/careers" className="block hover:underline">
                  Careers
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="block hover:underline">
            Contact
          </Link>
          <button
            onClick={onBookTourClick}
            className="flex items-center gap-1 hover:underline"
          >
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
      )}
    </header>
  );
};

export default Navbar;
