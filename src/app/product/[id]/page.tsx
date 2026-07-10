"use client";

import Link from "next/link";
import { useEffect, useState, use } from "react";
import { notFound } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS } from "@/data/mockData";
import { useWishlistStore } from "@/store/useWishlistStore";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    notFound();
  }

  const addToCart = useCartStore((state) => state.addItem);
  const { hasItem, toggleItem } = useWishlistStore();

  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes[0] || null);
  const [selectedColor, setSelectedColor] = useState<string | null>(product.colors[0] || null);
  const [mainImage, setMainImage] = useState<string>(product.image);
  
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('is-visible');
        }
      }
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image
    });
    alert(`Added ${product.name} to vault!`);
  };

  return (
    <main className="pt-[100px] md:pt-[120px] pb-20 overflow-x-hidden">
      {/* Product Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
        {/* Gallery (Left Column) */}
        <div className="lg:col-span-7 flex flex-col space-y-unit relative z-10">
          <div className="gradient-mesh rounded-xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] relative group glass-panel flex items-center justify-center">
            <button onClick={() => toggleItem(product)} className={`absolute top-6 right-6 z-20 transition-colors ${hasItem(product.id) ? 'text-error' : 'text-outline hover:text-error'}`}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: hasItem(product.id) ? "'FILL' 1" : "'FILL' 0", fontSize: '32px' }}>favorite</span>
            </button>
            <img
              alt={product.name}
              className="w-[80%] h-auto object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              src={mainImage}
            />
          </div>
          {/* Thumbnails */}
          {product.gallery.length > 0 && (
            <div className="flex space-x-unit overflow-x-auto no-scrollbar py-2">
              {[product.image, ...product.gallery].filter((v,i,a) => a.indexOf(v) === i).map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setMainImage(img)}
                  className={`w-24 h-24 flex-shrink-0 glass-panel rounded-lg cursor-pointer transition-opacity relative overflow-hidden flex items-center justify-center ${mainImage === img ? 'border border-primary/50' : 'opacity-50 hover:opacity-100'}`}
                >
                  <img alt={`Thumbnail ${idx}`} className="w-[80%] h-auto object-contain" src={img} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details (Right Column - Sticky) */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="sticky top-[120px] glass-panel rounded-xl p-8 lg:p-10 flex flex-col h-fit z-20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            {/* Badges */}
            <div className="flex items-center space-x-3 mb-6">
              {product.isLimited && (
                <span className="px-3 py-1 rounded-full bg-surface-container border border-primary text-primary font-label-caps text-label-caps">LIMITED EDITION</span>
              )}
              {product.isNewRelease && (
                <span className="px-3 py-1 rounded-full bg-surface-container border border-outline/30 text-on-surface-variant font-label-caps text-label-caps">NEW RELEASE</span>
              )}
            </div>

            <h1 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 uppercase">{product.name}</h1>
            <p className="font-body-md text-title-md text-on-surface-variant mb-6 uppercase">{product.brand}</p>

            <div className="flex items-end mb-8">
              <span className="font-display-xl text-headline-lg text-primary">${product.price}</span>
              <span className="font-body-md text-body-md text-on-surface-variant ml-2 mb-2">USD</span>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-8">
                <p className="font-label-caps text-label-caps text-on-surface mb-4">SELECT COLORWAY: <span className="text-primary ml-2">{selectedColor}</span></p>
                <div className="flex space-x-4">
                  {product.colors.map((color) => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                      className={`w-10 h-10 rounded-full transition-all border-2 ${selectedColor === color ? 'border-primary ring-2 ring-primary/20 bg-primary/20' : 'border-transparent bg-surface-container-high hover:border-white/50'}`}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <p className="font-label-caps text-label-caps text-on-surface">SELECT SIZE</p>
                <Link className="font-label-caps text-label-caps text-outline hover:text-primary transition-colors" href="#">SIZE GUIDE</Link>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 glass-panel rounded-lg font-body-md text-body-md transition-all ${selectedSize === size ? 'border-primary text-primary' : 'text-on-surface hover:border-primary hover:text-primary'}`}
                  >
                    {size.replace("US ", "")}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-4">
              <button onClick={handleAddToCart} className="w-full py-4 bg-white text-black font-label-caps text-label-caps rounded-lg hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300 flex items-center justify-center space-x-2">
                <span>ADD TO VAULT</span>
                <span className="material-symbols-outlined text-[20px]">lock</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs / Editorial Content */}
      {product.techSpecs && (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-32 reveal-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-5 flex flex-col justify-center">
              <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                PRECISION<br/><span className="text-primary">ENGINEERED</span>
              </h2>
              <div className="space-y-6">
                {Object.entries(product.techSpecs).map(([key, value]) => (
                  <div key={key} className="border-l-2 border-primary/30 pl-4 py-2 hover:border-primary transition-colors">
                    <h3 className="font-title-md text-title-md text-on-surface mb-2 uppercase">{key}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant uppercase">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-7 mt-12 md:mt-0 relative h-[400px] md:h-auto glass-panel rounded-xl overflow-hidden flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface/80 to-transparent z-10 pointer-events-none"></div>
              <img
                alt="Tech Overlay"
                className="w-full h-full object-cover absolute inset-0 opacity-60 mix-blend-luminosity"
                src={product.image}
              />
              <div className="relative z-20 border border-primary/30 w-full h-full rounded-lg p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-label-caps text-primary">SCAN DETECTED</span>
                  <span className="material-symbols-outlined text-primary text-[20px]">radar</span>
                </div>
                <div className="flex justify-end">
                  <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">SYS.OP.409</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
