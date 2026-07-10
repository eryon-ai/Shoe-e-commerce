"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/data/mockData";
import { notFound } from "next/navigation";

export default function LimitedDropPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 59,
    seconds: 24,
  });

  const limitedDrop = PRODUCTS.find(p => p.isLimited);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, "0");

  if (!limitedDrop) return notFound();

  return (
    <div className="bg-background text-on-surface antialiased overflow-x-hidden min-h-screen flex flex-col relative w-full">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0 bg-smoke pointer-events-none"></div>

      <header className="w-full z-[100] relative px-margin-mobile md:px-margin-desktop py-8 flex justify-between items-center max-w-container-max mx-auto">
        <div className="font-display-xl text-title-md tracking-tighter text-on-surface">Vault Elite</div>
        <Link href="/" className="font-label-caps text-label-caps text-primary hover:text-white transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>close</span>
          EXIT DROP
        </Link>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow z-10 relative flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto py-12">
        {/* Drop Title & Countdown */}
        <div className="text-center mb-16">
          <h1 className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-4 uppercase">Project Genesis</h1>
          <h2 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-white mb-8 neon-glow uppercase">{limitedDrop.name}</h2>
          <div className="flex justify-center gap-4 md:gap-8 font-display-xl text-headline-lg md:text-display-xl text-on-surface glitch-text">
            <div className="flex flex-col items-center">
              <span>{pad(timeLeft.days)}</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant mt-2">DAYS</span>
            </div>
            <div className="text-surface-variant">:</div>
            <div className="flex flex-col items-center">
              <span>{pad(timeLeft.hours)}</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant mt-2">HRS</span>
            </div>
            <div className="text-surface-variant">:</div>
            <div className="flex flex-col items-center">
              <span>{pad(timeLeft.minutes)}</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant mt-2">MIN</span>
            </div>
            <div className="text-surface-variant">:</div>
            <div className="flex flex-col items-center text-primary">
              <span>{pad(timeLeft.seconds)}</span>
              <span className="font-label-caps text-label-caps text-primary mt-2">SEC</span>
            </div>
          </div>
        </div>

        {/* 3D Sneaker Showcase (Simulated) & Form Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full mt-8">
          {/* Sneaker Visual */}
          <div className="md:col-span-7 lg:col-span-8 relative min-h-[400px] flex items-center justify-center">
            {/* Abstract glowing pedestal */}
            <div className="absolute bottom-10 w-3/4 h-8 bg-primary-container blur-[40px] rounded-[100%] opacity-30"></div>
            {/* Main Image */}
            <Image
              alt={limitedDrop.name}
              className="relative z-10 w-full max-w-[600px] object-contain hover:scale-105 transition-transform duration-700 filter drop-shadow-2xl"
              src={limitedDrop.image}
              width={600}
              height={600}
              priority
            />
          </div>

          {/* Join Form & Details */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-gutter">
            {/* Raffle Form */}
            <div className="glass-panel rounded-xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="font-title-md text-title-md text-white mb-2">Secure Access</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Enter the Vault Elite raffle for a chance to purchase.</p>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Raffle entered successfully! You will be notified."); }}>
                  <div>
                    <label className="sr-only">Vault ID / Email</label>
                    <input required className="w-full bg-transparent border-0 border-b border-white/20 text-white font-body-md focus:ring-0 focus:border-primary transition-colors py-3 px-0 placeholder:text-on-surface-variant/50 outline-none" placeholder="ENTER VAULT ID" type="email" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="sr-only">Size (US)</label>
                      <select required defaultValue="" className="w-full bg-transparent border-0 border-b border-white/20 text-white font-body-md focus:ring-0 focus:border-primary py-3 px-0 cursor-pointer appearance-none outline-none">
                        <option disabled value="">SIZE (US)</option>
                        {limitedDrop.sizes.map(size => (
                          <option key={size} value={size} className="text-black">{size}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="sr-only">Region</label>
                      <select required defaultValue="" className="w-full bg-transparent border-0 border-b border-white/20 text-white font-body-md focus:ring-0 focus:border-primary py-3 px-0 cursor-pointer appearance-none outline-none">
                        <option disabled value="">REGION</option>
                        <option value="na" className="text-black">N. America</option>
                        <option value="eu" className="text-black">Europe</option>
                        <option value="ap" className="text-black">Asia Pacific</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-black font-label-caps text-label-caps py-4 px-6 rounded-DEFAULT hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-[1.02] transition-all duration-300" type="submit">
                    ENTER RAFFLE
                  </button>
                </form>
              </div>
            </div>

            {/* Drop Details */}
            <div className="glass-panel rounded-xl p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-body-md text-body-md text-on-surface-variant">Retail Price</span>
                <span className="font-title-md text-title-md text-primary">${limitedDrop.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-body-md text-body-md text-on-surface-variant">Global Pairs</span>
                <span className="font-title-md text-title-md text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                  2,500
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-md text-body-md text-on-surface-variant">Authenticity</span>
                <span className="font-title-md text-title-md text-white flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                  Blockchain Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
