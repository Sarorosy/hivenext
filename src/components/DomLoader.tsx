"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const words = [
  "Architects.",
  "Graphic Designers.",
  "Interior Designers.",
  "Model Makers.",
  "Project Managers.",
  "Retail Planners.",
];

interface DomLoaderProps {
  onComplete: () => void;
}

const DomLoader: React.FC<DomLoaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const handleLoad = () => {
      interval = setInterval(() => {
        setPercent((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsLoaded(true);
              onComplete();
            }, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [onComplete]);

  // Rotate words every second
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-between text-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="w-full flex items-center justify-between px-4 py-2">
            <div className="h-10 flex items-center">
              <Image src="/logo-black.jpg" alt="Logo" className="h-10 w-auto" width={160} // use the actual image width
                          height={40} // or whatever height fits
                          unoptimized />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-medium mb-8">
                <motion.div
                  className="bg-black text-white px-6 py-4 rounded-sm inline-flex items-center justify-center gap-3 min-h-[80px]"
                  layout
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <span className="whitespace-nowrap">We are</span>
                  <div className="relative inline-block">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={wordIndex}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="block whitespace-nowrap"
                      >
                        {words[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full px-4 pb-2 relative z-10">
            <div className="relative w-full h-[2px] bg-gray-200">
              <motion.div
                className="absolute top-0 left-0 h-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.div
                className="absolute -top-6 text-xs text-gray-700 bg-white px-2 py-1 rounded shadow"
                initial={{ left: "0%" }}
                animate={{ left: `${percent}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ transform: "translateX(-50%)" }}
              >
                Loading {percent}%
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DomLoader;
