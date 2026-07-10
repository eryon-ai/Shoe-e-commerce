"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCartStore } from "@/store/useCartStore";
import { useStore } from "@/hooks/useStore";
import { Reveal } from "@/components/animations/Reveal";

export default function WishlistPage() {
  const items = useStore(useWishlistStore, (state) => state.items) || [];
  const { toggleItem } = useWishlistStore();
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: "US 9",
    });
    alert(`${item.name} added to cart!`);
  };

  return (
    <main className="flex-grow pt-[120px] min-h-screen pb-24">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#00d2ff]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#9d50bb]/5 rounded-full blur-[100px]" />
      </div>

      <section className="px-5 md:px-16 max-w-[1440px] mx-auto mb-12">
        <Reveal delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e1e1e] border border-[#00d2ff]/30 font-mono text-xs font-semibold tracking-widest text-[#00d2ff] mb-6 uppercase">
            Personal vault
          </span>
        </Reveal>
        <Reveal delay={0.1} width="100%">
          <h1 className="font-heading text-[56px] md:text-[80px] text-white font-bold uppercase leading-[1.05] mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#9d50bb]">
              Wishlist
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.2} width="100%">
          <p className="font-sans text-lg text-[#9e9e9e] max-w-xl">
            Saves and tracks rare models. Access your high-net-worth selections below.
          </p>
        </Reveal>
      </section>

      <section className="px-5 md:px-16 max-w-[1440px] mx-auto">
        <AnimatePresence mode="wait">
          {items.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <span className="material-symbols-outlined text-6xl text-[#3c494e] mb-4">favorite</span>
              <p className="font-mono text-sm text-[#9e9e9e] tracking-widest mb-6">WISHLIST IS CURRENTLY EMPTY</p>
              <Link
                href="/collections"
                className="px-6 py-3 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase rounded-lg hover:scale-105 transition-transform"
              >
                Discover Drops
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-panel rounded-2xl overflow-hidden group bg-surface-container/40 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-80 overflow-hidden bg-surface-container-highest">
                    <button
                      onClick={() => toggleItem(item)}
                      className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-surface/80 flex items-center justify-center text-error hover:scale-115 transition-all"
                    >
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                        favorite
                      </span>
                    </button>
                    <Link href={`/product/${item.id}`}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                    </Link>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-1">{item.brand}</p>
                      <h3 className="font-heading text-2xl font-bold text-white mb-2 uppercase truncate">{item.name}</h3>
                      <p className="font-sans text-xs text-[#9e9e9e] uppercase tracking-wider">{item.category}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
                      <span className="font-sans font-bold text-lg text-primary">${item.price}</span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black font-mono text-[10px] font-bold tracking-widest uppercase rounded-lg hover:scale-105 transition-all"
                      >
                        Add To Bag
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
