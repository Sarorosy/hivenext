"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import styles from "./RingImage.module.css";

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
  const ringRef = useRef<HTMLDivElement | null>(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const rotationRef = useRef<gsap.core.Tween | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // INIT ROTATION
  useEffect(() => {
    if (!galleryRef.current || !ringRef.current) return;

    const ctx = gsap.context(() => {
      const rotation = gsap.to(ringRef.current, {
        rotateY: "+=360",
        duration: 20,
        ease: "linear",
        repeat: -1,
      });

      rotationRef.current = rotation;

      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity());
          const speedFactor = Math.min(Math.max(velocity / 100, 1), 5);
          if (!isDragging && !isHovered) {
            rotation.timeScale(speedFactor);
          }
        },
        onLeave: () => rotation.timeScale(1),
        onEnterBack: () => rotation.timeScale(1),
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  // HANDLE HOVER
  const handleMouseEnter = () => {
    setIsHovered(true);
    rotationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isDragging) rotationRef.current?.play();
  };

  // HANDLE DRAG
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    rotationRef.current?.pause();
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !ringRef.current) return;
    const deltaX = e.clientX - startX;
    const newRotation = currentRotation + deltaX * 0.5; // adjust sensitivity
    ringRef.current.style.transform = `rotateY(${newRotation}deg)`;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || !ringRef.current) return;

    const deltaX = e.clientX - startX;
    const newRotation = currentRotation + deltaX * 0.5;
    setCurrentRotation(newRotation);
    setIsDragging(false);

    // Apply new rotation
    gsap.set(ringRef.current, { rotateY: newRotation });

    // Resume GSAP animation from new angle
    if (!isHovered) {
      rotationRef.current = gsap.to(ringRef.current, {
        rotateY: `+=360`,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 mt-12 md:mt-24 px-4">
      {/* Text Left */}
      <section
        className="flex-1 flex items-center justify-center"
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

      {/* Ring Right */}
      <section
        className="flex-1 flex items-center justify-center min-h-[500px]"
        ref={galleryRef}
      >
        <div
          className={styles.gallery_box}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.gallery_box_outer} ref={ringRef}>
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
