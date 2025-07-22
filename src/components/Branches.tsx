"use client";
import { MoveUpRight } from "lucide-react";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { BackgroundBeams } from "../components/magicui/background-beams";
import { TextReveal } from "@/components/magicui/text-reveal";
import { BoxReveal } from "@/components/magicui/box-reveal";

const images = [
  {
    id: 1,
    src: "/branches/Bangalore.jpg",
    alt: "The Hive at Whitefield, Bangalore",
  },
  {
    id: 2,
    src: "/branches/Chennai.jpg",
    alt: "The Hive at Anna Nagar, Chennai",
  },
  {
    id: 3,
    src: "/branches/omr.jpg",
    alt: "The Hive at OMR, Chennai",
  },
  {
    id: 4,
    src: "/branches/hyderabad.jpeg",
    alt: "The Hive at Gachibowli, Hyderabad",
  },
  {
    id: 5,
    src: "/branches/Pune.jpg",
    alt: "The Hive at Mills, Pune",
  },
  {
    id: 6,
    src: "/branches/guindy.jpeg",
    alt: "The Hive at SKCL Guindy, Chennai",
  },
  {
    id: 7,
    src: "/branches/bangalore2.jpeg",
    alt: "The Hive at PTP, Bengaluru",
  },
];

const Branches = () => {
  type ImageType = {
  id: number;
  src: string;
  alt: string;
};

  const [isDesktop, setIsDesktop] = useState(true);
  const [activeImage, setActiveImage] = useState<ImageType | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestRef = useRef<number | null>(null);

  const prevCursorPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = useCallback((e : MouseEvent) => {
    const { clientX, clientY } = e;
    const dx = clientX - prevCursorPosition.current.x;
    const dy = clientY - prevCursorPosition.current.y;
    const easeAmount = 0.2;
    const newX = prevCursorPosition.current.x + dx * easeAmount;
    const newY = prevCursorPosition.current.y + dy * easeAmount;
    setCursorPosition({ x: newX, y: newY });
    prevCursorPosition.current = { x: newX, y: newY };
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e :MouseEvent) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(e);
        requestRef.current = null;
      });
    };
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [handleMouseMove]);

  const handleImageHover = useCallback(
    (image : ImageType) => {
      if (activeImage !== image) {
        setActiveImage(image);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 50);
      } else {
        setOpacity(1);
        setScale(1);
      }
    },
    [activeImage]
  );

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setScale(0.5);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveImage(null);
    }, 300);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-20 ">

      <div
        className="relative w-full max-w-6xl mx-auto z-10 bg-white p-6 rounded-lg border border-gray-200 shadow-md"
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-center py-2 px-4">
          <TextReveal>Explore Our Locations</TextReveal>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mt-2">
            The Hive has five flagship centers in four gateway cities, each of
            which boasts of a vibrant environment and a host of amenities to
            ensure that you and your team have a seamless office experience.
          </p>
        </div>

        {images.map((image) => (
          <BoxReveal key={image.id} boxColor="#000000ff" duration={0.4}>
            <div
              className="group px-4 py-3 cursor-pointer relative sm:flex items-center justify-between hover:bg-gray-100 transition-all duration-300 rounded-md"
              onMouseEnter={() => handleImageHover(image)}
            >
              {!isDesktop && (
                <img
                  src={image?.src}
                  className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
                  alt={image.alt}
                />
              )}
              <h2
                className={`uppercase md:text-3xl text-lg font-semibold leading-tight py-1 sm:py-2 transition-all ${
                  activeImage?.id === image.id
                    ? "text-black"
                    : "text-gray-700"
                }`}
              >
                {image.alt}
              </h2>
              <button
                className={`sm:block hidden p-3 rounded-full transition-all duration-300 ease-out ${
                  activeImage?.id === image?.id
                    ? "bg-black text-white"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
              >
                <MoveUpRight className="w-6 h-6" />
              </button>
              <div
                className={`h-[2px] bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
                  activeImage?.id === image?.id ? "w-full" : "w-0"
                }`}
              />
            </div>
          </BoxReveal>
        ))}

        {isDesktop && activeImage && (
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="fixed object-cover pointer-events-none z-20 w-[300px] h-[400px] rounded-xl shadow-lg border border-gray-200"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Branches;
