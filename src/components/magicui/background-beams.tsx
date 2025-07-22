"use client";

import * as React from "react";
import { cn } from "../../lib/utils"; // Replace with your classNames utility or just remove it

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className
      )}
    >
      <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 animate-background-beam bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-3xl [animation-duration:10s]" />
    </div>
  );
}
