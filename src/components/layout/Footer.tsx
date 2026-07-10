"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === '/collections/luxury' || pathname === '/drops/limited' || pathname === '/login' || pathname === '/checkout' || pathname === '/admin') {
    return null;
  }

  return (
    <footer className="bg-surface-container-lowest w-full py-20 px-margin-desktop grid grid-cols-12 gap-gutter max-w-container-max mx-auto border-t border-white/5 mt-auto">
      <div className="col-span-12 md:col-span-4 flex flex-col justify-between mb-8 md:mb-0">
        <div className="font-display-xl text-headline-lg text-on-surface mb-6">VAULT</div>
        <p className="font-body-md text-body-md text-secondary">© 2024 VAULT ELITE. ALL RIGHTS RESERVED.</p>
      </div>
      <div className="col-span-12 md:col-span-8 flex justify-end items-end">
        <div className="flex flex-wrap gap-8 font-body-md text-body-md">
          <Link className="text-outline hover:text-on-surface transition-colors hover:text-primary transition-all hover:glow-secondary" href="#">PRIVACY</Link>
          <Link className="text-outline hover:text-on-surface transition-colors hover:text-primary transition-all hover:glow-secondary" href="#">TERMS</Link>
          <Link className="text-outline hover:text-on-surface transition-colors hover:text-primary transition-all hover:glow-secondary" href="#">AUTHENTICITY</Link>
          <Link className="text-outline hover:text-on-surface transition-colors hover:text-primary transition-all hover:glow-secondary" href="#">CAREERS</Link>
        </div>
      </div>
    </footer>
  );
}
