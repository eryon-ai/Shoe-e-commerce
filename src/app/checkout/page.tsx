"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useStore } from "@/hooks/useStore";

export default function CheckoutPage() {
  const router = useRouter();
  const cartItems = useStore(useCartStore, (state) => state.items) || [];
  const clearCart = useCartStore((state) => state.clearCart);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [shipping, setShipping] = useState({
    email: "", fname: "", lname: "", address: "", apt: "", city: "", zip: ""
  });
  const [payment, setPayment] = useState({
    cardNumber: "", expiry: "", cvc: ""
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = subtotal * 0.085;
  const shippingCost = step === 1 ? 0 : 15; // flat rate shipping
  const total = subtotal + taxes + shippingCost;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep((s) => (s + 1) as 1 | 2 | 3);
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order placed successfully! Redirecting to dashboard...");
    clearCart();
    router.push("/dashboard");
  };

  if (cartItems.length === 0 && step === 1) {
    return (
      <div className="bg-background text-on-surface min-h-screen w-full flex flex-col items-center justify-center">
        <h1 className="font-display-xl text-3xl mb-4">YOUR CART IS EMPTY</h1>
        <Link href="/market" className="text-primary hover:underline">Return to Market</Link>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-surface min-h-screen antialiased selection:bg-primary selection:text-on-primary w-full flex flex-col">
      {/* Minimal Checkout Header */}
      <header className="w-full border-b border-white/5 bg-surface-container-lowest py-6">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-center items-center">
          <Link href="/">
            <h1 className="font-display-xl text-headline-lg tracking-tighter text-on-surface cursor-pointer hover:scale-105 transition-transform">Vault Elite</h1>
          </Link>
          <span className="material-symbols-outlined ml-2 text-on-surface-variant text-sm">lock</span>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 w-full flex-grow">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-10">
            {/* Stepper */}
            <nav aria-label="Progress">
              <ol className="flex items-center" role="list">
                <li className="relative pr-8 sm:pr-20">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="h-0.5 w-full bg-primary/20"></div>
                  </div>
                  <div className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all ${step >= 1 ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(0,210,255,0.4)]' : 'bg-surface-container border border-white/10 text-on-surface-variant'}`}>
                    <span className="material-symbols-outlined text-sm font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  </div>
                  <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps whitespace-nowrap ${step >= 1 ? 'text-primary' : 'text-on-surface-variant'}`}>Shipping</span>
                </li>
                <li className="relative pr-8 sm:pr-20">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="h-0.5 w-full bg-white/5"></div>
                  </div>
                  <div className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all ${step >= 2 ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(0,210,255,0.4)]' : 'bg-surface-container border border-white/10 text-on-surface-variant'}`}>
                    <span className="material-symbols-outlined text-sm font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>payment</span>
                  </div>
                  <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps whitespace-nowrap ${step >= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>Payment</span>
                </li>
                <li className="relative">
                  <div className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all ${step >= 3 ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(0,210,255,0.4)]' : 'bg-surface-container border border-white/10 text-on-surface-variant'}`}>
                    <span className="material-symbols-outlined text-sm font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>inventory</span>
                  </div>
                  <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps whitespace-nowrap ${step >= 3 ? 'text-primary' : 'text-on-surface-variant'}`}>Review</span>
                </li>
              </ol>
            </nav>

            <div className="mt-12">
              {step === 1 && (
                <form onSubmit={handleNextStep} className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="space-y-4">
                    <h2 className="font-title-md text-title-md text-on-surface">Contact Information</h2>
                    <div className="relative w-full">
                      <input required value={shipping.email} onChange={e => setShipping({...shipping, email: e.target.value})} className="input-peer w-full h-14 bg-surface-container-high ghost-border rounded-lg border-b-2 border-b-transparent focus:border-b-primary focus:bg-surface-container-highest transition-colors px-4 pt-5 pb-1 text-on-surface font-body-md outline-none" id="email" type="email" />
                      <label className={`label-peer absolute left-4 top-4 text-on-surface-variant font-body-md transition-all duration-200 pointer-events-none ${shipping.email ? 'text-xs -translate-y-3' : ''}`} htmlFor="email">Email Address</label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-title-md text-title-md text-on-surface">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative w-full">
                        <input id="fname" required value={shipping.fname} onChange={e => setShipping({...shipping, fname: e.target.value})} className="input-peer w-full h-14 bg-surface-container-high ghost-border rounded-lg border-b-2 border-b-transparent focus:border-b-primary focus:bg-surface-container-highest transition-colors px-4 pt-5 pb-1 text-on-surface font-body-md outline-none" type="text" />
                        <label htmlFor="fname" className={`absolute left-4 top-4 text-on-surface-variant font-body-md transition-all duration-200 pointer-events-none ${shipping.fname ? 'text-xs -translate-y-3' : ''}`}>First Name</label>
                      </div>
                      <div className="relative w-full">
                        <input id="lname" required value={shipping.lname} onChange={e => setShipping({...shipping, lname: e.target.value})} className="input-peer w-full h-14 bg-surface-container-high ghost-border rounded-lg border-b-2 border-b-transparent focus:border-b-primary focus:bg-surface-container-highest transition-colors px-4 pt-5 pb-1 text-on-surface font-body-md outline-none" type="text" />
                        <label htmlFor="lname" className={`absolute left-4 top-4 text-on-surface-variant font-body-md transition-all duration-200 pointer-events-none ${shipping.lname ? 'text-xs -translate-y-3' : ''}`}>Last Name</label>
                      </div>
                    </div>
                    <div className="relative w-full">
                      <input id="address" required value={shipping.address} onChange={e => setShipping({...shipping, address: e.target.value})} className="input-peer w-full h-14 bg-surface-container-high ghost-border rounded-lg border-b-2 border-b-transparent focus:border-b-primary focus:bg-surface-container-highest transition-colors px-4 pt-5 pb-1 text-on-surface font-body-md outline-none" type="text" />
                      <label htmlFor="address" className={`absolute left-4 top-4 text-on-surface-variant font-body-md transition-all duration-200 pointer-events-none ${shipping.address ? 'text-xs -translate-y-3' : ''}`}>Street Address</label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative w-full md:col-span-2">
                        <input id="city" required value={shipping.city} onChange={e => setShipping({...shipping, city: e.target.value})} className="input-peer w-full h-14 bg-surface-container-high ghost-border rounded-lg border-b-2 border-b-transparent focus:border-b-primary focus:bg-surface-container-highest transition-colors px-4 pt-5 pb-1 text-on-surface font-body-md outline-none" type="text" />
                        <label htmlFor="city" className={`absolute left-4 top-4 text-on-surface-variant font-body-md transition-all duration-200 pointer-events-none ${shipping.city ? 'text-xs -translate-y-3' : ''}`}>City</label>
                      </div>
                      <div className="relative w-full">
                        <input id="zip" required value={shipping.zip} onChange={e => setShipping({...shipping, zip: e.target.value})} className="input-peer w-full h-14 bg-surface-container-high ghost-border rounded-lg border-b-2 border-b-transparent focus:border-b-primary focus:bg-surface-container-highest transition-colors px-4 pt-5 pb-1 text-on-surface font-body-md outline-none" type="text" />
                        <label htmlFor="zip" className={`absolute left-4 top-4 text-on-surface-variant font-body-md transition-all duration-200 pointer-events-none ${shipping.zip ? 'text-xs -translate-y-3' : ''}`}>Postal Code</label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-4">
                    <button type="submit" className="w-full md:w-auto md:float-right h-14 px-10 rounded-lg bg-primary text-on-primary font-title-md text-title-md neon-glow transition-all duration-300 flex items-center justify-center gap-2">
                      Continue to Payment
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleNextStep} className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-4">
                    <h2 className="font-title-md text-title-md text-on-surface mb-2">Payment Information</h2>
                    <div className="relative w-full">
                      <input id="cardNumber" required value={payment.cardNumber} onChange={e => setPayment({...payment, cardNumber: e.target.value})} className="input-peer w-full h-14 bg-surface-container-high ghost-border rounded-lg border-b-2 border-b-transparent focus:border-b-primary focus:bg-surface-container-highest transition-colors px-4 pt-5 pb-1 text-on-surface font-body-md outline-none" type="text" maxLength={16} />
                      <label htmlFor="cardNumber" className={`absolute left-4 top-4 text-on-surface-variant font-body-md transition-all duration-200 pointer-events-none ${payment.cardNumber ? 'text-xs -translate-y-3' : ''}`}>Card Number</label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative w-full">
                        <input id="expiry" required value={payment.expiry} onChange={e => setPayment({...payment, expiry: e.target.value})} placeholder="MM/YY" className="input-peer w-full h-14 bg-surface-container-high ghost-border rounded-lg border-b-2 border-b-transparent focus:border-b-primary focus:bg-surface-container-highest transition-colors px-4 pt-5 pb-1 text-on-surface font-body-md outline-none" type="text" maxLength={5} />
                        <label htmlFor="expiry" className={`absolute left-4 top-4 text-on-surface-variant font-body-md transition-all duration-200 pointer-events-none ${payment.expiry ? 'text-xs -translate-y-3' : ''}`}>Expiry</label>
                      </div>
                      <div className="relative w-full">
                        <input id="cvc" required value={payment.cvc} onChange={e => setPayment({...payment, cvc: e.target.value})} className="input-peer w-full h-14 bg-surface-container-high ghost-border rounded-lg border-b-2 border-b-transparent focus:border-b-primary focus:bg-surface-container-highest transition-colors px-4 pt-5 pb-1 text-on-surface font-body-md outline-none" type="text" maxLength={4} />
                        <label htmlFor="cvc" className={`absolute left-4 top-4 text-on-surface-variant font-body-md transition-all duration-200 pointer-events-none ${payment.cvc ? 'text-xs -translate-y-3' : ''}`}>CVC</label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-4 flex justify-between">
                    <button type="button" onClick={() => setStep(1)} className="text-on-surface-variant hover:text-white transition-colors">Back</button>
                    <button type="submit" className="w-full md:w-auto h-14 px-10 rounded-lg bg-primary text-on-primary font-title-md text-title-md neon-glow transition-all duration-300 flex items-center justify-center gap-2">
                      Review Order
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="font-title-md text-title-md text-on-surface mb-2">Review & Place Order</h2>
                  
                  <div className="glass-panel p-6 rounded-lg bg-surface-container border border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-label-caps text-on-surface-variant">Shipping To:</h3>
                      <button onClick={() => setStep(1)} className="text-primary text-sm hover:underline">Edit</button>
                    </div>
                    <p>{shipping.fname} {shipping.lname}</p>
                    <p>{shipping.address}</p>
                    <p>{shipping.city}, {shipping.zip}</p>
                  </div>

                  <div className="glass-panel p-6 rounded-lg bg-surface-container border border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-label-caps text-on-surface-variant">Payment Method:</h3>
                      <button onClick={() => setStep(2)} className="text-primary text-sm hover:underline">Edit</button>
                    </div>
                    <p>Card ending in {payment.cardNumber.slice(-4) || '****'}</p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-4 flex flex-col gap-4">
                    <button onClick={handlePlaceOrder} className="w-full h-16 rounded-lg bg-white text-black font-title-md text-title-md hover:bg-primary hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest">
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 xl:col-span-4 mt-12 lg:mt-0">
            <div className="sticky top-8 bg-surface/70 backdrop-blur-2xl rounded-2xl p-6 ghost-border shadow-2xl flex flex-col gap-8">
              <h2 className="font-title-md text-title-md text-on-surface border-b border-white/10 pb-4">Order Summary</h2>
              
              <div className="flex flex-col gap-6">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container relative ghost-border flex-shrink-0">
                      <img alt={item.name} className="w-full h-full object-cover mix-blend-screen" src={item.image} />
                      <span className="absolute -top-2 -right-2 bg-surface-container-high border border-white/20 rounded-full w-6 h-6 flex items-center justify-center font-label-caps text-[10px] text-on-surface z-10">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-title-md text-sm text-on-surface line-clamp-1">{item.name}</h3>
                      <p className="font-body-md text-xs text-on-surface-variant mt-1">Size: {item.size}</p>
                      <p className="font-body-md text-sm text-primary mt-2 font-bold">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 font-body-md text-body-md">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="text-on-surface">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Shipping</span>
                  {step === 1 ? (
                    <span className="text-xs italic bg-surface-container px-2 py-1 rounded">Calculated next step</span>
                  ) : (
                    <span className="text-on-surface">${shippingCost.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Estimated Taxes</span>
                  <span className="text-on-surface">${taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-end pt-4 mt-2 border-t border-white/5">
                  <span className="font-title-md text-title-md text-on-surface">Total</span>
                  <div className="text-right">
                    <span className="text-xs text-on-surface-variant mr-2">USD</span>
                    <span className="font-display-xl text-3xl tracking-tight text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
