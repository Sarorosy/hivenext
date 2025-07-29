"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type SlideTextProps = {
  word?: string;
};

const SlideText = ({ word = "Animated Text" }: SlideTextProps) => {
  const maskerRef = useRef<SVGRectElement | null>(null);

  useEffect(() => {
    const masker = maskerRef.current;
    if (!masker) return;

    gsap.set(masker, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    const tl = gsap.timeline();
    tl.to(masker, {
      duration: 1.5,
      scaleX: 1,
      transformOrigin: "left center",
      ease: "power2.inOut",
    }).to(masker, {
      duration: 1.5,
      scaleX: 0,
      transformOrigin: "right center",
      ease: "power2.inOut",
    });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 50"
      className="w-full h-auto max-w-full font-roboto font-bold"
    >
      <defs>
        <clipPath id="theClipPath">
          <rect
            ref={maskerRef}
            x="0"
            y="0"
            width="500"
            height="50"
            fill="#fff"
          />
        </clipPath>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="500" height="50" fill="#fff" />

      {/* Static black text */}
      <text
        textAnchor="middle"
        dominantBaseline="middle"
        x="250"
        y="25"
        fontSize="30"
        fill="black"
      >
        {word}
      </text>

      {/* Red wipe + white text revealed under clip */}
      <g clipPath="url(#theClipPath)">
        <rect x="0" y="0" width="500" height="50" fill="black" />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          x="250"
          y="25"
          fontSize="30"
          fill="white"
        >
          {word}
        </text>
      </g>
    </svg>
  );
};

export default SlideText;
