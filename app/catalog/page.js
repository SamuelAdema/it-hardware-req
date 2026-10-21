import { getHardware } from "@/lib/hardware";
import HardwareCard from "@/components/HardwareCard";

export default async function CatalogPage() {
  // Fetch data directly in the Server Component
  const items = await getHardware();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Hardware Catalog</h1>
      <p className="text-slate-600 mb-6">Select equipment to review specifications and initiate a requisition.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <HardwareCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}