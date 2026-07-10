"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useStore } from "@/hooks/useStore";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const cartItems = useStore(useCartStore, (state) => state.items) || [];
  const wishlistItems = useStore(useWishlistStore, (state) => state.items) || [];
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (pathname === '/collections/luxury' || pathname === '/login' || pathname === '/checkout') {
    return null;
  }

  return (
    <nav className="bg-surface/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_0_20px_rgba(0,210,255,0.1)] transition-all duration-500">
      <div className="flex justify-between items-center px-margin-desktop py-6 w-full max-w-container-max mx-auto hidden md:flex border-b border-white/10">
        <Link href="/" className="font-display-xl text-title-md tracking-tighter text-on-surface hover:scale-105 transition-transform duration-300 cursor-pointer">
          VAULT
        </Link>
        <div className="flex space-x-8 font-label-caps text-label-caps">
          <Link href="/drops/limited" className={`${pathname === '/drops/limited' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-on-surface transition-colors'} hover:scale-105 transition-transform duration-300`}>
            DROPS
          </Link>
          <Link href="/collections" className={`${pathname.startsWith('/collections') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-on-surface transition-colors'} hover:scale-105 transition-transform duration-300`}>
            COLLECTIONS
          </Link>
          <Link href="/stories" className={`${pathname.startsWith('/stories') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-on-surface transition-colors'} hover:scale-105 transition-transform duration-300`}>
            ARCHIVE
          </Link>
          <Link href="/market" className={`${pathname.startsWith('/market') ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-on-surface transition-colors'} hover:scale-105 transition-transform duration-300`}>
            MARKET
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          {/* Admin Demo Button */}
          <Link
            href="/admin"
            aria-label="Admin Panel Demo"
            className={`relative flex items-center gap-1.5 font-label-caps text-label-caps px-3 py-1.5 rounded border transition-all duration-300 hover:scale-105 ${
              pathname === '/admin'
                ? 'bg-primary/20 border-primary text-primary shadow-[0_0_12px_rgba(0,210,255,0.3)]'
                : 'bg-primary/10 border-primary/40 text-primary hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_10px_rgba(0,210,255,0.2)]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">admin_panel_settings</span>
            ADMIN DEMO
          </Link>

          <Link href="/wishlist" aria-label={`View Wishlist, ${wishlistItems.length} items`} className="text-on-surface-variant hover:text-on-surface transition-colors hover:scale-105 transition-transform duration-300 relative flex items-center">
            <span className="material-symbols-outlined" aria-hidden="true">favorite</span>
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-error text-white font-label-caps text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link href="/login" aria-label="Sign In" className="text-on-surface-variant hover:text-on-surface transition-colors hover:scale-105 transition-transform duration-300">
            <span className="material-symbols-outlined" aria-hidden="true">person</span>
          </Link>
          <Link href="/checkout" aria-label={`View Cart, ${cartCount} items`} className="text-on-surface-variant hover:text-on-surface transition-colors hover:scale-105 transition-transform duration-300 relative flex items-center">
            <span className="material-symbols-outlined" aria-hidden="true">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-background font-label-caps text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      {/* Mobile Nav Header */}
      <div className="md:hidden flex justify-between items-center px-margin-mobile py-4 border-b border-white/10 relative z-50">
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-display-xl text-title-md tracking-tighter text-on-surface">VAULT</Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-on-surface p-2">
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-highest border-b border-white/10 shadow-2xl flex flex-col p-6 gap-6 z-40">
          <Link href="/drops/limited" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps">DROPS</Link>
          <Link href="/collections" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps">COLLECTIONS</Link>
          <Link href="/stories" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps">ARCHIVE</Link>
          <Link href="/market" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps">MARKET</Link>
          <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 bg-primary/10 border border-primary/40 text-primary font-label-caps text-label-caps px-3 py-2 rounded w-fit">
            <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
            ADMIN DEMO
          </Link>
          
          <div className="h-px w-full bg-white/10 my-2"></div>
          
          <div className="flex justify-between items-center">
            <Link href="/wishlist" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">favorite</span> WISHLIST ({wishlistItems.length})
            </Link>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">person</span> ACCOUNT
            </Link>
            <Link href="/checkout" onClick={() => setMobileMenuOpen(false)} className="text-primary font-label-caps text-label-caps flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">shopping_bag</span> CART ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

