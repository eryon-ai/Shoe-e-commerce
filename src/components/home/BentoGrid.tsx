"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/mockData";

export default function BentoGrid({ products }: { products: Product[] }) {
  const [mainFeature, secFeature1, secFeature2, secFeature3, secFeature4] = products;

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase">Curated Vault</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Exclusive collections defined by form and function.</p>
        </div>
        <Link className="hidden md:flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-primary-fixed transition-colors" href="/collections">
          VIEW ALL ARCHIVES <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-unit auto-rows-[300px]">
        {/* Main Bento Item */}
        <Link href={`/product/${mainFeature.id}`} className="col-span-1 md:col-span-8 row-span-2 relative group overflow-hidden rounded-xl bg-surface-container-high ghost-border cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent z-10"></div>
          <Image
            alt={mainFeature.name}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            src={mainFeature.gallery[0] || mainFeature.image}
            fill
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex justify-between items-end">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-surface/50 backdrop-blur-md border border-white/10 font-label-caps text-[10px] text-secondary mb-3">
                  {mainFeature.category}
                </span>
                <h3 className="font-headline-lg-mobile text-3xl text-on-surface uppercase mb-2">{mainFeature.name}</h3>
                <p className="font-body-md text-sm text-on-surface-variant max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{mainFeature.description}</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-on-surface text-surface flex items-center justify-center hover:scale-110 transition-transform glow-blue-hover">
                <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </div>
          </div>
        </Link>

        {/* Secondary Bento Item 1 */}
        <Link href={`/product/${secFeature1.id}`} className="col-span-1 md:col-span-4 row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-high ghost-border flex items-center justify-center p-8 cursor-pointer">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image
            alt={secFeature1.name}
            className="object-contain drop-shadow-2xl group-hover:-translate-y-4 group-hover:scale-110 transition-transform duration-700"
            src={secFeature1.image}
            width={300}
            height={300}
          />
          <div className="absolute top-4 left-4">
            <h4 className="font-label-caps text-xs text-on-surface uppercase">{secFeature1.name}</h4>
          </div>
          <div className="absolute bottom-4 right-4 text-primary font-body-md text-sm">
            ${secFeature1.price}
          </div>
        </Link>

        {/* Secondary Bento Item 2 */}
        <Link href={`/product/${secFeature2.id}`} className="col-span-1 md:col-span-4 row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-highest ghost-border p-6 flex flex-col justify-between cursor-pointer transition-colors hover:border-primary/50">
          <div>
            {secFeature2.isLimited && (
              <span className="inline-block px-2 py-1 bg-error/10 text-error border border-error/20 font-label-caps text-[10px] rounded mb-4">LIMITED DROP</span>
            )}
            <h3 className="font-title-md text-title-md text-on-surface uppercase mb-2 group-hover:text-primary transition-colors">{secFeature2.name}</h3>
            <p className="font-body-md text-sm text-on-surface-variant line-clamp-2">{secFeature2.description}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="font-title-md text-lg text-primary">${secFeature2.price}</span>
            <span className="text-on-surface group-hover:text-primary transition-colors text-sm uppercase tracking-wider font-semibold border-b border-transparent group-hover:border-primary flex items-center gap-1">
              View Specs <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </Link>

        {/* Additional Grid Expansion - Row 3 */}
        {secFeature3 && (
          <Link href={`/product/${secFeature3.id}`} className="col-span-1 md:col-span-6 row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-high ghost-border cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <Image
              alt={secFeature3.name}
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-luminosity group-hover:mix-blend-normal"
              src={secFeature3.gallery[0] || secFeature3.image}
              fill
            />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="inline-block px-2 py-1 bg-surface-container/50 border border-white/5 font-label-caps text-[10px] text-on-surface mb-2">{secFeature3.brand}</span>
              <h3 className="font-title-md text-title-md text-on-surface uppercase">{secFeature3.name}</h3>
            </div>
          </Link>
        )}
        
        {secFeature4 && (
          <Link href={`/product/${secFeature4.id}`} className="col-span-1 md:col-span-6 row-span-1 relative group overflow-hidden rounded-xl bg-surface-container-high ghost-border cursor-pointer flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <Image
              alt={secFeature4.name}
              className="relative z-10 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
              src={secFeature4.image}
              width={250}
              height={250}
            />
            <div className="absolute bottom-6 right-6 z-20">
              <span className="font-display-sm text-2xl text-on-surface">${secFeature4.price}</span>
            </div>
            <div className="absolute top-6 left-6 z-20 max-w-[200px]">
              <h3 className="font-title-md text-title-md text-on-surface uppercase mb-1">{secFeature4.name}</h3>
              <p className="font-body-md text-xs text-on-surface-variant line-clamp-1">{secFeature4.category}</p>
            </div>
          </Link>
        )}
      </div>

      <Link className="md:hidden mt-8 flex justify-center items-center gap-2 font-label-caps text-label-caps text-primary border border-primary/30 py-4 rounded-lg" href="/collections">
        VIEW ALL ARCHIVES <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </section>
  );
}
