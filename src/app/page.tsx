"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Branches from "@/components/Branches";
import FlexDescription from "@/components/FlexDescription";
import { Globe } from "@/components/magicui/globe";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import RingImage from "@/components/RingImage";
import SlideText from "@/components/SlideText";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GoogleGeminiEffectDemo } from "@/components/GeminiEffect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Members from "@/components/Members";
import Testimonials from "@/components/Testimonials";
import BookToor from "@/components/BookToor";
import {motion} from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerScrollRef = useRef<HTMLDivElement>(null);

  const postGeminiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerScrollRef.current || !postGeminiRef.current) return;

    const blackTrigger = ScrollTrigger.create({
      trigger: containerScrollRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(document.body, {
          backgroundColor: "#000000",
          duration: 1.2,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(document.body, {
          backgroundColor: "#ffffff",
          duration: 1.2,
          ease: "power2.out",
        });
      },
    });

    const whiteTrigger = ScrollTrigger.create({
      trigger: postGeminiRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(document.body, {
          backgroundColor: "#ffffff",
          duration: 1.2,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(document.body, {
          backgroundColor: "#000000",
          duration: 1.2,
          ease: "power2.out",
        });
      },
    });

    return () => {
      blackTrigger.kill();
      whiteTrigger.kill();
    };
  }, []);



  return (
    <>
      <SlideText word="We do social space" />
     <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full h-screen overflow-hidden mt-2"
    >
      <img
        src="/hero.jpg"
        alt="Hero Image"
        className="w-[99%] mx-auto h-full object-cover rounded-xl shadow-2xl"
      />
    </motion.div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll>Flexible Workspace Solutions |</VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>

      <RingImage />
      <FlexDescription />

      <div className="relative flex w-full min-h-[450px] items-start justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 mt-8">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Pan India Presence
        </span>
        <Globe className="top-38 md:top-18" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>

      <Branches />

      <div ref={containerScrollRef}>
        <ContainerScroll
          titleComponent={
            <div className="text-white text-center space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">
                More Than Just an Office
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Discover workspaces that work for you
              </p>
            </div>
          }
        >
          <div className="w-full h-full">
            <img
              src="/project.jpg"
              alt="Hero Image"
              className="w-full h-full object-cover"
            />
          </div>
        </ContainerScroll>

      </div>
      <GoogleGeminiEffectDemo />


      <div
        ref={postGeminiRef}
        className="mx-auto max-w-6xl px-4 py-20 flex flex-col md:flex-row items-center gap-12"
      >
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            The best way to grow is to{" "}
            <PointerHighlight>
              <span className="text-blue-600">collaborate</span>
            </PointerHighlight>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Looking for <span className="font-semibold">Hot/Dedicated Desks</span>?
          </p>

          <button className="mt-6 inline-block bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Enquire Now
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/desks.jpg"
            alt="Desks Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Members />
      <Testimonials />
      <BookToor />

    </>
  );
}
