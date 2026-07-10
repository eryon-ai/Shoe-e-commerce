"use client";

import Link from "next/link";
import { useState } from "react";
import { MOCK_ORDERS, PRODUCTS } from "@/data/mockData";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("30D");

  const totalRevenue = MOCK_ORDERS.reduce((acc, order) => acc + order.total, 0);
  const activeDrops = PRODUCTS.filter(p => p.isLimited).length;

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex selection:bg-primary-container selection:text-on-primary-container w-full">
      {/* Sidebar */}
      <aside className="w-64 glass-panel border-r border-white/5 flex-shrink-0 flex flex-col h-screen sticky top-0 z-40 hidden md:flex">
        <div className="p-8 border-b border-white/5">
          <Link href="/">
            <h1 className="font-display-xl text-title-md tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer">VAULT ELITE</h1>
          </Link>
          <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">ADMIN CONSOLE</p>
        </div>
        <nav className="flex-1 overflow-y-auto hide-scrollbar py-6">
          <ul className="space-y-2 px-4">
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container text-primary border border-white/5 neon-glow transition-all" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                <span className="font-body-md text-body-md font-semibold">Dashboard</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#">
                <span className="material-symbols-outlined">inventory_2</span>
                <span className="font-body-md text-body-md">Inventory</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="font-body-md text-body-md">Orders</span>
                <span className="ml-auto bg-primary text-on-primary font-label-caps text-label-caps px-2 py-0.5 rounded-full">12</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#">
                <span className="material-symbols-outlined">group</span>
                <span className="font-body-md text-body-md">Customers</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#">
                <span className="material-symbols-outlined">bar_chart</span>
                <span className="font-body-md text-body-md">Analytics</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-white/5">
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top App Bar */}
        <header className="h-20 glass-panel flex items-center justify-between px-margin-mobile md:px-margin-desktop sticky top-0 z-30 border-b border-white/5">
          <div className="flex items-center gap-4 md:hidden">
            <button className="text-on-surface hover:text-primary transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="font-display-xl text-title-md tracking-tighter text-on-surface">VAULT</h1>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="bg-surface-container-low border border-white/5 rounded-full py-2 pl-10 pr-4 text-body-md text-on-surface focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-64" placeholder="Search orders, drops..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-surface"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <img alt="Admin Avatar" className="w-10 h-10 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxfB8C4RygJAM3Q0yUPPad08Pn0mQWceJdak0sk3du12YFYgT7M_5hXWNzC3fTPkuCUu2SHdYGAVlJ7AhbpxXsG1VnNurTaFziW9m04uuEBM-W2ABkbukX4CM-po7kEAskGt2IZeIhq4_G_qRx8nh1KgFos4BMwa1EHoVJN9eBaDJHIB_DbcLiE1X9PjCNlUCoNV10Ngyt9XARn3uo3iReL0883bdQ1zmpDVIufNSTgtWtgShOm27W-oQVjmylKCHbYu5pT4xuarE" />
              <div className="hidden md:block">
                <p className="font-body-md text-body-md font-semibold text-on-surface">System Admin</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant">Level 5 Access</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Canvas */}
        <div className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop space-y-gutter pb-20">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">Overview</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time performance metrics for the current drop cycle.</p>
            </div>
            <div className="flex gap-3">
              <button className="glass-panel px-4 py-2 rounded-lg font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors border border-white/5">
                EXPORT DATA
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-label-caps text-label-caps hover:scale-[1.02] transition-transform duration-300 neon-glow">
                NEW DROP
              </button>
            </div>
          </div>

          {/* Quick Stats Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="glass-panel p-6 rounded-xl flex flex-col justify-between group hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start">
                <p className="font-label-caps text-label-caps text-on-surface-variant">TOTAL REVENUE</p>
                <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
              </div>
              <div className="mt-4">
                <p className="font-headline-lg-mobile md:font-headline-lg text-on-surface">${totalRevenue.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-1 text-primary">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  <span className="font-label-caps text-label-caps">+14.2% vs last cycle</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col justify-between group hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start">
                <p className="font-label-caps text-label-caps text-on-surface-variant">ACTIVE DROPS</p>
                <span className="material-symbols-outlined text-secondary">local_fire_department</span>
              </div>
              <div className="mt-4">
                <p className="font-headline-lg-mobile md:font-headline-lg text-on-surface">0{activeDrops}</p>
                <div className="flex items-center gap-1 mt-1 text-secondary">
                  <span className="material-symbols-outlined text-[16px]">timer</span>
                  <span className="font-label-caps text-label-caps">2 ending soon</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col justify-between group hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start">
                <p className="font-label-caps text-label-caps text-on-surface-variant">CONVERSION RATE</p>
                <span className="material-symbols-outlined text-primary-container">monitoring</span>
              </div>
              <div className="mt-4">
                <p className="font-headline-lg-mobile md:font-headline-lg text-on-surface">4.8%</p>
                <div className="flex items-center gap-1 mt-1 text-primary-container">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  <span className="font-label-caps text-label-caps">+0.4% this week</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col justify-between group hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start">
                <p className="font-label-caps text-label-caps text-on-surface-variant">NEW CUSTOMERS</p>
                <span className="material-symbols-outlined text-outline">group_add</span>
              </div>
              <div className="mt-4">
                <p className="font-headline-lg-mobile md:font-headline-lg text-on-surface">1,248</p>
                <div className="flex items-center gap-1 mt-1 text-outline">
                  <span className="material-symbols-outlined text-[16px]">trending_flat</span>
                  <span className="font-label-caps text-label-caps">Steady growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts & Complex Data Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Main Chart Panel */}
            <div className="glass-panel rounded-xl p-6 lg:col-span-2 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface">Revenue Analytics</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">LAST 30 DAYS</p>
                </div>
                <div className="flex bg-surface-container-lowest rounded-lg p-1 border border-white/5">
                  <button onClick={() => setActiveTab("30D")} className={`px-3 py-1 rounded font-label-caps text-label-caps ${activeTab === '30D' ? 'bg-surface-container text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}>30D</button>
                  <button onClick={() => setActiveTab("90D")} className={`px-3 py-1 rounded font-label-caps text-label-caps ${activeTab === '90D' ? 'bg-surface-container text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}>90D</button>
                  <button onClick={() => setActiveTab("1Y")} className={`px-3 py-1 rounded font-label-caps text-label-caps ${activeTab === '1Y' ? 'bg-surface-container text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}>1Y</button>
                </div>
              </div>
              {/* Mock Chart */}
              <div className="flex-1 w-full bg-gradient-to-t from-primary/10 to-transparent rounded-lg border-b border-primary/30 relative min-h-[300px]">
                <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none">
                  <div className="border-t border-white/5 w-full"></div>
                  <div className="border-t border-white/5 w-full"></div>
                  <div className="border-t border-white/5 w-full"></div>
                  <div className="border-t border-white/5 w-full"></div>
                </div>
                <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_10px_rgba(0,210,255,0.5)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,80 Q10,70 20,85 T40,60 T60,40 T80,50 T100,20" fill="none" stroke="#a5e7ff" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  <path d="M0,80 Q10,70 20,85 T40,60 T60,40 T80,50 T100,20 L100,100 L0,100 Z" fill="url(#grad1)" opacity="0.2"></path>
                  <defs>
                    <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#a5e7ff', stopOpacity: 1 }}></stop>
                      <stop offset="100%" style={{ stopColor: '#a5e7ff', stopOpacity: 0 }}></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Trending / Inventory Panel */}
            <div className="glass-panel rounded-xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-title-md text-title-md text-on-surface">Hot Inventory</h3>
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="space-y-4 flex-1 overflow-y-auto hide-scrollbar">
                {PRODUCTS.slice(0, 4).map(product => (
                  <div key={product.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface-container-low transition-colors group cursor-pointer border border-transparent hover:border-white/5">
                    <div className="w-12 h-12 bg-surface-container rounded-md overflow-hidden relative border border-white/5 flex items-center justify-center p-1">
                      <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body-md text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors truncate max-w-[150px] uppercase">{product.name}</p>
                      <p className="font-label-caps text-label-caps text-on-surface-variant">STOCK: {product.stock} UNIT</p>
                    </div>
                    <div className="text-right">
                      <p className="font-body-md text-body-md text-on-surface">${product.price}</p>
                      <span className={`material-symbols-outlined text-[16px] ${product.stock < 15 ? 'text-error' : 'text-primary'}`}>
                        {product.stock < 15 ? 'trending_down' : 'trending_up'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="glass-panel rounded-xl overflow-hidden flex flex-col mt-gutter">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-title-md text-title-md text-on-surface">Recent Transactions</h3>
              <button className="text-primary font-label-caps text-label-caps hover:underline">VIEW ALL</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-surface-container-lowest/50">
                    <th className="p-4 font-label-caps text-label-caps text-on-surface-variant font-medium">ORDER ID</th>
                    <th className="p-4 font-label-caps text-label-caps text-on-surface-variant font-medium">CUSTOMER</th>
                    <th className="p-4 font-label-caps text-label-caps text-on-surface-variant font-medium">PRODUCT</th>
                    <th className="p-4 font-label-caps text-label-caps text-on-surface-variant font-medium">DATE</th>
                    <th className="p-4 font-label-caps text-label-caps text-on-surface-variant font-medium">AMOUNT</th>
                    <th className="p-4 font-label-caps text-label-caps text-on-surface-variant font-medium">STATUS</th>
                    <th className="p-4 font-label-caps text-label-caps text-on-surface-variant font-medium text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md">
                  {MOCK_ORDERS.map((order) => (
                    <tr key={order.id} className="border-b border-white/5 hover:bg-surface-container-low transition-colors group">
                      <td className="p-4 text-on-surface font-mono">{order.id}</td>
                      <td className="p-4 text-on-surface">Alex Mercer</td>
                      <td className="p-4 text-on-surface-variant uppercase">{order.items[0]?.name}</td>
                      <td className="p-4 text-on-surface-variant uppercase">{order.date}</td>
                      <td className="p-4 text-on-surface font-semibold">${order.total.toFixed(2)}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-caps font-label-caps ${
                          order.status === 'Processing' ? 'bg-secondary/10 text-secondary border border-secondary/20' :
                          order.status === 'Shipped' ? 'bg-surface-container-highest text-on-surface-variant border border-white/10' :
                          'bg-primary/10 text-primary border border-primary/20'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            order.status === 'Processing' ? 'bg-secondary animate-pulse' :
                            order.status === 'Shipped' ? 'bg-outline' :
                            'bg-primary'
                          }`}></span> {order.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
