import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-900 text-white rounded-2xl shadow-2xl mt-4">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
        
        <div className="relative z-10 px-8 py-20 md:py-32 max-w-2xl">
          <p className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-3">Enterprise IT Portal</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Equip your team for <span className="text-blue-400">success.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
            Browse our catalog of pre-approved, enterprise-grade hardware. Submit requisitions instantly and track provisioning in real-time.
          </p>
          <div className="flex gap-4">
            <Link href="/catalog" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg">
              Browse Catalog &rarr;
            </Link>
            <Link href="/requisitions" className="border border-blue-400 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition">
              My Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats/Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4">💻</div>
          <h3 className="font-bold text-xl mb-2">Standardized Gear</h3>
          <p className="text-slate-600">All equipment is pre-vetted for security, compatibility, and performance.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl mb-4">⚡</div>
          <h3 className="font-bold text-xl mb-2">Fast Provisioning</h3>
          <p className="text-slate-600">Automated approval routing ensures your hardware arrives exactly when you need it.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-2xl mb-4">📡</div>
          <h3 className="font-bold text-xl mb-2">Live Tracking</h3>
          <p className="text-slate-600">Watch the status of your request update in real-time using our live tracking dashboard.</p>
        </div>
      </section>
    </div>
  );
}