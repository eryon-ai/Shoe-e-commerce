"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS } from "@/data/mockData";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useState } from "react";

export default function CollectionsPage() {
  const addToCart = useCartStore((state) => state.addItem);
  const cartItems = useCartStore((state) => state.items);
  const { hasItem, toggleItem } = useWishlistStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedBrand && p.brand !== selectedBrand) return false;
    return true;
  });

  const handleAddToCart = (e: React.MouseEvent, product: typeof PRODUCTS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, size: "10.5", image: product.image });
  };

  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative">
        {/* Page Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-on-surface mb-4 uppercase tracking-tighter">The Market</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Explore our curated selection of hyper-limited drops and premium footwear. Innovation meets absolute luxury.
          </p>
        </header>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
          {/* Sidebar / Filters (Sticky) */}
          <aside className="w-full md:w-64 lg:w-80 flex-shrink-0">
            <div className="md:sticky md:top-32 glass-panel rounded-xl p-6 flex flex-col gap-8 neon-glow transition-all duration-300">
              {/* Search Input */}
              <div className="relative group">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md border-b border-white/10 px-4 py-3 focus:outline-none focus:border-secondary-container transition-colors placeholder:text-outline-variant"
                  placeholder="Search Market..."
                  type="text"
                />
                <span
                  className="material-symbols-outlined absolute right-3 top-3 text-outline-variant group-focus-within:text-secondary-container transition-colors"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  search
                </span>
              </div>
              
              {/* Filter Category: Brand */}
              <div>
                <h3 className="font-label-caps text-label-caps text-on-surface mb-4 border-b border-white/5 pb-2">Brand</h3>
                <div className="flex flex-col gap-3 font-body-md text-body-md text-on-surface-variant">
                  {["Vault Originals", "Nike", "Aethra"].map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${selectedBrand === brand ? 'bg-primary/20 border-primary' : 'border-outline-variant group-hover:border-primary'}`}>
                        <div className={`w-3 h-3 bg-primary rounded-sm ${selectedBrand === brand ? 'block' : 'hidden group-hover:block'}`}></div>
                      </div>
                      <input 
                        type="radio" 
                        name="brand" 
                        checked={selectedBrand === brand} 
                        onChange={() => setSelectedBrand(brand === selectedBrand ? null : brand)} 
                        className="hidden" 
                      />
                      <span className={`${selectedBrand === brand ? 'text-on-surface' : 'group-hover:text-on-surface'} transition-colors`}>{brand}</span>
                    </label>
                  ))}
                  <button onClick={() => setSelectedBrand(null)} className="text-sm text-primary hover:underline mt-2 text-left">Clear Brand</button>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Product Grid */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-max">
            {filteredProducts.map((product, i) => (
              <div key={product.id} className={`glass-panel rounded-2xl overflow-hidden group relative flex flex-col ${i === 0 ? 'sm:col-span-2 xl:col-span-2 h-[400px] md:h-[500px]' : 'h-[400px]'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface/20 to-transparent z-10 pointer-events-none"></div>
                
                {product.isLimited && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-surface-container-highest border border-primary text-primary font-label-caps text-[10px] px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
                      Exclusive Drop
                    </span>
                  </div>
                )}
                
                <button onClick={() => toggleItem(product)} className={`absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-high/50 flex items-center justify-center hover:text-error hover:bg-surface-container-high transition-colors backdrop-blur-md ${hasItem(product.id) ? 'text-error' : 'text-outline'}`}>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: hasItem(product.id) ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                </button>
                
                <Link href={`/product/${product.id}`} className={`w-full ${i === 0 ? 'h-full absolute inset-0' : 'h-3/5 p-8 relative mt-8 flex items-center justify-center'}`}>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.05)_0%,transparent_70%)]`}></div>
                  <img
                    alt={product.name}
                    className={`${i === 0 ? 'w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal' : 'max-w-full max-h-full object-contain drop-shadow-2xl group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 z-10'}`}
                    src={product.image}
                  />
                </Link>
                
                <div className={`relative z-20 mt-auto p-6 ${i === 0 ? 'md:p-8 flex justify-between items-end w-full' : 'flex flex-col gap-1'}`}>
                  <div className={i === 0 ? '' : ''}>
                    <p className="font-label-caps text-label-caps text-outline mb-2">{product.brand}</p>
                    <h2 className={`${i === 0 ? 'font-display-xl text-headline-lg-mobile md:text-headline-lg text-white mb-2 tracking-tight' : 'font-title-md text-title-md text-on-surface truncate'} uppercase`}>{product.name}</h2>
                    
                    {i === 0 ? (
                      <p className="font-body-md text-primary-container font-semibold">$ {product.price.toFixed(2)}</p>
                    ) : (
                      <div className="flex justify-between items-center mt-3">
                        <p className="font-body-md text-on-surface-variant">$ {product.price.toFixed(2)}</p>
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="text-primary hover:text-primary-fixed transition-colors text-sm font-semibold uppercase tracking-wider flex items-center gap-1"
                        >
                          Buy <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {i === 0 && (
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300"
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Quick Action (Cart Preview) */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-8 right-8 z-50 glass-panel rounded-full px-6 py-4 flex items-center gap-4 neon-glow cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex -space-x-3">
            <img
              alt="Cart item 1"
              className="w-10 h-10 rounded-full border-2 border-surface object-cover bg-surface-container-high"
              src={cartItems[0].image}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">{cartItems.length} Item{cartItems.length > 1 ? 's' : ''} in Cart</span>
            <span className="font-title-md text-sm text-white font-semibold">$ {totalCartPrice.toFixed(2)}</span>
          </div>
          <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
        </div>
      )}
    </>
  );
}
