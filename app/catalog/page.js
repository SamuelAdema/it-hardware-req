export default function CatalogPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Hardware Catalog</h1>
      <p className="text-slate-600 mb-6">Select equipment to review specifications and initiate a requisition.</p>

      <div className="space-y-3">
        <div className="p-4 bg-white rounded border border-slate-200">
          <h2 className="text-xl font-semibold">Laptop Pro 15"</h2>
          <a href="/catalog/laptop-pro" className="text-blue-600 underline text-sm mt-2 inline-block">
            View Details & Specs &rarr;
          </a>
        </div>

        <div className="p-4 bg-white rounded border border-slate-200">
          <h2 className="text-xl font-semibold">27" 4K Monitor</h2>
          <a href="/catalog/monitor-27" className="text-blue-600 underline text-sm mt-2 inline-block">
            View Details & Specs &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}