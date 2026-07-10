"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="antialiased font-body-md text-body-md selection:bg-primary/30 selection:text-primary">
      <div className="mesh-bg"></div>
      {/* Navigation Suppressed: Content focused 'About Us' page */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Hero Background" className="w-full h-full object-cover opacity-30 object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSSgbn8s-lt3gb_acmq04HIq1FXCcAbsy2m7DQpnxqoke3Ts7A6jQnVbBWJtbWUIBnKPqekxjKQwyklRD57DVYh1mXTpdC1fptBpxgg_zbYU_I_OfAGvbyol7TPYd8J5zBxR2Dl-fq0gx1QrE3E7kTTyIctVN2YJsdR3qUnM-lYkJZmCn6FIYAZ-WDv-PtZA7fYbqRUKoYIZ5mgF_T5wFYNVBk2rv9rewXFe-53JvTv17pvlCB31idW0Aknc4lr6PVm6VXOe4RB6A" />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/10 via-surface/50 to-background"></div>
          </div>
          <div className="relative z-10 max-w-[800px] text-center flex flex-col items-center reveal active">
            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-on-surface mb-6 text-glow">ARCHITECTED FOR THE 1%</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px] mb-10">
              Vault Elite was forged at the intersection of high-tech innovation and exclusive drop culture. We don&apos;t just curate footwear; we engineer an ecosystem for the most discerning collectors in the world.
            </p>
            <button className="btn-primary font-label-caps text-label-caps px-8 py-4 rounded-full flex items-center gap-2">
              EXPLORE THE VAULT <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
            <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">SCROLL</span>
            <span className="material-symbols-outlined text-primary">arrow_downward</span>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop py-32 flex flex-col items-center">
          <div className="w-full max-w-[1000px] mb-20 text-center reveal">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">A LEGACY OF EXCELLENCE</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 shadow-[0_0_10px_rgba(0,210,255,0.5)]"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">The evolution of a subculture, marked by innovation and relentless pursuit of the extraordinary.</p>
          </div>
          <div className="relative w-full max-w-[800px] mx-auto before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-16 reveal">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-surface shadow-[0_0_15px_rgba(0,210,255,0.4)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative left-0 md:left-1/2 transform md:-translate-x-1/2">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>trip_origin</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300 ml-4 md:ml-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-label-caps text-primary">2018</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-2">THE INCEPTION</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Founded in a private studio, beginning as an underground exchange network for hyper-rare silhouettes.</p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-16 reveal">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-surface shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative left-0 md:left-1/2 transform md:-translate-x-1/2 transition-colors duration-300 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                <span className="material-symbols-outlined text-white/50 text-sm group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>blur_on</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300 ml-4 md:ml-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-label-caps text-primary">2020</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-2">DIGITAL INTEGRATION</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Launched the proprietary Authenticity Vault, utilizing blockchain for immutable provenance.</p>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-16 reveal">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-surface shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative left-0 md:left-1/2 transform md:-translate-x-1/2 transition-colors duration-300 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                <span className="material-symbols-outlined text-white/50 text-sm group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300 ml-4 md:ml-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-label-caps text-primary">2024</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-2">ELITE STATUS</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Establishing the definitive global standard for high-net-worth collector experiences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section (Bento Grid) */}
        <section className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop py-32">
          <div className="mb-16 reveal">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">OUR MANIFESTO</h2>
            <div className="h-1 w-20 bg-primary mb-6 shadow-[0_0_10px_rgba(0,210,255,0.5)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Bento Item 1 */}
            <div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group reveal">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 0" }}>security</span>
                <div>
                  <h3 className="font-display-xl text-[32px] text-on-surface mb-2">ABSOLUTE AUTHENTICITY</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Every artifact that enters our ecosystem undergoes rigorous, multi-point verification. We do not compromise on truth.</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-[50px] rounded-full"></div>
            </div>
            {/* Bento Item 2 */}
            <div className="glass-panel rounded-2xl p-8 relative overflow-hidden group reveal" style={{ transitionDelay: '100ms' }}>
              <img alt="Exclusivity" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPfZ9SucOx_aDqFLNGAfkdB0pN-yove-AE0xlzaGL16wUI3w_fc075ImGlt2aJc3sVgGfftD_LlbQYfVvUBlD85ktY8EUQJKoviD5ndQ7YRjzOU1NzCltRTm9mM_5X3JiPIoVBoFG9Qe9MKbWtpkDWB5jD9l-0FlT50Jv4-mqTqTXhbwhe2omSsFnP7PqfoliRO07U3kiZTBJ2fh3Am07D2S48mN7GeA-x97LAunxpZHf9iUoKBCEmGwwp8_5xLj4qFPI43vhUQFE" />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <span className="material-symbols-outlined text-3xl text-white mb-2">vpn_key</span>
                <h3 className="font-title-md text-title-md text-on-surface">CURATED ACCESS</h3>
              </div>
            </div>
            {/* Bento Item 3 */}
            <div className="glass-panel rounded-2xl p-8 relative overflow-hidden group reveal" style={{ transitionDelay: '200ms' }}>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4">architecture</span>
                <h3 className="font-title-md text-title-md text-on-surface mb-2">FUTURE-FORWARD DESIGN</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Merging digital infrastructure with physical artifacts.</p>
              </div>
            </div>
            {/* Bento Item 4 */}
            <div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group reveal" style={{ transitionDelay: '300ms' }}>
              <div className="relative z-10 h-full flex flex-col justify-between md:flex-row md:items-end">
                <div className="mb-6 md:mb-0 max-w-sm">
                  <span className="font-label-caps text-label-caps text-primary border border-primary/30 px-3 py-1 rounded-full mb-4 inline-block">THE COMMUNITY</span>
                  <h3 className="font-display-xl text-[32px] text-on-surface mb-2 mt-4">ELITE SYNDICATE</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Membership is not bought; it is earned through dedication to the culture.</p>
                </div>
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-surface-container bg-surface-variant flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-sm text-white/50">person</span></div>
                  <div className="w-12 h-12 rounded-full border-2 border-surface-container bg-surface-variant flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-sm text-white/50">person</span></div>
                  <div className="w-12 h-12 rounded-full border-2 border-surface-container bg-surface-variant flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-sm text-white/50">person</span></div>
                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center shadow-lg"><span className="font-label-caps text-label-caps text-primary">+99</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
