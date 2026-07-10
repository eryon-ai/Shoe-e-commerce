"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PRODUCTS } from "@/data/mockData";

export default function TechSpecsParallax() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const product = PRODUCTS.find(p => p.id === "aero-glide-vx") || PRODUCTS[0];

  // Parallax values for different elements
  const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const node1Y = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const node2Y = useTransform(scrollYProgress, [0.3, 0.9], [80, -80]);
  const node3Y = useTransform(scrollYProgress, [0.1, 0.7], [30, -30]);

  return (
    <section ref={containerRef} className="relative w-full py-32 overflow-hidden bg-surface">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 text-center mb-16">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase mb-4">Engineering Perfection</h2>
        <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">Deconstruct the anatomy of the {product.name}. Every stitch, plate, and foam cell architected for maximum efficiency.</p>
      </div>

      <div className="relative max-w-5xl mx-auto min-h-[600px] md:min-h-[800px] flex items-center justify-center">
        
        {/* Central Image */}
        <motion.div style={{ y: imageY }} className="relative z-10 w-full px-4">
          <Image 
            src={product.image}
            alt="Technical Blueprint"
            width={1000}
            height={600}
            className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(0,210,255,0.15)] filter brightness-110 contrast-125"
          />
        </motion.div>

        {/* Tech Nodes (Absolute positioned around the shoe) */}
        
        {/* Node 1: Upper */}
        <motion.div 
          style={{ y: node1Y }}
          className="absolute top-[20%] left-[5%] md:left-[15%] z-20 flex items-center gap-4 group"
        >
          <div className="text-right hidden md:block">
            <h4 className="font-title-md text-on-surface">Aero-Weave Upper</h4>
            <p className="font-label-caps text-[10px] text-on-surface-variant max-w-[150px]">Hyper-breathable ballistic mesh construction.</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center bg-surface/50 backdrop-blur-sm relative before:content-[''] before:absolute before:w-[50px] md:before:w-[100px] before:h-[1px] before:bg-primary/50 before:-right-[50px] md:before:-right-[100px] before:top-1/2">
            <span className="w-2 h-2 rounded-full bg-primary glow-blue"></span>
          </div>
          <div className="text-left md:hidden pl-[60px]">
            <h4 className="font-title-md text-on-surface text-sm">Aero-Weave Upper</h4>
          </div>
        </motion.div>

        {/* Node 2: Midsole */}
        <motion.div 
          style={{ y: node2Y }}
          className="absolute bottom-[30%] left-[10%] md:left-[5%] z-20 flex items-center gap-4"
        >
          <div className="text-right hidden md:block">
            <h4 className="font-title-md text-on-surface">Nitro Foam V2</h4>
            <p className="font-label-caps text-[10px] text-on-surface-variant max-w-[150px]">Proprietary foam delivering 85% energy return.</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center bg-surface/50 backdrop-blur-sm relative before:content-[''] before:absolute before:w-[60px] md:before:w-[150px] before:h-[1px] before:bg-secondary/50 before:-right-[60px] md:before:-right-[150px] before:top-1/2">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(110,32,140,0.8)]"></span>
          </div>
          <div className="text-left md:hidden pl-[70px]">
             <h4 className="font-title-md text-on-surface text-sm">Nitro Foam V2</h4>
          </div>
        </motion.div>

        {/* Node 3: Propulsion Plate */}
        <motion.div 
          style={{ y: node3Y }}
          className="absolute top-[45%] right-[5%] md:right-[10%] z-20 flex flex-row-reverse items-center gap-4"
        >
          <div className="text-left hidden md:block">
            <h4 className="font-title-md text-on-surface">Carbon Propulsion</h4>
            <p className="font-label-caps text-[10px] text-on-surface-variant max-w-[150px]">Full-length rigid plate for explosive toe-off.</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center bg-surface/50 backdrop-blur-sm relative before:content-[''] before:absolute before:w-[60px] md:before:w-[120px] before:h-[1px] before:bg-primary/50 before:-left-[60px] md:before:-left-[120px] before:top-1/2">
            <span className="w-2 h-2 rounded-full bg-primary glow-blue"></span>
          </div>
          <div className="text-right md:hidden pr-[70px]">
             <h4 className="font-title-md text-on-surface text-sm">Carbon Plate</h4>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
