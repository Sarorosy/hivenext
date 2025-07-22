"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import styles from "./RingImage.module.css"; // CSS module

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/spinner/one.jpg",
  "/spinner/two.jpg",
  "/spinner/three.jpg",
  "/spinner/four.jpg",
  "/spinner/five.jpg",
  "/spinner/six.jpg",
  "/spinner/seven.jpg",
  "/spinner/eight.jpg",
  "/spinner/nine.jpg",
];

const RingImage = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!galleryRef.current) return;

    const ctx = gsap.context(() => {
      const rotation = gsap.to(`.${styles.gallery_box_outer}`, {
        rotateY: 360,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity());
          const speedFactor = Math.min(Math.max(velocity / 100, 1), 5);
          rotation.timeScale(speedFactor);
        },
        onLeave: () => rotation.timeScale(1),
        onEnterBack: () => rotation.timeScale(1),
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-36 relative gap-12 space-y-12 w-full overflow-x-hidden">
      <section
        className="flex items-center justify-center py-12 px-2 relative"
        id="about-hive"
        ref={sectionRef}
      >
        <motion.div
          className="text-center max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl leading-tight cstd">
            The Hive offers premium, managed workspaces designed for startups to
            enterprises, blending flexibility, modern amenities, and a
            community-driven approach. With locations across India, each space
            fosters creativity, productivity, and collaboration. More than just
            offices, The Hive is a vibrant ecosystem built for innovation,
            growth, and the future of work.
          </p>
        </motion.div>
      </section>

      <section className="work2" ref={galleryRef}>
        <div className={styles.gallery_box}>
          <div className={styles.gallery_box_outer}>
            {images.map((src, index) => (
              <div
                key={index}
                className={styles.gallery_box_in}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RingImage;
