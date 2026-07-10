import Link from "next/link";
import { MOCK_ORDERS, PRODUCTS } from "@/data/mockData";

export default function DashboardPage() {
  const recentOrders = MOCK_ORDERS.slice(0, 5);
  const recentlyViewed = PRODUCTS.slice(0, 4);

  return (
    <main className="flex-grow pt-[144px] pb-20 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto flex flex-col md:flex-row gap-gutter">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0">
        <div className="glass-panel rounded-xl p-6 sticky top-[128px]">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden flex-shrink-0">
              <img
                alt="User Avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2y8vwHfzRXClvLxdH8pzUgLhEvQ_0PGBJihfuibd-kc0BxrZ3yjUTYpjwnm6HsuFH56g0XFPAy45yiygzC83ZIcEVgm3TqGcEUG0Y-8_oKCkrgscRft_kxMYiWPKozGlvBwfdXkLEzo6K6D7yUsZo1NjfPF5ec5ROPnOXPW50Do2rY6gKPpYYswlsODoZHubHGJjCtuJvTY2YW4-Tl06mvxMhWkP0IR8ihgguT0e11w-XUze9hH2NqRT4Kys-22NRrRAt_DUuR0w"
              />
            </div>
            <div>
              <h2 className="font-title-md text-title-md text-on-surface m-0">ALEX CHEN</h2>
              <span className="font-label-caps text-label-caps text-primary tracking-widest mt-1 block">ELITE MEMBER</span>
            </div>
          </div>
          <nav className="flex flex-col gap-2 font-label-caps text-label-caps">
            <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-highest text-primary neon-glow">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              OVERVIEW
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              ORDER HISTORY
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">favorite</span>
              WISHLIST
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">settings</span>
              SETTINGS
            </Link>
          </nav>
        </div>
      </aside>

      {/* Dashboard Content */}
      <div className="flex-grow flex flex-col gap-gutter">
        {/* Top Section: Stats & Loyalty */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Loyalty Card */}
          <div className="glass-panel rounded-xl p-8 lg:col-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">SYNDICATE STATUS</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">You are 2,450 points away from APEX tier.</p>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-end mb-2 font-label-caps text-label-caps text-on-surface">
                  <span>CURRENT: ELITE</span>
                  <span>12,550 PTS</span>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[80%] shadow-[0_0_10px_rgba(0,210,255,0.8)] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Stat */}
          <div className="glass-panel rounded-xl p-8 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-[48px] text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <div className="font-display-xl text-[48px] leading-[1] text-on-surface font-bold">14</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant mt-2">AUTHENTICATED PAIRS</div>
          </div>
        </div>

        {/* Order History Preview */}
        <div className="glass-panel rounded-xl p-8">
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <h3 className="font-title-md text-title-md text-on-surface">RECENT ORDERS</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-md text-body-md">
              <thead>
                <tr className="font-label-caps text-label-caps text-on-surface-variant border-b border-white/5">
                  <th className="pb-4 font-normal">ORDER ID</th>
                  <th className="pb-4 font-normal">ITEM</th>
                  <th className="pb-4 font-normal">DATE</th>
                  <th className="pb-4 font-normal">STATUS</th>
                  <th className="pb-4 font-normal text-right">TOTAL</th>
                </tr>
              </thead>
              <tbody className="text-on-surface">
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 text-on-surface-variant">{order.id}</td>
                    <td className="py-4 font-title-md text-[14px]">{order.items[0].name.toUpperCase()}</td>
                    <td className="py-4 text-on-surface-variant">{order.date.toUpperCase()}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full font-label-caps text-[10px] ${
                        order.status === 'Delivered' ? 'bg-primary/10 text-primary border-primary/30' :
                        order.status === 'Shipped' ? 'bg-secondary/10 text-secondary border-secondary/30' :
                        'bg-surface-container-highest text-on-surface-variant border-white/10'
                      } border`}>
                        {order.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 text-right">${order.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recently Viewed Carousel */}
        <div className="glass-panel rounded-xl p-8 overflow-hidden">
          <h3 className="font-title-md text-title-md text-on-surface mb-6">RECENTLY VIEWED</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
            {recentlyViewed.map((item, idx) => (
              <Link href={`/product/${item.id}`} key={idx} className="flex-shrink-0 w-[240px] glass-panel rounded-lg overflow-hidden group snap-start glow-hover cursor-pointer">
                <div className="h-[160px] bg-surface-container-highest relative overflow-hidden flex items-center justify-center p-4">
                  <img
                    alt={item.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    src={item.image}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-title-md text-[14px] leading-tight text-on-surface mb-1 truncate uppercase">{item.name}</h4>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">LAST VIEWED {idx + 1}H AGO</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
