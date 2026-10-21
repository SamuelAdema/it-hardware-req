"use client";

export default function CatalogError({ error, reset }) {
  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
      <h2 className="text-lg font-bold text-red-700">Failed to load catalog</h2>
      <p className="text-sm text-red-600 mt-1 mb-4">
        {error?.message || "An unexpected error occurred while fetching catalog data."}
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}