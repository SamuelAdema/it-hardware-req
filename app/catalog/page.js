import { getHardware } from "@/lib/hardware";
import SearchBox from "@/components/SearchBox";

export default async function CatalogPage() {
  const initialItems = await getHardware();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Hardware Catalog</h1>
      <p className="text-slate-600 mb-6">Select equipment to review specifications and initiate a requisition.</p>

      <SearchBox initialData={initialItems} />
    </section>
  );
}