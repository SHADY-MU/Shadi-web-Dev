"use client";

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top right blue orb */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -right-40 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-blue-600/15 rounded-full blur-[120px]"
      />

      {/* Center left subtle indigo orb */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.2, 1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -left-40 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-indigo-600/10 rounded-full blur-[130px]"
      />

      {/* Bottom right subtle cyan orb */}
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-80 h-80 sm:w-[400px] sm:h-[400px] bg-cyan-600/10 rounded-full blur-[140px]"
      />
    </div>
  );
}
