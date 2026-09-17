"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hero-wrapper relative z-10"
    >
      {/* Small badge */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-medium mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]"
      >
        <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
        <span>Available for new projects</span>
      </motion.div>

      {/* Main Name */}
      <motion.h1 variants={itemVariants} className="hero-name">
        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Shadi Mustafa
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p variants={itemVariants} className="hero-subtitle">
        Full-stack Developer
      </motion.p>

      {/* Intro Bio Card */}
      <motion.div
        variants={itemVariants}
        className="hero-card bg-[#090e29]/70 border border-[#1b2554] p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-2xl shadow-black/50"
      >
        <h2 className="hero-greeting text-lg sm:text-xl font-bold text-white">
          Hello I&apos;m Shadi
        </h2>
        <p className="hero-desc text-slate-300">
          I&apos;m a Full Stack Developer specializing in building modern, responsive websites.
          Focus on writing clean fast code, functional code and deploying and launching
          websites. I handle the entire development process.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4"
        >
          <Link href="#about" className="btn-primary-pill flex items-center gap-2">
            <span>More About me</span>
            <ArrowDown className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
