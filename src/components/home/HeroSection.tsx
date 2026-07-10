"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Product } from "@/data/mockData";

export default function HeroSection({ mainFeature }: { mainFeature: Product }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[921px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-12 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full relative z-10">
        {/* Text Content */}
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center relative z-20 order-2 md:order-1 mt-12 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high border border-primary/30 font-label-caps text-label-caps text-primary mb-6 glow-blue">
              01 // NEW ARRIVAL
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-display-xl text-[60px] leading-[1.1] md:text-display-xl text-on-surface mb-6 uppercase"
          >
            Reimagined <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">Comfort</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-10"
          >
            Experience hyper-functional aesthetics blending high-tech sportswear with atmospheric luxury. Step into the future.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <Link href="/drops/limited" className="bg-on-surface text-surface font-label-caps text-label-caps px-8 py-4 rounded-DEFAULT hover:scale-[1.02] transition-all duration-300 glow-blue-hover">
              EXPLORE DROP
            </Link>
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps group">
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">play_circle</span>
              WATCH VIDEO
            </button>
          </motion.div>
        </div>

        {/* Floating Sneaker Image */}
        <motion.div 
          style={{ y: y1, opacity }}
          className="col-span-1 md:col-span-6 relative order-1 md:order-2 flex items-center justify-center min-h-[512px] md:min-h-0"
        >
          {/* Decorative background elements */}
          <div className="absolute w-[80%] h-[80%] bg-surface-container rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
          
          <Link href={`/product/${mainFeature.id}`}>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Image
                alt={mainFeature.name}
                className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-12 hover:rotate-0 transition-transform duration-700 ease-out cursor-pointer"
                src={mainFeature.image}
                width={600}
                height={600}
                priority
              />
            </motion.div>
          </Link>
          
          {/* Floating Data Points */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute top-[20%] right-[10%] bg-surface/80 backdrop-blur-md ghost-border p-3 rounded-lg z-20 shadow-xl hidden md:block"
          >
            <p className="font-label-caps text-[10px] text-on-surface-variant">CUSHIONING</p>
            <p className="font-title-md text-sm text-primary uppercase">{mainFeature.techSpecs?.midsole || 'AERO-GEL V2'}</p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-[20%] left-[5%] bg-surface/80 backdrop-blur-md ghost-border p-3 rounded-lg z-20 shadow-xl hidden md:block"
          >
            <p className="font-label-caps text-[10px] text-on-surface-variant">PROPULSION</p>
            <p className="font-title-md text-sm text-primary uppercase">{mainFeature.techSpecs?.propulsion || 'CARBON PLATE'}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
