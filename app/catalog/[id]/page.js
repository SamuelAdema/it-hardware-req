export default async function HardwareDetailPage({ params }) {
  const { id } = await params;

  return (
    <section className="bg-white p-6 rounded-lg border border-slate-200">
      <p className="text-xs uppercase font-bold tracking-wider text-blue-600 mb-1">Hardware Specification</p>
      <h1 className="text-3xl font-bold mb-4">Item Identifier: {id}</h1>
      <p className="text-slate-600 mb-6">
        Full equipment specifications and inventory allocations will be loaded here.
      </p>
      <a
        href="/catalog"
        className="inline-block bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-medium px-4 py-2 rounded transition"
      >
        &larr; Back to Catalog
      </a>
    </section>
  );
}