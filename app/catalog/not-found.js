export default function HardwareNotFound() {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-slate-800">Hardware Item Not Found</h2>
      <p className="text-slate-500 mt-2 mb-6">The hardware ID requested does not exist in the requisition catalog.</p>
      <a href="/catalog" className="text-blue-600 underline text-sm">
        Return to Hardware Catalog
      </a>
    </div>
  );
}