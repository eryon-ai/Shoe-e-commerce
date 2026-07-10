import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-margin-mobile md:px-margin-desktop relative min-h-screen">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-50"></div>
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* 404 Graphic */}
        <div className="relative mb-8 group cursor-default">
          <h1 className="text-[120px] md:text-[200px] font-display-xl font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-surface-variant glow-text select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-primary/50 group-hover:bg-primary transition-colors duration-500 shadow-[0_0_15px_rgba(165,231,255,0.5)]"></div>
        </div>
        {/* Content */}
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
          Lost in the Vault?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">
          The drop you&apos;re looking for has vanished into the ether. It may have been relocated, sold out, or never existed at all.
        </p>
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link href="/" className="bg-white text-black font-label-caps text-label-caps px-8 py-4 rounded hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 uppercase">
            Back to Homepage
          </Link>
          <Link href="/market" className="bg-transparent border border-white/20 text-on-surface font-label-caps text-label-caps px-8 py-4 rounded hover:bg-white/5 hover:border-white/40 transition-all duration-300 w-full sm:w-auto text-center uppercase">
            Browse Drops
          </Link>
        </div>
      </div>

      {/* Recommended Carousel */}
      <div className="mt-32 w-full max-w-container-max relative z-10">
        <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
          <h3 className="font-title-md text-title-md text-on-surface">Recommended for You</h3>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5 text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5 text-on-surface">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="glass-panel ghost-border rounded-lg p-4 group cursor-pointer hover:bg-surface-container-high transition-colors duration-500 flex flex-col">
            <div className="relative aspect-square bg-surface-container-low rounded mb-4 overflow-hidden">
              <img alt="Sneaker 1" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKUhXAbnbEJLWJl063NFUnTaw227mBON7Ep2GH54XR9eM-7Q7Oruo12jPAetV3XGNz0J-Dso40r5bSVq6LB_8IoaGj9MwxOtZF0vJ1Of_QlJVvdW9n2SbmzPIHmAulouOHfBxTv_a5cSQMWTozAPFtn1J3LpSJxFV9hFTnKVDeoeSnO6_-qBCqNkm2cfrIhdjorsSXKHhayye-FPARx7RL-hVap_YHDmkA8v5mq00A4fLAWai5Lv-DjaiLqfwaivWdupGlTG6Kkz4" />
              <div className="absolute top-3 left-3 bg-surface/80 border border-primary/50 text-primary font-label-caps text-[10px] px-2 py-1 rounded-full backdrop-blur-md uppercase tracking-wider">
                In Stock
              </div>
            </div>
            <div className="flex justify-between items-start mt-auto">
              <div>
                <h4 className="font-title-md text-[16px] leading-tight text-on-surface mb-1">Aero Glide vX</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Phantom Black</p>
              </div>
              <span className="font-label-caps text-primary">$350</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="glass-panel ghost-border rounded-lg p-4 group cursor-pointer hover:bg-surface-container-high transition-colors duration-500 flex flex-col hidden md:flex">
            <div className="relative aspect-square bg-surface-container-low rounded mb-4 overflow-hidden">
              <img alt="Sneaker 2" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_1tO4rtH4cAV6xl0XgD6yep5TgG2HiS0jRUm1J0ALchvCxqJKkrOwSPjzZpJwFzeR6Fti-vsDMMcoS8IMWEHgXRaZ5tLYKoPilf1uhZRq07GAvqBxqQUQQ7urpfTnKfQUnWwpbHqxs3WNRv28ItcbxEansLlV6fTbb8zZ-XCm2Cekhq2-fRJibdMqIsyH9louEUA9JW6tu_iKT72LI8OCNhSzdVcBWsjOdtUDT0sGGcfvdduRu7skvJ7bZGLKFoKvEFQHGmPYPo0" />
              <div className="absolute top-3 left-3 bg-surface/80 border border-secondary/50 text-secondary font-label-caps text-[10px] px-2 py-1 rounded-full backdrop-blur-md uppercase tracking-wider">
                Limited
              </div>
            </div>
            <div className="flex justify-between items-start mt-auto">
              <div>
                <h4 className="font-title-md text-[16px] leading-tight text-on-surface mb-1">Nexus High</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Ultraviolet</p>
              </div>
              <span className="font-label-caps text-primary">$420</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="glass-panel ghost-border rounded-lg p-4 group cursor-pointer hover:bg-surface-container-high transition-colors duration-500 flex flex-col hidden md:flex">
            <div className="relative aspect-square bg-surface-container-low rounded mb-4 overflow-hidden">
              <img alt="Sneaker 3" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm0TkBFPTzstNaLC_fBVvEPxzOrvsOMBG54LouahMzLsmDnM3sUqRzmVtO2C9k66XlK62F68E3wsuOzsoWSa2RVgTQN2sBn6bHb0DuCgcLsZIAZDK1QQhHUS0LhOshKBYCArbkmJT9LjuFCd1lKUdVuMxasbaQIj4enkpallqPKAZdEiw9hPt-KqYywFCQcePE4cR0q409_uHbhrxX1zkEoO-zxzi2MHAZbT0l_wxb96-FhTk25lTD7Q2E1zI6QRR5icxy6vZzVOA" />
            </div>
            <div className="flex justify-between items-start mt-auto">
              <div>
                <h4 className="font-title-md text-[16px] leading-tight text-on-surface mb-1">Strata Runner</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Concrete Gray</p>
              </div>
              <span className="font-label-caps text-primary">$280</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
