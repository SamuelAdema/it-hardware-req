"use client";

import { useState } from "react";
import useSWR from "swr";
import HardwareCard from "./HardwareCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SearchBox({ initialData }) {
  const [query, setQuery] = useState("");

  const { data, error, isLoading } = useSWR(
    `/api/hardware${query ? `?q=${query}` : ""}`,
    fetcher,
    { fallbackData: initialData } 
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search hardware by name or category..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 mb-6 border border-slate-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      {error && <p className="text-red-600 mb-4">Failed to load hardware data.</p>}
      {!data && isLoading && <p className="text-slate-500 mb-4">Searching...</p>}
      
      {data && data.length === 0 && (
        <p className="text-slate-600">No items match your search.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((item) => (
          <HardwareCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}