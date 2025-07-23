"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { PropsWithChildren, HTMLAttributes } from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { BorderBeam } from "./magicui/border-beam";


gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Integrated Ecosystem",
    desc:
      "Strategically located near lifestyle hubs and amenities. Work-Play-Grow effortlessly with best-in-class service and app-driven convenience."
  },
  {
    title: "Ease & Flexibility",
    desc:
      "Effortlessly scale your workspace up or down. Grow with us across locations, enjoying fully customizable, flexible terms."
  },
  {
    title: "Bustling Community",
    desc:
      "Join a vibrant mix of enterprises and startups. Connect, network, and spark new synergies at our dynamic event spaces."
  }
];

function Button({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className="mt-10 px-6 py-3 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer "
    >
      <SparklesText>
        {children}
      </SparklesText>
    </button>
  );
}

function Card({
  children,
  className = "",
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>> & { className?: string }) {
  return (
    <div
      {...props}
      className={`feature-card p-6 rounded-lg shadow-md bg-white dark:bg-neutral-900 ${className}`}
    >
      {children}
    </div>
  );
}

export default function FlexDescription() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%"
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="flex flex-col gap-8 md:gap-12 py-16 items-center relative h-[500px]">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Why Choose The Hive?
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {features.map((f, i) => (
          <BoxReveal
            key={f.title}
            boxColor={"#000000ff"} duration={i == 0 ? 0.5 : i == 1 ? 0.7 : 0.9}>
            <Card

              className="feature-card p-6 rounded-xl shadow-lg bg-white/90 dark:bg-zinc-900/90 relative"
            >
              <BorderBeam duration={8} size={100} />
              <motion.h3
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="font-semibold text-xl mb-2"
              >
                {f.title}
              </motion.h3>
              <p className="text-zinc-600 dark:text-zinc-200">{f.desc}</p>
            </Card>
          </BoxReveal>
        ))}
      </div>
      <Button className="mt-10" onClick={() => {
        window.location.href = "#contactForm";
      }}>

        Explore Memberships</Button>
    </section>
  );
}
