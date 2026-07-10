"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    document.cookie = "user-session=authenticated; path=/; max-age=3600";
    router.push('/dashboard');
  };

  return (
    <div className="antialiased min-h-screen flex items-center justify-center p-margin-mobile md:p-margin-desktop relative overflow-x-hidden bg-[#050505] text-[#e5e2e1] w-full">
      {/* Background Elements */}
      <div className="bg-animated-blur w-full"></div>
      <div className="bg-overlay w-full"></div>

      {/* Login Container */}
      <main className="w-full max-w-[480px] z-10 animate-enter flex flex-col">
        {/* Brand Header */}
        <div className="text-center mb-8 delay-100 animate-enter">
          <Link href="/">
            <h1 className="font-display-xl text-headline-lg md:text-display-xl tracking-tighter text-on-surface mb-2 cursor-pointer hover:scale-105 transition-transform inline-block">Vault Elite</h1>
          </Link>
          <p className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]">Architected for the 1%</p>
        </div>

        {/* Glass Card */}
        <div className="glass-card rounded-xl p-8 md:p-10 delay-200 animate-enter w-full">
          <h2 className="font-title-md text-title-md text-on-surface mb-6">Access Vault</h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="space-y-2 delay-300 animate-enter">
              <label className="sr-only font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-on-surface-variant ml-3">mail</span>
                <input
                  className="input-ghost w-full font-body-md text-body-md text-on-surface py-3 pl-10 pr-4 rounded-lg placeholder:text-on-surface-variant/50 focus:ring-0 outline-none"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  type="email"
                  defaultValue="admin@vaultelite.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2 delay-300 animate-enter">
              <div className="flex justify-between items-center">
                <label className="sr-only font-label-caps text-label-caps text-on-surface-variant" htmlFor="password">Password</label>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-on-surface-variant ml-3">lock</span>
                <input
                  className="input-ghost w-full font-body-md text-body-md text-on-surface py-3 pl-10 pr-12 rounded-lg placeholder:text-on-surface-variant/50 focus:ring-0 outline-none"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  type="password"
                  defaultValue="password123"
                />
                <button
                  aria-label="Toggle password visibility"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors mr-3"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button className="btn-primary-neon w-full font-title-md text-[16px] font-semibold py-4 rounded-lg flex items-center justify-center gap-2 delay-400 animate-enter mt-8" type="submit">
              Enter Vault
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </form>

          <div className="mt-8 delay-500 animate-enter">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps rounded-full">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button className="btn-social flex items-center justify-center gap-2 py-3 rounded-lg font-body-md text-[14px] text-on-surface">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
                </svg>
                Google
              </button>
              <button className="btn-social flex items-center justify-center gap-2 py-3 rounded-lg font-body-md text-[14px] text-on-surface">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05,20.281C15.945,21.844,14.773,23.363,13.061,23.363c-1.666,0-2.22-1.03-4.148-1.03c-1.97,0-2.585,1.002-4.175,1.002c-1.684,0-3.037-1.745-4.144-3.351C-1.895,6.177,4.041,3.468,7.028,3.468c1.605,0,3.003,1.059,4.004,1.059c1.031,0,2.696-1.258,4.551-1.258c0.697,0,3.992,0.114,5.885,2.909c-0.129,0.082-3.527,2.052-3.527,6.113c0,4.646,3.957,6.262,4.015,6.29C21.884,18.802,20.177,23.256,17.05,20.281 M11.836,3.319C11.956,1.411,13.568,0,15.422,0C15.658,2.004,13.91,3.585,11.836,3.319"></path>
                </svg>
                Apple
              </button>
            </div>
          </div>
        </div>

        {/* Create Account Link */}
        <div className="text-center mt-8 delay-500 animate-enter">
          <p className="font-body-md text-on-surface-variant">
            Not elite yet?
            <Link className="text-primary hover:text-primary-container font-semibold transition-colors ml-1 underline-offset-4 hover:underline" href="#">Request Access</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
