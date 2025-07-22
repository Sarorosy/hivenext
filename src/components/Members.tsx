import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

const Members = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Generate array of sponsor images (1.png to 11.png)
    const sponsors = Array.from({ length: 11 }, (_, i) => ({
        id: i + 1,
        src: `/sponsors/${i + 1}.png`,
        alt: `Sponsor ${i + 1}`
    }));

    // Duplicate sponsors array for seamless infinite scroll
    const duplicatedSponsors = [...sponsors, ...sponsors];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden relative cstd">
            <InteractiveGridPattern
                    className={cn(
                      "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                      "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                  />
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: isVisible ? 1 : 0.9 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6"
                    >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Trusted Partners
                        </span>
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
                        Our Members
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        Trusted by some of the most respected industry leaders and organizations,
                        the Hive has immense pride in the illustrious members of its community.
                    </p>
                </motion.div>

                {/* Infinite Scroll Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative"
                >
                    {/* Enhanced gradient overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

                    {/* Main scrolling container - First Row */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-8 items-center"
                            animate={{
                                x: [0, -140 * sponsors.length]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedSponsors.map((sponsor, index) => (
                                <motion.div
                                    key={`${sponsor.id}-${index}`}
                                    className="flex-shrink-0 group cursor-pointer"
                                    whileHover={{ y: -8 }} // removed card scale
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div className="w-64 h-40 md:w-80 md:h-48  transition-all duration-500 p-4 flex items-center justify-center border border-white/50 relative overflow-hidden group-hover:border-blue-200/50">
                                        {/* Hover gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Image wrapper for zoom effect */}
                                        <div className="w-full h-full overflow-hidden flex items-center justify-center">
                                            <img
                                                src={sponsor.src}
                                                alt={sponsor.alt}
                                                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 "
                                                
                                            />
                                        </div>

                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out" />
                                    </div>
                                </motion.div>
                            ))}

                        </motion.div>
                    </div>

                    {/* Second row - reverse direction with different styling */}
                    <div className="flex overflow-hidden mt-12">
                        <motion.div
                            className="flex gap-8 items-center"
                            animate={{
                                x: [-140 * sponsors.length, 0]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 45,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedSponsors.map((sponsor, index) => (
                                <motion.div
                                    key={`${sponsor.id}-${index}`}
                                    className="flex-shrink-0 group cursor-pointer"
                                    whileHover={{ y: -8 }} // removed card scale
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div className="w-64 h-40 md:w-80 md:h-48  transition-all duration-500 p-4 flex items-center justify-center border border-white/50 relative overflow-hidden group-hover:border-blue-200/50">
                                        {/* Hover gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Image wrapper for zoom effect */}
                                        <div className="w-full h-full overflow-hidden flex items-center justify-center">
                                            <img
                                                src={sponsor.src}
                                                alt={sponsor.alt}
                                                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 "
                                                
                                            />
                                        </div>

                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out" />
                                    </div>
                                </motion.div>
                            ))}

                        </motion.div>
                    </div>
                </motion.div>

                {/* Enhanced bottom decorative elements */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm rounded-full shadow-lg border border-white/50 cursor-pointer"
                    >
                        <div className="relative">
                            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
                            <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-20" />
                        </div>
                        <span className="text-gray-700 font-semibold tracking-wide">Growing Community</span>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="text-gray-400"
                        >
                            ✨
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Members;