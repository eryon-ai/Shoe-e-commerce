import Link from "next/link";

export default function LuxuryCollectionPage() {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col md:flex-row w-full">
      {/* TopNavBar (Mobile Only) */}
      <header className="md:hidden bg-surface/70 backdrop-blur-xl font-body-md text-body-md fixed top-0 w-full z-[100] border-b border-white/10 shadow-2xl">
        <div className="flex justify-between items-center h-20 px-margin-mobile max-w-container-max mx-auto">
          <div className="font-display-xl text-title-md tracking-tighter text-on-surface">
            Vault Elite
          </div>
          <div className="flex items-center gap-4">
            <button className="text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>person</span></button>
            <button className="text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span></button>
            <button className="text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_cart</span></button>
          </div>
        </div>
      </header>

      {/* SideNavBar (Desktop Only) */}
      <aside className="hidden md:flex bg-surface/80 backdrop-blur-2xl font-label-caps text-label-caps h-full w-80 fixed left-0 top-0 z-[110] border-r border-white/10 shadow-[20px_0_40px_rgba(0,0,0,0.5)] flex-col py-8">
        <div className="px-6 mb-12">
          <h1 className="font-display-xl text-headline-lg text-on-surface">The Vault</h1>
          <p className="text-on-surface-variant mt-2">Elite Member</p>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          <Link href="/drops/new" className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:translate-x-2 transition-transform duration-300">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>new_releases</span>
            New Arrivals
          </Link>
          <Link href="/drops/exclusive" className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:translate-x-2 transition-transform duration-300">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>bolt</span>
            Exclusive Drops
          </Link>
          <Link href="/collections/hype" className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:translate-x-2 transition-transform duration-300">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>local_fire_department</span>
            Hypebeast
          </Link>
          <Link href="/collections/luxury" className="flex items-center gap-4 bg-primary/10 text-primary border-r-4 border-primary px-6 py-4 hover:translate-x-2 transition-transform duration-300 opacity-80">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>diamond</span>
            Luxury
          </Link>
          <Link href="/sale" className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 hover:translate-x-2 transition-transform duration-300">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>sell</span>
            Sale
          </Link>
        </nav>
        <div className="px-6 mt-auto">
          <button className="w-full py-4 bg-white text-black hover:neon-glow hover:scale-[1.02] transition-all duration-300 font-label-caps text-label-caps uppercase rounded-DEFAULT">Upgrade Membership</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-80 pt-20 md:pt-0">
        {/* Hero Section */}
        <section className="relative h-[819px] w-full flex items-end pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
            <img
              alt="Macro close-up photography of a highly textured, premium dark leather sneaker material."
              className="w-full h-full object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Glh6FWudva-5xgbRwC_dDTg8YYIigtA_tJn_X4Q1j-E59aAsGPS5Qe41G-qA-09ymGp42oFlzOhKCmTPU65LoRRAlivy1GYi_0v7xQSCeIZ8WErb7HfK310BxWXJnNM0PTAbRpX_A1CWS54_q9f6UDOaZ0eXh3_8sil1m1b-XqVkaVZ4W0a0fO5gAMOY0RkpVjZqP5MWSMtHkuvt1Y_uDTNjdRsJjtLn1SsO9c44MslSk4qGQklLNjiAMdlquAsdwcfQQB6DXR8"
            />
          </div>
          <div className="relative z-20 max-w-container-max w-full mx-auto">
            <p className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase mb-4">The Pinnacle</p>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-on-surface tracking-tighter">CRAFTED FOR<br />THE ELITE.</h1>
          </div>
        </section>

        {/* Curation Section (Horizontal Scroll) */}
        <section className="py-20 pl-margin-mobile md:pl-margin-desktop">
          <div className="max-w-container-max mx-auto pr-margin-mobile md:pr-margin-desktop mb-12 flex justify-between items-end">
            <h2 className="font-display-xl text-headline-lg text-on-surface">Curated Excellence</h2>
            <Link href="/stories" className="font-label-caps text-label-caps text-primary hover:underline underline-offset-4 flex items-center gap-2">
              View Archive <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="flex gap-gutter overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 pr-margin-mobile md:pr-margin-desktop">
            {/* Card 1 */}
            <div className="snap-start shrink-0 w-[85vw] md:w-[40vw] group cursor-pointer">
              <div className="relative h-[614px] bg-surface-container rounded-lg overflow-hidden ghost-border">
                <img
                  alt="A pristine, minimalist white luxury sneaker displayed on a sleek, dark reflective pedestal."
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJXK6PJRSBnJ8XRyCJrfYUZm2un30ZxS-Z24AYI8OHx_k_RH1NfxxZbPP41h3H31iiFLspc_TP7RM2RaCmHUlPTR0AFzICsJGE_A7s-EiexJubahe0yD3QnleFWafwDDTFxWN0Qm6T6qTXwgHi2LONKJxQOtv6NLz8B0t3mBoXaWiByugU2QUIL3X5dOgzdEZqeSC7ysOOSuf_r3asrKfCUzpscJ66e3RvtFcSHnoJJy3wbaEGu0WLIfXlzSbyAdpyZDpJBkbdBR8"
                />
                <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-title-md text-title-md text-on-surface font-light">Maison Margiela Replica</h3>
                  <p className="font-label-caps text-label-caps text-primary mt-2">$650.00</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="snap-start shrink-0 w-[85vw] md:w-[40vw] group cursor-pointer">
              <div className="relative h-[614px] bg-surface-container rounded-lg overflow-hidden ghost-border">
                <img
                  alt="A striking red high-top designer sneaker presented against an infinite black background."
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU_t7deKy8Jpdrr-H30xqSQ5nDRRDbHxNwLuNZiWdrcRBxxCDtNCU4129mAemsDFl2KnKLKI4SFd3p1isP6W35-iapkROgC8XFw4WgwzlPe1ddIMCqHpSPW7tZ6UqH1sZMEjK7hubvi5Fn3TVR6F7usQyCI5ouvO0BBT8lXdBRPfXstACGpxznePTEAlnxs7vCb5h0HDEQ5KezkHHwqj5nTU2BFqIPSDDAF6XVAevTBLSfVCr1G0aV1NhW4mTOI0pJC0McKjrFbu0"
                />
                <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-title-md text-title-md text-on-surface font-light">Balenciaga Track</h3>
                  <p className="font-label-caps text-label-caps text-primary mt-2">$1,050.00</p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="snap-start shrink-0 w-[85vw] md:w-[40vw] group cursor-pointer">
              <div className="relative h-[614px] bg-surface-container rounded-lg overflow-hidden ghost-border">
                <img
                  alt="An abstract, macro view of intricate, high-tech sneaker lacing systems."
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUYx4VN28VMy1hC_dk5twwzkqrlv9KDwkZnWfWeeGe9cq9VmnsLcGaEezGzErNZNSO75Y6vQEToGZxEGlfnSCMijnDJlG3a0fulJrJEuaN3-bYQhUKQDxFsQgCdz2OPmLFmzfekTbPRIUt6UPEjevBTGSSxyOPlB9J3JT52VxhoQoyRzkuJN8EshR8F5yBlzl3FpVT3HkVKqXzmRxew7myS1Unoqd5P3hofFDY-w8LPN6XeVUTc05O5iIqX0T6cgMI2-TLlZeHbN8"
                />
                <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-title-md text-title-md text-on-surface font-light">Off-White Out of Office</h3>
                  <p className="font-label-caps text-label-caps text-primary mt-2">$890.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface-container-lowest text-on-surface font-body-md text-body-md w-full relative mt-20 px-margin-desktop py-20 max-w-container-max mx-auto border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="font-display-xl text-headline-lg text-primary mb-6">Vault Elite</div>
              <p className="text-on-surface-variant max-w-md text-sm">Engineered for the elite sneaker subculture. Highly secure, technically advanced, visually breathtaking.</p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline">Release Calendar</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline">Authenticity Guarantee</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline">Privacy Vault</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline">Terms of Service</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline">Concierge Support</Link>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-on-surface-variant text-xs tracking-widest font-label-caps">
            © 2024 VAULT ELITE. ARCHITECTED FOR THE 1%.
          </div>
        </footer>
      </main>
    </div>
  );
}
