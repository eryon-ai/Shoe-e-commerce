"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRANDS } from "@/data/mockData";

export default function BrandShowcase() {
  const [activeBrand, setActiveBrand] = useState(BRANDS[1].id); // Default to Vault Originals

  const currentBrandData = BRANDS.find(b => b.id === activeBrand);

  return (
    <section className="relative w-full min-h-[800px] flex items-center overflow-hidden py-24 border-y border-white/5 bg-surface">
      {/* Background Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          {currentBrandData && (
            <motion.div
              key={currentBrandData.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${currentBrandData.heroImage})` }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-surface"></div>
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-8 items-center">
        
        {/* Brand Selector List */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="font-label-caps text-label-caps text-primary tracking-widest mb-4">OUR UNIVERSES</h2>
          
          <div className="flex flex-col gap-4 border-l border-white/10 pl-6">
            {BRANDS.map((brand) => (
              <button
                key={brand.id}
                onMouseEnter={() => setActiveBrand(brand.id)}
                onClick={() => setActiveBrand(brand.id)}
                className={`text-left text-5xl md:text-[80px] font-display-xl uppercase tracking-tighter transition-all duration-500 ${
                  activeBrand === brand.id 
                    ? "text-on-surface translate-x-4" 
                    : "text-on-surface-variant/30 hover:text-on-surface-variant"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Brand Content */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <AnimatePresence mode="wait">
            {currentBrandData && (
              <motion.div
                key={currentBrandData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-10 rounded-2xl max-w-md w-full border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="font-label-caps text-label-caps text-primary mb-6">
                  {currentBrandData.tagline}
                </h3>
                
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                  {currentBrandData.description}
                </p>
                
                <Link 
                  href={`/brands/${currentBrandData.id}`}
                  className="inline-flex items-center gap-3 font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors group"
                >
                  ENTER UNIVERSE
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    east
                  </span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
