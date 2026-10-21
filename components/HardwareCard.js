"use client";

import { useState } from "react";
import Link from "next/link";

export default function HardwareCard({ item }) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="border border-slate-200 p-5 rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-bold text-slate-800">{item.name}</h2>
      <p className="text-sm text-slate-500 mb-4">{item.category} &middot; ${item.price}</p>
      
      <div className="flex gap-3 mt-4">
        <Link 
          href={`/catalog/${item.id}`} 
          className="text-sm bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded hover:bg-slate-200 transition"
        >
          View Specs
        </Link>
        <button 
          onClick={() => setSelected(!selected)}
          className={`text-sm font-medium px-4 py-2 rounded transition ${
            selected 
              ? "bg-green-600 text-white shadow-sm" 
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {selected ? "Selected \u2713" : "Add to Request"}
        </button>
      </div>
    </div>
  );
}