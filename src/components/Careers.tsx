"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Briefcase, MapPin, Send, Star, Sparkles, Users, TrendingUp, Clock, Globe } from "lucide-react";
import JobDescriptionModal from "./JobDescriptionModal";
import Image from "next/image";

const jobList = [
    {
        id: 1,
        title: "GM Sales JD – Bangalore",
        location: "Bangalore",
        category: "Sales",
        type: "Full Time",
        description: `The successful candidate will lead regional P&L, asset health, and customer experience. Ideal for self-motivated leaders with 8+ years of sales/leasing experience and consultative sales exposure.`,
        jdLink: "#",
        gradient: "from-indigo-400 to-purple-400",
        icon: TrendingUp
    },
    {
        id: 2,
        title: "Sr. Enterprise Sales Manager Delhi-NCR",
        location: "Delhi-NCR",
        category: "Sales",
        type: "Full Time",
        description: `Drive enterprise sales in Delhi-NCR. Build client relationships and manage key deals. Experience in flexible workspace or commercial leasing is a plus.`,
        jdLink: "#",
        gradient: "from-indigo-400 to-purple-400",
        icon: Users
    },
    {
        id: 3,
        title: "Sr. Enterprise Sales Manager – Chennai",
        location: "Chennai",
        category: "Sales",
        type: "Full Time",
        description: `Lead enterprise sales in Chennai region. Build long-term relationships, collaborate with senior stakeholders, and manage the full sales lifecycle.`,
        jdLink: "#",
        gradient: "from-indigo-400 to-purple-400",
        icon: Star
    },
    {
        id: 4,
        title: "Inside Sales Executive",
        location: "Remote",
        category: "Sales",
        type: "Full Time",
        description: `Generate leads, qualify prospects, and schedule demos. Great opportunity for high-energy individuals with excellent communication skills.`,
        jdLink: "#",
        gradient: "from-indigo-400 to-purple-400",
        icon: Globe
    },
    {
        id: 5,
        title: "Sales Manager – Pune",
        location: "Pune",
        category: "Sales",
        type: "Full Time",
        description: `Manage Pune sales operations. Identify business opportunities, close deals, and build a strong sales team. Prior experience in coworking sales preferred.`,
        jdLink: "#",
        gradient: "from-indigo-400 to-purple-400",
        icon: Briefcase
    },
    {
        id: 6,
        title: "Sales Executive – Bengaluru",
        location: "Bengaluru",
        category: "Sales",
        type: "Full Time",
        description: `Client-facing sales role in Bengaluru. Strong communication and organizational skills required. Knowledge of CRM tools is a plus.`,
        jdLink: "#",
        gradient: "from-indigo-400 to-purple-400",
        icon: Clock
    }
];


const Careers = () => {
    const [open, setOpen] = useState(false);
    const [hoveredJob, setHoveredJob] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 300,
                duration: 0.4, // <-- Add duration
            },
        },
    };

    const transition = {
        duration: 1,
        ease: [0, 0, 1, 1] as const,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-gray-300 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 px-4 py-16 md:px-16 lg:px-32">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={transition}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        <Sparkles className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">We're Hiring</span>
                    </motion.div>

                    <motion.h1
                        className="text-3xl md:text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Careers at
                            <Image
                                src="/logo-black.jpg"
                                alt="Logo"
                                className="h-16 w-auto mt-auto"
                                width={160}
                                height={40}
                                unoptimized
                            />
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Join a transformative real estate platform that's reshaping how India works.
                        Discover roles that match your <span className="font-semibold text-gray-800">skills</span> and fuel your <span className="font-semibold text-gray-800">aspirations</span>.
                    </motion.p>
                </motion.div>

                {/* Jobs Grid */}
                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {jobList.map((job, index) => {
                        const IconComponent = job.icon;
                        return (
                            <motion.div
                                key={job.id}
                                className="group relative"
                                variants={itemVariants}
                                onHoverStart={() => setHoveredJob(job.id)}
                                onHoverEnd={() => setHoveredJob(null)}
                            >
                                <motion.div
                                    className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                                    whileHover={{
                                        y: -8,
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    }}
                                >
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                                    {/* Decorative Corner Element */}
                                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-gray-200/50 to-gray-300/50 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${job.gradient} shadow-lg`}>
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                                        {job.title}
                                                    </h2>
                                                </div>
                                            </div>
                                            <motion.span
                                                className="text-xs font-semibold bg-black text-white px-3 py-1.5 rounded-full shadow-sm"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {job.type}
                                            </motion.span>
                                        </div>

                                        {/* Job Details */}
                                        <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4" />
                                                <span className="font-medium">{job.category}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span className="font-medium">{job.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                                            {job.description}
                                        </p>

                                        {/* CTA Button */}
                                        <motion.button
                                            onClick={() => setOpen(true)}
                                            className="group/btn inline-flex items-center gap-2 text-black font-semibold hover:text-gray-700 transition-colors"
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>View Details</span>
                                            <motion.div
                                                className="p-1 rounded-full bg-black text-white group-hover/btn:bg-gray-800 transition-colors"
                                                whileHover={{ rotate: 45 }}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 shadow-xl">
                            <motion.div
                                className="mb-6"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                                    <Send className="w-8 h-8 text-white" />
                                </div>
                            </motion.div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Don't see the perfect role?
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                We're always looking for exceptional talent. Send us your resume and let's start a conversation.
                            </p>

                            <motion.a
                                href="mailto:careers@thehive.com"
                                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Send Your Resume</span>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Send className="w-5 h-5" />
                                </motion.div>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            {open && <JobDescriptionModal onClose={() => setOpen(false)} />}
        </div>
    );
};

export default Careers;