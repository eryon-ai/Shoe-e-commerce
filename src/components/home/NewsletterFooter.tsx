"use client";



export default function NewsletterFooter() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-surface-container-highest flex items-center justify-center">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto w-full text-center flex flex-col items-center">
        <span className="material-symbols-outlined text-[48px] text-primary mb-6 glow-blue">
          vpn_key
        </span>
        <h2 className="font-display-xl text-5xl md:text-7xl text-on-surface uppercase mb-4 tracking-tighter">
          Unlock The Vault
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-md mx-auto mb-12">
          Join the elite. Gain exclusive early access to hyper-limited drops, collaborations, and private events.
        </p>

        <form className="w-full max-w-md relative group flex flex-col sm:flex-row gap-4 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL"
            required
            className="w-full bg-surface-container-low ghost-border border-white/20 text-on-surface font-label-caps text-sm py-4 px-6 rounded-lg sm:rounded-r-none focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/50"
          />
          <button 
            type="submit" 
            className="bg-primary text-on-primary font-label-caps text-sm px-8 py-4 rounded-lg sm:rounded-l-none hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 glow-blue"
          >
            REQUEST ACCESS <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </form>

        <p className="font-label-caps text-[10px] text-on-surface-variant mt-6">
          By joining, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
}
