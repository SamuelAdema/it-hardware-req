"use client";

import Link from "next/link";

export default function HardwareCard({ item }) {
  return (
    <div className="group flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container with hover effect */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img 
          src={item.image} 
          alt={item.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
          In Stock
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-1">{item.category}</p>
        <h2 className="text-xl font-extrabold text-slate-900 mb-2">{item.name}</h2>
        <p className="text-2xl font-light text-slate-500 mt-auto pb-6 border-b border-slate-100 mb-6">
          ${item.price}
        </p>
        
        <Link 
          href={`/catalog/${item.id}`} 
          className="w-full text-center bg-slate-900 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Details & Request
        </Link>
      </div>
    </div>
  );
}