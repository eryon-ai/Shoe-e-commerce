"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { PRODUCTS } from "@/data/mockData";

const CATEGORY_META: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    overlayLeftTitle: string;
    overlayLeftVal: string;
    overlayRightTitle: string;
    overlayRightVal: string;
    filters: { groupTitle: string; options: string[] }[];
  }
> = {
  running: {
    title: "DEFY GRAVITY. SHATTER LIMITS.",
    tagline: "ENGINEERED FOR SPEED",
    description: "The pinnacle of running technology. Carbon-infused plates, hyper-responsive foam, and atmospheric design for the elite athlete.",
    heroImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80",
    overlayLeftTitle: "CUSHIONING METRIC",
    overlayLeftVal: "NITRO-FOAM V2",
    overlayRightTitle: "PROPULSION",
    overlayRightVal: "CARBON PLATE",
    filters: [
      { groupTitle: "PROPULSION TECH", options: ["Carbon Plate", "Nylon Plate"] },
      { groupTitle: "MIDSOLE COMPOUND", options: ["Nitro Foam", "ZoomX Equivalent"] },
    ],
  },
  lifestyle: {
    title: "EVERYDAY COMFORT. STREET AESTHETIC.",
    tagline: "COMMUNITY ARCHIVE",
    description: "Electric aesthetics fused with everyday comfort. Premium materials crafted for those who demand more than ordinary.",
    heroImage: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=1600&q=80",
    overlayLeftTitle: "WEIGHT CLASS",
    overlayLeftVal: "LIGHTWEIGHT ELITE",
    overlayRightTitle: "MATERIALS",
    overlayRightVal: "PRIMEKNIT WEAVE",
    filters: [
      { groupTitle: "UPPER MATERIAL", options: ["Primeknit", "Full-Grain Leather"] },
      { groupTitle: "ERGONOMICS", options: ["Ortholite Sockliner", "Sock-like Fit"] },
    ],
  },
  basketball: {
    title: "DOMINATE THE COURTS. RULE THE STREETS.",
    tagline: "HIGH IMPACT SHIELD",
    description: "Engineered for maximum lateral stability, shock absorption, and explosive vertical energy return.",
    heroImage: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=1600&q=80",
    overlayLeftTitle: "SUPPORT ARCH",
    overlayLeftVal: "TPU HEEL CLIP",
    overlayRightTitle: "TRACTION MATRIX",
    overlayRightVal: "HERRINGBONE GRIP",
    filters: [
      { groupTitle: "ANKLE SUPPORT", options: ["High-Top Collar", "Mid-Cut Support"] },
      { groupTitle: "LOCKDOWN", options: ["Dynamic Fit Straps", "Secure Eyelet Cage"] },
    ],
  },
};

export default function CategoryCollectionPage() {
  const { category } = useParams();
  const categoryKey = typeof category === "string" ? category.toLowerCase() : "running";
  const meta = CATEGORY_META[categoryKey] || CATEGORY_META.running;

  const addToCart = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const isInWishlist = useWishlistStore((state) => state.hasItem);

  const [selectedTechSpecs, setSelectedTechSpecs] = useState<string[]>([]);

  const handleTechSpecToggle = (opt: string) => {
    setSelectedTechSpecs(prev => 
      prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
    );
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (p.category.toLowerCase() !== categoryKey) return false;
    if (selectedTechSpecs.length > 0) {
      if (!p.techSpecs) return false;
      const specs = Object.values(p.techSpecs);
      const hasMatch = selectedTechSpecs.some(spec => specs.includes(spec));
      if (!hasMatch) return false;
    }
    return true;
  });

  return (
    <main className="pt-20 md:pt-0 bg-background text-on-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[819px] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={meta.heroImage}
            alt={categoryKey}
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-surface/10 to-surface z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-5 md:px-16 h-full flex flex-col justify-center items-start md:items-center text-left md:text-center">
          <div className="glass-panel px-6 py-2 rounded-full mb-6 inline-flex items-center gap-2 neon-glow border border-primary/20 bg-white/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
              {meta.tagline}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-7xl text-white mb-6 max-w-4xl tracking-tighter uppercase">
            {meta.title}
          </h1>
          <p className="font-sans text-lg text-[#bbc9cf] max-w-2xl mb-10 leading-relaxed">
            {meta.description}
          </p>
        </div>

        {/* Tech Overlays */}
        <div className="absolute bottom-10 left-10 z-20 glass-panel p-4 rounded-xl hidden md:block bg-surface-container/80 border border-white/10">
          <div className="font-mono text-[9px] text-[#bbc9cf] mb-1 font-bold">{meta.overlayLeftTitle}</div>
          <div className="font-heading text-lg font-bold text-primary">{meta.overlayLeftVal}</div>
        </div>
        <div className="absolute top-1/4 right-10 z-20 glass-panel p-4 rounded-xl hidden md:block bg-surface-container/80 border border-white/10">
          <div className="font-mono text-[9px] text-[#bbc9cf] mb-1 font-bold">{meta.overlayRightTitle}</div>
          <div className="font-heading text-lg font-bold text-secondary">{meta.overlayRightVal}</div>
        </div>
      </section>

      {/* Grid Content with Filter Sidebar */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-20 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0 mb-10 md:mb-0">
          <div className="sticky top-28 bg-[#121212]/70 backdrop-blur-2xl rounded-xl p-6 border border-white/10">
            <h3 className="font-heading text-lg font-bold text-white border-b border-white/10 pb-4 mb-6 uppercase">
              Tech Specs
            </h3>
            <div className="space-y-6">
              {meta.filters.map((group) => (
                <div key={group.groupTitle}>
                  <h4 className="font-mono text-[9px] font-bold text-primary mb-3">{group.groupTitle}</h4>
                  <div className="space-y-2 font-sans text-sm text-[#bbc9cf]">
                    {group.options.map((opt) => (
                      <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedTechSpecs.includes(opt)}
                          onChange={() => handleTechSpecToggle(opt)}
                          className="form-checkbox bg-surface border-white/15 text-primary rounded focus:ring-primary focus:ring-offset-surface focus:ring-offset-2 w-4 h-4 transition-colors"
                        />
                        <span className="group-hover:text-white transition-colors">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="glass-panel rounded-xl overflow-hidden group bg-surface-container/40 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden bg-surface-container-highest">
                <button
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-surface/80 flex items-center justify-center text-on-surface-variant hover:text-error transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-lg"
                    style={{ fontVariationSettings: `'FILL' ${isInWishlist(product.id) ? 1 : 0}` }}
                  >
                    favorite
                  </span>
                </button>
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </Link>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2 uppercase">{product.name}</h3>
                  <p className="font-sans text-sm text-[#bbc9cf] line-clamp-2">{product.description}</p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                  <span className="font-sans font-bold text-lg text-primary">${product.price}</span>
                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        size: "US 9",
                      })
                    }
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-transparent transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center flex flex-col items-center opacity-60">
              <span className="material-symbols-outlined text-4xl mb-4">search_off</span>
              <p>No products match your selected tech specs.</p>
              <button onClick={() => setSelectedTechSpecs([])} className="mt-4 text-primary hover:underline">Clear Filters</button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
