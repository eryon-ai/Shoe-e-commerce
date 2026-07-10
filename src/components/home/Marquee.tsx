"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const mantras = [
    "ARCHITECTED FOR THE 1%",
    "INNOVATION MEETS LUXURY",
    "THE FUTURE OF FOOTWEAR",
    "NO COMPROMISES",
    "VAULT ELITE EXCLUSIVE",
  ];

  return (
    <section className="w-full overflow-hidden border-y border-white/5 py-4 bg-surface-container-highest/20 backdrop-blur-sm">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 font-label-caps text-label-caps tracking-widest text-on-surface-variant/50"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* Render twice for seamless loop */}
          {[...mantras, ...mantras, ...mantras, ...mantras].map((text, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>{text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
