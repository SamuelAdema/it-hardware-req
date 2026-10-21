export default function HomePage() {
  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold mb-4 text-slate-900">
        IT Hardware Requisition Portal
      </h1>
      <p className="text-lg text-slate-600 mb-6 max-w-2xl">
        Welcome to the internal hardware request desk. Browse standard equipment packages, submit requests, and track provisioning progress.
      </p>
      <a
        href="/catalog"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition"
      >
        Browse Hardware Catalog
      </a>
    </section>
  );
}