"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { PRODUCTS } from "@/data/mockData";

export default function MarketPage() {
  const addToCart = useCartStore((state) => state.addItem);
  const { hasItem, toggleItem } = useWishlistStore();

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(5000);
  const [sortOption, setSortOption] = useState<string>("Trending");

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setPriceRange(5000);
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    if (selectedSizes.length > 0) {
      result = result.filter((p) => p.sizes.some((size) => selectedSizes.includes(size.replace("US ", ""))));
    }

    result = result.filter((p) => p.price <= priceRange);

    if (sortOption === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Newest Arrivals") {
      result.sort((a, b) => (a.isNewRelease === b.isNewRelease ? 0 : a.isNewRelease ? -1 : 1));
    }

    return result;
  }, [selectedBrands, selectedSizes, priceRange, sortOption]);

  const uniqueBrands = Array.from(new Set(PRODUCTS.map((p) => p.brand)));
  const allSizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13", "14"];

  const handleAddToCart = (e: React.MouseEvent, product: typeof PRODUCTS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: "US 9", // default size for market add
      image: product.image,
    });
    alert(`Added ${product.name} to cart`);
  };

  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at 50% 0%, rgba(0, 210, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(110, 32, 140, 0.1) 0%, transparent 50%)" }}></div>
      <main className="flex-grow pt-[104px] pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
        {/* Breadcrumbs & Header Row */}
        <div className="md:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <nav className="flex items-center gap-2 font-label-caps text-label-caps text-outline mb-2">
              <Link className="hover:text-primary transition-colors" href="/">HOME</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary">MARKET</span>
            </nav>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">MARKETPLACE</h1>
          </div>
          {/* Controls */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-surface-container glass-panel ghost-border text-body-md text-on-surface py-2 pl-4 pr-10 rounded-lg w-full focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer"
              >
                <option>Trending</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
            </div>
          </div>
        </div>

        {/* Sidebar Filters (md:col-span-3) */}
        <aside className="hidden md:block md:col-span-3 space-y-8 pr-4">
          <div className="glass-panel ghost-border rounded-xl p-6">
            <h3 className="font-title-md text-title-md mb-4 flex justify-between items-center cursor-pointer group">
              PRICE RANGE
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">remove</span>
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                <span>$0</span>
                <span>${priceRange}</span>
              </div>
              <div className="relative w-full h-1 bg-surface-container-highest rounded-full">
                <input
                  className="w-full accent-primary"
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          
          <div className="glass-panel ghost-border rounded-xl p-6">
            <h3 className="font-title-md text-title-md mb-4 flex justify-between items-center cursor-pointer group">
              SIZE (US)
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">remove</span>
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {allSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`py-2 border rounded font-label-caps text-label-caps transition-colors
                    ${selectedSizes.includes(size) ? 'border-primary bg-primary/10 text-primary' : 'border-outline-variant hover:border-primary hover:text-primary text-on-surface-variant'}
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel ghost-border rounded-xl p-6">
            <h3 className="font-title-md text-title-md mb-4 flex justify-between items-center cursor-pointer group">
              BRAND
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">remove</span>
            </h3>
            <div className="space-y-3">
              {uniqueBrands.map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group text-outline hover:text-on-surface transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandToggle(brand)}
                    className="form-checkbox bg-surface border-white/15 text-primary rounded focus:ring-primary focus:ring-offset-surface focus:ring-offset-2 w-4 h-4 transition-colors"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid (md:col-span-9) */}
        <section className="col-span-1 md:col-span-9">
          {/* Active Filters Row */}
          {(selectedBrands.length > 0 || selectedSizes.length > 0 || priceRange < 5000) && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-outline text-sm mr-2">Active:</span>
              {selectedSizes.map(size => (
                <span key={size} className="inline-flex items-center gap-1 bg-surface-container-high border border-outline-variant rounded-full px-3 py-1 font-label-caps text-label-caps text-on-surface">
                  Size: {size}
                  <button onClick={() => handleSizeToggle(size)} className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
                </span>
              ))}
              {selectedBrands.map(brand => (
                <span key={brand} className="inline-flex items-center gap-1 bg-surface-container-high border border-outline-variant rounded-full px-3 py-1 font-label-caps text-label-caps text-on-surface">
                  {brand}
                  <button onClick={() => handleBrandToggle(brand)} className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
                </span>
              ))}
              <button onClick={clearFilters} className="text-sm text-primary hover:underline ml-2">Clear All</button>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <article key={product.id} className="glass-panel ghost-border rounded-xl p-4 tilt-card group relative flex flex-col h-full cursor-pointer">
                <div className="absolute top-6 left-6 z-10 flex gap-2">
                  {product.isLimited && (
                    <span className="bg-error-container border border-error text-error px-2 py-1 rounded-full font-label-caps text-label-caps text-[10px]">LIMITED</span>
                  )}
                  {product.isNewRelease && (
                    <span className="bg-surface-dim border border-primary text-primary px-2 py-1 rounded-full font-label-caps text-label-caps text-[10px]">NEW</span>
                  )}
                </div>
                <button onClick={(e) => { e.preventDefault(); toggleItem({ id: product.id, name: product.name, price: product.price, image: product.image, brand: product.brand, category: product.category }); }} className={`absolute top-6 right-6 z-10 transition-colors ${hasItem(product.id) ? 'text-error' : 'text-outline hover:text-error'}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: hasItem(product.id) ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                </button>
                <Link href={`/product/${product.id}`} className="aspect-square bg-surface-container-lowest rounded-lg mb-4 flex items-center justify-center tilt-card-img-container overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img alt={product.name} className="w-4/5 h-4/5 object-contain tilt-card-img z-10 filter drop-shadow-2xl" src={product.image} />
                </Link>
                <div className="flex-grow flex flex-col justify-end">
                  <h4 className="font-title-md text-title-md text-on-surface mb-1">{product.name}</h4>
                  <p className="font-body-md text-body-md text-outline-variant mb-3">{product.colors.join(" / ")}</p>
                  <div className="flex justify-between items-end mt-auto">
                    <span className="font-headline-lg-mobile text-primary tracking-tight">${product.price}</span>
                    <button onClick={(e) => handleAddToCart(e, product)} className="bg-on-surface text-surface px-4 py-2 rounded font-label-caps text-label-caps font-bold hover:bg-white hover:scale-105 neon-glow-hover transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span> ADD
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center flex flex-col items-center">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">search_off</span>
                <p className="font-title-md text-on-surface mb-2">No drops found</p>
                <p className="text-outline">Try adjusting your filters to see more results.</p>
                <button onClick={clearFilters} className="mt-6 text-primary hover:underline">Clear Filters</button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
