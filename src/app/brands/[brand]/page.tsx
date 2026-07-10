import Link from "next/link";
import { PRODUCTS } from "@/data/mockData";


export default async function BrandPage({ params }: { params: { brand: string } }) {
  const { brand } = await params;
  const brandName = brand.toUpperCase();
  
  const brandProducts = PRODUCTS.filter(p => p.brand.toLowerCase() === brand.toLowerCase());

  if (brandProducts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 flex-col">
        <h1 className="text-display-xl mb-4 text-on-surface">BRAND NOT FOUND</h1>
        <Link href="/collections" className="text-primary hover:underline">RETURN TO COLLECTIONS</Link>
      </div>
    );
  }

  const heroImage = brandProducts[0]?.image;

  return (
    <div className="antialiased overflow-x-hidden min-h-screen flex flex-col relative w-full">
      <main className="flex-grow pt-20 relative">
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center opacity-5">
          <h1 className="font-display-xl text-[20vw] leading-none whitespace-nowrap text-white font-black mix-blend-overlay">
            {brandName}
          </h1>
        </div>

        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(0,210,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(110,32,140,0.1)_0%,transparent_40%)]">
          <div className="absolute inset-0 z-0">
            <img
              alt={`${brandName} Hero`}
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl px-margin-mobile md:px-margin-desktop">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">Brand Story</span>
            <h1 className="font-display-xl text-display-xl text-white mb-6 drop-shadow-2xl">{brandName} ARCHIVE</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
              Decades of relentless innovation distilled into high-performance art. Explore the legacy, engineered for the 1%.
            </p>
            <Link href="/market" className="bg-white inline-block text-black font-title-md text-title-md px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-105">
              Explore Collection
            </Link>
          </div>
        </section>

        {/* Featured Drops Grid */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display-xl text-headline-lg text-white">Featured Drops</h2>
            <Link href="/drops/limited" className="font-label-caps text-label-caps text-primary hover:text-white transition-colors flex items-center gap-2">
              View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="glass-panel rounded-2xl overflow-hidden group cursor-pointer block">
                <div className="relative h-80 overflow-hidden bg-surface-container">
                  <div className="absolute top-4 left-4 z-10 bg-surface-container/80 border border-primary px-3 py-1 rounded-full backdrop-blur-md">
                    <span className="font-label-caps text-label-caps text-primary uppercase">{product.isLimited ? 'Limited Edition' : 'In Stock'}</span>
                  </div>
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 opacity-80 mix-blend-lighten group-hover:scale-105"
                    src={product.image}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-title-md text-title-md text-white mb-2 uppercase">{product.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-body-lg text-body-lg text-on-surface-variant">${product.price.toFixed(2)}</span>
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-white">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
