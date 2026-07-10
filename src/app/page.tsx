"use client";

import { PRODUCTS } from "@/data/mockData";
import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import BentoGrid from "@/components/home/BentoGrid";
import BrandShowcase from "@/components/home/BrandShowcase";
import TechSpecsParallax from "@/components/home/TechSpecsParallax";
import EditorialSection from "@/components/home/EditorialSection";
import NewsletterFooter from "@/components/home/NewsletterFooter";

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 5); // We need 5 for the new BentoGrid

  return (
    <>
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <main className="flex-grow pt-[100px]">
        {/* 1. Hero Section (Parallax & Animations) */}
        <HeroSection mainFeature={featuredProducts[0]} />

        {/* 2. Infinite Marquee */}
        <Marquee />

        {/* 3. Expanded Curated Vault Bento Grid */}
        <BentoGrid products={featuredProducts} />

        {/* 4. Brand Universes Crossfade Showcase */}
        <BrandShowcase />

        {/* 5. Technical Anatomy Parallax Section */}
        <TechSpecsParallax />

        {/* 6. Editorial Journal Section */}
        <EditorialSection />
        
        {/* 7. VIP Newsletter Section */}
        <NewsletterFooter />
      </main>
    </>
  );
}
