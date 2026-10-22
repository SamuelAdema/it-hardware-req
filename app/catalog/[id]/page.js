import { getHardwareById } from "@/lib/hardware";
import { notFound } from "next/navigation";

// Generate SEO metadata dynamically based on the hardware item
export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = await getHardwareById(id);
  
  if (!item) return { title: "Item Not Found" };
  
  return {
    title: item.name,
    description: `Order the ${item.name} (${item.category}) for $${item.price}.`,
  };
}

export default async function HardwareDetailPage({ params }) {
  const { id } = await params;
  const item = await getHardwareById(id);

  if (!item) {
    notFound();
  }

  return (
    <section className="bg-white p-6 rounded-lg border border-slate-200">
      <p className="text-xs uppercase font-bold tracking-wider text-blue-600 mb-1">Hardware Specification</p>
      <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
      <p className="text-slate-600 mb-4">Category: {item.category}</p>
      <p className="text-2xl font-semibold text-slate-900 mb-6">Estimated Cost: ${item.price}</p>
      
      <div className="flex gap-4">
        <a href="/catalog" className="inline-block bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-medium px-4 py-2 rounded transition">
          &larr; Back to Catalog
        </a>
        <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700 transition">
          Add to Current Requisition
        </button>
      </div>
    </section>
  );
}