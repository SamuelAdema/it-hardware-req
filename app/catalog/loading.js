export default function CatalogLoading() {
  return (
    <div className="p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-slate-200 rounded w-1/4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        <div className="h-24 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}